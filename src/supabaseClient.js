import { createClient } from '@supabase/supabase-js';

// Obter variáveis de ambiente do Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Senha padrão se não configurada
export const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

let supabase = null;
let isMock = true;

if (supabaseUrl && supabaseUrl !== 'https://seu-projeto.supabase.co' && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    isMock = false;
    console.log('AudioGift: Supabase inicializado com sucesso.');
  } catch (error) {
    console.error('AudioGift: Falha ao inicializar o Supabase, usando fallback local:', error);
  }
} else {
  console.warn('AudioGift: Supabase não configurado. Utilizando localStorage como banco de dados local para desenvolvimento.');
}

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
  // Inserir um novo pedido
  createOrder: async (orderData) => {
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

  // Buscar um pedido pelo ID
  getOrder: async (id) => {
    if (!isMock && supabase) {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        return data;
      } catch (err) {
        console.error(`Erro ao buscar no Supabase (${id}), buscando localmente:`, err);
      }
    }

    // Fallback local
    const orders = mockDatabase.getOrders();
    return orders.find(o => o.id === id) || null;
  },

  // Listar todos os pedidos
  getOrders: async () => {
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
    // Ordenar por data decrescente
    return orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },

  // Atualizar informações de um pedido (Ex: status, letra, prompt, audio_url)
  updateOrder: async (id, updates) => {
    if (!isMock && supabase) {
      try {
        const { data, error } = await supabase
          .from('orders')
          .update(updates)
          .eq('id', id)
          .select();
        
        if (error) throw error;
        return data[0];
      } catch (err) {
        console.error(`Erro ao atualizar no Supabase (${id}), atualizando localmente:`, err);
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

  // Deletar um pedido (útil para limpeza no admin)
  deleteOrder: async (id) => {
    if (!isMock && supabase) {
      try {
        const { error } = await supabase
          .from('orders')
          .delete()
          .eq('id', id);
        
        if (error) throw error;
        return true;
      } catch (err) {
        console.error(`Erro ao deletar no Supabase (${id}), deletando localmente:`, err);
      }
    }

    // Fallback local
    let orders = mockDatabase.getOrders();
    orders = orders.filter(o => o.id !== id);
    mockDatabase.saveOrders(orders);
    return true;
  },

  // Retorna se o banco atual é mockado ou real
  isMocked: () => isMock
};
