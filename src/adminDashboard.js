import { db } from './supabaseClient.js';
import { runAiAgent, generateLyrics, generatePrompt, buildChatgptPrompt } from './agentEngine.js';

// --- HELPER PARA OBTER DEMO DE ÁUDIO ---
const getDemoSong = (genre) => {
  const map = {
    'Sertanejo': '/songs/Sempre Para Sempre.mp3.mpeg',
    'Pop Acústico': '/songs/A Chave do Teu Coração.mp3.mpeg',
    'MPB': '/songs/Pra Sempre Você.mp3.mpeg',
    'Samba': '/songs/Coração De Ouro.mp3.mpeg',
    'Pop Rock': '/songs/Você É Meu Sol.mp3.mpeg',
    'Forró': '/songs/Minha Princesa, Meu amor..mp3.mpeg',
    'Violão e Voz': '/songs/Você É Minha Vida.mp3.mpeg',
    'Soul Romântico': '/songs/Te Amo Muitinho.mp3.mpeg',
    'Gospel': '/songs/Presente de Deus.mp3.mpeg',
    'Pagode': '/songs/Minha Marina.mp3.mpeg',
    'Reggae': '/songs/Filha do Meu Coração.mp3.mpeg'
  };
  return map[genre] || '/songs/A Chave do Teu Coração.mp3.mpeg';
};

const Logo = (baseColor = 'white', giftColor = '#FC7301') => `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1507040 421800" style="width: 100%; height: auto; display: block;" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
 xmlns:xlink="http://www.w3.org/1999/xlink">
 <g id="Camada_x0020_1">
  <path fill="${baseColor}" fill-rule="nonzero" d="M422810 279480c0,10390 -3190,18540 -9600,24480 -6370,5940 -15170,8910 -26400,8910l-84160 0c-11290,0 -20170,-2970 -26610,-8950 -6450,-5970 -9670,-14120 -9670,-24440l0 -128920 50620 0 0 117980 55410 0 0 -117980 50410 0 0 128920zm69780 -10940l57790 0 0 -74090 -57790 0 0 74090zm-50630 44330l0 -162310 120630 0c12490,0 22270,3840 29330,11520 7060,7640 10610,18400 10610,32160l0 73870c0,14700 -3480,25850 -10390,33420 -6920,7570 -17130,11340 -30640,11340l-119540 0zm179730 0l0 -162310 50620 0 0 162310 -50620 0zm223170 -43670c0,14480 -3290,25380 -9880,32690 -6560,7320 -16410,10980 -29480,10980l-74670 0c-13150,0 -23030,-3660 -29660,-10980 -6620,-7310 -9920,-18210 -9920,-32690l0 -74750c0,-14840 3260,-25850 9780,-33060 6480,-7210 16440,-10830 29800,-10830l74670 0c13430,0 23360,3590 29770,10720 6410,7140 9590,18180 9590,33170l0 74750zm-102770 -660l52150 0 0 -74090 -52150 0 0 74090z"/>
  <path fill="${baseColor}" fill-rule="nonzero" d="M48930 323940c730,0 1450,20 2180,50l0 -118250c0,-16880 6430,-25020 19750,-35180l176350 -134470 0 305880c0,27020 -21900,48930 -48920,48930 -27030,0 -48930,-21910 -48930,-48930 0,-27850 23190,-50090 51110,-48880l0 -39760 -102610 0 0 119510c170,26760 -21810,48960 -48930,48960 -27020,0 -48930,-21910 -48930,-48930 0,-27020 21910,-48930 48930,-48930zm151540 -115170l0 -78240 -102610 78240 102610 0z"/>
  <path fill="${baseColor}" d="M1162500 105820c-6640,-20240 -21770,-58580 -45370,-75300 -27620,-19570 -55170,-2800 -40590,25660 13350,26070 53710,48350 85960,49640zm-265340 2370c-16010,0 -29100,13090 -29100,29100l0 57410c0,12330 7850,23260 19260,27380l0 90590c0,16010 13090,29110 29100,29110 180750,0 361500,0 542250,0 16020,0 29110,-13100 29110,-29110l0 -90590c11400,-4120 19260,-15050 19260,-27380l0 -57410c0,-16010 -13090,-29100 -29110,-29100l-213120 0c18060,-10940 31850,-27130 34330,-48220 4390,-37200 -34940,-58590 -71940,-32230 -29800,21230 -39040,62780 -41530,78370 -5810,-19160 -23930,-70970 -55830,-93570 -14650,-10380 -29740,-13810 -42680,-12140 -16700,2160 -30490,12890 -35130,29040 -8940,31070 18950,61740 47260,78750 -67370,0 -134750,0 -202130,0zm342840 -62470c-19900,14170 -28130,41390 -31330,56930 26790,-1150 66550,-16950 68670,-46820 1300,-18290 -18400,-23610 -37340,-10110z"/>
  <path fill="${giftColor}" fill-rule="nonzero" d="M1081350 262430c0,14520 -3290,25420 -9920,32730 -6590,7320 -16480,10970 -29620,10970l-79270 0c-13150,0 -23030,-3650 -29660,-10970 -6630,-7310 -9920,-18210 -9920,-32730l0 -74710c0,-15360 3260,-26470 9780,-33460 6480,-6950 16870,-10430 31070,-10430l115800 0 0 43890 -105810 0 0 73870 57580 0 0 -53230 49970 0 0 54070zm18720 43700l0 -162300 50630 0 0 162300 -50630 0zm72180 0l0 -162300 135360 0 0 43890 -84520 0 0 18680 84520 0 0 36720 -84520 0 0 63010 -50840 0zm198330 0l0 -118410 -49760 0 0 -43890 150580 0 0 43890 -47590 0 0 118410 -53230 0z"/>
 </g>
</svg>
`;

