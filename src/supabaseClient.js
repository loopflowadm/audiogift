let supabase = null;
let isMock = true;
let isInitialized = false;

// Inicialização dinâmica do Supabase para otimizar o carregamento inicial (Lazy Import)
const initSupabase = async () => {
  if (isInitialized) return;
  
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseUrl !== 'https://seu-projeto.supabase.co' && supabaseAnonKey) {
    try {
      const { createClient } = await import('@supabase/supabase-js');
      supabase = createClient(supabaseUrl, supabaseAnonKey);
      isMock = false;
      console.log('AudioGift: Supabase inicializado dinamicamente com sucesso.');
    } catch (error) {
      console.error('AudioGift: Falha ao inicializar o Supabase dinamicamente:', error);
    }
  } else {
    console.warn('AudioGift: Supabase não configurado. Utilizando localStorage como banco de dados local para desenvolvimento.');
  }
  isInitialized = true;
};

// Fallback do Banco de Dados usando LocalStorage
const mockDatabase = {
  getOrders: () => {
    const data = localStorage.getItem('audiogift_orders');
    return data ? JSON.parse(data) : [];
  },
  saveOrders: (orders) => {
    localStorage.setItem('audiogift_orders', JSON.stringify(orders));
  }
};

// Funções de CRUD unificadas para a aplicação (Supabase ou LocalStorage)
export const db = {
  // Autenticação Administrativa
  loginAdmin: async (email, password) => {
    await initSupabase();
    if (!isMock && supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      return data;
    }
    
    // Mock local para desenvolvimento/teste local
    if (email === 'admin@audiogift.com.br' && password === 'admin123') {
      sessionStorage.setItem('audiogift_admin_auth', 'true');
      return { user: { email } };
    }
    throw new Error('Credenciais inválidas.');
  },

  logoutAdmin: async () => {
    await initSupabase();
    if (!isMock && supabase) {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }
    sessionStorage.removeItem('audiogift_admin_auth');
  },

  isAdminAuthenticated: async () => {
    await initSupabase();
    if (!isMock && supabase) {
      const { data } = await supabase.auth.getSession();
      return !!(
        data.session && 
        data.session.user && 
        data.session.user.email && 
        (data.session.user.email === 'admin@audiogift.com.br' || data.session.user.email.endsWith('@audiogift.com.br'))
      );
    }
    return sessionStorage.getItem('audiogift_admin_auth') === 'true';
  },

  // Inserir um novo pedido
  createOrder: async (orderData) => {
    await initSupabase();
    
    // Garantir sessão anônima antes de criar o pedido para associar o user_id no RLS
    if (!isMock && supabase) {
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        if (!sessionData.session) {
          console.log('AudioGift Security: Iniciando sessão anônima...');
          await supabase.auth.signInAnonymously();
        }
      } catch (authErr) {
        console.error('AudioGift Security: Erro ao iniciar sessão anônima:', authErr);
      }
    }

    const id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
    const newOrder = {
      id,
      created_at: new Date().toISOString(),
      status: 'pendente',
      ...orderData
    };

    if (!isMock && supabase) {
      try {
        const { data, error } = await supabase
          .from('orders')
          .insert([newOrder])
          .select();
        
        if (error) throw error;
        if (data && data[0]) {
          return data[0];
        }
        return newOrder;
      } catch (err) {
        console.error('Erro ao salvar no Supabase, salvando localmente:', err);
      }
    }

    // Fallback local
    const orders = mockDatabase.getOrders();
    orders.push(newOrder);
    mockDatabase.saveOrders(orders);
    return newOrder;
  },

  // Buscar um pedido pelo ID (usa RPC para permitir acesso por ID sem listagem aberta)
  getOrder: async (id) => {
    await initSupabase();
    if (!isMock && supabase) {
      try {
        // Tenta buscar via RPC segura get_order_by_id para evitar vazamento de listagem RLS
        const { data, error } = await supabase.rpc('get_order_by_id', { order_id: id });
        if (error) throw error;
        
        if (data && data.length > 0) {
          return data[0];
        }

        // Fallback secundário
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('orders')
          .select('*')
          .eq('id', id)
          .single();
        if (!fallbackError) return fallbackData;
      } catch (err) {
        console.error(`Erro ao buscar no Supabase (${id}), buscando localmente:`, err);
      }
    }

    // Fallback local
    const orders = mockDatabase.getOrders();
    return orders.find(o => o.id === id) || null;
  },

  // Listar todos os pedidos (Apenas para o Painel Administrativo)
  getOrders: async () => {
    await initSupabase();
    if (!isMock && supabase) {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('Erro ao listar do Supabase, listando localmente:', err);
      }
    }

    // Fallback local
    const orders = mockDatabase.getOrders();
    return orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },

  // Atualizar informações de um pedido (Ex: status, letra, prompt, audio_url)
  updateOrder: async (id, updates) => {
    await initSupabase();
    if (!isMock && supabase) {
      try {
        const { data, error } = await supabase
          .from('orders')
          .update(updates)
          .eq('id', id)
          .select();
        
        if (error) throw error;
        if (!data || data.length === 0) {
          throw new Error('Permissão de atualização negada ou pedido não encontrado no banco.');
        }
        return data[0];
      } catch (err) {
        console.error(`Erro ao atualizar no Supabase (${id}):`, err);
        throw err;
      }
    }

    // Fallback local
    const orders = mockDatabase.getOrders();
    const index = orders.findIndex(o => o.id === id);
    if (index !== -1) {
      orders[index] = { ...orders[index], ...updates };
      mockDatabase.saveOrders(orders);
      return orders[index];
    }
    return null;
  },

  // Deletar um pedido (Painel Admin)
  deleteOrder: async (id) => {
    await initSupabase();
    if (!isMock && supabase) {
      try {
        const { data, error } = await supabase
          .from('orders')
          .delete()
          .eq('id', id)
          .select();
        
        if (error) throw error;
        if (!data || data.length === 0) {
          throw new Error('Permissão de exclusão negada ou pedido não encontrado no banco.');
        }
        return true;
      } catch (err) {
        console.error(`Erro ao deletar no Supabase (${id}):`, err);
        throw err;
      }
    }

    // Fallback local
    let orders = mockDatabase.getOrders();
    orders = orders.filter(o => o.id !== id);
    mockDatabase.saveOrders(orders);
    return true;
  },

  // Retorna se o banco atual é mockado ou real
  isMocked: () => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    return !(supabaseUrl && supabaseUrl !== 'https://seu-projeto.supabase.co' && supabaseAnonKey);
  }
};