// --- RENDERIZAR TELA DE LOGIN DO ADMIN ---
const renderAdminLogin = (mainEl, onLoginSuccess) => {
  mainEl.innerHTML = `
    <div class="admin-login-page py-large bg-black text-white">
      <div class="container" style="max-width: 400px; width: 100%;">
        <div class="login-card-glass text-center">
          <div class="login-logo-wrap" style="margin-bottom: 2rem; width:120px; margin: 0 auto 1.5rem auto;">
            ${Logo('white', '#FC7301')}
          </div>
          
          <h2 class="section-title-serif text-white" style="font-size: 1.8rem; margin-bottom: 0.5rem;">Área Restrita</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">Entre com suas credenciais de acesso.</p>
          
          <form id="admin-login-form" onsubmit="return false;" style="text-align:left;">
            <div class="form-row" style="margin-bottom: 1rem;">
              <label style="font-size:0.85rem; font-weight:700; color:#aaa; margin-bottom:8px; display:block;">E-mail do Administrador</label>
              <input type="email" id="admin-email-input" placeholder="admin@audiogift.com.br" class="quiz-input" style="background: rgba(255,255,255,0.05); color:white; border-color: rgba(255,255,255,0.1);" required>
            </div>
            <div class="form-row" style="margin-bottom: 1.5rem;">
              <label style="font-size:0.85rem; font-weight:700; color:#aaa; margin-bottom:8px; display:block;">Senha de Acesso</label>
              <input type="password" id="admin-password-input" placeholder="Sua senha segura" class="quiz-input" style="background: rgba(255,255,255,0.05); color:white; border-color: rgba(255,255,255,0.1);" required>
              <p class="error-msg" id="login-error" style="color: #ff4d6d; font-size: 0.85rem; margin-top: 8px; display: none;"></p>
            </div>
            
            <button type="submit" class="btn-primary-new w-full" id="btn-login-submit">
              <i data-lucide="lock"></i> Acessar Painel
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  const form = document.getElementById('admin-login-form');
  const emailInput = document.getElementById('admin-email-input');
  const pwdInput = document.getElementById('admin-password-input');
  const errorMsg = document.getElementById('login-error');
  const btnSubmit = document.getElementById('btn-login-submit');

  form.onsubmit = async (e) => {
    e.preventDefault();
    errorMsg.style.display = 'none';
    btnSubmit.setAttribute('disabled', 'true');
    btnSubmit.innerHTML = `<i data-lucide="loader" class="spin"></i> Verificando...`;
    if (window.lucide) lucide.createIcons();

    try {
      await db.loginAdmin(emailInput.value.trim(), pwdInput.value);
      onLoginSuccess();
    } catch (err) {
      errorMsg.textContent = err.message || 'Falha ao autenticar. Tente novamente.';
      errorMsg.style.display = 'block';
      pwdInput.value = '';
      pwdInput.focus();
      btnSubmit.removeAttribute('disabled');
      btnSubmit.innerHTML = `<i data-lucide="lock"></i> Acessar Painel`;
      if (window.lucide) lucide.createIcons();
    }
  };
};

// --- RENDERIZAR PAINEL DE CONTROLE DO ADMIN ---
const renderAdminDashboard = (mainEl, orders, onLogout) => {
  const totalOrders = orders.length;
  
  const statusCounts = {
    pendente: 0,
    pago: 0,
    em_producao: 0,
    concluido: 0
  };
  
  let totalRevenue = 0;
  
  orders.forEach(o => {
    if (statusCounts[o.status] !== undefined) {
      statusCounts[o.status]++;
    }
    if (o.status !== 'pendente') {
      const planPrices = { especial: 89.90, memoravel: 149.90, inesquecivel: 199.90 };
      totalRevenue += planPrices[o.plan] || 149.90;
    }
  });

  const revenueStr = totalRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const statusBadges = {
    pendente: '<span class="badge badge-pending">Pendente</span>',
    pago: '<span class="badge badge-paid">Pago</span>',
    em_producao: '<span class="badge badge-production">Em Produção</span>',
    concluido: '<span class="badge badge-completed">Entregue</span>'
  };

  mainEl.innerHTML = `
    <div class="admin-dashboard-page bg-dark text-white py-large">
      <div class="container-full" style="padding: 0 2rem;">
        
        <div class="admin-header-row">
          <div>
            <h1>Painel de <em>Controle</em></h1>
            <p>Gerencie pedidos, clientes e acione o Agente de IA para escrever as letras das canções.</p>
          </div>
          <div class="admin-actions">
            <button class="btn-primary-new" id="btn-admin-export" style="padding:0.6rem 1.4rem; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="download" style="width:16px; height:16px;"></i> Exportar CSV</button>
            <button class="btn-outline" id="btn-admin-logout" style="border-color: rgba(255,255,255,0.1); color: #ff4d6d; padding:0.6rem 1.4rem; font-size:0.85rem;"><i data-lucide="log-out"></i> Sair</button>
          </div>
        </div>

        <div class="admin-metrics-grid">
          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(252,115,1,0.1); color: var(--primary-orange);"><i data-lucide="dollar-sign"></i></div>
            <div class="metric-info">
              <span class="metric-lbl">Faturamento</span>
              <h2 class="metric-val">${revenueStr}</h2>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(255,255,255,0.05); color: #fff;"><i data-lucide="shopping-bag"></i></div>
            <div class="metric-info">
              <span class="metric-lbl">Pedidos Totais</span>
              <h2 class="metric-val">${totalOrders}</h2>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(255,184,0,0.1); color: #ffb800;"><i data-lucide="clock"></i></div>
            <div class="metric-info">
              <span class="metric-lbl">Pendentes</span>
              <h2 class="metric-val">${statusCounts.pendente}</h2>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(59,130,246,0.1); color: #3b82f6;"><i data-lucide="music"></i></div>
            <div class="metric-info">
              <span class="metric-lbl">Em Produção</span>
              <h2 class="metric-val">${statusCounts.pago + statusCounts.em_producao}</h2>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(74,222,128,0.1); color: #4ade80;"><i data-lucide="check-circle"></i></div>
            <div class="metric-info">
              <span class="metric-lbl">Entregues</span>
              <h2 class="metric-val">${statusCounts.concluido}</h2>
            </div>
          </div>
        </div>

        <div class="admin-main-section">
          <div class="admin-orders-list-card">
            <div class="list-card-header">
              <h3>Listagem de Pedidos</h3>
              <div class="list-card-search">
                <input type="text" id="admin-search-input" placeholder="Buscar por cliente, email..." class="quiz-input search-box" style="max-width:250px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem;">
                <select id="admin-filter-status" class="quiz-input select-box" style="background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem;">
                  <option value="all">Todos os Status</option>
                  <option value="pendente">Pendente</option>
                  <option value="pago">Pago</option>
                  <option value="em_producao">Em Produção</option>
                  <option value="concluido">Entregue</option>
                </select>
              </div>
            </div>

            <div class="table-container" style="overflow-x:auto;">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Homenageado</th>
                    <th>Ocasião</th>
                    <th>Estilo</th>
                    <th>Plano</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th style="text-align:right;">Ações</th>
                  </tr>
                </thead>
                <tbody id="admin-table-body" style="font-size:0.9rem;">
                  ${orders.length === 0 ? `
                    <tr>
                      <td colspan="8" class="text-center" style="padding: 3rem; color: var(--text-muted);">Nenhum pedido no banco de dados.</td>
                    </tr>
                  ` : orders.map(o => {
                    const formattedDate = new Date(o.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
                    return `
                      <tr class="order-row" data-order-id="${o.id}" style="border-bottom:1px solid rgba(255,255,255,0.04); cursor:pointer; transition: background 0.2s;">
                        <td style="padding: 14px 10px;">
                          <div style="font-weight:600; color:#fff;">${o.customer_name || o.customer_email.split('@')[0]}</div>
                          <div style="font-size:0.75rem; color:#888;">${o.customer_email}</div>
                        </td>
                        <td style="padding: 14px 10px;"><strong>${o.recipient_name || 'N/A'}</strong></td>
                        <td style="padding: 14px 10px; color:#ccc;">${o.occasion || 'Outra'}</td>
                        <td style="padding: 14px 10px; color:#ccc;">${o.genre || 'N/A'} (${o.voice || 'Feminina'})</td>
                        <td style="padding: 14px 10px;"><span class="plan-badge">${o.plan.toUpperCase()}</span></td>
                        <td style="padding: 14px 10px; color:#aaa; font-size:0.8rem;">${formattedDate}</td>
                        <td style="padding: 14px 10px;">${statusBadges[o.status] || o.status}</td>
                        <td style="padding: 14px 10px; text-align:right;">
                          <button class="btn-manage-order" data-order-id="${o.id}" style="background: rgba(252,115,1,0.1); color: var(--primary-orange); padding:6px 12px; border-radius:8px; font-size:0.8rem; font-weight:600;">
                            <i data-lucide="edit-2" style="width:14px; height:14px; margin-right:4px;"></i> Abrir
                          </button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Drawer para Detalhes do Pedido -->
          <div class="admin-order-drawer-overlay" id="order-drawer-overlay">
            <div class="admin-order-drawer" id="order-drawer">
              <!-- Renderizado dinamicamente -->
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  document.getElementById('btn-admin-logout').onclick = async () => {
    await db.logoutAdmin();
    onLogout();
  };

  const searchInput = document.getElementById('admin-search-input');
  const filterSelect = document.getElementById('admin-filter-status');

  const filterTable = () => {
    const q = searchInput.value.toLowerCase().trim();
    const status = filterSelect.value;
    
    document.querySelectorAll('.admin-table tbody .order-row').forEach(row => {
      const id = row.dataset.orderId;
      const order = orders.find(o => o.id === id);
      if (!order) return;
      
      const matchSearch = 
        order.customer_email.toLowerCase().includes(q) ||
        (order.customer_name && order.customer_name.toLowerCase().includes(q)) ||
        (order.recipient_name && order.recipient_name.toLowerCase().includes(q)) ||
        (order.customer_phone && order.customer_phone.includes(q)) ||
        (order.occasion && order.occasion.toLowerCase().includes(q));
      
      const matchStatus = status === 'all' || order.status === status;
      
      row.style.display = (matchSearch && matchStatus) ? 'table-row' : 'none';
    });
  };

  if (searchInput) searchInput.oninput = filterTable;
  if (filterSelect) filterSelect.onchange = filterTable;

  // Lógica do botão Exportar CSV
  const btnExport = document.getElementById('btn-admin-export');
  if (btnExport) {
    btnExport.onclick = () => {
      const q = searchInput.value.toLowerCase().trim();
      const status = filterSelect.value;
      
      const filtered = orders.filter(order => {
        const matchSearch = 
          order.customer_email.toLowerCase().includes(q) ||
          (order.customer_name && order.customer_name.toLowerCase().includes(q)) ||
          (order.recipient_name && order.recipient_name.toLowerCase().includes(q)) ||
          (order.customer_phone && order.customer_phone.includes(q)) ||
          (order.occasion && order.occasion.toLowerCase().includes(q));
        
        const matchStatus = status === 'all' || order.status === status;
        return matchSearch && matchStatus;
      });

      if (filtered.length === 0) {
        alert('Nenhum pedido filtrado para exportar.');
        return;
      }

      const headers = [
        'ID', 'Criado Em', 'Cliente Nome', 'Cliente Email', 'Cliente WhatsApp', 
        'Plano', 'Status', 'Homenageado', 'Falar Nome', 'Relacao', 'Ocasiao', 
        'Genero', 'Voz', 'Vibe', 'Bebê Nome', 'Sentimentos', 'Historias', 
        'Mensagem Final', 'Letra Gerada', 'Prompt Gerado', 'Audio URL'
      ];
      
      const csvRows = [];
      csvRows.push(headers.join(';'));
      
      filtered.forEach(o => {
        const row = [
          o.id,
          o.created_at,
          o.customer_name || '',
          o.customer_email || '',
          o.customer_phone || '',
          o.plan || '',
          o.status || '',
          o.recipient_name || '',
          o.speak_name || '',
          o.for_who || '',
          o.occasion || '',
          o.genre || '',
          o.voice || '',
          o.vibes || '',
          o.baby_name || '',
          (o.feelings || '').replace(/\r?\n/g, ' ').replace(/;/g, ','),
          (o.story || '').replace(/\r?\n/g, ' ').replace(/;/g, ','),
          (o.message || '').replace(/\r?\n/g, ' ').replace(/;/g, ','),
          (o.generated_lyrics || '').replace(/\r?\n/g, ' ').replace(/;/g, ','),
          (o.generated_prompt || '').replace(/\r?\n/g, ' ').replace(/;/g, ','),
          o.audio_url || ''
        ];
        const escapedRow = row.map(val => {
          const str = String(val).replace(/"/g, '""');
          return `"${str}"`;
        });
        csvRows.push(escapedRow.join(';'));
      });
      
      const csvContent = '\uFEFF' + csvRows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `relatorio_pedidos_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }

  document.querySelectorAll('.btn-manage-order, .order-row').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const orderId = btn.dataset.orderId || btn.closest('.order-row').dataset.orderId;
      openOrderDrawer(orderId, orders);
    };
  });
};

// --- ABRIR MODAL/DETALHES DO PEDIDO NO ADMIN ---
const openOrderDrawer = async (orderId, orders) => {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const overlay = document.getElementById('order-drawer-overlay');
  const drawer = document.getElementById('order-drawer');

  drawer.innerHTML = `
    <div class="drawer-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:15px; margin-bottom:20px; max-width: 1200px; margin-left: auto; margin-right: auto;">
      <div>
        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          <h2 style="font-size:1.3rem; font-weight:700; color:#fff; margin:0;">Ficha Criativa & Agente IA</h2>
          <button class="btn-outline" id="btn-copy-tracking-link" style="padding: 4px 8px; font-size: 0.75rem; border-color: rgba(255,255,255,0.15); color: #ccc; border-radius: 6px; display:flex; align-items:center; gap: 4px; cursor:pointer;">
            <i data-lucide="link" style="width:12px; height:12px;"></i> Copiar Link do Cliente
          </button>
        </div>
        <span class="drawer-order-id" style="font-size:0.75rem; color:#888; font-family:monospace;">ID: ${order.id}</span>
      </div>
      <button class="btn-drawer-close" id="btn-close-drawer" style="font-size:1.8rem; color:#aaa; line-height:1; cursor:pointer;">&times;</button>
    </div>
    
    <div class="drawer-body" style="max-height: calc(100vh - 120px); max-height: calc(100dvh - 120px); overflow-y:auto; padding-right:5px; max-width: 1200px; margin: 0 auto;">
      <div class="drawer-cols-grid">
        
        <!-- Coluna Esquerda: Dados do Cliente & Respostas do Quiz -->
        <div style="display:flex; flex-direction:column; gap:20px;">
          <!-- Seção 1: Cliente -->
          <div class="drawer-section">
            <h3 style="font-size:0.95rem; font-weight:600; color:var(--primary-orange); margin-bottom:12px; display:flex; align-items:center; gap:8px;"><i data-lucide="user" style="width:16px; height:16px;"></i> Contato do Cliente</h3>
            <div class="drawer-grid">
              <div class="grid-span-2">
                <span style="color:#888; display:block; margin-bottom:4px;">Nome do Cliente:</span>
                <input type="text" id="drawer-customer-name" value="${order.customer_name || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
              </div>
              <div>
                <span style="color:#888; display:block; margin-bottom:4px;">Email:</span>
                <input type="email" id="drawer-customer-email" value="${order.customer_email || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
              </div>
              <div>
                <span style="color:#888; display:block; margin-bottom:4px;">WhatsApp:</span>
                <div style="display:flex; gap:8px;">
                  <input type="text" id="drawer-customer-phone" value="${order.customer_phone || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                  <button class="btn-outline" id="btn-drawer-whatsapp" style="padding:6px 10px; border-color:#25d366; color:#25d366; border-radius:8px; display:flex; align-items:center; justify-content:center; cursor:pointer;" title="Chamar no WhatsApp">
                    <i data-lucide="message-square" style="width:16px; height:16px;"></i>
                  </button>
                </div>
              </div>
              <div>
                <span style="color:#888; display:block; margin-bottom:4px;">Plano Adquirido:</span>
                <strong style="color:#4ade80; display:block; padding: 6px 0;">${order.plan.toUpperCase()}</strong>
              </div>
              <div>
                <span style="color:#888; display:block; margin-bottom:4px;">Opt-in Acompanhamento:</span>
                <select id="drawer-whatsapp-followup" class="quiz-input select-box" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                  <option value="true" ${order.whatsapp_followup ? 'selected' : ''}>Sim (Enviar Whats)</option>
                  <option value="false" ${!order.whatsapp_followup ? 'selected' : ''}>Não</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Seção 2: Quiz -->
          <div class="drawer-section">
            <h3 style="font-size:0.95rem; font-weight:600; color:var(--primary-orange); margin-bottom:12px; display:flex; align-items:center; gap:8px;"><i data-lucide="file-text" style="width:16px; height:16px;"></i> Respostas do Questionário</h3>
            <div class="quiz-answers-box" style="font-size:0.85rem; color:#ddd; display:flex; flex-direction:column; gap:12px;">
              <div class="drawer-grid">
                <div>
                  <label style="color:#888; display:block; margin-bottom:4px;">Homenageado(a):</label>
                  <input type="text" id="drawer-recipient-name" value="${order.recipient_name || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
                <div>
                  <label style="color:#888; display:block; margin-bottom:4px;">Falar Nome na Música:</label>
                  <input type="text" id="drawer-speak-name" value="${order.speak_name || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
                <div>
                  <label style="color:#888; display:block; margin-bottom:4px;">Relação:</label>
                  <input type="text" id="drawer-for-who" value="${order.for_who || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
                <div>
                  <label style="color:#888; display:block; margin-bottom:4px;">Ocasião:</label>
                  <input type="text" id="drawer-occasion" value="${order.occasion || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
                <div>
                  <label style="color:#888; display:block; margin-bottom:4px;">Gênero Musical:</label>
                  <input type="text" id="drawer-genre" value="${order.genre || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
                <div>
                  <label style="color:#888; display:block; margin-bottom:4px;">Estilo de Voz:</label>
                  <input type="text" id="drawer-voice" value="${order.voice || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
                <div class="grid-span-2">
                  <label style="color:#888; display:block; margin-bottom:4px;">Vibe/Clima:</label>
                  <input type="text" id="drawer-vibes" value="${order.vibes || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
                <div class="grid-span-2">
                  <label style="color:#888; display:block; margin-bottom:4px;">Nomes Bebê (Caso Revelação):</label>
                  <input type="text" id="drawer-baby-name" value="${order.baby_name || ''}" class="quiz-input" style="padding:6px 12px; background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%; border-radius:8px;">
                </div>
              </div>
              
              <div style="margin-top:10px; border-top: 1px solid rgba(255,255,255,0.05); padding-top:10px;">
                <strong style="color:#fff; display:block; margin-bottom:5px;">O que faz especial / Sentimentos:</strong>
                <textarea id="drawer-feelings" class="agent-textarea" style="height:80px;">${order.feelings || ''}</textarea>
              </div>
              
              <div style="margin-top:10px;">
                <strong style="color:#fff; display:block; margin-bottom:5px;">Histórias & Memórias:</strong>
                <textarea id="drawer-story" class="agent-textarea" style="height:80px;">${order.story || ''}</textarea>
              </div>
              
              <div style="margin-top:10px;">
                <strong style="color:#fff; display:block; margin-bottom:5px;">Mensagem final importante:</strong>
                <textarea id="drawer-message" class="agent-textarea" style="height:80px;">${order.message || ''}</textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna Direita: Agente IA & Controles do Pedido -->
        <div style="display:flex; flex-direction:column; gap:20px;">
          <!-- Seção 3: IA Agent -->
          <div class="drawer-section drawer-section-highlight">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <h3 style="font-size:0.95rem; font-weight:700; color:var(--primary-orange); display:flex; align-items:center; gap:8px; margin:0;"><i data-lucide="cpu" style="width:16px; height:16px;"></i> Agente de Composição IA</h3>
              <span style="background:rgba(252,115,1,0.15); color:var(--primary-orange); font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:20px; text-transform:uppercase;">Agente Ativo</span>
            </div>
            
            <div id="agent-workspace-container">
              ${(!order.generated_lyrics) ? `
                <div style="text-align:center; padding:15px 0;">
                  <p style="font-size:0.85rem; color:#aaa; margin-bottom:12px;">Nenhuma letra foi gerada ainda. Clique no botão abaixo para analisar o quiz e compor.</p>
                  <button class="btn-primary-new w-full" id="btn-run-agent" style="font-size:0.9rem; padding:0.8rem 1.5rem;">
                    <i data-lucide="sparkles"></i> Executar Agente de IA
                  </button>
                </div>
              ` : `
                <div>
                  <!-- Letra -->
                  <div style="margin-bottom:15px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                      <span style="font-size:0.85rem; font-weight:600; color:#fff;">Letra Proposta</span>
                      <div style="display:flex; gap: 8px;">
                        <button class="btn-text-action" id="btn-copy-lyrics" style="color:var(--primary-orange); font-size:0.75rem; font-weight:600;"><i data-lucide="copy" style="width:12px; height:12px; margin-right:3px;"></i> Copiar Letra</button>
                        <button class="btn-text-action" id="btn-regenerate-lyrics" style="color:var(--primary-orange); font-size:0.75rem; font-weight:600;"><i data-lucide="rotate-cw" style="width:12px; height:12px; margin-right:3px;"></i> Regerar</button>
                      </div>
                    </div>
                    <textarea class="agent-textarea" id="agent-lyrics-input" style="height:260px;">${order.generated_lyrics}</textarea>
                  </div>

                  <!-- Prompt Suno/Udio -->
                  <div style="margin-bottom:15px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                      <span style="font-size:0.85rem; font-weight:600; color:#fff;">Prompt para Suno/Udio</span>
                      <button class="btn-text-action" id="btn-copy-prompt" style="color:var(--primary-orange); font-size:0.75rem; font-weight:600;"><i data-lucide="copy" style="width:12px; height:12px; margin-right:3px;"></i> Copiar</button>
                    </div>
                    <textarea class="agent-textarea" id="agent-prompt-input" style="height:80px; resize:none;" readonly>${order.generated_prompt}</textarea>
                  </div>

                  <!-- Prompt ChatGPT/Claude de Letra -->
                  <div style="margin-bottom:10px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                      <span style="font-size:0.85rem; font-weight:600; color:#fff;">Prompt de Letra (ChatGPT/Claude)</span>
                      <button class="btn-text-action" id="btn-copy-chatgpt-prompt" style="color:var(--primary-orange); font-size:0.75rem; font-weight:600;"><i data-lucide="copy" style="width:12px; height:12px; margin-right:3px;"></i> Copiar Prompt LLM</button>
                    </div>
                    <textarea class="agent-textarea" id="agent-chatgpt-prompt-input" style="height:120px;" readonly>${buildChatgptPrompt(order)}</textarea>
                  </div>
                </div>
              `}
            </div>
          </div>

          <!-- Seção 4: Configurações do Pedido -->
          <div class="drawer-section">
            <h3 style="font-size:0.95rem; font-weight:600; color:#fff; margin-bottom:12px; display:flex; align-items:center; gap:8px;"><i data-lucide="settings" style="width:16px; height:16px;"></i> Controles do Pedido</h3>
            
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div class="form-row" style="text-align:left;">
                <label style="font-size:0.8rem; color:#aaa; display:block; margin-bottom:6px;">Status da Produção</label>
                <select id="drawer-order-status" class="quiz-input select-box" style="background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%;">
                  <option value="pendente" ${order.status === 'pendente' ? 'selected' : ''}>Aguardando Pagamento</option>
                  <option value="pago" ${order.status === 'pago' ? 'selected' : ''}>Pagamento Aprovado</option>
                  <option value="em_producao" ${order.status === 'em_producao' ? 'selected' : ''}>Em Produção</option>
                  <option value="concluido" ${order.status === 'concluido' ? 'selected' : ''}>Entregue (Concluído)</option>
                </select>
              </div>
              
              <div class="form-row" style="text-align:left;">
                <label style="font-size:0.8rem; color:#aaa; display:block; margin-bottom:6px;">Link do Áudio Finalizado (MP3/WAV)</label>
                <input type="text" id="drawer-audio-url" placeholder="Cole a URL do áudio final..." value="${order.audio_url || ''}" class="quiz-input" style="background:rgba(255,255,255,0.05); color:white; border-color:rgba(255,255,255,0.1); font-size:0.85rem; width:100%;">
              </div>

              <!-- Player Demo -->
              <div style="margin-top:5px; background:rgba(0,0,0,0.2); padding:12px; border-radius:10px;">
                <span style="font-size:0.8rem; color:#aaa; display:block; margin-bottom:6px;">Playlist de Referência (${order.genre || 'Pop Acústico'}):</span>
                <audio controls src="${getDemoSong(order.genre)}" style="width:100%; height:32px;"></audio>
              </div>
              
              <button class="btn-primary-new w-full mt-2" id="btn-save-drawer-changes" style="font-size:0.9rem; padding:0.8rem 1.5rem;">
                <i data-lucide="save"></i> Salvar Pedido
              </button>
              
              <button class="btn-outline w-full" id="btn-delete-order" style="border-color: rgba(255,77,109,0.2); color: #ff4d6d; font-size:0.85rem; padding:0.6rem 1rem;">
                <i data-lucide="trash-2"></i> Excluir Pedido Permanentemente
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeDrawer = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.getElementById('btn-close-drawer').onclick = closeDrawer;
  overlay.onclick = (e) => {
    if (e.target === overlay) closeDrawer();
  };

  // Copiar Link de Acompanhamento
  const btnCopyTracking = document.getElementById('btn-copy-tracking-link');
  if (btnCopyTracking) {
    btnCopyTracking.onclick = () => {
      const url = `${window.location.origin}/#acompanhamento?orderId=${order.id}`;
      navigator.clipboard.writeText(url);
      btnCopyTracking.innerHTML = `<i data-lucide="check" style="width:12px; height:12px;"></i> Copiado!`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btnCopyTracking.innerHTML = `<i data-lucide="link" style="width:12px; height:12px;"></i> Copiar Link do Cliente`;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    };
  }

  // Chamar no WhatsApp
  const btnWhats = document.getElementById('btn-drawer-whatsapp');
  if (btnWhats) {
    btnWhats.onclick = () => {
      const rawPhone = document.getElementById('drawer-customer-phone').value.trim();
      let cleanPhone = rawPhone.replace(/\D/g, '');
      if (cleanPhone.length > 0) {
        if (cleanPhone.length === 10 || cleanPhone.length === 11) {
          cleanPhone = '55' + cleanPhone;
        }
        const clientName = document.getElementById('drawer-customer-name').value.trim() || 'Cliente';
        const recName = document.getElementById('drawer-recipient-name').value.trim() || 'alguém especial';
        const rawStatus = document.getElementById('drawer-order-status').value;
        
        const statusLabels = {
          pendente: 'Aguardando Pagamento',
          pago: 'Pagamento Aprovado',
          em_producao: 'Em Produção',
          concluido: 'Entregue'
        };
        const statusText = statusLabels[rawStatus] || rawStatus;
        
        const msg = `Olá, ${clientName}! Tudo bem? Aqui é da equipe AudioGift. Vi que você fez o pedido de uma música personalizada para ${recName}! Seu pedido está com o status: *${statusText}*. Qualquer dúvida estou à disposição! 🎁🎶`;
        window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
      } else {
        alert('Número de WhatsApp inválido ou em branco.');
      }
    };
  }

  // Botão Executar Agente de IA
  const btnRunAgent = document.getElementById('btn-run-agent');
  if (btnRunAgent) {
    btnRunAgent.onclick = async () => {
      btnRunAgent.setAttribute('disabled', 'true');
      btnRunAgent.innerHTML = `<i data-lucide="loader" class="spin"></i> Executando Agente...`;
      
      const currentOrderData = {
        ...order,
        customer_name: document.getElementById('drawer-customer-name').value.trim(),
        customer_email: document.getElementById('drawer-customer-email').value.trim(),
        customer_phone: document.getElementById('drawer-customer-phone').value.trim(),
        whatsapp_followup: document.getElementById('drawer-whatsapp-followup').value === 'true',
        recipient_name: document.getElementById('drawer-recipient-name').value.trim(),
        speak_name: document.getElementById('drawer-speak-name').value.trim(),
        for_who: document.getElementById('drawer-for-who').value.trim(),
        occasion: document.getElementById('drawer-occasion').value.trim(),
        genre: document.getElementById('drawer-genre').value.trim(),
        voice: document.getElementById('drawer-voice').value.trim(),
        vibes: document.getElementById('drawer-vibes').value.trim(),
        baby_name: document.getElementById('drawer-baby-name').value.trim(),
        feelings: document.getElementById('drawer-feelings').value.trim(),
        story: document.getElementById('drawer-story').value.trim(),
        message: document.getElementById('drawer-message').value.trim()
      };

      const result = runAiAgent(currentOrderData);
      
      const updated = await db.updateOrder(orderId, {
        ...currentOrderData,
        generated_lyrics: result.generated_lyrics,
        generated_prompt: result.generated_prompt,
        status: 'em_producao'
      });
      
      const idx = orders.findIndex(o => o.id === orderId);
      if (idx !== -1) orders[idx] = updated;

      closeDrawer();
      setTimeout(() => {
        openOrderDrawer(orderId, orders);
        renderAdminDashboard(document.querySelector('main'), orders, onLogout);
      }, 300);
    };
  }

  // Copiar Letras Propostas
  const btnCopyLyrics = document.getElementById('btn-copy-lyrics');
  if (btnCopyLyrics) {
    btnCopyLyrics.onclick = () => {
      const lyricsArea = document.getElementById('agent-lyrics-input');
      lyricsArea.select();
      document.execCommand('copy');
      btnCopyLyrics.innerHTML = `<i data-lucide="check" style="width:12px; height:12px; margin-right:3px;"></i> Copiado!`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btnCopyLyrics.innerHTML = `<i data-lucide="copy" style="width:12px; height:12px; margin-right:3px;"></i> Copiar Letra`;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    };
  }

  // Copiar Prompt Suno/Udio
  const btnCopyPrompt = document.getElementById('btn-copy-prompt');
  if (btnCopyPrompt) {
    btnCopyPrompt.onclick = () => {
      const promptArea = document.getElementById('agent-prompt-input');
      promptArea.select();
      document.execCommand('copy');
      btnCopyPrompt.innerHTML = `<i data-lucide="check" style="width:12px; height:12px; margin-right:3px;"></i> Copiado!`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btnCopyPrompt.innerHTML = `<i data-lucide="copy" style="width:12px; height:12px; margin-right:3px;"></i> Copiar`;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    };
  }

  // Copiar Prompt ChatGPT/Claude
  const btnCopyGptPrompt = document.getElementById('btn-copy-chatgpt-prompt');
  if (btnCopyGptPrompt) {
    btnCopyGptPrompt.onclick = () => {
      const promptArea = document.getElementById('agent-chatgpt-prompt-input');
      promptArea.select();
      document.execCommand('copy');
      btnCopyGptPrompt.innerHTML = `<i data-lucide="check" style="width:12px; height:12px; margin-right:3px;"></i> Copiado!`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btnCopyGptPrompt.innerHTML = `<i data-lucide="copy" style="width:12px; height:12px; margin-right:3px;"></i> Copiar Prompt LLM`;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    };
  }

  // Regerar Letras
  const btnRegenLyrics = document.getElementById('btn-regenerate-lyrics');
  if (btnRegenLyrics) {
    btnRegenLyrics.onclick = () => {
      const confirm = window.confirm('Deseja regerar a letra? Edições manuais não salvas serão perdidas.');
      if (!confirm) return;
      
      const currentOrderData = {
        ...order,
        recipient_name: document.getElementById('drawer-recipient-name').value.trim(),
        speak_name: document.getElementById('drawer-speak-name').value.trim(),
        for_who: document.getElementById('drawer-for-who').value.trim(),
        occasion: document.getElementById('drawer-occasion').value.trim(),
        genre: document.getElementById('drawer-genre').value.trim(),
        voice: document.getElementById('drawer-voice').value.trim(),
        vibes: document.getElementById('drawer-vibes').value.trim(),
        baby_name: document.getElementById('drawer-baby-name').value.trim(),
        feelings: document.getElementById('drawer-feelings').value.trim(),
        story: document.getElementById('drawer-story').value.trim(),
        message: document.getElementById('drawer-message').value.trim()
      };
      
      const newLyrics = generateLyrics(currentOrderData);
      document.getElementById('agent-lyrics-input').value = newLyrics;
    };
  }

  // Deletar
  const btnDeleteOrder = document.getElementById('btn-delete-order');
  if (btnDeleteOrder) {
    btnDeleteOrder.onclick = async () => {
      const confirm = window.confirm('Excluir este pedido do banco permanentemente?');
      if (!confirm) return;

      btnDeleteOrder.setAttribute('disabled', 'true');
      btnDeleteOrder.textContent = 'Excluindo...';

      try {
        await db.deleteOrder(orderId);
        const filtered = orders.filter(o => o.id !== orderId);
        closeDrawer();
        setTimeout(() => {
          renderAdminDashboard(document.querySelector('main'), filtered, onLogout);
        }, 200);
      } catch (err) {
        console.error('Erro ao excluir pedido:', err);
        alert('❌ Erro ao excluir o pedido. Verifique a conexão e tente novamente.');
        btnDeleteOrder.removeAttribute('disabled');
        btnDeleteOrder.textContent = 'Excluir pedido';
      }
    };
  }

  // Salvar
  const btnSaveChanges = document.getElementById('btn-save-drawer-changes');
  if (btnSaveChanges) {
    btnSaveChanges.onclick = async () => {
      btnSaveChanges.setAttribute('disabled', 'true');
      btnSaveChanges.innerHTML = `<i data-lucide="loader" class="spin"></i> Gravando...`;
      
      const newStatus = document.getElementById('drawer-order-status').value;
      const newAudioUrl = document.getElementById('drawer-audio-url').value.trim();
      const lyricsInp = document.getElementById('agent-lyrics-input');
      
      const updates = {
        customer_name: document.getElementById('drawer-customer-name').value.trim(),
        customer_email: document.getElementById('drawer-customer-email').value.trim(),
        customer_phone: document.getElementById('drawer-customer-phone').value.trim(),
        whatsapp_followup: document.getElementById('drawer-whatsapp-followup').value === 'true',
        
        recipient_name: document.getElementById('drawer-recipient-name').value.trim(),
        speak_name: document.getElementById('drawer-speak-name').value.trim(),
        for_who: document.getElementById('drawer-for-who').value.trim(),
        occasion: document.getElementById('drawer-occasion').value.trim(),
        genre: document.getElementById('drawer-genre').value.trim(),
        voice: document.getElementById('drawer-voice').value.trim(),
        vibes: document.getElementById('drawer-vibes').value.trim(),
        baby_name: document.getElementById('drawer-baby-name').value.trim(),
        feelings: document.getElementById('drawer-feelings').value.trim(),
        story: document.getElementById('drawer-story').value.trim(),
        message: document.getElementById('drawer-message').value.trim(),
        
        status: newStatus,
        audio_url: newAudioUrl
      };
      
      if (lyricsInp) {
        updates.generated_lyrics = lyricsInp.value;
      }
      
      try {
        const updated = await db.updateOrder(orderId, updates);
        const idx = orders.findIndex(o => o.id === orderId);
        if (updated && idx !== -1) orders[idx] = updated;

        closeDrawer();
        setTimeout(() => {
          renderAdminDashboard(document.querySelector('main'), orders, onLogout);
          alert('✅ Pedido salvo com sucesso!');
        }, 200);
      } catch (err) {
        console.error('Erro ao salvar pedido:', err);
        alert('❌ Erro ao salvar as alterações. Verifique a conexão e tente novamente.');
        btnSaveChanges.removeAttribute('disabled');
        btnSaveChanges.innerHTML = 'Salvar alterações';
      }
    };
  }
};

export const renderAdminPage = async (mainEl, onLogout) => {
  const isAuth = await db.isAdminAuthenticated();
  
  if (!isAuth) {
    renderAdminLogin(mainEl, () => renderAdminPage(mainEl, onLogout));
    return;
  }

  mainEl.innerHTML = `
    <div class="admin-dashboard-loading text-center py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh; display:flex; align-items:center; justify-content:center;">
      <div>
        <div class="preloader-equalizer" style="margin-bottom:15px;">
          <span class="eq-bar bar-1"></span>
          <span class="eq-bar bar-2"></span>
          <span class="eq-bar bar-3"></span>
        </div>
        <p style="color: var(--text-muted);">Carregando Painel Administrativo...</p>
      </div>
    </div>
  `;

  let orders = [];
  try {
    orders = await db.getOrders();
  } catch (err) {
    console.error('Erro ao carregar pedidos no admin:', err);
  }

  renderAdminDashboard(mainEl, orders, onLogout);
};
