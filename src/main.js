import './style.css'
import { db } from './supabaseClient.js'
import { runAiAgent, generateLyrics, generatePrompt, buildChatgptPrompt } from './agentEngine.js'

// Utilitário de segurança: escapa HTML para evitar XSS ao exibir dados de usuário
const escapeHtml = (str) => String(str ?? '').replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Sistema de Toasts Personalizado para substituir window.alert (Premium Mobile-friendly UX)
const showToast = (message, type = 'warning') => {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `custom-toast toast-${type}`;
  
  let accentColor = '#FC7301';
  let iconName = 'alert-circle';
  if (type === 'error') {
    accentColor = '#ff4d6d';
    iconName = 'x-circle';
  } else if (type === 'success') {
    accentColor = '#4ade80';
    iconName = 'check-circle';
  } else if (type === 'info') {
    accentColor = '#60a5fa';
    iconName = 'info';
  }

  toast.innerHTML = `
    <div class="toast-icon-wrap">
      <i data-lucide="${iconName}"></i>
    </div>
    <div class="toast-content-wrap">
      <p>${message}</p>
    </div>
    <button class="toast-close-btn" aria-label="Fechar aviso">
      <i data-lucide="x"></i>
    </button>
  `;

  container.appendChild(toast);

  if (window.lucide) {
    lucide.createIcons({
      attrs: { 'stroke-width': '2.5' },
      nameAttr: 'data-lucide',
      root: toast
    });
  }

  // Forçar reflow para animar a entrada
  void toast.offsetWidth;
  toast.classList.add('active');

  const dismissToast = () => {
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    }, 400);
  };

  toast.querySelector('.toast-close-btn').onclick = (e) => {
    e.stopPropagation();
    dismissToast();
  };

  setTimeout(dismissToast, 4500);
};

window.alert = (message) => {
  let type = 'warning';
  const msgLower = message.toLowerCase();
  if (msgLower.includes('sucesso') || msgLower.includes('certo') || msgLower.includes('confirmado') || msgLower.includes('aprovado')) {
    type = 'success';
  } else if (msgLower.includes('erro') || msgLower.includes('falha') || msgLower.includes('inválido') || msgLower.includes('obrigatório')) {
    type = 'error';
  }
  showToast(message, type);
};

const Logo = (baseColor = 'white', giftColor = '#FC7301') => `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1507040 421800" style="width: 100%; height: auto; display: block;" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path fill="${baseColor}" fill-rule="nonzero" d="M422810 279480c0,10390 -3190,18540 -9600,24480 -6370,5940 -15170,8910 -26400,8910l-84160 0c-11290,0 -20170,-2970 -26610,-8950 -6450,-5970 -9670,-14120 -9670,-24440l0 -128920 50620 0 0 117980 55410 0 0 -117980 50410 0 0 128920zm69780 -10940l57790 0 0 -74090 -57790 0 0 74090zm-50630 44330l0 -162310 120630 0c12490,0 22270,3840 29330,11520 7060,7640 10610,18400 10610,32160l0 73870c0,14700 -3480,25850 -10390,33420 -6920,7570 -17130,11340 -30640,11340l-119540 0zm179730 0l0 -162310 50620 0 0 162310 -50620 0zm223170 -43670c0,14480 -3290,25380 -9880,32690 -6560,7320 -16410,10980 -29480,10980l-74670 0c-13150,0 -23030,-3660 -29660,-10980 -6620,-7310 -9920,-18210 -9920,-32690l0 -74750c0,-14840 3260,-25850 9780,-33060 6480,-7210 16440,-10830 29800,-10830l74670 0c13430,0 23360,3590 29770,10720 6410,7140 9590,18180 9590,33170l0 74750zm-102770 -660l52150 0 0 -74090 -52150 0 0 74090z"/>
  <path fill="${baseColor}" fill-rule="nonzero" d="M48930 323940c730,0 1450,20 2180,50l0 -118250c0,-16880 6430,-25020 19750,-35180l176350 -134470 0 305880c0,27020 -21900,48930 -48920,48930 -27030,0 -48930,-21910 -48930,-48930 0,-27850 23190,-50090 51110,-48880l0 -39760 -102610 0 0 119510c170,26760 -21810,48960 -48930,48960 -27020,0 -48930,-21910 -48930,-48930 0,-27020 21910,-48930 48930,-48930zm151540 -115170l0 -78240 -102610 78240 102610 0z"/>
  <path fill="${baseColor}" d="M1162500 105820c-6640,-20240 -21770,-58580 -45370,-75300 -27620,-19570 -55170,-2800 -40590,25660 13350,26070 53710,48350 85960,49640zm-265340 2370c-16010,0 -29100,13090 -29100,29100l0 57410c0,12330 7850,23260 19260,27380l0 90590c0,16010 13090,29110 29100,29110 180750,0 361500,0 542250,0 16020,0 29110,-13100 29110,-29110l0 -90590c11400,-4120 19260,-15050 19260,-27380l0 -57410c0,-16010 -13090,-29100 -29110,-29100l-213120 0c18060,-10940 31850,-27130 34330,-48220 4390,-37200 -34940,-58590 -71940,-32230 -29800,21230 -39040,62780 -41530,78370 -5810,-19160 -23930,-70970 -55830,-93570 -14650,-10380 -29740,-13810 -42680,-12140 -16700,2160 -30490,12890 -35130,29040 -8940,31070 18950,61740 47260,78750 -67370,0 -134750,0 -202130,0zm342840 -62470c-19900,14170 -28130,41390 -31330,56930 26790,-1150 66550,-16950 68670,-46820 1300,-18290 -18400,-23610 -37340,-10110z"/>
  <path fill="${giftColor}" fill-rule="nonzero" d="M1081350 262430c0,14520 -3290,25420 -9920,32730 -6590,7320 -16480,10970 -29620,10970l-79270 0c-13150,0 -23030,-3650 -29660,-10970 -6630,-7310 -9920,-18210 -9920,-32730l0 -74710c0,-15360 3260,-26470 9780,-33460 6480,-6950 16870,-10430 31070,-10430l115800 0 0 43890 -105810 0 0 73870 57580 0 0 -53230 49970 0 0 54070zm18720 43700l0 -162300 50630 0 0 162300 -50630 0zm72180 0l0 -162300 135360 0 0 43890 -84520 0 0 18680 84520 0 0 36720 -84520 0 0 63010 -50840 0zm198330 0l0 -118410 -49760 0 0 -43890 150580 0 0 43890 -47590 0 0 118410 -53230 0z"/>
 </g>
</svg>
`

const app = document.querySelector('#app')



const Pricing = () => `
  <section id="pricing" class="pricing-section py-large bg-white">
    <div class="container text-center">
      <h2 class="section-title-serif reveal">Escolha o plano perfeito para sua <em>história</em></h2>
      <p class="section-subtitle reveal">Presentes que emocionam, com a qualidade que sua história merece.</p>
      
      <div class="pricing-grid mt-12">
        <div class="pricing-card reveal" data-delay="1">
          <h3 class="plan-name">Audio Gift Especial</h3>
          <div class="plan-price">
            <span class="currency">R$</span>
            <span class="amount">89,90</span>
            <span class="period">/único</span>
          </div>
          <p class="plan-delivery-time" style="color: #666; font-size: 0.9rem; margin-top: 8px; font-weight: 500;"><i data-lucide="clock" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;"></i> Entrega em até 7 dias</p>
          <ul class="plan-features" style="margin-top: 20px;">
            <li><i data-lucide="check-circle"></i> Canção Personalizada HD</li>
            <li><i data-lucide="check-circle"></i> Letra Exclusiva e Poética</li>
            <li><i data-lucide="check-circle"></i> Baseada na sua história</li>
            <li><i data-lucide="check-circle"></i> Link exclusivo para compartilhar</li>
          </ul>
          <button class="btn-primary-new w-full" style="margin-top: 24px;" onclick="Quiz('especial')">Pedir este plano</button>
        </div>

        <div class="pricing-card popular reveal" data-delay="2">
          <div class="popular-badge">Mais Escolhido</div>
          <h3 class="plan-name">Audio Gift Memorável</h3>
          <div class="plan-price">
            <span class="currency">R$</span>
            <span class="amount">149,90</span>
            <span class="period">/único</span>
          </div>
          <p class="plan-delivery-time" style="color: var(--primary-orange); font-size: 0.9rem; margin-top: 8px; font-weight: 600;"><i data-lucide="rocket" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;"></i> Entrega em até 72 horas</p>
          <ul class="plan-features" style="margin-top: 20px;">
            <li><i data-lucide="check-circle"></i> <strong>Tudo do plano Especial</strong></li>
            <li><i data-lucide="check-circle"></i> Playback Instrumental</li>
            <li><i data-lucide="check-circle"></i> Letra em PDF diagramada</li>
            <li><i data-lucide="check-circle"></i> Ajustes e correções grátis</li>
          </ul>
          <button class="btn-primary-new w-full" style="margin-top: 24px;" onclick="Quiz('memoravel')">Pedir este plano</button>
        </div>

        <div class="pricing-card vip reveal" data-delay="3">
          <h3 class="plan-name" style="color: #cda851; font-weight: 800;">★ VIP • Audio Gift Inesquecível</h3>
          <div class="plan-price">
            <span class="currency">R$</span>
            <span class="amount">199,90</span>
            <span class="period">/único</span>
          </div>
          <p class="plan-delivery-time" style="color: #cda851; font-size: 0.9rem; margin-top: 8px; font-weight: 600;"><i data-lucide="zap" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;"></i> Entrega máxima em 24h</p>
          <ul class="plan-features" style="margin-top: 20px;">
            <li><i data-lucide="check-circle"></i> <strong>Tudo do plano Memorável</strong></li>
            <li><i data-lucide="check-circle"></i> Publicação nos Streamings (Spotify, Deezer...)</li>
            <li><i data-lucide="check-circle"></i> Capa do Single Personalizada</li>
            <li><i data-lucide="check-circle"></i> Suporte Prioritário VIP</li>
          </ul>
          <button class="btn-primary-new w-full" style="margin-top: 24px;" onclick="Quiz('inesquecivel')">Pedir este plano</button>
        </div>
      </div>
    </div>
  </section>
`
const Header = () => `
  <header class="header">
    <div class="container header-content">
      <button class="mobile-toggle" id="mobileToggle" aria-label="Menu"><i data-lucide="menu"></i></button>
      <a href="#" class="logo">${Logo('white')}</a>
      <nav class="nav">
        <a href="#how">Como funciona</a>
        <a href="#styles">Estilos</a>
        <a href="#reviews">Depoimentos</a>
        <a href="#planos">Planos</a>
      </nav>
      <div class="nav-actions">
        <button id="btn-track-order" class="btn-nav-outline">Acompanhar pedido</button>
        <a href="#create" class="btn-nav-gold">Criar sua canção</a>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#how">Como funciona</a>
      <a href="#styles">Estilos</a>
      <a href="#reviews">Depoimentos</a>
      <a href="#planos">Planos</a>
      <button id="btn-track-order-mobile" class="btn-nav-outline w-full mt-2" style="width:100%; text-align:center;">Acompanhar pedido</button>
      <a href="#create" class="btn-primary-new w-full mt-4">Criar sua canção</a>
    </div>
  </header>
`

const MusicStyles = () => {
  const featuredGenres = [
    { name: 'Sertanejo', voice: 'Masculina', src: '/songs/Sempre Para Sempre.mp3.mpeg', title: 'Sempre Para Sempre' },
    { name: 'Pop Acústico', voice: 'Feminina', src: '/songs/A Chave do Teu Coração.mp3.mpeg', title: 'A Chave do Teu Coração' },
    { name: 'MPB', voice: 'Masculina', src: '/songs/Pra Sempre Você.mp3.mpeg', title: 'Pra Sempre Você' },
    { name: 'Samba', voice: 'Masculina', src: '/songs/Coração De Ouro.mp3.mpeg', title: 'Coração De Ouro' },
    { name: 'Pop Rock', voice: 'Masculina', src: '/songs/Você É Meu Sol.mp3.mpeg', title: 'Você É Meu Sol' },
    { name: 'Forró', voice: 'Feminina', src: '/songs/Minha Princesa, Meu amor..mp3.mpeg', title: 'Minha Princesa, Meu Amor' },
    { name: 'Violão e Voz', voice: 'Instrumental', src: '/songs/Você É Minha Vida.mp3.mpeg', title: 'Você É Minha Vida' },
    { name: 'Soul Romântico', voice: 'Feminina', src: '/songs/Te Amo Muitinho.mp3.mpeg', title: 'Te Amo Muitinho' },
    { name: 'Gospel', voice: 'Feminina', src: '/songs/Presente de Deus.mp3.mpeg', title: 'Presente de Deus' },
    { name: 'Pagode', voice: 'Masculina', src: '/songs/Minha Marina.mp3.mpeg', title: 'Minha Marina' },
    { name: 'Reggae', voice: 'Masculina', src: '/songs/Filha do Meu Coração.mp3.mpeg', title: 'Filha do Meu Coração' }
  ]
  
  return `
    <section id="styles" class="music-styles py-large">
      <div class="container text-center">
        <div class="tag-badge reveal"><i data-lucide="sparkles"></i> NOSSOS ESTILOS</div>
        <h2 class="section-title-serif reveal" data-delay="1">Ouça nossas homenagens por <em>Gênero Musical</em></h2>
        <p class="section-subtitle reveal" data-delay="2">Explore nossa biblioteca de estilos musicais, do clássico ao moderno.</p>
        
        <div class="styles-controls reveal" data-delay="3">
          <div class="search-wrapper">
            <span class="search-icon"><i data-lucide="search"></i></span>
            <input type="text" placeholder="Buscar gênero musical ou música..." class="search-input">
          </div>
        </div>
        
        <div class="genre-grid-players">
          ${featuredGenres.map((genre, i) => `
            <div class="style-player-card reveal ${i >= 9 ? 'genre-card-hidden' : ''}" data-genre="${genre.name}" data-voice="${genre.voice}" data-delay="${(i % 4) + 1}">
              <div class="audio-card-left">
                <button class="wa-play-small player-card-play-btn" data-src="${genre.src}" aria-label="Tocar exemplo">
                  <i data-lucide="play"></i>
                </button>
                <div class="audio-card-details">
                  <h4 class="genre-name-label">${genre.title}</h4>
                  <p class="genre-example-desc">${genre.name}</p>
                </div>
              </div>
              
              <div class="audio-card-right">
                <div class="equalizer-wave">
                  <span class="eq-bar bar-1"></span>
                  <span class="eq-bar bar-2"></span>
                  <span class="eq-bar bar-3"></span>
                  <span class="eq-bar bar-4"></span>
                  <span class="eq-bar bar-5"></span>
                  <span class="eq-bar bar-6"></span>
                  <span class="eq-bar bar-7"></span>
                  <span class="eq-bar bar-8"></span>
                  <span class="eq-bar bar-9"></span>
                  <span class="eq-bar bar-10"></span>
                </div>
                
                <div class="wa-wave-small modern-wave" style="display: none;">
                  <div class="wa-wave-fill"></div>
                </div>
                
                <span class="wa-time-small">0:30</span>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-4 reveal" data-delay="1" id="showAllGenresContainer">
          <button class="btn-outline" id="btnShowAllGenres">VER TODOS OS ESTILOS</button>
        </div>
      </div>
    </section>
  `
}


const Hero = () => `
  <section class="hero">
    <div class="container">
      <div class="hero-new-layout">
        <div class="hero-text-content">
          <span class="tagline reveal" data-delay="1"><i data-lucide="sparkles" style="width: 14px; height: 14px; color: var(--primary-orange);"></i> A plataforma #1 de músicas personalizadas</span>
          <h1 class="main-title reveal" data-delay="2">Tudo que você nunca conseguiu dizer... <br><span class="gradient-text">Agora em uma canção.</span></h1>
          <p class="hero-subtitle reveal" data-delay="3">A homenagem definitiva para quem você ama. Uma composição exclusiva, feita sob medida para a sua história.</p>
          <div class="hero-cta-wrapper reveal" data-delay="4">
            <a href="#create" class="btn-primary-new btn-magnetic">
              <i data-lucide="gift"></i>
              Pedir minha música personalizada
            </a>
            <div class="hero-trust">
              <div class="stars">
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
              </div>
              <div class="trust-divider"></div>
              <p>Mais de <strong>2.000 histórias</strong> já se emocionaram</p>
            </div>
          </div>
        </div>

        <div class="hero-visual-wrapper reveal" data-delay="2">
          <div class="smartphone-mockup proof-video-card" data-video-url="https://player.vimeo.com/video/1195075467?badge=0&autopause=0&player_id=0&app_id=58479" data-aspect="vertical">
            <!-- iPhone SVG Frame Overlay -->
            <svg class="phone-svg-overlay" viewBox="0 0 152670 307380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="black" fill-rule="nonzero" d="M24880 0l102460 0c6450,0 12300,2630 16550,6880 4240,4240 6870,10100 6870,16540l0 54820 1910 0 0 40170 -1910 0 0 165550c0,6450 -2630,12300 -6870,16550 -4250,4240 -10100,6870 -16550,6870l-102460 0c-6440,0 -12300,-2630 -16550,-6870 -4240,-4250 -6880,-10100 -6880,-16550l0 -160060 -1460 0 0 -23420 1460 0 0 -6730 -1460 0 0 -23420 1460 0 0 -10320 -1460 0 0 -12810 1460 0 0 -23780c0,-6440 2640,-12300 6880,-16540 4240,-4250 10100,-6880 16540,-6880zm39450 11490l24010 0c2330,0 4240,1910 4240,4240l0 0c0,2340 -1910,4250 -4240,4250l-24010 0c-2330,0 -4240,-1910 -4240,-4250l0 0c0,-2330 1910,-4240 4240,-4240zm63010 -5630l-102460 0c-4820,0 -9210,1970 -12400,5160 -3180,3180 -5160,7570 -5160,12400l0 260540c0,4830 1980,9220 5160,12410 3190,3180 7580,5160 12400,5160l102460 0c4830,0 9220,-1980 12410,-5160 3180,-3190 5160,-7580 5160,-12410l0 -260540c0,-4830 -1980,-9220 -5160,-12400 -3190,-3190 -7580,-5160 -12410,-5160z"/>
            </svg>
            <div class="smartphone-screen">
              <img src="/images/hero.webp" fetchpriority="high" loading="eager" width="800" height="600" alt="Homenagem Musical AudioGift" style="width: 100%; height: 100%; object-fit: cover;">
              <iframe 
                class="hero-video" 
                src="https://player.vimeo.com/video/1195075467?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Vídeo demonstrativo AudioGift"
                style="width: 100%; height: 100%; object-fit: cover; border: none; background: #000; pointer-events: none; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 0.5s ease;"
                onload="this.style.opacity = '1';"
                allowfullscreen>
              </iframe>
            </div>
            <div class="smartphone-speaker"></div>
            <div class="smartphone-home-bar"></div>
            <button class="btn-play-example" aria-label="Veja como emociona">
              <i data-lucide="play-circle"></i>
              Veja como emociona
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

const SocialProofSection = () => {
  const bentoItems = [
    {
      type: 'video',
      title: "Depoimento Real, Emoção Verdadeira",
      tag: "Depoimento",
      duration: "0:30",
      img: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072346?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "vertical"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 1.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Reação Real: 'Até eu me emocionei...'",
      tag: "Reação Real",
      duration: "0:35",
      img: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072345?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "vertical"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 2.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Ídolo Emocionado com o Audiogift",
      tag: "Homenagem",
      duration: "0:45",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072341?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "square"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 3.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Sua História em Música em 3 Passos",
      tag: "Como Criar",
      duration: "2:29",
      img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072336?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Depoimento de Cliente Emocionada",
      tag: "Feedback",
      duration: "0:23",
      img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072334?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "square"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 4.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Nossa Maior Motivação: Sua Mensagem",
      tag: "Feedback",
      duration: "0:48",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072335?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Nossa Especialidade: Emocionar Você",
      tag: "Feedback",
      duration: "0:58",
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072333?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "vertical"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 5.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Reações Inesperadas de Emoção",
      tag: "Reações Reais",
      duration: "0:26",
      img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072318?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "square"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 6.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Presente de Dia dos Namorados Perfeito",
      tag: "Dia dos Namorados",
      duration: "1:45",
      img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072316?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "vertical"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 7.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "Chá Revelação Emocionante",
      tag: "Chá Revelação",
      duration: "0:21",
      img: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072317?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "square"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 8.webp",
      aspect: "square"
    },
    {
      type: 'video',
      title: "A Música Perfeita para Sua História",
      tag: "Homenagem",
      duration: "0:45",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://player.vimeo.com/video/1195072315?badge=0&autopause=0&player_id=0&app_id=58479",
      aspect: "vertical"
    },
    {
      type: 'image',
      imgUrl: "/images/provasocial 9.webp",
      aspect: "square"
    }
  ];

  return `
    <section id="proof" class="social-proof-section py-large bg-soft overflow-hidden">
      <div class="container">
        <div class="text-center mb-12">
          <div class="tag-badge reveal"><i data-lucide="heart"></i> DEPOIMENTOS</div>
          <h2 class="section-title-serif reveal" data-delay="1">Reações de quem já recebeu a música</h2>
          <p class="section-subtitle reveal" data-delay="2">Vídeos e conversas de clientes que mostram o impacto de dar uma canção exclusiva de presente.</p>
        </div>

        <!-- Bento Grid -->
        <div class="proof-bento-grid" id="proofBentoGrid">
          ${bentoItems.map((item, idx) => {
            const isHiddenClass = idx >= 6 ? 'bento-item-hidden' : '';
            if (item.type === 'video') {
              return `
                <div class="proof-video-card bento-item reveal ${item.aspect === 'vertical' ? 'bento-portrait' : 'bento-square'} ${isHiddenClass}" data-delay="${(idx % 4) + 1}" data-video-url="${item.videoUrl}" data-aspect="${item.aspect}">
                  <div class="video-cover-wrap">
                    <img class="cover-img" src="${item.img}" alt="${item.title}" loading="lazy" width="300" height="300">
                    <div class="video-overlay-gradient"></div>
                    <div class="video-duration"><i data-lucide="clock"></i> ${item.duration}</div>
                    <span class="video-tag">${item.tag}</span>
                    <button class="video-play-btn" aria-label="Tocar depoimento">
                      <div class="play-btn-circle">
                        <i data-lucide="play"></i>
                      </div>
                    </button>
                  </div>
                  <div class="video-card-info">
                    <h3>${item.title}</h3>
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="comment-img-card bento-item bento-square reveal ${isHiddenClass}" data-delay="${(idx % 4) + 1}" data-img-url="${item.imgUrl}">
                  <img src="${item.imgUrl}" alt="Feedback Cliente AudioGift" loading="lazy" width="300" height="300">
                  <div class="img-card-overlay">
                    <i data-lucide="zoom-in"></i>
                  </div>
                </div>
              `;
            }
          }).join('')}
        </div>

        <div class="text-center mt-5" id="proofShowMoreContainer" style="margin-top: 3rem; display: flex; justify-content: center;">
          <button class="btn-outline" id="btnShowMoreProof" style="cursor: pointer; padding: 12px 30px; border-radius: 50px;">Mostrar mais depoimentos</button>
        </div>
      </div>

      <!-- Lightbox and Video player modals have been moved to the global app shell to prevent layout stacking context issues -->
    </section>
  `;
};

const initSocialProof = () => {
  const videoCards = document.querySelectorAll('.proof-video-card');
  const commentImgCards = document.querySelectorAll('.comment-img-card');

  const btnShowMore = document.getElementById('btnShowMoreProof');
  const showMoreContainer = document.getElementById('proofShowMoreContainer');
  if (btnShowMore && showMoreContainer) {
    btnShowMore.onclick = () => {
      const hiddenItems = document.querySelectorAll('.proof-bento-grid .bento-item-hidden');
      hiddenItems.forEach(item => {
        item.classList.remove('bento-item-hidden');
        if (typeof observer !== 'undefined') {
          observer.observe(item);
        }
      });
      showMoreContainer.style.display = 'none';
    };
  }

  // Carregar as thumbnails reais (primeiro frame) dos vídeos do Vimeo
  videoCards.forEach(card => {
    const img = card.querySelector('.cover-img');
    const videoUrl = card.dataset.videoUrl;
    if (img && videoUrl) {
      const matches = videoUrl.match(/\/video\/(\d+)/);
      if (matches && matches[1]) {
        const videoId = matches[1];
        // Busca OEmbed primeiro para obter thumbnail HD (1280px se disponível)
        fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
          .then(res => res.json())
          .then(data => {
            if (data && data.thumbnail_url) {
              img.src = data.thumbnail_url;
            }
          })
          .catch(() => {
            // Fallback para API v2 se falhar
            fetch(`https://vimeo.com/api/v2/video/${videoId}.json`)
              .then(res => res.json())
              .then(data => {
                if (data && data[0] && data[0].thumbnail_large) {
                  img.src = data[0].thumbnail_large;
                }
              })
              .catch(err => console.warn(`Falha ao obter thumbnail para o vídeo ${videoId}:`, err));
          });
      }
    }
  });

  // Modal Video Player logic
  const videoModal = document.getElementById('videoModalOverlay');
  const videoContent = document.getElementById('videoModalContent');
  const videoContainer = document.getElementById('modalVideoContainer');
  const videoCloseBtn = document.getElementById('videoModalClose');
  const prevBtn = document.getElementById('videoModalPrev');
  const nextBtn = document.getElementById('videoModalNext');

  let currentVideoIdx = 0;

  const loadVideo = (idx) => {
    const card = videoCards[idx];
    if (!card) return;
    currentVideoIdx = idx;

    const videoSrc = card.dataset.videoUrl;
    const isIframe = videoSrc.includes('vimeo.com') || videoSrc.includes('youtube.com') || videoSrc.includes('youtube-nocookie.com');
    const aspect = card.dataset.aspect || 'vertical';

    // Adjust modal content style for aspect ratio dynamically
    if (videoContent) {
      videoContent.style.height = 'auto'; // Reset height to let aspect-ratio dictate it
      if (aspect === 'square') {
        videoContent.style.aspectRatio = '1/1';
        videoContent.style.maxWidth = window.innerWidth < 480 ? '92%' : '550px';
      } else {
        videoContent.style.aspectRatio = '9/16';
        videoContent.style.maxWidth = window.innerWidth < 480 ? '85%' : '420px';
      }
    }

    if (isIframe) {
      let finalUrl = videoSrc;
      try {
        if (videoSrc.includes('vimeo.com')) {
          const urlObj = new URL(videoSrc);
          urlObj.searchParams.set('autoplay', '1');
          urlObj.searchParams.set('badge', '0');
          urlObj.searchParams.set('autopause', '0');
          finalUrl = urlObj.toString();
        } else if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be') || videoSrc.includes('youtube-nocookie.com')) {
          const urlObj = new URL(videoSrc);
          urlObj.searchParams.set('autoplay', '1');
          finalUrl = urlObj.toString();
        }
      } catch (e) {
        if (videoSrc.includes('vimeo.com')) {
          finalUrl = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1&badge=0&autopause=0';
        } else {
          finalUrl = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
        }
      }
      
      videoContainer.innerHTML = `
        <iframe 
          src="${finalUrl}" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
          title="Depoimento em vídeo do cliente"
          style="width:100%; height:100%; border:0; outline:none; display:block; background:#000;" 
          allowfullscreen>
        </iframe>
      `;
    } else {
      videoContainer.innerHTML = `
        <video id="modalVideoPlayer" controls autoplay playsinline style="width:100%; height:100%; object-fit:cover; background:#000;">
          <source src="${videoSrc}" type="video/mp4">
          Seu navegador não suporta a tag de vídeo.
        </video>
      `;
    }

    if (window.lucide) {
      lucide.createIcons();
    }
  };

  if (videoModal && videoContainer && videoCloseBtn) {
    videoCards.forEach((card, idx) => {
      card.onclick = () => {
        // Stop any background site audio that might be playing
        if (window.GlobalAudio) {
          window.GlobalAudio.pause();
        }
        
        loadVideo(idx);

        // Track Video Watch in Facebook Pixel
        if (window.fbq) {
          const videoSrc = card.dataset.videoUrl || '';
          const aspect = card.dataset.aspect || 'vertical';
          window.fbq('trackCustom', 'WatchVideo', {
            video_index: idx,
            video_url: videoSrc,
            aspect_ratio: aspect
          });
        }
        
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      };
    });

    if (prevBtn && nextBtn) {
      prevBtn.onclick = (e) => {
        e.stopPropagation();
        const prevIdx = (currentVideoIdx - 1 + videoCards.length) % videoCards.length;
        loadVideo(prevIdx);
      };

      nextBtn.onclick = (e) => {
        e.stopPropagation();
        const nextIdx = (currentVideoIdx + 1) % videoCards.length;
        loadVideo(nextIdx);
      };
    }

    window.closeVideoModal = () => {
      // Clear container to stop playback/destruct iframe or video
      videoContainer.innerHTML = '';
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    videoCloseBtn.onclick = window.closeVideoModal;
    videoModal.onclick = (e) => {
      if (!e.target.closest('.video-modal-content') && !e.target.closest('.video-modal-close') && !e.target.closest('.video-modal-nav')) {
        window.closeVideoModal();
      }
    };
  }

  // Lightbox Image Logic
  const imageModal = document.getElementById('imageModalOverlay');
  const lightboxImg = document.getElementById('lightboxImage');
  const imageCloseBtn = document.getElementById('imageModalCloseBtn');

  if (imageModal && lightboxImg && imageCloseBtn) {
    commentImgCards.forEach(card => {
      card.onclick = () => {
        const imgSrc = card.dataset.imgUrl;
        lightboxImg.src = imgSrc;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      };
    });

    window.closeImageModal = () => {
      imageModal.classList.remove('active');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    };

    imageCloseBtn.onclick = window.closeImageModal;
    imageModal.onclick = (e) => {
      if (!e.target.closest('.image-modal-content-lightbox') && !e.target.closest('#imageModalCloseBtn')) {
        window.closeImageModal();
      }
    };
    
    // Close on ESC (bound only once globally)
    if (!window.socialProofEscHandlerBound) {
      window.socialProofEscHandlerBound = true;
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (typeof window.closeImageModal === 'function') window.closeImageModal();
          if (typeof window.closeVideoModal === 'function') window.closeVideoModal();
        }
      });
    }
  }
};

const Categories = () => {
  const cats = [
    { title: 'Pro amor da sua vida', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pro seu filho(a)', img: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pro pedido perfeito', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pra celebrar a união', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pra um aniversário inesquecível', img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pro seu pai ou sua mãe', img: 'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pros seus avós', img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pra aquele amigo especial', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pra você mesmo(a)', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pro batizado do seu bebê', img: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=80&w=600' }
  ]
  
  return `
    <section class="categories-section py-large bg-black text-white">
      <div class="container-full">
        <div class="text-center mb-4">
          <h2 class="section-title-serif text-white reveal">Pra quem é essa canção?</h2>
          <p class="scroll-hint reveal" data-delay="1">Arraste para explorar →</p>
        </div>
        
        <div class="categories-carousel reveal" data-delay="2">
          <div class="cat-track">
            ${[...cats, ...cats].map((cat, i) => `
              <div class="cat-story-card">
                <img src="${cat.img}" alt="${cat.title}" loading="lazy" width="220" height="280">
                <div class="cat-story-overlay">
                  <h4>${cat.title}</h4>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="text-center mt-5 reveal" data-delay="1">
          <a href="#create" class="btn-primary-new btn-magnetic">
            <i data-lucide="gift"></i>
            Começar a Criar Sua Canção
          </a>
        </div>
      </div>
    </section>
  `
}

const Experience = () => {
  return `
    <section class="experience-section py-large bg-light">
      <div class="container text-center">
        <h2 class="section-title-serif reveal">Como entregamos uma <br><span class="text-orange">homenagem profissional</span></h2>
        <p class="section-subtitle reveal" data-delay="1">Criação artística, gravação em estúdio e lançamento oficial no Spotify.</p>

        <div class="experience-grid mt-5">
          <div class="exp-card reveal" data-delay="1">
            <div class="exp-icon"><i data-lucide="music"></i></div>
            <h4>Som Profissional</h4>
            <p>Produzida com qualidade profissional, sob a supervisão de um produtor musical com mais de 20 anos de experiência, com atenção aos detalhes em cada acorde.</p>
          </div>
          <div class="exp-card reveal" data-delay="2">
            <div class="exp-icon"><i data-lucide="file-text"></i></div>
            <h4>Letra sob medida</h4>
            <p>Cada verso conta a história de vocês — com os detalhes que só vocês conhecem.</p>
          </div>
          <div class="exp-card reveal" data-delay="3">
            <div class="exp-icon"><i data-lucide="calendar-clock"></i></div>
            <h4>Entrega rápida</h4>
            <p>Precisa para ontem? Temos planos com entrega em até 24h.</p>
          </div>
          <div class="exp-card reveal" data-delay="4">
            <div class="exp-icon"><i data-lucide="podcast"></i></div>
            <h4>Eternize no Spotify</h4>
            <p>Tenha a sua música para sempre nas principais plataformas de streaming de música (spotify, deezer, apple music, youtube music, etc)</p>
          </div>
        </div>

        <div class="experience-cta mt-5 reveal" data-delay="6">
          <a href="#create" class="btn-primary-new btn-magnetic">
            Criar Minha Canção
          </a>
        </div>
      </div>
    </section>
  `;
}

const initSpotifyPlayer = () => {
  const songs = [
    { title: "A Chave do Teu Coração", artist: "Audiogift", tags: ["Romance", "Alma"], dur: 30, src: "/songs/A Chave do Teu Coração.mp3.mpeg", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400" },
    { title: "Você É Meu Sol", artist: "Audiogift", tags: ["Amor", "Eterno"], dur: 30, src: "/songs/Você É Meu Sol.mp3.mpeg", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400" },
    { title: "Minha Princesa, Meu Amor", artist: "Audiogift", tags: ["Festa", "Alegria"], dur: 30, src: "/songs/Minha Princesa, Meu amor..mp3.mpeg", img: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=400" },
    { title: "Pra Sempre Você", artist: "Audiogift", tags: ["Família", "Saudade"], dur: 30, src: "/songs/Pra Sempre Você.mp3.mpeg", img: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?auto=format&fit=crop&q=80&w=400" }
  ];

  const audio = new Audio();
  let currentIdx = 0;
  let isPlaying = false;
  let elapsed = 0;
  let raf = null;
  let lastTime = null;
  let volume = 0.7;
  let isMuted = false;
  let isShuffle = false;
  let isRepeat = false;

  const playerScene = document.querySelector('.player-scene');
  const albumImg = document.getElementById('spotifyAlbumImg');
  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const progFill = document.getElementById('progFill');
  const timeCur = document.getElementById('timeCur');
  const timeDur = document.getElementById('timeDur');
  const volFill = document.getElementById('volFill');
  const playlist = document.getElementById('playerPlaylist');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const volumeMuteBtn = document.getElementById('volumeMuteBtn');

  if (!playBtn) return;

  const fmtTime = (s) => {
    s = Math.floor(s || 0);
    return Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);
  };

  const loadTrack = (idx) => {
    const s = songs[idx];
    audio.src = s.src;
    audio.load();
    if (albumImg) {
      albumImg.src = s.img;
      albumImg.style.display = 'block';
    }
    const vinylLabel = document.getElementById('vinylLabelImg');
    if (vinylLabel) {
      vinylLabel.style.backgroundImage = `url('${s.img}')`;
    }
    
    document.getElementById('playerTitle').textContent = s.title;
    document.getElementById('playerArtist').textContent = s.artist + ' · Single';
    document.getElementById('playerTags').innerHTML = s.tags.map(t => `<span class="tag">${t}</span>`).join('');
    
    timeDur.textContent = '0:30';
    timeCur.textContent = '0:00';
    progFill.style.width = '0%';
    
    document.querySelectorAll('.song-pill').forEach((p, i) => {
      p.classList.toggle('active', i === idx);
    });
  };

  const updateLoop = (ts) => {
    if (!isPlaying) {
      lastTime = null;
      return;
    }
    
    elapsed = audio.currentTime;
    
    // 30 seconds preview limit enforcement
    if (elapsed >= 30) {
      audio.currentTime = 0;
      elapsed = 0;
      progFill.style.width = '0%';
      timeCur.textContent = '0:00';
      
      if (isRepeat) {
        audio.play().catch(err => console.log(err));
      } else {
        audio.pause();
        
        let nextIdx = currentIdx + 1;
        if (isShuffle) {
          nextIdx = Math.floor(Math.random() * songs.length);
        } else {
          nextIdx = nextIdx % songs.length;
        }
        currentIdx = nextIdx;
        loadTrack(currentIdx);
        
        // Auto-play the next song
        setTimeout(() => {
          if (window.GlobalAudio) {
            window.GlobalAudio.play(audio, playBtn, 'vinyl');
          } else {
            audio.play().catch(err => console.log(err));
          }
        }, 100);
        return;
      }
    }
    
    const pct = (elapsed / 30) * 100;
    progFill.style.width = pct + '%';
    timeCur.textContent = fmtTime(elapsed);
    
    lastTime = ts;
    raf = requestAnimationFrame(updateLoop);
  };

  // Sound element events for robust play/pause tracking
  audio.addEventListener('play', () => {
    isPlaying = true;
    playIcon.setAttribute('data-lucide', 'pause');
    if (playerScene) playerScene.classList.add('playing');
    lucide.createIcons();
    lastTime = null;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateLoop);
  });

  audio.addEventListener('pause', () => {
    isPlaying = false;
    playIcon.setAttribute('data-lucide', 'play');
    if (playerScene) playerScene.classList.remove('playing');
    lucide.createIcons();
    cancelAnimationFrame(raf);
  });

  audio.addEventListener('error', () => {
    // If the file fails to play (e.g. 404), make sure we reset correctly
    isPlaying = false;
    playIcon.setAttribute('data-lucide', 'play');
    if (playerScene) playerScene.classList.remove('playing');
    lucide.createIcons();
    cancelAnimationFrame(raf);
  });

  const togglePlayback = () => {
    if (window.GlobalAudio && window.GlobalAudio.activeAudio === audio && !audio.paused) {
      window.GlobalAudio.pause();
    } else {
      if (window.GlobalAudio) {
        window.GlobalAudio.play(audio, playBtn, 'vinyl');
      } else {
        audio.play().catch(err => console.log('Audio file not found yet:', err));
      }
    }
  };

  playBtn.addEventListener('click', togglePlayback);

  prevBtn.addEventListener('click', () => {
    const wasPlaying = isPlaying;
    audio.pause();
    elapsed = 0;
    let prevIdx = currentIdx - 1;
    if (isShuffle) {
      prevIdx = Math.floor(Math.random() * songs.length);
    } else {
      prevIdx = (prevIdx + songs.length) % songs.length;
    }
    currentIdx = prevIdx;
    loadTrack(currentIdx);
    if (wasPlaying) {
      setTimeout(() => {
        if (window.GlobalAudio) window.GlobalAudio.play(audio, playBtn, 'vinyl');
        else audio.play().catch(err => console.log(err));
      }, 50);
    }
  });

  nextBtn.addEventListener('click', () => {
    const wasPlaying = isPlaying;
    audio.pause();
    elapsed = 0;
    let nextIdx = currentIdx + 1;
    if (isShuffle) {
      nextIdx = Math.floor(Math.random() * songs.length);
    } else {
      nextIdx = nextIdx % songs.length;
    }
    currentIdx = nextIdx;
    loadTrack(currentIdx);
    if (wasPlaying) {
      setTimeout(() => {
        if (window.GlobalAudio) window.GlobalAudio.play(audio, playBtn, 'vinyl');
        else audio.play().catch(err => console.log(err));
      }, 50);
    }
  });

  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
  });

  repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active', isRepeat);
  });

  // Progress Bar Interaction (max 30 seconds)
  document.getElementById('progBar').addEventListener('click', e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * 30;
    elapsed = audio.currentTime;
    progFill.style.width = (pct * 100) + '%';
    timeCur.textContent = fmtTime(elapsed);
  });

  // Volume Interaction
  const updateVolumeUI = () => {
    if (isMuted) {
      audio.volume = 0;
      volFill.style.width = '0%';
      volumeMuteBtn.querySelector('.vol-icon').setAttribute('data-lucide', 'volume-x');
    } else {
      audio.volume = volume;
      volFill.style.width = (volume * 100) + '%';
      if (volume === 0) {
        volumeMuteBtn.querySelector('.vol-icon').setAttribute('data-lucide', 'volume-x');
      } else if (volume < 0.5) {
        volumeMuteBtn.querySelector('.vol-icon').setAttribute('data-lucide', 'volume-1');
      } else {
        volumeMuteBtn.querySelector('.vol-icon').setAttribute('data-lucide', 'volume-2');
      }
    }
    lucide.createIcons();
  };

  document.getElementById('volBar').addEventListener('click', e => {
    const rect = e.currentTarget.getBoundingClientRect();
    volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    isMuted = false;
    updateVolumeUI();
  });

  volumeMuteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    updateVolumeUI();
  });

  if (window._spotifyPausedHandler) {
    window.removeEventListener('vinyl-paused', window._spotifyPausedHandler);
  }
  window._spotifyPausedHandler = () => {
    audio.pause();
  };
  window.addEventListener('vinyl-paused', window._spotifyPausedHandler);

  // Build Playlist
  playlist.innerHTML = '';
  songs.forEach((s, i) => {
    const pill = document.createElement('div');
    pill.className = 'song-pill' + (i === 0 ? ' active' : '');
    pill.innerHTML = `<span class="pill-dot"></span><span class="pill-text">${s.title}</span>`;
    pill.addEventListener('click', () => {
      if (currentIdx === i) return;
      const wasPlaying = isPlaying;
      audio.pause();
      elapsed = 0;
      currentIdx = i;
      loadTrack(i);
      if (wasPlaying) {
        setTimeout(() => {
          if (window.GlobalAudio) window.GlobalAudio.play(audio, playBtn, 'vinyl');
          else audio.play().catch(err => console.log(err));
        }, 50);
      }
    });
    playlist.appendChild(pill);
  });

  // Initial load
  loadTrack(0);
  updateVolumeUI();
};;

const Warranty = () => `
  <section class="warranty-section py-medium">
    <div class="container">
      <div class="warranty-card-premium reveal">
        <div class="warranty-icon-circle">
          <i data-lucide="shield-check"></i>
        </div>
        <div class="warranty-text-content">
          <h3>Garantia de devolução em 7 dias</h3>
          <p>Se sua música não tocar seu coração ou não captar sua história perfeitamente, é só nos avisar. Ajustamos a letra ou reembolsamos 100% do seu dinheiro. Sem riscos.</p>
        </div>
      </div>
    </div>
  </section>
`

const HowItWorks = () => `
  <section id="how" class="how-it-works py-large bg-soft">
    <div class="container">
      <div class="text-center mb-4">
        <div class="tag-badge reveal"><i data-lucide="info"></i> SIMPLES & MÁGICO</div>
        <h2 class="section-title-serif reveal">Em apenas 3 passos,<br>sua história vira música.</h2>
        <p class="section-subtitle reveal" data-delay="1">Simples, emocionante e totalmente personalizada.</p>
      </div>

      <div class="process-grid reveal" data-delay="2">
        <div class="process-step">
          <div class="step-num">1</div>
          <div class="step-icon"><i data-lucide="file-edit"></i></div>
          <h4>Compartilhe sua história</h4>
          <p>Conte os momentos, memórias e sentimentos mais importantes dessa pessoa especial.</p>
        </div>
        <div class="process-step">
          <div class="step-num">2</div>
          <div class="step-icon"><i data-lucide="mic"></i></div>
          <h4>Nós criamos sua música</h4>
          <p>Transformamos seus momentos mais preciosos em poesia e melodia. Uma música feita com alma, carinho e muita verdade para quem ilumina a sua vida.</p>
        </div>
        <div class="process-step">
          <div class="step-num">3</div>
          <div class="step-icon"><i data-lucide="heart"></i></div>
          <h4>Surpreenda quem você ama</h4>
          <p>O link chega no seu WhatsApp. A nossa única dica é: prepare a câmera. O primeiro play costuma arrancar lágrimas inesquecíveis.</p>
        </div>
      </div>
      
      <div class="text-center mt-4 reveal" data-delay="4">
        <a href="#create" class="btn-primary-new btn-magnetic btn-pulse">
          <i data-lucide="sparkles"></i>
          QUERO COMEÇAR MINHA HISTÓRIA
        </a>
      </div>
    </div>
  </section>
`


const Security = () => `
  <section class="security py-medium bg-soft">
    <div class="container text-center">
      <p class="subtitle-small">Pagamento 100% seguro via Mercado Pago e Stripe</p>
      <div class="security-logos mt-2">
        <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" alt="Mercado Pago" class="grayscale h-30">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" class="grayscale h-30">
      </div>
    </div>
  </section>
`

const FAQ = () => `
  <section id="faq" class="faq py-large">
    <div class="container">
      <h2 class="text-center section-title-serif">Perguntas frequentes</h2>
      <div class="faq-list mt-4">
        ${[
          { q: 'Como recebo minha música?', a: 'Você recebe um link exclusivo pelos contatos cadastrados (whatsApp e e-mail) com sua música em alta qualidade (MP3/WAV), pronta para compartilhar.' },
          { q: 'Quanto tempo demora a produção?', a: 'Depende da escolha do plano:<ul style="margin-top: 8px; margin-left: 20px; list-style-type: disc;"><li style="margin-bottom: 4px;"><strong>Especial</strong>: 7 dias</li><li style="margin-bottom: 4px;"><strong>Memorável</strong>: 72h</li><li style="margin-bottom: 4px;"><strong>Inesquecível</strong>: 24h</li></ul>' },

          { q: 'Posso pedir alterações?', a: 'Fazemos até duas alterações caso necessário.' },
          { q: 'Qual a garantia de que vou receber minha música?', a: 'Somos uma empresa séria e temos um compromisso simples: emocionar de verdade. Se a música não ficou próximo ao que você imaginou, nós refazemos. E, se ainda assim suas expectativas não foram atendidas, devolvemos 100% do seu dinheiro em até 7 dias após a entrega.' }
        ].map(item => `
          <div class="faq-item">
            <div class="faq-question">
              <h4>${item.q}</h4>
              <i data-lucide="plus" class="plus"></i>
            </div>
            <div class="faq-answer">
              <p>${item.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="text-center mt-4 mb-4">
        <a href="https://wa.me/5532991931938" class="btn-primary-new btn-magnetic">
          <i data-lucide="message-circle"></i> Falar com especialista agora
        </a>
      </div>
    </div>
  </section>
`


const FloatingButtons = () => `
  <div class="floating-actions">
    <button class="float-btn scroll-top" id="scrollTop">
      <i data-lucide="chevron-up"></i>
    </button>
  </div>
`

const FooterCTA = () => `
  <section class="footer-cta py-large bg-dark text-white">
    <div class="container text-center">
      <h2 class="text-white section-title-serif reveal">Uma canção que só <em>existe pra vocês.</em></h2>
      <h3 class="text-orange section-title-serif reveal" data-delay="1">Feita do zero, com a sua história.</h3>
      <p class="mt-2 text-muted reveal" data-delay="2">A maior plataforma de homenagens musicais do Brasil.</p>
      <div class="mt-4 reveal" data-delay="3">
        <a href="#create" class="btn-primary-new btn-magnetic">Começar agora</a>
      </div>
    </div>
  </section>
`

const Footer = () => `
  <footer class="footer bg-black text-white">
    <div class="container footer-content py-large">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo">${Logo('white', '#000000')}</a>
          <p class="mt-2">Transformando histórias em canções desde 2022.</p>
        </div>
        <div class="footer-links">
          <h4>Institucional</h4>
          <a href="#how">Como Funciona</a>
          <a href="#styles">Estilos Musicais</a>
          <a href="#reviews">Depoimentos</a>
        </div>
        <div class="footer-links">
          <h4>Ajuda</h4>
          <a href="#faq">Dúvidas Frequentes</a>
          <a href="#" id="btn-terms">Termos de Uso</a>
          <a href="#" id="btn-privacy">Privacidade</a>
        </div>
        <div class="footer-contact">
          <h4>Contato</h4>
          <p><a href="mailto:audiogiftbrasil@gmail.com" style="color: #ccc; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#FC7301'" onmouseout="this.style.color='#ccc'">audiogiftbrasil@gmail.com</a></p>
          <div class="footer-social-buttons">
            <a href="https://www.instagram.com/audiogiftbrasil/" target="_blank" class="btn-social-ig footer-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</a>
            <a href="https://open.spotify.com/artist/24rv68FArmAuCtAhHjoIEy" target="_blank" class="btn-social-sp footer-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>Spotify</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center py-medium">
      <p>&copy; 2026 AUDIOGIFT. Todos os direitos reservados.</p>
    </div>
  </footer>
`


const Quiz = (defaultPlan = 'memoravel') => {
  window.location.hash = `#quiz?plan=${defaultPlan}`;
};
window.Quiz = Quiz;

const QuizEngine = (defaultPlan = 'memoravel') => {
  
  // Injetar estilos dinâmicos para contornar qualquer problema de cache do arquivo CSS externo
  let styleEl = document.getElementById('quiz-dynamic-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'quiz-dynamic-styles';
    styleEl.innerHTML = `
      .quiz-overlay {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: rgba(15, 15, 15, 0.45) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        z-index: 2000 !important;
        display: none !important;
        overflow-y: auto !important;
        opacity: 0 !important;
        transition: opacity 0.3s ease !important;
      }
      .quiz-overlay.active {
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        opacity: 1 !important;
      }
      .quiz-modal-inner {
        max-width: 720px !important;
        width: 90% !important;
        margin: 40px auto !important;
        padding: 32px 40px 40px !important;
        background: #ffffff !important;
        border-radius: 24px !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.03) !important;
        display: flex !important;
        flex-direction: column !important;
        min-height: auto !important;
      }
      .quiz-body {
        flex: none !important;
        text-align: center !important;
        max-width: 600px !important;
        margin: 0 auto !important;
        width: 100% !important;
      }
      @media (max-width: 768px) {
        .quiz-overlay {
          background: #ffffff !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
        .quiz-overlay.active {
          display: block !important;
        }
        .quiz-modal-inner {
          padding: 20px 20px 28px !important;
          margin: 0 auto !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          background: #ffffff !important;
          min-height: 100vh; min-height: 100dvh; min-height: 100dvh !important;
          width: 100% !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  const steps = [
    {
      title: 'Vamos começar pelo básico',
      subtitle: 'Conte-nos sobre a pessoa especial na sua vida',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Para quem é essa canção? *</label>
          <div class="quiz-options">
            ${['Marido', 'Esposa', 'Namorado', 'Namorada', 'Filhos', 'Pai', 'Mãe', 'Irmão(ã)', 'Amigo(a)', 'Para mim', 'Grupo', 'Outro'].map(opt => `
              <button class="pill-option" data-value="${opt}">${opt}</button>
            `).join('')}
          </div>
          <label class="quiz-label mt-3">Qual a ocasião? *</label>
          <div class="quiz-options">
            ${['Aniversário', 'Dia dos Namorados', 'Casamento / Noivado', 'Bodas de Casamento', 'Dia das Mães', 'Dia dos Pais', 'Chá Revelação', 'Pedido de Desculpas', 'Amizade', 'Homenagem Póstuma', 'Formatura', 'Sem data específica'].map(opt => `
              <button class="pill-option" data-value="${opt}">${opt}</button>
            `).join('')}
          </div>
          <div class="quiz-input-group mt-3">
            <label class="quiz-label">Nome do homenageado(a) que aparecerá na música *</label>
            <input type="text" placeholder="Digite o primeiro nome" class="quiz-input" id="quizName">
            <p class="quiz-hint">Dica: use a acentuação correta para garantir a pronúncia (ex: Thaís, Jéssica, Luísa).</p>
          </div>
          <label class="quiz-label mt-3">Você gostaria de ter o nome dele(a) falado na música? *</label>
          <div class="quiz-options speak-name-options">
            <button class="pill-option" data-value="Sim">Sim</button>
            <button class="pill-option" data-value="Não">Não</button>
            <button class="pill-option" data-value="Tanto faz">Tanto faz</button>
          </div>
        </div>
      `
    },
    {
      title: 'Escolha o Gênero',
      subtitle: 'Selecione o estilo que mais combina com a sua história',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Gênero Preferido *</label>
          <div class="quiz-options">
            ${['Pop Acústico', 'Soul Romântico', 'Violão e Voz', 'Pop Rock', 'Forró', 'Gospel', 'MPB', 'Música Eletrônica', 'Samba', 'Pagode', 'Pop', 'Rap/Hip Hop', 'Reggae', 'Rock', 'Sertanejo'].map(opt => `
              <button class="pill-option" data-value="${opt}">${opt}</button>
            `).join('')}
          </div>
          <label class="quiz-label mt-3">Gênero da Voz</label>
          <div class="quiz-options">
            <button class="pill-option" data-value="Voz Feminina">Voz Feminina</button>
            <button class="pill-option" data-value="Voz Masculina">Voz Masculina</button>
          </div>
          <label class="quiz-label mt-3">Como essa música deve fazer ele(a) se sentir? (Vibe/Clima) - Selecione até 2 *</label>
          <div class="quiz-options vibe-options">
            ${['Sincero', 'Romântico', 'Cômico', 'Reflexivo', 'Motivacional', 'Alegre'].map(opt => `
              <button class="pill-option multi-pill" data-value="${opt}">${opt}</button>
            `).join('')}
          </div>
        </div>
      `
    },
    {
      title: 'Como ele(a) faz você se sentir?',
      subtitle: 'Descreva tudo que essa pessoa significa para você e o porquê merece essa linda homenagem',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Como ele(a) faz você se sentir? *</label>
          <textarea class="quiz-textarea" placeholder="Ele(a) é paciente, sábio(a), engraçado(a), encorajador(a), piedoso(a)? O que faz dessa pessoa alguém incrível para você? O que você sente quando pensa nele(a) ou está com ele(a)? Por que ele(a) significa tanto para você?"></textarea>
          <div class="text-right"><span class="word-count">0 palavras</span></div>
        </div>
      `
    },
    {
      title: 'A história que merece virar música',
      subtitle: 'Conte para nós como se conheceram, as viagens inesquecíveis ou aquele detalhe que só vocês dois sabem.',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Momentos especiais juntos *</label>
          <textarea class="quiz-textarea" placeholder="Quais memórias você sempre volta? Um momento que vocês sempre riem juntos? Algo que passaram juntos que os aproximou?"></textarea>
          <div class="text-right"><span class="word-count">0 palavras</span></div>
        </div>
      `
    },
    {
      title: 'A sua declaração final (opcional)',
      subtitle: 'Escreva aquela frase importante e que não pode ficar de fora dessa música.',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Mensagem especial (opcional)</label>
          <textarea class="quiz-textarea" placeholder="O que você quer que essa pessoa saiba, que nunca disse o suficiente? Pelo que quer agradecer? Qual é aquela coisa do fundo do coração que quer dizer?"></textarea>
          <div class="text-right"><span class="word-count">0 palavras</span></div>
          
          <label class="quiz-label mt-3">Caso seja chá revelação (opcional)</label>
          <textarea class="quiz-textarea" placeholder="Se a ocasião for chá revelação escreva qual será o(s) nome(s) do bebê. Ex: Se for menina Maria, menino João"></textarea>
        </div>
      `
    },
    {
      title: 'Escolha seu plano',
      subtitle: 'Selecione seu presente ideal',
      content: `
        <div class="quiz-step-content">
          <div class="quiz-pricing-options">
            
            <div class="pricing-card-horizontal" data-plan="especial">
              <div class="plan-icon-box"><i data-lucide="clock"></i></div>
              <div class="plan-info">
                <h3>Audio Gift Especial • <span>entrega em 7 dias</span></h3>
                <p>Ideal para quem pode esperar um pouco mais</p>
              </div>
              <div class="plan-price">R$ 89,90</div>
              <div class="plan-radio"></div>
            </div>

            <div class="pricing-card-horizontal active popular" data-plan="memoravel">
              <div class="plan-badge-top">MAIS POPULAR</div>
              <div class="plan-icon-box"><i data-lucide="rocket"></i></div>
              <div class="plan-info">
                <h3>Audio Gift Memorável • <span>entrega em até 72h</span></h3>
                <p>Letra em PDF + Playback instrumental</p>
              </div>
              <div class="plan-price">R$ 149,90</div>
              <div class="plan-radio"><i data-lucide="check"></i></div>
            </div>

            <div class="pricing-card-horizontal vip" data-plan="inesquecivel">
              <div class="plan-badge-top-vip">★ VIP</div>
              <div class="plan-icon-box"><i data-lucide="zap"></i></div>
              <div class="plan-info">
                <h3>Audio Gift Inesquecível • <span>entrega em até 24h</span></h3>
                <p>Prioridade Máxima + Letra em PDF + Playback instrumental + sua música nos streamings (Spotify, Deezer e outros)</p>
              </div>
              <div class="plan-price">R$ 199,90</div>
              <div class="plan-radio"></div>
            </div>

          </div>

          <div class="quiz-satisfaction-box">
            <div class="satisfaction-icon"><i data-lucide="check-circle-2"></i></div>
            <div class="satisfaction-text">
              <h4>Garantia de Satisfação</h4>
              <p>Não gostou? Devolvemos 100% do seu dinheiro em até 7 dias.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: 'Quase lá!',
      subtitle: 'Revise suas escolhas e nos informe onde enviar a sua música.',
      content: `
        <div class="quiz-step-content">
          <div class="quiz-review-section">
            <div class="review-item">
              <div class="review-info">
                <i data-lucide="music"></i>
                <div>
                  <strong>Plano Selecionado</strong>
                  <p>Memorável • R$ 149,90</p>
                </div>
              </div>
              <button class="btn-review-edit" data-target="5">Mudar</button>
            </div>
            
            <div class="review-item mt-2">
              <div class="review-info">
                <i data-lucide="mic"></i>
                <div>
                  <strong>Gênero Musical</strong>
                  <p>Pop Acústico (Feminino)</p>
                </div>
              </div>
              <button class="btn-review-edit" data-target="1">Mudar</button>
            </div>

            <div class="review-item mt-2">
              <div class="review-info">
                <i data-lucide="file-text"></i>
                <div>
                  <strong>Suas Respostas</strong>
                  <p>História e detalhes preenchidos</p>
                </div>
              </div>
              <button class="btn-review-edit" data-target="0">Revisar</button>
            </div>
          </div>

          <div class="quiz-capture-section mt-4">
            <label class="quiz-label">Seu E-mail *</label>
            <input type="email" placeholder="Para receber a música e o comprovante" class="quiz-input">
            
            <label class="quiz-label mt-3">Seu WhatsApp *</label>
            <input type="tel" placeholder="(11) 99999-9999" class="quiz-input">
          </div>
        </div>
      `
    }
  ];

  let currentStep = 0;

    const answers = {
    forWho: '',
    occasion: '',
    name: '',
    speakName: '',
    genre: '',
    voice: '',
    vibes: [],
    feelings: '',
    story: '',
    message: '',
    babyName: '',
    plan: defaultPlan,
    customerName: '',
    email: '',
    phone: '',
    extras: []
  };

  const checkStepValidity = () => {
    if (currentStep === 0) {
      return !!(answers.forWho && answers.occasion && answers.name && answers.name.trim().length >= 1 && answers.speakName);
    } else if (currentStep === 1) {
      return !!(answers.genre && answers.vibes && answers.vibes.length >= 1 && answers.vibes.length <= 2);
    } else if (currentStep === 2) {
      return answers.feelings && answers.feelings.trim().length >= 5;
    } else if (currentStep === 3) {
      return answers.story && answers.story.trim().length >= 5;
    } else if (currentStep === 4) {
      return true;
    } else if (currentStep === 5) {
      return !!answers.plan;
    } else if (currentStep === 6) {
      const isWhatsappChecked = document.getElementById('whatsapp-followup') 
        ? document.getElementById('whatsapp-followup').checked 
        : true;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email || '');
      const digitsOnly = (answers.phone || '').replace(/\D/g, '');
      const isPhoneValid = !isWhatsappChecked || (digitsOnly.length >= 10);
      const isNameValid = !!(answers.customerName && answers.customerName.trim().length >= 2);
      return isEmailValid && isPhoneValid && isNameValid;
    }
    return true;
  };

  const updateNextButtonState = () => {
    const nextBtn = document.querySelector('.btn-quiz-next');
    if (!nextBtn) return;
    const isValid = checkStepValidity();
    if (isValid) {
      nextBtn.classList.remove('disabled');
    } else {
      nextBtn.classList.add('disabled');
    }
  };

  const saveCurrentStepData = () => {
    if (currentStep === 0) {
      const optionGroups = document.querySelectorAll('.quiz-step-content .quiz-options');
      const activeForWho = optionGroups[0] ? optionGroups[0].querySelector('.active') : null;
      if (activeForWho) answers.forWho = activeForWho.dataset.value;

      const activeOccasion = optionGroups[1] ? optionGroups[1].querySelector('.active') : null;
      if (activeOccasion) answers.occasion = activeOccasion.dataset.value;

      const inputName = document.getElementById('quizName');
      if (inputName) answers.name = inputName.value.trim();

      const activeSpeakName = optionGroups[2] ? optionGroups[2].querySelector('.active') : null;
      if (activeSpeakName) answers.speakName = activeSpeakName.dataset.value;
    } else if (currentStep === 1) {
      const optionGroups = document.querySelectorAll('.quiz-step-content .quiz-options');
      const activeGenre = optionGroups[0] ? optionGroups[0].querySelector('.active') : null;
      if (activeGenre) answers.genre = activeGenre.dataset.value;

      const activeVoice = optionGroups[1] ? optionGroups[1].querySelector('.active') : null;
      if (activeVoice) answers.voice = activeVoice.dataset.value;

      const activeVibes = [];
      const vibeGroup = document.querySelector('.vibe-options');
      if (vibeGroup) {
        vibeGroup.querySelectorAll('.pill-option.active').forEach(btn => {
          activeVibes.push(btn.dataset.value);
        });
      }
      answers.vibes = activeVibes;
    } else if (currentStep === 2) {
      const ta = document.querySelector('.quiz-textarea');
      if (ta) answers.feelings = ta.value.trim();
    } else if (currentStep === 3) {
      const ta = document.querySelector('.quiz-textarea');
      if (ta) answers.story = ta.value.trim();
    } else if (currentStep === 4) {
      const tas = document.querySelectorAll('.quiz-textarea');
      if (tas[0]) answers.message = tas[0].value.trim();
      if (tas[1]) answers.babyName = tas[1].value.trim();
    } else if (currentStep === 5) {
      const activePlan = document.querySelector('.pricing-card-horizontal.active');
      if (activePlan) answers.plan = activePlan.dataset.plan;
    } else if (currentStep === 6) {
      const nameInput = document.querySelector('.checkout-name-input');
      const emailInput = document.querySelector('.checkout-email-input');
      const phoneInput = document.querySelector('.checkout-phone-input');
      if (nameInput) answers.customerName = nameInput.value.trim();
      if (emailInput) answers.email = emailInput.value.trim().toLowerCase();
      if (phoneInput) answers.phone = phoneInput.value;
    }
  };

  const restoreCurrentStepData = () => {
    if (currentStep === 0) {
      if (answers.forWho) {
        const pill = document.querySelector(`.pill-option[data-value="${answers.forWho}"]`);
        if (pill) pill.classList.add('active');
      }
      if (answers.occasion) {
        const pill = document.querySelector(`.pill-option[data-value="${answers.occasion}"]`);
        if (pill) pill.classList.add('active');
      }
      if (answers.name) {
        const inputName = document.getElementById('quizName');
        if (inputName) inputName.value = answers.name;
      }
      if (answers.speakName) {
        const pill = document.querySelector(`.speak-name-options .pill-option[data-value="${answers.speakName}"]`);
        if (pill) pill.classList.add('active');
      }
    } else if (currentStep === 1) {
      if (answers.genre) {
        const pill = document.querySelector(`.pill-option[data-value="${answers.genre}"]`);
        if (pill) pill.classList.add('active');
      }
      if (answers.voice) {
        const pill = document.querySelector(`.pill-option[data-value="${answers.voice}"]`);
        if (pill) pill.classList.add('active');
      }
      if (answers.vibes && answers.vibes.length > 0) {
        answers.vibes.forEach(val => {
          const pill = document.querySelector(`.vibe-options .pill-option[data-value="${val}"]`);
          if (pill) pill.classList.add('active');
        });
      }
    } else if (currentStep === 2) {
      const ta = document.querySelector('.quiz-textarea');
      if (ta) {
        if (answers.feelings) ta.value = answers.feelings;
        ta.dispatchEvent(new Event('input'));
      }
    } else if (currentStep === 3) {
      const ta = document.querySelector('.quiz-textarea');
      if (ta) {
        if (answers.story) ta.value = answers.story;
        ta.dispatchEvent(new Event('input'));
      }
    } else if (currentStep === 4) {
      const tas = document.querySelectorAll('.quiz-textarea');
      if (tas[0]) {
        if (answers.message) tas[0].value = answers.message;
        tas[0].dispatchEvent(new Event('input'));
      }
      if (tas[1]) {
        if (answers.babyName) tas[1].value = answers.babyName;
      }
    } else if (currentStep === 5) {
      if (answers.plan) {
        document.querySelectorAll('.pricing-card-horizontal').forEach(c => {
          c.classList.remove('active');
          const radio = c.querySelector('.plan-radio');
          if (radio) radio.innerHTML = '';
        });
        const card = document.querySelector(`.pricing-card-horizontal[data-plan="${answers.plan}"]`);
        if (card) {
          card.classList.add('active');
          card.querySelector('.plan-radio').innerHTML = '<i data-lucide="check"></i>';
          lucide.createIcons();
        }
      }
    } else if (currentStep === 6) {
      const nameInput = document.querySelector('.checkout-name-input');
      const emailInput = document.querySelector('.checkout-email-input');
      const phoneInput = document.querySelector('.checkout-phone-input');
      if (nameInput && answers.customerName) nameInput.value = answers.customerName;
      if (emailInput && answers.email) emailInput.value = answers.email;
      if (phoneInput && answers.phone) phoneInput.value = answers.phone;

      const planNames = {
        especial: { name: 'Audio Gift Especial • entrega em 7 dias', price: 'R$ 89,90' },
        memoravel: { name: 'Audio Gift Memorável • entrega em até 72h', price: 'R$ 149,90' },
        inesquecivel: { name: 'Audio Gift Inesquecível • entrega em até 24h', price: 'R$ 199,90' }
      };
      const planObj = planNames[answers.plan] || planNames['memoravel'];
      const planTextEl = document.querySelector('.review-item:nth-of-type(1) p');
      if (planTextEl) planTextEl.textContent = `${planObj.name} • ${planObj.price}`;

      const genreTextEl = document.querySelector('.review-item:nth-of-type(2) p');
      if (genreTextEl) {
        const genre = answers.genre || 'Pop Acústico';
        const voice = answers.voice || 'Voz Feminina';
        genreTextEl.textContent = `${genre} (${voice})`;
      }
    }
  };

  const renderCheckoutStep = (progress) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const planNames = {
      especial: { name: 'Audio Gift Especial', nameFull: 'Audio Gift Especial • entrega em 7 dias', price: 89.90, priceStr: 'R$ 89,90', delivery: '7 dias', deliveryHours: '7 dias', icon: 'clock' },
      memoravel: { name: 'Audio Gift Memorável', nameFull: 'Audio Gift Memorável • entrega em até 72h', price: 149.90, priceStr: 'R$ 149,90', delivery: 'até 72h', deliveryHours: '72 horas', icon: 'rocket' },
      inesquecivel: { name: 'Audio Gift Inesquecível', nameFull: 'Audio Gift Inesquecível • entrega em até 24h', price: 199.90, priceStr: 'R$ 199,90', delivery: 'até 24h', deliveryHours: '24 horas', icon: 'zap' }
    };
    
    const planObj = planNames[answers.plan] || planNames['memoravel'];
    const totalPriceStr = planObj.priceStr;

    // Track InitiateCheckout in Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: planObj.price,
        currency: 'BRL',
        content_name: planObj.name,
        content_category: 'Música Personalizada'
      });
    }

    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-modal-inner checkout-step-inner">
        <div class="quiz-header checkout-header">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="quiz-top-info">
            <span>Passo 7 de 7</span>
            <span>100% Completo</span>
          </div>
        </div>

        <div class="checkout-body reveal">
          <h2 class="checkout-title">Você Está Quase Lá!</h2>
          <p class="checkout-subtitle">A um passo de presentear <strong>${answers.name || 'quem você ama'}</strong> com uma canção que será guardada para sempre</p>
          
          <div class="checkout-badges-row">
            <div class="checkout-badge">
              <i data-lucide="clock"></i>
              <span>Data prevista de entrega: <strong>${planObj.delivery}</strong></span>
            </div>
            <div class="checkout-badge">
              <i data-lucide="music-2"></i>
              <span>Gênero: <strong>${answers.genre || 'Pop Acústico'} (${answers.voice || 'Voz Feminina'})</strong></span>
            </div>
          </div>

          <div class="checkout-card main-capture-card">
            <div class="checkout-input-group">
              <label class="quiz-label" style="margin-bottom:8px; font-weight:800; font-size: 0.95rem;">Seu Nome Completo * <span class="label-required">Obrigatório</span></label>
              <input type="text" placeholder="Como quer ser chamado(a)" class="quiz-input checkout-name-input" value="${answers.customerName || ''}">
              <span class="name-error" style="color: #ff4d6d; font-size: 0.8rem; display: none; margin-top: 4px; font-weight: 600;">Por favor, digite seu nome.</span>
            </div>

            <div class="checkout-input-group mt-2">
              <label class="quiz-label" style="margin-bottom:8px; font-weight:800; font-size: 0.95rem;">Insira o seu melhor endereço de email * <span class="label-required">Obrigatório</span></label>
              <input type="email" placeholder="voce@email.com" class="quiz-input checkout-email-input" value="${answers.email || ''}">
              <span class="email-error" style="color: #ff4d6d; font-size: 0.8rem; display: none; margin-top: 4px; font-weight: 600;">E-mail inválido. Exemplo: seu-nome@provedor.com</span>
            </div>

            <div class="checkout-input-group mt-2">
              <label class="quiz-label" style="margin-bottom:8px; font-weight:800; font-size: 0.95rem;">WhatsApp para contato <span class="label-optional">(opcional, porém recomendado)</span></label>
              <div class="checkout-phone-input-wrapper">
                <div class="phone-prefix-select">
                  <span class="flag-icon">🇧🇷</span>
                  <span class="prefix-value">+55</span>
                </div>
                <input type="tel" placeholder="(11) 99999-9999" class="quiz-input checkout-phone-input" value="${answers.phone || ''}">
              </div>
              <span class="phone-error" style="color: #ff4d6d; font-size: 0.8rem; display: none; margin-top: 4px; font-weight: 600;">Digite um número válido com DDD (ex: 11999999999)</span>
            </div>

            <div class="checkout-checkbox-group mt-3">
              <label class="checkout-checkbox-label">
                <input type="checkbox" id="whatsapp-followup" checked>
                <span class="custom-checkbox"></span>
                <span class="checkbox-text">Quero receber o link de acompanhamento das músicas pelo WhatsApp</span>
              </label>
            </div>

            <button class="btn-checkout-cta mt-4" id="btn-checkout-top">
              <i data-lucide="credit-card"></i>
              Continuar para Pagamento - ${totalPriceStr}
            </button>

            <div class="checkout-guarantee-badge">
              <i data-lucide="shield-check" class="text-green"></i>
              <span>Garantia de 7 Dias</span>
            </div>
          </div>

          <h3 class="checkout-section-title mt-4">🎵 Seu Pedido de Canção</h3>
          <div class="checkout-options-list">
            
            <div class="checkout-option-item" data-edit-step="5">
              <div class="option-left">
                <div class="option-icon-box bg-light-green text-green">
                  <i data-lucide="${planObj.icon}"></i>
                </div>
                <div class="option-details">
                  <h4>Mudar plano</h4>
                  <p>Atual: Plano ${planObj.name}. Toque para mudar</p>
                </div>
              </div>
              <div class="option-right">
                <span class="option-value">${planObj.priceStr}</span>
                <i data-lucide="chevron-right"></i>
              </div>
            </div>

            <div class="checkout-option-item" data-edit-step="1">
              <div class="option-left">
                <div class="option-icon-box bg-light-blue text-blue">
                  <i data-lucide="music"></i>
                </div>
                <div class="option-details">
                  <h4>Mudar gênero musical</h4>
                  <p>Toque para mudar e ouvir exemplos</p>
                </div>
              </div>
              <div class="option-right">
                <span class="option-value">${answers.genre || 'Pop Acústico'}</span>
                <i data-lucide="chevron-right"></i>
              </div>
            </div>

            <div class="checkout-option-item" id="btn-edit-story">
              <div class="option-left">
                <div class="option-icon-box bg-light-purple text-purple">
                  <i data-lucide="edit-3"></i>
                </div>
                <div class="option-details">
                  <h4>Revisar ou Editar Respostas</h4>
                  <p>Edite história, memórias e mensagem sem perder o pedido</p>
                </div>
              </div>
              <div class="option-right">
                <i data-lucide="chevron-right"></i>
              </div>
            </div>

          </div>

          <div class="checkout-satisfaction-card mt-4">
            <div class="satisfaction-header">
              <i data-lucide="check-circle-2" class="text-green"></i>
              <h3>100% Garantia de Satisfação</h3>
            </div>
            <ul class="satisfaction-bullets">
              <li>
                <span class="bullet-dot"></span>
                <div>
                  <strong>Não satisfeito? Reembolso total</strong>
                  <p>Sem perguntas, sem burocracia</p>
                </div>
              </li>
              <li>
                <span class="bullet-dot"></span>
                <div>
                  <strong>Garantia de 7 dias</strong>
                  <p>Tempo de sobra para ouvir e decidir</p>
                </div>
              </li>
              <li>
                <span class="bullet-dot"></span>
                <div>
                  <strong>Compra sem risco</strong>
                  <p>Sua satisfação é nossa prioridade</p>
                </div>
              </li>
            </ul>
          </div>

          <button class="btn-checkout-cta mt-4" id="btn-checkout-bottom">
            <i data-lucide="credit-card"></i>
            Continuar para Pagamento - ${totalPriceStr}
          </button>
          <p class="checkout-prompt-note mt-2">Pronto para criar algo especial para <strong>${answers.name || 'quem você ama'}</strong>?</p>

          <div class="checkout-details-card mt-4">
            <h3>🎁 O Que Você Recebe</h3>
            <ul class="details-list">
              <li>
                <span class="bullet-dot"></span>
                <div>
                  <strong>Canção Qualidade de Rádio</strong>
                  <p>Canção profissional, pronta para compartilhar</p>
                </div>
              </li>
              <li>
                <span class="bullet-dot"></span>
                <div>
                  <strong>Letra Personalizada</strong>
                  <p>Escrita especialmente para ${answers.name || 'quem você ama'}</p>
                </div>
              </li>
              <li>
                <span class="bullet-dot"></span>
                <div>
                  <strong>Entrega em até ${planObj.delivery}</strong>
                  <p>Perfeito para presentes de última hora</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="checkout-details-card mt-4">
            <h3>⭐ Por Que Escolher AudioGift?</h3>
            <ul class="why-choose-list">
              <li><i data-lucide="check"></i> <span>+3.000 clientes satisfeitos</span></li>
              <li><i data-lucide="check"></i> <span>100% garantia de satisfação</span></li>
              <li><i data-lucide="check"></i> <span>Pagamento seguro</span></li>
              <li><i data-lucide="check"></i> <span>Entregue em até ${planObj.deliveryHours}</span></li>
              <li><i data-lucide="check"></i> <span>Suporte exclusivo via WhatsApp: +55 (32) 99193-1938</span></li>
            </ul>
          </div>

        </div>

        <div class="story-edit-overlay" id="story-edit-overlay">
          <div class="story-edit-modal">
            <div class="story-edit-header">
              <h2 class="story-edit-title">Edite a história da canção</h2>
              <button class="story-edit-close" id="story-edit-close">×</button>
            </div>
            <div class="story-edit-subheader">
              <span class="story-edit-tag">Para: ${answers.name || 'sua homenagem'}</span>
              <p class="story-edit-hint">Pode escrever o quanto quiser (sem limite). Toque em <em>Salvar</em> quando terminar.</p>
            </div>
            <div class="story-edit-body">
              <div class="story-edit-section">
                <div class="story-section-header">O que faz essa pessoa especial?</div>
                <label class="story-section-label">As belas qualidades dele(a)</label>
                <textarea class="story-edit-textarea" id="edit-feelings" placeholder="Ele(a) é paciente, sábio(a), engraçado(a)...">${answers.feelings || ''}</textarea>
              </div>
              <div class="story-edit-section">
                <div class="story-section-header">Histórias, memórias e datas favoritas</div>
                <label class="story-section-label">Momentos especiais juntos</label>
                <textarea class="story-edit-textarea" id="edit-story" placeholder="Quais memórias você sempre volta?">${answers.story || ''}</textarea>
              </div>
              <div class="story-edit-section">
                <div class="story-section-header">Uma mensagem do coração</div>
                <label class="story-section-label">Mensagem especial (opcional)</label>
                <textarea class="story-edit-textarea" id="edit-message" placeholder="O que você quer que essa pessoa saiba...">${answers.message || ''}</textarea>
              </div>
            </div>
            <div class="story-edit-footer">
              <button class="btn-story-back" id="btn-story-back">Voltar</button>
              <button class="btn-story-save" id="btn-story-save">Salvar</button>
            </div>
          </div>
        </div>
        
        <p class="quiz-legal">Ao continuar, você concorda com nossos <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a>.</p>
        <p class="quiz-copyright">AUDIOGIFT.COM.BR</p>
      </div>
    `;

    lucide.createIcons();

    // Testimonials logic removed from checkout step

    const nameInput = document.querySelector('.checkout-name-input');
    const emailInput = document.querySelector('.checkout-email-input');
    const phoneInput = document.querySelector('.checkout-phone-input');

    const handleInputChanges = () => {
      answers.customerName = nameInput ? nameInput.value.trim() : '';
      answers.email = emailInput ? emailInput.value.trim().toLowerCase() : '';
      const rawPhone = phoneInput ? phoneInput.value : '';
      const digitsOnly = rawPhone.replace(/\D/g, '');
      answers.phone = rawPhone;
      
      const isWhatsappChecked = document.getElementById('whatsapp-followup') 
        ? document.getElementById('whatsapp-followup').checked 
        : true;
        
      const isNameValid = !!(answers.customerName && answers.customerName.length >= 2);
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email);
      const isPhoneValid = !isWhatsappChecked || (digitsOnly.length >= 10);
      const isValid = isEmailValid && isPhoneValid && isNameValid;
      
      // Real-time visual feedback for name
      const nameErr = document.querySelector('.name-error');
      if (nameInput) {
        if (answers.customerName.length > 0 && !isNameValid) {
          nameInput.classList.add('error');
          if (nameErr) nameErr.style.display = 'block';
        } else {
          nameInput.classList.remove('error');
          if (nameErr) nameErr.style.display = 'none';
        }
      }

      // Real-time visual feedback for email
      const emailErr = document.querySelector('.email-error');
      if (emailInput) {
        if (answers.email.length > 0 && !isEmailValid) {
          emailInput.classList.add('error');
          if (emailErr) emailErr.style.display = 'block';
        } else {
          emailInput.classList.remove('error');
          if (emailErr) emailErr.style.display = 'none';
        }
      }

      // Real-time visual feedback for phone
      const phoneErr = document.querySelector('.phone-error');
      if (phoneInput) {
        if (isWhatsappChecked && rawPhone.length > 0 && digitsOnly.length < 10) {
          phoneInput.classList.add('error');
          if (phoneErr) phoneErr.style.display = 'block';
        } else {
          phoneInput.classList.remove('error');
          if (phoneErr) phoneErr.style.display = 'none';
        }
      }
      
      const btns = [
        document.getElementById('btn-checkout-top'),
        document.getElementById('btn-checkout-bottom')
      ];

      btns.forEach(btn => {
        if (!btn) return;
        if (isValid) {
          btn.classList.remove('disabled');
        } else {
          btn.classList.add('disabled');
        }
      });
    };

    if (nameInput) {
      nameInput.oninput = () => {
        handleInputChanges();
      };
    }

    if (emailInput) {
      emailInput.oninput = (e) => {
        e.target.value = e.target.value.trim().toLowerCase();
        handleInputChanges();
      };
    }
    
    if (phoneInput) {
      phoneInput.oninput = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.substring(0, 11); // Limita a 11 dígitos
        
        if (value.length > 2) {
          const ddd = value.substring(0, 2);
          let rest = value.substring(2);
          if (rest.length > 5) {
            rest = rest.substring(0, 5) + '-' + rest.substring(5);
          } else if (rest.length > 4 && value.length <= 10) {
            rest = rest.substring(0, 4) + '-' + rest.substring(4);
          }
          e.target.value = `(${ddd}) ${rest}`;
        } else if (value.length > 0) {
          e.target.value = `(${value}`;
        } else {
          e.target.value = '';
        }
        handleInputChanges();
      };
    }

    const whatsappCheckbox = document.getElementById('whatsapp-followup');
    if (whatsappCheckbox) whatsappCheckbox.onchange = handleInputChanges;

    handleInputChanges();

    // --- Extras Modal Logic ---
    const extrasModal = document.getElementById('extras-modal-overlay');
    if (extrasModal) {
      const btnOpenExtras = document.getElementById('btn-open-extras-modal');
      const btnCloseExtras = document.getElementById('extras-modal-close');
      const btnSaveExtras = document.getElementById('btn-extras-save');
      const btnClearExtras = document.getElementById('btn-clear-extras-modal');

      // Track pending selection separately from committed answers.extras
      let pendingExtras = [...answers.extras];

      const getExtrasTotal = (selectedIds) => {
        return selectedIds.reduce((sum, id) => {
          const extra = EXTRAS_CATALOG.find(e => e.id === id);
          return sum + (extra ? extra.price : 0);
        }, 0);
      };

      const updateModalUI = () => {
        const total = planObj.price + getExtrasTotal(pendingExtras);
        const totalStr = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const totalEl = document.getElementById('extras-modal-total-val');
        if (totalEl) totalEl.textContent = totalStr;
        const saveBtn = document.getElementById('btn-extras-save');
        if (saveBtn) saveBtn.textContent = `Salvar extras \u2022 ${totalStr}`;
        const clearBtn = document.getElementById('btn-extras-clear');
        if (clearBtn) {
          const extrasAmt = getExtrasTotal(pendingExtras);
          clearBtn.textContent = extrasAmt > 0
            ? `Limpar extras \u2022 ${extrasAmt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            : 'Limpar extras';
        }
        document.querySelectorAll('.extras-modal-item').forEach(item => {
          const id = item.dataset.extraId;
          const sel = pendingExtras.includes(id);
          item.classList.toggle('selected', sel);
          const circle = item.querySelector('.extras-radio-circle');
          if (circle) circle.classList.toggle('checked', sel);
        });
      };

      if (btnOpenExtras) {
        btnOpenExtras.onclick = () => {
          pendingExtras = [...answers.extras];
          updateModalUI();
          extrasModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        };
      }

      const closeModal = () => {
        extrasModal.classList.remove('active');
        document.body.style.overflow = '';
      };

      if (btnCloseExtras) btnCloseExtras.onclick = closeModal;

      extrasModal.addEventListener('click', (e) => {
        if (e.target === extrasModal) closeModal();
      });

      document.querySelectorAll('.extras-modal-item').forEach(item => {
        item.onclick = () => {
          const id = item.dataset.extraId;
          if (pendingExtras.includes(id)) {
            pendingExtras = pendingExtras.filter(i => i !== id);
          } else {
            pendingExtras.push(id);
          }
          updateModalUI();
        };
      });

      if (btnSaveExtras) {
        btnSaveExtras.onclick = () => {
          answers.extras = [...pendingExtras];
          closeModal();
          renderCheckoutStep(progress);
        };
      }

      if (btnClearExtras) {
        btnClearExtras.onclick = () => {
          pendingExtras = [];
          updateModalUI();
        };
      }
    }

    // --- data-edit-step: plan / genre navigation ---
    document.querySelectorAll('[data-edit-step]').forEach(item => {
      item.onclick = () => {
        answers.email = emailInput ? emailInput.value.trim() : '';
        answers.phone = phoneInput ? phoneInput.value.trim() : '';
        currentStep = parseInt(item.dataset.editStep);
        renderStep();
      };
    });

    // --- Edit Story Modal ---
    const storyOverlay = document.getElementById('story-edit-overlay');
    const btnEditStory = document.getElementById('btn-edit-story');
    const btnStoryClose = document.getElementById('story-edit-close');
    const btnStoryBack = document.getElementById('btn-story-back');
    const btnStorySave = document.getElementById('btn-story-save');

    const openStoryModal = () => {
      // Sync current values into modal textareas
      const fe = document.getElementById('edit-feelings');
      const st = document.getElementById('edit-story');
      const ms = document.getElementById('edit-message');
      if (fe) fe.value = answers.feelings || '';
      if (st) st.value = answers.story || '';
      if (ms) ms.value = answers.message || '';
      storyOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeStoryModal = (save) => {
      if (save) {
        const fe = document.getElementById('edit-feelings');
        const st = document.getElementById('edit-story');
        const ms = document.getElementById('edit-message');
        if (fe) answers.feelings = fe.value.trim();
        if (st) answers.story   = st.value.trim();
        if (ms) answers.message = ms.value.trim();
      }
      storyOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (btnEditStory) btnEditStory.onclick = openStoryModal;
    if (btnStoryClose) btnStoryClose.onclick = () => closeStoryModal(false);
    if (btnStoryBack)  btnStoryBack.onclick  = () => closeStoryModal(false);
    if (btnStorySave)  btnStorySave.onclick  = () => closeStoryModal(true);

    storyOverlay && storyOverlay.addEventListener('click', (e) => {
      if (e.target === storyOverlay) closeStoryModal(false);
    });

    const triggerCheckoutPayment = async () => { // Forçar hash bust v2
      console.log("AudioGift: Redirecionando para o checkout da Kiwify...");
      const isWhatsappChecked = document.getElementById('whatsapp-followup') 
        ? document.getElementById('whatsapp-followup').checked 
        : true;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email || '');
      const digitsOnly = (answers.phone || '').replace(/\D/g, '');
      const isPhoneValid = !isWhatsappChecked || (digitsOnly.length >= 10);
      const isNameValid = !!(answers.customerName && answers.customerName.trim().length >= 2);

      if (!isNameValid) {
        alert('Por favor, preencha o seu nome completo.');
        return;
      }
      if (!isEmailValid) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
      }
      if (isWhatsappChecked && !isPhoneValid) {
        alert('Por favor, preencha o WhatsApp com DDD para receber o acompanhamento da música.');
        return;
      }
      
      const btnTop = document.getElementById('btn-checkout-top');
      const btnBottom = document.getElementById('btn-checkout-bottom');
      const loadHtml = `<div class="preloader-equalizer" style="height:15px; margin:0;"><span class="eq-bar bar-1"></span><span class="eq-bar bar-2"></span><span class="eq-bar bar-3"></span></div> Processando...`;
      if (btnTop) { btnTop.setAttribute('disabled', 'true'); btnTop.innerHTML = loadHtml; }
      if (btnBottom) { btnBottom.setAttribute('disabled', 'true'); btnBottom.innerHTML = loadHtml; }

      try {
        const orderData = {
          customer_name: answers.customerName,
          customer_email: answers.email,
          customer_phone: answers.phone,
          whatsapp_followup: isWhatsappChecked,
          for_who: answers.forWho,
          occasion: answers.occasion,
          recipient_name: answers.name,
          speak_name: answers.speakName,
          genre: answers.genre,
          voice: answers.voice,
          vibes: answers.vibes.join(', '),
          feelings: answers.feelings,
          story: answers.story,
          message: answers.message,
          baby_name: answers.babyName,
          plan: answers.plan,
          status: 'pendente'
        };

        const createdOrder = await db.createOrder(orderData);

        // Track Lead in Facebook Pixel
        if (window.fbq) {
          const planPrices = {
            especial: 89.90,
            memoravel: 149.90,
            inesquecivel: 199.90
          };
          const price = planPrices[answers.plan] || 149.90;
          window.fbq('track', 'Lead', {
            value: price,
            currency: 'BRL',
            content_name: answers.plan,
            content_category: 'Música Personalizada'
          });
        }
        
        // Remove active class to close overlay quiz if exists
        const overlay = document.getElementById('quiz-overlay');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaura scroll do site principal
        
        // Redireciona para o checkout oficial do Kiwify correspondente ao plano
        const kiwifyLinks = {
          especial: 'https://pay.kiwify.com.br/yZYhb1T',
          memoravel: 'https://pay.kiwify.com.br/1RiFp8q',
          inesquecivel: 'https://pay.kiwify.com.br/VZnGyRD'
        };
        
        let checkoutUrl = kiwifyLinks[answers.plan] || kiwifyLinks['memoravel'];
        
        // Passa o e-mail e telefone do cliente para auto-preenchimento e o ID do pedido no utm_medium
        const params = new URLSearchParams();
        if (answers.customerName) params.append('name', answers.customerName);
        if (answers.email) params.append('email', answers.email);
        if (answers.phone) params.append('phone', answers.phone);
        params.append('utm_source', 'audiogift');
        params.append('utm_medium', createdOrder.id);
        
        window.location.href = `${checkoutUrl}?${params.toString()}`;
      } catch (err) {
        console.error('Erro ao registrar o pedido no banco de dados:', err);
        alert('Erro ao processar o seu pedido. Por favor, tente novamente.');
        if (btnTop) { btnTop.removeAttribute('disabled'); btnTop.innerHTML = `<i data-lucide="credit-card"></i> Continuar para Pagamento`; }
        if (btnBottom) { btnBottom.removeAttribute('disabled'); btnBottom.innerHTML = `<i data-lucide="credit-card"></i> Continuar para Pagamento`; }
        lucide.createIcons();
      }
    };

    const ctaTop = document.getElementById('btn-checkout-top');
    const ctaBottom = document.getElementById('btn-checkout-bottom');

    if (ctaTop) ctaTop.onclick = triggerCheckoutPayment;
    if (ctaBottom) ctaBottom.onclick = triggerCheckoutPayment;

    setTimeout(() => {
      const revealEl = document.querySelector('.checkout-body.reveal');
      if (revealEl) revealEl.classList.add('visible');
    }, 50);
  };

  const renderStep = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const step = steps[currentStep];
    const progress = Math.round(((currentStep + 1) / steps.length) * 100);
    
    if (currentStep === 6) {
      renderCheckoutStep(progress);
      return;
    }

    // Track CustomizeProduct at each quiz step
    if (window.fbq) {
      window.fbq('track', 'CustomizeProduct', {
        content_name: `Quiz - Passo ${currentStep + 1}: ${step.title}`,
        content_category: 'Quiz',
        content_ids: ['quiz_musica_personalizada']
      });
    }
    
    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-modal-inner">
        <div class="quiz-header">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="quiz-top-info">
            <span>Passo ${currentStep + 1} de ${steps.length}</span>
            <span>${progress}% Completo</span>
          </div>
        </div>

        <div class="quiz-body reveal">
          <h2 class="quiz-title">${step.title}</h2>
          <p class="quiz-subtitle">${step.subtitle}</p>
          ${step.content}
        </div>

        <div class="quiz-footer">
          <button class="btn-quiz-back" ${currentStep === 0 ? 'style="visibility:hidden"' : ''}>
            <i data-lucide="arrow-left"></i> Voltar
          </button>
          <button class="btn-quiz-next" ${currentStep === steps.length - 1 ? 'id="btn-checkout"' : ''}>
            ${currentStep === steps.length - 1 ? 'Continuar para pagamento <i data-lucide="credit-card"></i>' : 'Próximo <i data-lucide="arrow-right"></i>'}
          </button>
        </div>
        
        <p class="quiz-legal">Ao continuar, você concorda com nossos <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a>.</p>
        <p class="quiz-copyright">AUDIOGIFT.COM.BR</p>
      </div>
    `;
    lucide.createIcons();
    restoreCurrentStepData();
    attachEvents();
    updateNextButtonState();
  };

  const attachEvents = () => {
    document.querySelectorAll('.pill-option:not(.multi-pill)').forEach(btn => {
      btn.onclick = () => {
        btn.parentElement.querySelectorAll('.pill-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        saveCurrentStepData();
        updateNextButtonState();
      };
    });

    document.querySelectorAll('.vibe-options .pill-option').forEach(btn => {
      btn.onclick = () => {
        const activeCount = btn.parentElement.querySelectorAll('.pill-option.active').length;
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
        } else {
          if (activeCount < 2) {
            btn.classList.add('active');
          } else {
            alert('Por favor, selecione no máximo duas vibes.');
          }
        }
        saveCurrentStepData();
        updateNextButtonState();
      };
    });

    document.querySelectorAll('.pricing-card-horizontal').forEach(card => {
      card.onclick = () => {
        document.querySelectorAll('.pricing-card-horizontal').forEach(c => {
          c.classList.remove('active');
          const radio = c.querySelector('.plan-radio');
          if (radio) radio.innerHTML = '';
        });
        card.classList.add('active');
        card.querySelector('.plan-radio').innerHTML = '<i data-lucide="check"></i>';
        lucide.createIcons();
        saveCurrentStepData();
        updateNextButtonState();
      };
    });

    document.querySelectorAll('.btn-review-edit').forEach(btn => {
      btn.onclick = () => {
        saveCurrentStepData();
        currentStep = parseInt(btn.dataset.target);
        renderStep();
      };
    });

    const textareas = document.querySelectorAll('.quiz-textarea');
    textareas.forEach(ta => {
      ta.oninput = () => {
        const wordCount = ta.value.trim().split(/\s+/).filter(w => w.length > 0).length;
        const countSpan = ta.parentElement.querySelector('.word-count');
        if (countSpan) countSpan.textContent = `${wordCount} palavras`;
        saveCurrentStepData();
        updateNextButtonState();
      };
    });

    const nameInput = document.getElementById('quizName');
    if (nameInput) {
      nameInput.oninput = () => {
        saveCurrentStepData();
        updateNextButtonState();
      };
    }

    const captureInputs = document.querySelectorAll('.quiz-capture-section input');
    captureInputs.forEach(inp => {
      inp.oninput = () => {
        saveCurrentStepData();
        updateNextButtonState();
      };
    });

    document.querySelector('.btn-quiz-next').onclick = () => {
      saveCurrentStepData();
      let isValid = true;
      let errorMsg = '';

      if (currentStep === 0) {
        const missing = [];
        if (!answers.forWho) missing.push('para quem é a canção');
        if (!answers.occasion) missing.push('a ocasião da homenagem');
        if (!answers.name || answers.name.trim().length < 1) missing.push('o nome do homenageado(a)');
        if (!answers.speakName) missing.push('se deseja que o nome seja falado na música');
        
        if (missing.length > 0) {
          isValid = false;
          errorMsg = 'Por favor, preencha o(s) seguinte(s) campo(s) obrigatório(s): ' + missing.join(', ') + '.';
        }
      } else if (currentStep === 1) {
        const missing = [];
        if (!answers.genre) missing.push('o gênero musical preferido');
        if (!answers.vibes || answers.vibes.length < 1) missing.push('a vibe/clima da música (de 1 a 2 vibes)');
        
        if (missing.length > 0) {
          isValid = false;
          errorMsg = 'Por favor, selecione: ' + missing.join(', ') + '.';
        }
      } else if (currentStep === 2) {
        if (!answers.feelings || answers.feelings.trim().length < 5) {
          isValid = false;
          errorMsg = 'Por favor, descreva como ele(a) faz você se sentir (mínimo de 5 caracteres).';
        }
      } else if (currentStep === 3) {
        if (!answers.story || answers.story.trim().length < 5) {
          isValid = false;
          errorMsg = 'Por favor, conte os momentos e memórias especiais de vocês (mínimo de 5 caracteres).';
        }
      } else if (currentStep === 5) {
        if (!answers.plan) {
          isValid = false;
          errorMsg = 'Por favor, escolha um plano de entrega.';
        }
      } else if (currentStep === 6) {
        const isWhatsappChecked = document.getElementById('whatsapp-followup') 
          ? document.getElementById('whatsapp-followup').checked 
          : true;
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email || '');
        const digitsOnly = (answers.phone || '').replace(/\D/g, '');
        const isPhoneValid = !isWhatsappChecked || (digitsOnly.length >= 10);
        const isNameValid = !!(answers.customerName && answers.customerName.trim().length >= 2);
        
        const missing = [];
        if (!isNameValid) missing.push('seu nome completo');
        if (!isEmailValid) missing.push('um e-mail válido');
        if (isWhatsappChecked && !isPhoneValid) missing.push('seu WhatsApp com DDD');

        if (missing.length > 0) {
          isValid = false;
          errorMsg = 'Por favor, preencha: ' + missing.join(', ') + '.';
        }
      }

      if (!isValid) {
        alert(errorMsg);
        return;
      }

      // Track step completion on Facebook Pixel
      if (window.fbq) {
        const stepNameMap = {
          0: 'Básico',
          1: 'Gênero e Vibe',
          2: 'Sentimentos',
          3: 'História',
          4: 'Declaração e Chá Revelação',
          5: 'Plano'
        };
        const params = {
          step: currentStep + 1,
          step_name: stepNameMap[currentStep] || `Passo ${currentStep + 1}`
        };
        if (currentStep === 0) {
          params.for_who = answers.forWho;
          params.occasion = answers.occasion;
        } else if (currentStep === 1) {
          params.genre = answers.genre;
          params.voice = answers.voice;
          params.vibes = answers.vibes.join(', ');
        } else if (currentStep === 5) {
          params.plan = answers.plan;
        }
        window.fbq('trackCustom', 'QuizStepComplete', params);
      }

      if (currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
      } else {
        alert('Tudo certo! Redirecionando para o ambiente seguro de pagamento...');
        const overlay = document.getElementById('quiz-overlay');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaura scroll do site principal
      }
    };

    const backBtn = document.querySelector('.btn-quiz-back');
    if (backBtn) {
      backBtn.onclick = () => {
        saveCurrentStepData();
        if (currentStep > 0) {
          currentStep--;
          renderStep();
        }
      };
    }
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };

  const overlay = document.getElementById('quiz-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloqueia scroll do site principal por trás
  }
  renderStep();
};

// O overlay estático foi removido para que o quiz seja renderizado como página SPA na rota #quiz

app.innerHTML = `
  ${Header()}
  <main></main>
  ${Footer()}
  ${FloatingButtons()}

  <!-- Video Player Modal -->
  <div class="video-modal-overlay" id="videoModalOverlay">
    <button class="video-modal-close" id="videoModalClose" aria-label="Fechar vídeo">&times;</button>
    <button class="video-modal-nav prev-btn" id="videoModalPrev" aria-label="Vídeo anterior"><i data-lucide="chevron-left"></i></button>
    <button class="video-modal-nav next-btn" id="videoModalNext" aria-label="Próximo vídeo"><i data-lucide="chevron-right"></i></button>
    <div class="video-modal-wrapper">
      <div class="video-modal-content" id="videoModalContent">
        <div class="video-player-container" id="modalVideoContainer" style="width:100%; height:100%;">
          <!-- Dynamic video player or iframe will be inserted here -->
        </div>
      </div>
    </div>
  </div>

  <!-- Image Lightbox Modal -->
  <div class="image-modal-overlay" id="imageModalOverlay">
    <div class="image-modal-wrapper">
      <button class="image-modal-close" id="imageModalCloseBtn" aria-label="Fechar imagem">&times;</button>
      <div class="image-modal-content-lightbox">
        <img id="lightboxImage" src="" alt="Feedback Ampliado">
      </div>
    </div>
  </div>

  <div id="terms-overlay" class="modal-overlay">
    <div class="modal-container">
      <button class="modal-close" onclick="document.getElementById('terms-overlay').classList.remove('active')">&times;</button>
      <div class="modal-content">
        <h2>Termos de Uso - AUDIOGIFT</h2>
        <p style="margin-top: 10px; color: #888; font-size: 0.85rem;">Última atualização: Maio de 2026</p>
        <p style="margin-top: 20px;">Bem-vindo à AUDIOGIFT. Ao acessar e utilizar nossa plataforma de homenagens musicais, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Por favor, leia-os com atenção antes de solicitar uma música.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">1. Objeto e Descrição dos Serviços</h3>
        <p>A AUDIOGIFT oferece serviços de criação e personalização de canções e trilhas sonoras com base nas histórias, depoimentos e preferências compartilhados pelo cliente através do preenchimento de nossos formulários/quizzes. O produto final é uma composição original entregue em formato digital.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">2. Cadastro e Uso do Serviço</h3>
        <p>Para solicitar uma canção, o usuário deve preencher todas as informações solicitadas de forma verídica e precisa no formulário da plataforma. Reservamo-nos o direito de recusar solicitações que contenham conteúdo ofensivo, ilegal ou de ódio.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">3. Direitos de Propriedade Intelectual</h3>
        <p>Toda a composição, gravação, melodia e letra criadas pela AUDIOGIFT são de propriedade intelectual exclusiva da AUDIOGIFT, protegidas pelas leis de direitos autorais brasileiras. O cliente recebe uma licença de uso exclusiva e perpétua para fins puramente pessoais, afetivos e não comerciais (compartilhamento com familiares, parceiros e amigos). Qualquer exploração comercial, reprodução pública lucrativa ou distribuição sem consentimento prévio por escrito é estritamente proibida.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">4. Prazos e Entrega</h3>
        <p>O prazo de produção e entrega da homenagem musical será estipulado no momento da finalização do pedido. A entrega é realizada de maneira digital (links de áudio, QR codes personalizados e/ou arquivos de áudio) no endereço de e-mail ou número de contato fornecido pelo cliente.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">5. Alterações nos Termos</h3>
        <p>A AUDIOGIFT reserva-se o direito de alterar ou atualizar estes Termos de Uso a qualquer momento, visando a melhoria dos serviços oferecidos. O uso continuado da plataforma após alterações constituirá sua aceitação das novas diretrizes.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">6. Foro</h3>
        <p>Fica eleito o foro da comarca da sede da AUDIOGIFT para dirimir quaisquer dúvidas ou controvérsias decorrentes destes termos.</p>
      </div>
    </div>
  </div>

  <div id="privacy-overlay" class="modal-overlay">
    <div class="modal-container">
      <button class="modal-close" onclick="document.getElementById('privacy-overlay').classList.remove('active')">&times;</button>
      <div class="modal-content">
        <h2>Políticas de Privacidade - AUDIOGIFT</h2>
        <p style="margin-top: 10px; color: #888; font-size: 0.85rem;">Última atualização: Maio de 2026</p>
        <p style="margin-top: 20px;">A sua privacidade é extremamente importante para nós. Na AUDIOGIFT, temos alguns princípios fundamentais para proteger a confidencialidade e segurança dos dados fornecidos por nossos clientes durante a personalização de canções.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">1. Coleta de Informações</h3>
        <p>Coletamos as informações fornecidas voluntariamente por você ao preencher o formulário para criação da música. Isso inclui nomes, datas marcantes, histórias pessoais, traços de personalidade da pessoa homenageada e detalhes de contato (e-mail e telefone) necessários para a entrega do serviço e processamento do pagamento.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">2. Uso das Informações</h3>
        <p>Suas informações são utilizadas exclusivamente para:</p>
        <ul style="padding-left: 20px; list-style-type: disc; margin: 10px 0 20px;">
          <li style="margin-bottom: 8px;">Redigir e compor as letras personalizadas que farão parte de sua homenagem musical.</li>
          <li style="margin-bottom: 8px;">Realizar a entrega e fornecer atualizações sobre o andamento do seu pedido.</li>
          <li style="margin-bottom: 8px;">Melhorar continuamente a experiência do usuário em nosso portal.</li>
        </ul>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">3. Compartilhamento de Dados</h3>
        <p>Nós não vendemos, comercializamos nem alugamos suas informações de identificação pessoal para terceiros. As informações compartilhadas são usadas apenas por nossa equipe criativa e estúdios parceiros envolvidos diretamente na composição e gravação do seu pedido, sob estrito acordo de confidencialidade.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">4. Segurança da Informação</h3>
        <p>Adotamos medidas de segurança técnicas e administrativas adequadas para proteger seus dados pessoais contra acessos não autorizados, alterações, divulgação ou destruição acidental das informações armazenadas.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">5. Seus Direitos</h3>
        <p>Você tem o direito de, a qualquer momento, solicitar o acesso, a correção ou a exclusão total de seus dados pessoais armazenados em nossos servidores enviando um e-mail para nossa equipe de suporte em <strong>audiogiftbrasil@gmail.com</strong>.</p>
        
        <h3 style="color: var(--primary-orange); margin-top: 24px; font-size: 1.2rem; font-family: var(--font-heading);">6. Cookies</h3>
        <p>Utilizamos cookies de navegação apenas para compreender e guardar suas preferências para futuras visitas, garantindo um carregamento mais rápido e responsivo de nossa página.</p>
      </div>
    </div>
  </div>
`;

// Global event delegation for creating songs, modals, and scrolling
document.addEventListener('click', (e) => {
  const btn = e.target.closest('a[href="#create"], .btn-primary-new, .btn-nav-gold, .btn-primary-pill, .pricing-card button');
  if (btn) {
    // Ignorar e não abrir o quiz se o clique vier da área do admin
    if (btn.closest('.admin-login-page') || btn.closest('.admin-dashboard') || btn.closest('[class*="admin"]') || window.location.pathname === '/admin' || window.location.hash.split('?')[0] === '#admin') {
      return;
    }
    const href = btn.getAttribute('href');
    if (href === '#create' || btn.classList.contains('btn-primary-new') || btn.classList.contains('btn-nav-gold') || (btn.tagName === 'BUTTON' && btn.closest('.pricing-card'))) {
      if (btn.hasAttribute('onclick')) {
        return;
      }
      e.preventDefault();

      // Track Start Quiz click in Facebook Pixel
      if (window.fbq) {
        let originName = 'Botão Geral';
        if (btn.closest('.pricing-card')) {
          originName = 'Tabela de Preços';
        } else if (btn.classList.contains('btn-nav-gold')) {
          originName = 'Menu Superior (Header)';
        } else if (btn.classList.contains('btn-primary-new')) {
          originName = 'Hero Banner (Principal)';
        } else if (btn.classList.contains('btn-primary-pill')) {
          originName = 'Botão Flutuante / Callout';
        }
        window.fbq('trackCustom', 'ClickStartQuiz', {
          origin: originName
        });
      }

      Quiz();
    }
  }

  // Bind terms and privacy links to open overlays
  const btnTerms = e.target.closest('#btn-terms');
  const btnPrivacy = e.target.closest('#btn-privacy');
  
  if (btnTerms) {
    e.preventDefault();
    document.getElementById('terms-overlay').classList.add('active');
  } else if (btnPrivacy) {
    e.preventDefault();
    document.getElementById('privacy-overlay').classList.add('active');
  }
});



// Magnetic Button Effect
const initMagneticButtons = () => {
  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    if (btn.dataset.magneticBound) return;
    btn.dataset.magneticBound = 'true';
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transition = 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)';
      btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      btn.style.transform = `translate(0, 0)`;
    });
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });




// --- GLOBAL AUDIO COORDINATOR ---
window.GlobalAudio = {
  activeAudio: null,
  activeBtn: null,
  activeType: null, // 'vinyl', 'wa', 'song', 'genre'
  activeProgressInterval: null,
  activeWaveFill: null,
  activeTimeLabel: null,
  activeProgressFill: null,
  activeProgressDot: null,

  play: function(audioEl, btn, type, onTimeUpdate = null) {
    if (this.activeAudio && this.activeAudio !== audioEl) {
      this.activeAudio.pause();
      if (this.activeProgressInterval) {
        clearInterval(this.activeProgressInterval);
        this.activeProgressInterval = null;
      }
      this.resetActiveBtnVisuals();
      
      if (this.activeType === 'vinyl') {
        window.dispatchEvent(new CustomEvent('vinyl-paused'));
      }
    }

    this.activeAudio = audioEl;
    this.activeBtn = btn;
    this.activeType = type;

    audioEl.play().then(() => {
      this.setBtnIcon(btn, 'pause');

      // Track play sample in Facebook Pixel
      if (window.fbq) {
        window.fbq('trackCustom', 'PlayAudioSample', {
          sample_type: type,
          sample_src: audioEl.src ? audioEl.src.split('/').pop() : 'unknown'
        });
      }
      
      if (onTimeUpdate) {
        this.activeProgressInterval = setInterval(() => {
          if (audioEl.paused || audioEl.ended) {
            clearInterval(this.activeProgressInterval);
            this.activeProgressInterval = null;
            if (audioEl.ended) {
              this.resetActiveBtnVisuals();
            }
          } else {
            onTimeUpdate(audioEl.currentTime, audioEl.duration);
          }
        }, 100);
      }
    }).catch(err => {
      console.log(`Audio play failed or file not found yet:`, err);
      this.resetActiveBtnVisuals();
    });
  },

  pause: function() {
    if (this.activeAudio) {
      this.activeAudio.pause();
      if (this.activeProgressInterval) {
        clearInterval(this.activeProgressInterval);
        this.activeProgressInterval = null;
      }
      this.setBtnIcon(this.activeBtn, 'play');
    }
  },

  resetActiveBtnVisuals: function() {
    if (this.activeBtn) {
      this.setBtnIcon(this.activeBtn, 'play');
    }
    if (this.activeWaveFill) this.activeWaveFill.style.width = '0%';
    if (this.activeTimeLabel) this.activeTimeLabel.textContent = '0:30';
    if (this.activeProgressFill) this.activeProgressFill.style.width = '0%';
    if (this.activeProgressDot) this.activeProgressDot.style.left = '0%';
  },

  setBtnIcon: function(btn, iconName) {
    if (!btn) return;
    const icon = btn.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', iconName);
      lucide.createIcons();
    }
  }
};

// --- INITIALIZE ALL AUDIO PLAYERS ---
const initAllAudioPlayers = () => {
  // 1. WhatsApp Audio Bubbles
  document.querySelectorAll('.wa-bubble-item').forEach(bubble => {
    const playBtn = bubble.querySelector('.wa-bubble-play');
    const src = playBtn ? playBtn.getAttribute('data-src') : null;
    const progressFill = bubble.querySelector('.wa-progress-fill');
    const progressDot = bubble.querySelector('.wa-progress-dot');
    const timeElapsed = bubble.querySelector('.wa-time-elapsed');
    const progressLine = bubble.querySelector('.wa-progress-line');
    
    if (!playBtn || !src) return;
    
    const audio = new Audio(src);
    
    playBtn.addEventListener('click', () => {
      if (window.GlobalAudio.activeAudio === audio && !audio.paused) {
        window.GlobalAudio.pause();
      } else {
        window.GlobalAudio.activeProgressFill = progressFill;
        window.GlobalAudio.activeProgressDot = progressDot;
        window.GlobalAudio.activeTimeLabel = timeElapsed;
        
        window.GlobalAudio.play(audio, playBtn, 'wa', (currentTime, duration) => {
          const pct = (currentTime / (duration || 1)) * 100;
          if (progressFill) progressFill.style.width = `${pct}%`;
          if (progressDot) progressDot.style.left = `${pct}%`;
          if (timeElapsed) {
            const sec = Math.floor(currentTime % 60);
            const min = Math.floor(currentTime / 60);
            timeElapsed.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
          }
        });
      }
    });

    if (progressLine) {
      progressLine.style.cursor = 'pointer';
      progressLine.addEventListener('click', (e) => {
        const rect = progressLine.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        const dur = audio.duration || 23;
        audio.currentTime = pct * dur;
        if (progressFill) progressFill.style.width = `${pct * 100}%`;
        if (progressDot) progressDot.style.left = `${pct * 100}%`;
      });
    }
    
    audio.addEventListener('ended', () => {
      if (progressFill) progressFill.style.width = '0%';
      if (progressDot) progressDot.style.left = '0%';
      if (timeElapsed) timeElapsed.textContent = '0:00';
    });
  });

  // 2. Testimonials Song Cards
  document.querySelectorAll('.song-card .play-trigger').forEach(trigger => {
    const src = trigger.getAttribute('data-src');
    if (!src) return;
    
    const audio = new Audio(src);
    
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (window.GlobalAudio.activeAudio === audio && !audio.paused) {
        window.GlobalAudio.pause();
      } else {
        window.GlobalAudio.play(audio, trigger, 'song');
      }
    });
  });

  // 3. Music Styles Genre Player Cards
  document.querySelectorAll('.style-player-card').forEach(card => {
    const playBtn = card.querySelector('.wa-play-small');
    const src = playBtn ? playBtn.getAttribute('data-src') : null;
    const waveFill = card.querySelector('.wa-wave-fill');
    const timeLabel = card.querySelector('.wa-time-small');
    
    if (!playBtn || !src) return;
    
    const audio = new Audio(src);
    
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('.wa-play-small')) return;
      playBtn.click();
    });
    
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (window.GlobalAudio.activeAudio === audio && !audio.paused) {
        window.GlobalAudio.pause();
      } else {
        window.GlobalAudio.activeWaveFill = waveFill;
        window.GlobalAudio.activeTimeLabel = timeLabel;
        
        window.GlobalAudio.play(audio, playBtn, 'genre', (currentTime, duration) => {
          const pct = (currentTime / (duration || 30)) * 100;
          if (waveFill) waveFill.style.width = `${pct}%`;
          if (timeLabel) {
            const sec = Math.floor(currentTime % 60);
            const min = Math.floor(currentTime / 60);
            timeLabel.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
          }
        });
      }
    });
    
    audio.addEventListener('play', () => {
      card.classList.add('playing');
    });
    
    audio.addEventListener('pause', () => {
      card.classList.remove('playing');
    });
    
    audio.addEventListener('ended', () => {
      card.classList.remove('playing');
      if (waveFill) waveFill.style.width = '0%';
      if (timeLabel) timeLabel.textContent = '0:30';
    });
  });

  // 4. WhatsApp How It Works Main Audio Preview
  const waPlayMain = document.querySelector('.wa-play-main');
  if (waPlayMain) {
    const audioSrc = '/songs/A Chave do Teu Coração.mp3.mpeg';
    const audio = new Audio(audioSrc);
    const waveformSpans = document.querySelectorAll('.wa-waveform span');
    const waTimeLabel = document.querySelector('.wa-audio-meta span');
    
    const resetWaveform = () => {
      waveformSpans.forEach(span => span.classList.remove('active'));
      if (waTimeLabel) waTimeLabel.textContent = '0:19';
    };
    
    waPlayMain.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (window.GlobalAudio.activeAudio === audio && !audio.paused) {
        window.GlobalAudio.pause();
      } else {
        window.GlobalAudio.play(audio, waPlayMain, 'wa', (currentTime, duration) => {
          const limit = Math.min(duration || 30, 30);
          if (currentTime >= limit) {
            window.GlobalAudio.pause();
            return;
          }
          
          // Update waveform spans
          const progressPct = currentTime / limit;
          const activeSpansCount = Math.floor(progressPct * waveformSpans.length);
          waveformSpans.forEach((span, index) => {
            if (index < activeSpansCount) {
              span.classList.add('active');
            } else {
              span.classList.remove('active');
            }
          });
          
          // Update time label
          if (waTimeLabel) {
            const sec = Math.floor(currentTime % 60);
            const min = Math.floor(currentTime / 60);
            waTimeLabel.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
          }
        });
      }
    });
    
    audio.addEventListener('pause', () => {
      audio.currentTime = 0;
      resetWaveform();
    });
    
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      resetWaveform();
    });
  }
};

// --- MUSIC STYLES FILTER AND SEARCH ---
const initMusicStylesFilter = () => {
  const searchInput = document.querySelector('.search-input');
  const styleCards = document.querySelectorAll('.style-player-card');
  const btnShowAll = document.getElementById('btnShowAllGenres');
  const showAllContainer = document.getElementById('showAllGenresContainer');

  if (!searchInput || !styleCards.length) return;

  if (btnShowAll && showAllContainer) {
    btnShowAll.onclick = () => {
      const hiddenCards = document.querySelectorAll('.genre-card-hidden');
      hiddenCards.forEach(card => {
        card.classList.remove('genre-card-hidden');
        if (typeof observer !== 'undefined') {
          observer.observe(card);
        }
      });
      showAllContainer.style.display = 'none';
    };
  }

  let searchQuery = '';

  const filterCards = () => {
    styleCards.forEach(card => {
      const hasHiddenClass = card.classList.contains('genre-card-hidden');
      const genreName = card.getAttribute('data-genre').toLowerCase();
      const songTitle = (card.querySelector('.genre-name-label')?.textContent || '').toLowerCase();

      const matchesSearch = genreName.includes(searchQuery) || songTitle.includes(searchQuery);

      if (matchesSearch && (!hasHiddenClass || searchQuery.length > 0)) {
        card.style.display = 'block';
        card.classList.add('visible');
      } else {
        card.style.display = 'none';
        card.classList.remove('visible');
      }
    });
  };

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    filterCards();
  });

  filterCards();
};

// --- MODAL: ACOMPANHAR PEDIDO ---
const initTrackOrderModal = () => {
  // Injeta o modal no body apenas uma vez
  if (document.getElementById('track-order-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'track-order-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'track-modal-title');
  modal.innerHTML = `
    <div class="track-modal-backdrop" id="track-modal-backdrop"></div>
    <div class="track-modal-box">
      <button class="track-modal-close" id="track-modal-close" aria-label="Fechar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div class="track-modal-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FC7301" stroke-width="2" stroke-linecap="round">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
        </svg>
      </div>

      <h2 id="track-modal-title" class="track-modal-title">Acompanhar meu pedido</h2>
      <p class="track-modal-subtitle">Digite seu e-mail ou o código do pedido para localizar sua canção.</p>

      <div class="track-modal-tabs" id="track-modal-tabs">
        <button class="track-tab active" data-tab="email" id="tab-email">Por e-mail</button>
        <button class="track-tab" data-tab="code" id="tab-code">Por código</button>
      </div>

      <!-- Busca por e-mail -->
      <div id="track-panel-email" class="track-panel active">
        <label class="track-label" for="track-email-input">E-mail do pedido</label>
        <input
          id="track-email-input"
          type="email"
          class="track-input"
          placeholder="seuemail@exemplo.com"
          autocomplete="email"
        />
      </div>

      <!-- Busca por código -->
      <div id="track-panel-code" class="track-panel">
        <label class="track-label" for="track-code-input">Código do pedido</label>
        <input
          id="track-code-input"
          type="text"
          class="track-input"
          placeholder="Ex: 3f2a1b09-..."
          autocomplete="off"
          spellcheck="false"
        />
      </div>

      <div id="track-modal-error" class="track-modal-error" style="display:none;"></div>

      <button id="track-modal-submit" class="track-modal-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        Buscar pedido
      </button>
    </div>
  `;
  document.body.appendChild(modal);

  // --- lógica de abrir/fechar ---
  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('track-email-input')?.focus(), 150);
  };
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Limpa campos e erro
    const err = document.getElementById('track-modal-error');
    if (err) { err.style.display = 'none'; err.textContent = ''; }
    const emailInp = document.getElementById('track-email-input');
    const codeInp = document.getElementById('track-code-input');
    if (emailInp) emailInp.value = '';
    if (codeInp) codeInp.value = '';
  };

  // Expõe openModal globalmente para uso nos botões
  window._openTrackModal = openModal;

  document.getElementById('track-modal-close').addEventListener('click', closeModal);
  document.getElementById('track-modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  // --- troca de abas ---
  document.getElementById('track-modal-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.track-tab');
    if (!tab) return;
    const tabId = tab.dataset.tab;
    document.querySelectorAll('.track-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.track-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`track-panel-${tabId}`).classList.add('active');
    // Foca o input da aba ativa
    setTimeout(() => document.getElementById(`track-${tabId}-input`)?.focus(), 50);
    // Limpa erro ao trocar aba
    const err = document.getElementById('track-modal-error');
    if (err) { err.style.display = 'none'; err.textContent = ''; }
  });

  // --- lógica de busca ---
  document.getElementById('track-modal-submit').addEventListener('click', async () => {
    const btn = document.getElementById('track-modal-submit');
    const errEl = document.getElementById('track-modal-error');
    const activeTab = document.querySelector('.track-tab.active')?.dataset.tab || 'email';

    const emailVal = document.getElementById('track-email-input').value.trim().toLowerCase();
    const codeVal = document.getElementById('track-code-input').value.trim();

    errEl.style.display = 'none';
    errEl.textContent = '';

    const showError = (msg) => {
      errEl.textContent = msg;
      errEl.style.display = 'block';
    };

    if (activeTab === 'email') {
      if (!emailVal || !emailVal.includes('@')) {
        showError('Por favor, insira um e-mail válido.');
        return;
      }
    } else {
      if (!codeVal) {
        showError('Por favor, insira o código do pedido.');
        return;
      }
    }

    btn.disabled = true;
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 11-6.219-8.56"/>
      </svg>
      Buscando...
    `;

    try {
      const allOrders = await db.getOrders();
      let found = null;

      if (activeTab === 'email') {
        found = allOrders.find(o => (o.customer_email || '').toLowerCase() === emailVal);
        if (!found) {
          showError('Nenhum pedido encontrado com esse e-mail. Verifique o e-mail usado no pedido.');
        }
      } else {
        found = allOrders.find(o => o.id === codeVal || o.id.startsWith(codeVal));
        if (!found) {
          showError('Código de pedido não encontrado. Verifique e tente novamente.');
        }
      }

      if (found) {
        closeModal();
        window.location.hash = `#acompanhamento?orderId=${found.id}`;
      }
    } catch (err) {
      showError('Erro ao buscar o pedido. Tente novamente em instantes.');
    } finally {
      btn.disabled = false;
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        Buscar pedido
      `;
    }
  });

  // Suporte a Enter nos inputs
  ['track-email-input', 'track-code-input'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') document.getElementById('track-modal-submit').click();
    });
  });
};

const initMobileMenu = () => {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('active');
    const icon = toggle.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', 'menu');
    }
    document.body.style.overflow = '';
    if (window.lucide) lucide.createIcons();
  };

  const openMenu = () => {
    menu.classList.add('active');
    const icon = toggle.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', 'x');
    }
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Fechar ao clicar em botões no menu mobile
  menu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && !menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Fechar ao apertar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Botão "Acompanhar pedido" na navbar desktop
  const btnTrack = document.getElementById('btn-track-order');
  if (btnTrack) btnTrack.addEventListener('click', () => { if (window._openTrackModal) window._openTrackModal(); });

  // Botão "Acompanhar pedido" no menu mobile
  const btnTrackMobile = document.getElementById('btn-track-order-mobile');
  if (btnTrackMobile) btnTrackMobile.addEventListener('click', () => {
    closeMenu();
    if (window._openTrackModal) window._openTrackModal();
  });
};

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

// --- RENDERIZAR TELA DE CHECKOUT SIMULADO ---
const renderCheckoutPage = async (mainEl, orderId) => {
  if (!orderId) {
    mainEl.innerHTML = `
      <div class="checkout-container text-center py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh;">
        <h2 class="section-title-serif text-orange">Erro no Checkout</h2>
        <p class="section-subtitle">Pedido inválido ou ID de pedido não encontrado.</p>
        <a href="#" class="btn-primary-new">Voltar para a Página Inicial</a>
      </div>
    `;
    return;
  }

  mainEl.innerHTML = `
    <div class="checkout-container text-center py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh; display:flex; align-items:center; justify-content:center;">
      <div>
        <div class="preloader-equalizer" style="margin-bottom: 15px;">
          <span class="eq-bar bar-1"></span>
          <span class="eq-bar bar-2"></span>
          <span class="eq-bar bar-3"></span>
        </div>
        <p style="color: var(--text-muted);">Carregando detalhes do pedido...</p>
      </div>
    </div>
  `;

  const order = await db.getOrder(orderId);
  if (!order) {
    mainEl.innerHTML = `
      <div class="checkout-container text-center py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh;">
        <h2 class="section-title-serif text-orange">Pedido Não Encontrado</h2>
        <p class="section-subtitle">O pedido especificado não pôde ser recuperado do banco de dados.</p>
        <a href="#" class="btn-primary-new">Voltar para a Página Inicial</a>
      </div>
    `;
    return;
  }

  const prices = {
    especial: 89.90,
    memoravel: 149.90,
    inesquecivel: 199.90
  };
  const amount = prices[order.plan] || 149.90;
  const amountStr = amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const planNames = {
    especial: 'Especial (Entrega em 7 dias)',
    memoravel: 'Memorável (Entrega em 72h)',
    inesquecivel: 'Inesquecível VIP (Entrega em 24h)'
  };

  mainEl.innerHTML = `
    <div class="checkout-page py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh;">
      <div class="container">
        <div class="checkout-grid-container">
          
          <!-- LADO ESQUERDO: Opções de Pagamento -->
          <div class="checkout-form-side">
            <h2 class="section-title-serif text-white text-left" style="font-size:2.4rem;">Finalize sua <em>Homenagem</em></h2>
            <p class="checkout-desc" style="color: rgba(255,255,255,0.7); margin-bottom: 1.5rem;">Escolha a forma de pagamento para iniciarmos a criação da música de <strong>${order.recipient_name || 'quem você ama'}</strong>.</p>
            
            <div class="payment-methods-tabs">
              <button class="pay-tab active" id="tab-pix">
                <i data-lucide="qr-code"></i> Pagar com PIX
              </button>
              <button class="pay-tab" id="tab-card">
                <i data-lucide="credit-card"></i> Cartão de Crédito
              </button>
            </div>

            <!-- Conteúdo PIX -->
            <div class="payment-content active" id="content-pix">
              <div class="pix-instructions">
                <div class="pix-qr-container">
                  <svg class="pix-qr-svg" viewBox="0 0 100 100" width="150" height="150">
                    <rect width="100" height="100" fill="white"/>
                    <rect x="5" y="5" width="22" height="22" fill="black" stroke="white" stroke-width="1.5"/>
                    <rect x="9" y="9" width="14" height="14" fill="white"/>
                    <rect x="12" y="12" width="8" height="8" fill="black"/>
                    
                    <rect x="73" y="5" width="22" height="22" fill="black" stroke="white" stroke-width="1.5"/>
                    <rect x="77" y="9" width="14" height="14" fill="white"/>
                    <rect x="80" y="12" width="8" height="8" fill="black"/>
                    
                    <rect x="5" y="73" width="22" height="22" fill="black" stroke="white" stroke-width="1.5"/>
                    <rect x="9" y="77" width="14" height="14" fill="white"/>
                    <rect x="12" y="80" width="8" height="8" fill="black"/>
                    
                    <rect x="32" y="8" width="4" height="12" fill="black"/>
                    <rect x="42" y="4" width="8" height="4" fill="black"/>
                    <rect x="58" y="12" width="4" height="12" fill="black"/>
                    <rect x="32" y="32" width="12" height="4" fill="black"/>
                    <rect x="52" y="32" width="8" height="8" fill="black"/>
                    <rect x="12" y="42" width="8" height="4" fill="black"/>
                    <rect x="4" y="52" width="4" height="8" fill="black"/>
                    <rect x="32" y="48" width="12" height="12" fill="black"/>
                    <rect x="68" y="42" width="4" height="16" fill="black"/>
                    <rect x="78" y="52" width="12" height="4" fill="black"/>
                    <rect x="32" y="72" width="8" height="4" fill="black"/>
                    <rect x="52" y="77" width="4" height="12" fill="black"/>
                    <rect x="68" y="78" width="16" height="8" fill="black"/>
                    
                    <circle cx="50" cy="50" r="10" fill="white"/>
                    <path d="M48 46 v8 l5 -4 z" fill="#FC7301"/>
                  </svg>
                  <div class="pix-scan-pulse"></div>
                </div>
                
                <div class="pix-text-details">
                  <h4>Aprovação Instantânea</h4>
                  <p>Escaneie o QR Code ao lado pelo app do seu banco ou copie a chave Pix abaixo.</p>
                  
                  <div class="pix-copy-box">
                    <input type="text" readonly value="00020101021226830014br.gov.bcb.pix2561api.pay.audiogift.com/v2/order-${orderId}5204000053039865405${amount}5802BR5909AudioGift6009Sao Paulo62070503***6304" id="pix-code-input" class="quiz-input select-all">
                    <button class="btn-copy-pix" id="btn-copy-pix-code"><i data-lucide="copy"></i> Copiar</button>
                  </div>
                </div>
              </div>
              
              <div class="sandbox-approve-box mt-3" style="border: 1px dashed rgba(252,115,1,0.3); border-radius: 12px; padding: 15px; background: rgba(252,115,1,0.03);">
                <p style="font-size:0.9rem; margin-bottom: 12px;"><i data-lucide="info" style="color: var(--primary-orange); width: 16px; height: 16px;"></i> <strong>Ambiente Sandbox:</strong> Você pode simular o pagamento para testar o fluxo completo localmente.</p>
                <button class="btn-primary-new w-full" id="btn-approve-pix">
                  <i data-lucide="check-circle"></i> Simular Confirmação do PIX
                </button>
              </div>
            </div>

            <!-- Conteúdo Cartão de Crédito -->
            <div class="payment-content" id="content-card">
              <div class="card-simulator-container">
                <!-- Virtual Credit Card (Apple style) -->
                <div class="credit-card-preview" id="card-preview">
                  <div class="card-inner">
                    <div class="card-front">
                      <div class="card-chip"></div>
                      <div class="card-brand"><i data-lucide="sparkles" style="width:24px; height:24px; color:#fff;"></i></div>
                      <div class="card-number" id="preview-number">•••• •••• •••• ••••</div>
                      <div class="card-bottom">
                        <div class="card-holder" id="preview-holder">NOME DO TITULAR</div>
                        <div class="card-expiry" id="preview-expiry">MM/AA</div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="card-magnetic-strip"></div>
                      <div class="card-signature-cvv">
                        <div class="card-signature"></div>
                        <div class="card-cvv-box" id="preview-cvv">•••</div>
                      </div>
                      <div class="card-back-brand">AudioGift</div>
                    </div>
                  </div>
                </div>
                
                <form class="credit-card-form mt-3" id="card-form" onsubmit="return false;">
                  <div class="form-row">
                    <label>Número do Cartão *</label>
                    <input type="text" placeholder="0000 0000 0000 0000" id="card-number-input" class="quiz-input" maxlength="19" required>
                  </div>
                  <div class="form-row">
                    <label>Nome Impresso no Cartão *</label>
                    <input type="text" placeholder="NOME COMO NO CARTÃO" id="card-holder-input" class="quiz-input" style="text-transform: uppercase;" required>
                  </div>
                  <div class="form-col-2">
                    <div class="form-row">
                      <label>Validade *</label>
                      <input type="text" placeholder="MM/AA" id="card-expiry-input" class="quiz-input" maxlength="5" required>
                    </div>
                    <div class="form-row">
                      <label>CVV *</label>
                      <input type="text" placeholder="CVV" id="card-cvv-input" class="quiz-input" maxlength="4" required>
                    </div>
                  </div>
                  
                  <button type="submit" class="btn-primary-new w-full mt-2" id="btn-pay-card">
                    <i data-lucide="shield-check"></i> Confirmar Pagamento - ${amountStr}
                  </button>
                </form>
              </div>
            </div>
            
          </div>

          <!-- LADO DIREITO: Resumo do Pedido -->
          <div class="checkout-summary-side">
            <div class="summary-box">
              <h3>Resumo do seu Pedido</h3>
              <div class="divider"></div>
              
              <div class="summary-item">
                <span class="item-label">Plano Escolhido:</span>
                <span class="item-val">${planNames[order.plan] || order.plan}</span>
              </div>
              <div class="summary-item">
                <span class="item-label">Homenageado(a):</span>
                <span class="item-val">${order.recipient_name || 'Não informado'}</span>
              </div>
              <div class="summary-item">
                <span class="item-label">Estilo:</span>
                <span class="item-val">${order.genre || 'Pop Acústico'} (${order.voice || 'Feminina'})</span>
              </div>
              <div class="summary-item">
                <span class="item-label">WhatsApp:</span>
                <span class="item-val">${order.customer_phone || 'Não informado'}</span>
              </div>
              <div class="summary-item" style="border-bottom:none;">
                <span class="item-label">E-mail:</span>
                <span class="item-val" style="word-break: break-all;">${order.customer_email}</span>
              </div>
              
              <div class="divider"></div>
              <div class="summary-total">
                <span>Total a pagar:</span>
                <span class="total-price">${amountStr}</span>
              </div>
              
              <div class="summary-badges">
                <div class="badge-item"><i data-lucide="shield-check"></i> Pagamento Seguro</div>
                <div class="badge-item"><i data-lucide="rotate-ccw"></i> 7 Dias de Garantia</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  const tabPix = document.getElementById('tab-pix');
  const tabCard = document.getElementById('tab-card');
  const contentPix = document.getElementById('content-pix');
  const contentCard = document.getElementById('content-card');

  tabPix.onclick = () => {
    tabPix.classList.add('active');
    tabCard.classList.remove('active');
    contentPix.classList.add('active');
    contentCard.classList.remove('active');
  };

  tabCard.onclick = () => {
    tabCard.classList.add('active');
    tabPix.classList.remove('active');
    contentCard.classList.add('active');
    contentPix.classList.remove('active');
  };

  // Copiar código PIX
  const btnCopyPix = document.getElementById('btn-copy-pix-code');
  if (btnCopyPix) {
    btnCopyPix.onclick = () => {
      const pixInp = document.getElementById('pix-code-input');
      pixInp.select();
      document.execCommand('copy');
      btnCopyPix.innerHTML = `<i data-lucide="check"></i> Copiado!`;
      lucide.createIcons();
      setTimeout(() => {
        btnCopyPix.innerHTML = `<i data-lucide="copy"></i> Copiar`;
        lucide.createIcons();
      }, 2000);
    };
  }

  // Simular aprovação PIX
  const btnApprovePix = document.getElementById('btn-approve-pix');
  if (btnApprovePix) {
    btnApprovePix.onclick = async () => {
      btnApprovePix.setAttribute('disabled', 'true');
      btnApprovePix.innerHTML = `<i data-lucide="loader" class="spin"></i> Processando...`;
      
      await db.updateOrder(orderId, { status: 'pago', payment_method: 'pix' });
      
      setTimeout(() => {
        window.location.hash = `#acompanhamento?orderId=${orderId}`;
      }, 1000);
    };
  }

  // Cartão Crédito inputs
  const cardNum = document.getElementById('card-number-input');
  const cardHolder = document.getElementById('card-holder-input');
  const cardExpiry = document.getElementById('card-expiry-input');
  const cardCvv = document.getElementById('card-cvv-input');

  const preNum = document.getElementById('preview-number');
  const preHolder = document.getElementById('preview-holder');
  const preExpiry = document.getElementById('preview-expiry');
  const preCvv = document.getElementById('preview-cvv');
  const cardPreview = document.getElementById('card-preview');

  cardNum.oninput = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = value;
    preNum.textContent = value || '•••• •••• •••• ••••';
  };

  cardHolder.oninput = (e) => {
    preHolder.textContent = e.target.value.toUpperCase() || 'NOME DO TITULAR';
  };

  cardExpiry.oninput = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
    preExpiry.textContent = value || 'MM/AA';
  };

  cardCvv.oninput = (e) => {
    preCvv.textContent = e.target.value || '•••';
  };

  cardCvv.onfocus = () => {
    cardPreview.classList.add('flip');
  };
  cardCvv.onblur = () => {
    cardPreview.classList.remove('flip');
  };

  const btnPayCard = document.getElementById('btn-pay-card');
  const formCard = document.getElementById('card-form');
  formCard.onsubmit = async (e) => {
    e.preventDefault();
    btnPayCard.setAttribute('disabled', 'true');
    btnPayCard.innerHTML = `<i data-lucide="loader" class="spin"></i> Autorizando...`;
    
    await db.updateOrder(orderId, { status: 'pago', payment_method: 'credit_card' });
    
    setTimeout(() => {
      window.location.hash = `#acompanhamento?orderId=${orderId}`;
    }, 1500);
  };
};

// --- RENDERIZAR TELA DE ACOMPANHAMENTO DO CLIENTE ---
const renderAcompanhamentoPage = async (mainEl, orderId) => {
  if (!orderId) {
    mainEl.innerHTML = `
      <div class="checkout-container text-center py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh;">
        <h2 class="section-title-serif text-orange">Erro no Acompanhamento</h2>
        <p class="section-subtitle">Pedido inválido ou ID de pedido não encontrado.</p>
        <a href="#" class="btn-primary-new">Voltar para a Página Inicial</a>
      </div>
    `;
    return;
  }

  mainEl.innerHTML = `
    <div class="checkout-container text-center py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh; display:flex; align-items:center; justify-content:center;">
      <div>
        <div class="preloader-equalizer" style="margin-bottom: 15px;">
          <span class="eq-bar bar-1"></span>
          <span class="eq-bar bar-2"></span>
          <span class="eq-bar bar-3"></span>
        </div>
        <p style="color: var(--text-muted);">Carregando status do pedido...</p>
      </div>
    </div>
  `;

  const order = await db.getOrder(orderId);
  if (!order) {
    mainEl.innerHTML = `
      <div class="checkout-container text-center py-large bg-dark text-white" style="min-height: 80vh; min-height: 80dvh;">
        <h2 class="section-title-serif text-orange">Pedido Não Encontrado</h2>
        <p class="section-subtitle">O pedido especificado não pôde ser encontrado no banco.</p>
        <a href="#" class="btn-primary-new">Voltar para a Página Inicial</a>
      </div>
    `;
    return;
  }

  // Track Purchase in Facebook Pixel if paid and not already tracked
  if (order.status === 'pago' || order.status === 'em_producao' || order.status === 'concluido') {
    const trackedKey = `fb_tracked_purchase_${orderId}`;
    if (!localStorage.getItem(trackedKey)) {
      if (window.fbq) {
        const planPrices = {
          especial: 89.90,
          memoravel: 149.90,
          inesquecivel: 199.90
        };
        const price = planPrices[order.plan] || 149.90;
        window.fbq('track', 'Purchase', {
          value: price,
          currency: 'BRL',
          content_name: order.plan,
          content_type: 'product',
          content_ids: [order.id]
        });
      }
      localStorage.setItem(trackedKey, 'true');
    }
  }

  const planNames = {
    especial: 'Plano Especial (7 dias)',
    memoravel: 'Plano Memorável (72h)',
    inesquecivel: 'Plano Inesquecível VIP (24h)'
  };

  const statusMap = {
    pendente: { step: 1, label: 'Aguardando Pagamento' },
    pago: { step: 2, label: 'Pagamento Aprovado' },
    em_producao: { step: 3, label: 'Composição & Produção' },
    concluido: { step: 4, label: 'Música Entregue!' }
  };

  const currentStatus = statusMap[order.status] || { step: 1, label: 'Pendente' };

  mainEl.innerHTML = `
    <div class="tracking-page bg-black text-white py-large" style="min-height: 80vh; min-height: 80dvh;">
      <div class="container" style="max-width: 750px;">
        
        <div class="success-icon-wrap text-center reveal">
          <div class="success-icon-ring" style="width:70px; height:70px; border-radius:50%; background: rgba(74,222,128,0.1); display:flex; align-items:center; justify-content:center; margin: 0 auto 1.5rem auto;">
            <i data-lucide="check" style="width: 36px; height: 36px; color: #4ade80;"></i>
          </div>
        </div>

        <div class="tracking-header text-center reveal">
          <h1 class="main-title text-white" style="font-size: 2.2rem; text-align: center; margin-bottom:10px;">Seu pedido foi recebido!</h1>
          <p class="section-subtitle" style="color: rgba(255,255,255,0.7); max-width: 600px; margin: 0 auto 2.5rem auto; font-size:1rem;">
            Obrigado por criar sua canção com o AudioGift. Nossa equipe criativa já está analisando sua história e entrará em contato via WhatsApp nas próximas horas.
          </p>
        </div>

        <!-- Timeline Visual -->
        <div class="status-timeline-card reveal" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 25px; margin-bottom: 2rem;">
          <h3 style="font-size: 1.1rem; margin-bottom: 20px; color:#aaa; font-weight:500;">Status do Pedido: <strong style="color:var(--primary-orange);">${currentStatus.label}</strong></h3>
          
          <div class="timeline-steps">
            <div class="timeline-step completed">
              <div class="step-bullet"><i data-lucide="check" style="width:14px; height:14px;"></i></div>
              <div class="step-label">Pedido Criado</div>
            </div>
            
            <div class="timeline-step ${currentStatus.step >= 2 ? 'completed' : 'active'}">
              <div class="step-bullet">
                ${currentStatus.step >= 2 ? '<i data-lucide="check" style="width:14px; height:14px;"></i>' : '<i data-lucide="loader" class="spin" style="width:14px; height:14px;"></i>'}
              </div>
              <div class="step-label">Pagamento</div>
            </div>

            <div class="timeline-step ${currentStatus.step >= 3 ? 'completed' : (currentStatus.step === 2 ? 'active' : '')}">
              <div class="step-bullet">
                ${currentStatus.step >= 3 ? '<i data-lucide="check" style="width:14px; height:14px;"></i>' : '<i data-lucide="music" style="width:14px; height:14px;"></i>'}
              </div>
              <div class="step-label">Produção</div>
            </div>

            <div class="timeline-step ${currentStatus.step >= 4 ? 'completed' : ''}">
              <div class="step-bullet"><i data-lucide="gift" style="width:14px; height:14px;"></i></div>
              <div class="step-label">Entrega</div>
            </div>
          </div>
        </div>

        <!-- Ficha de Detalhes -->
        <div class="tracking-details-card reveal" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 25px; margin-bottom: 2rem; text-align: left;">
          <h3 style="font-size: 1.1rem; margin-bottom: 15px; color:#fff;">Resumo das Configurações</h3>
          <div style="height:1px; background:rgba(255,255,255,0.08); margin-bottom:15px;"></div>
          
          <div class="details-grid-box">
            <div class="detail-row" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.95rem;">
              <span style="color:#aaa;">Código do Pedido:</span>
              <span style="font-family:monospace; color:#ccc;">${order.id}</span>
            </div>
            <div class="detail-row" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.95rem;">
              <span style="color:#aaa;">Plano:</span>
              <span>${planNames[order.plan] || order.plan}</span>
            </div>
            <div class="detail-row" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.95rem;">
              <span style="color:#aaa;">Para quem é:</span>
              <span>${order.for_who || 'N/A'}</span>
            </div>
            <div class="detail-row" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.95rem;">
              <span style="color:#aaa;">Estilo Escolhido:</span>
              <span>${order.genre || 'Pop Acústico'} (${order.voice || 'Feminina'})</span>
            </div>
          </div>
        </div>

        <!-- Card de WhatsApp e Próximos Passos -->
        <div class="next-steps-card reveal" style="background: rgba(37, 211, 102, 0.05); border: 1px solid rgba(37, 211, 102, 0.15); border-radius: 20px; padding: 25px; text-align: center;">
          <div style="display:flex; align-items:center; justify-content:center; gap: 15px; text-align:left; margin-bottom: 20px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #25d366; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <i data-lucide="message-square" style="color:white; width:22px; height:22px;"></i>
            </div>
            <div>
              <h4 style="font-size:1.05rem; margin-bottom:3px; color:#fff;">Contato via WhatsApp</h4>
              <p style="font-size:0.9rem; color: rgba(255,255,255,0.7); margin:0;">Você receberá um contato direto no seu número <strong>${order.customer_phone || ''}</strong> para acompanhamento da letra e envio do áudio.</p>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px; max-width: 320px; margin: 0 auto;">
            <a href="https://wa.me/5532991931938?text=Ol%C3%A1%2C%20fiz%20o%20pedido%20de%20m%C3%BAsica%20customizada%20ID%20${order.id}.%20Gostaria%20de%20acompanhar%20a%20produ%C3%A7%C3%A3o!" target="_blank" class="btn-primary-new" style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); border-color: #25D366; box-shadow: 0 10px 20px rgba(37, 211, 102, 0.15); padding: 0.9rem 1.8rem; font-size:0.95rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right:8px;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.161.001 6.132 1.233 8.37 3.474 2.237 2.24 3.468 5.211 3.468 8.377-.003 6.537-5.329 11.86-11.859 11.86-2.004-.001-3.972-.51-5.729-1.482L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.45 5.5 0 10-4.5 10-10S16.9.75 11.4.75C5.9.75 1.4 5.25 1.4 10.75c0 1.9.5 3.7 1.5 5.3l-1 3.7 3.8-1zm11.2-5.45c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.2.3-.7.9-.9 1.1-.1.2-.3.2-.5.1-.9-.4-1.6-.7-2.3-1.3-.5-.4-.9-.9-1.2-1.4-.2-.3-.02-.5.08-.6l.3-.4c.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3-.1-.2-.5-1.2-.7-1.6-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.6.6-.9 1.5-.9 2.5 0 2 1.5 3.9 1.7 4.2.2.3 3 4.6 7.3 6.3 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.7.2.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.1-.2-.3-.3-.5-.4z"/></svg>
              Iniciar Chat de Acompanhamento
            </a>
            
            <a href="#" class="btn-outline" style="border-color: rgba(255,255,255,0.1); color: white; padding: 0.8rem 1.8rem; font-size:0.9rem;">
              Voltar ao Site
            </a>
          </div>
        </div>

      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
    el.classList.add('visible');
  });
};

// Roteador SPA (Revisado)
const renderRoute = async () => {
  const mainEl = document.querySelector('main');
  if (!mainEl) return;

  try {
    const path = window.location.pathname;
    const hash = window.location.hash;

    // Suporta tanto /admin quanto #admin
    const isAdmin = path === '/admin' || hash.split('?')[0] === '#admin';
    const isCheckout = path === '/checkout' || hash.split('?')[0] === '#checkout';
    const isAcompanhamento = path === '/acompanhamento' || hash.split('?')[0] === '#acompanhamento';
    const isPlanos = path === '/planos' || hash.split('?')[0] === '#planos';
    const isQuiz = path === '/quiz' || hash.split('?')[0] === '#quiz';

    // Obter o orderId ou plan da query string da URL (?...) ou da hash
    const queryPart = (path === '/admin' || path === '/checkout' || path === '/acompanhamento' || path === '/planos' || path === '/quiz')
      ? window.location.search.substring(1)
      : hash.split('?')[1] || '';
    const urlParams = new URLSearchParams(queryPart);
    const orderId = urlParams.get('orderId');
    const plan = urlParams.get('plan') || 'memoravel';

    // Ocultar elementos da Landing Page no painel admin e quiz para manter tela limpa
    const annBar = document.querySelector('.announcement-bar');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const floatActions = document.querySelector('.floating-actions');

    const isHome = !isAdmin && !isCheckout && !isAcompanhamento && !isPlanos && !isQuiz;

    if (isHome) {
      document.body.classList.remove('admin-mode');
      document.body.classList.add('is-home-route');
      if (annBar) annBar.style.display = '';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (floatActions) floatActions.style.display = '';
      document.body.style.backgroundColor = '';
    } else {
      // Para todas as outras rotas (Checkout, Acompanhamento, Admin, Planos, Quiz)
      document.body.classList.remove('is-home-route');
      if (isAdmin) {
        document.body.classList.add('admin-mode');
        document.body.style.backgroundColor = '#000000'; // Fundo preto puro para o admin
      } else if (isQuiz) {
        document.body.classList.remove('admin-mode');
        document.body.style.backgroundColor = '#0A0A0A'; // Fundo escuro para o quiz
      } else {
        document.body.classList.remove('admin-mode');
        document.body.style.backgroundColor = '';
      }
      if (annBar) annBar.style.display = 'none';
      if (header) header.style.display = 'none';
      if (footer) footer.style.display = 'none';
      if (floatActions) floatActions.style.display = 'none';
    }

    if (window.GlobalAudio) {
      window.GlobalAudio.pause();
      window.GlobalAudio.resetActiveBtnVisuals();
    }

    // Seletor de Rotas SPA
    if (isCheckout) {
      await renderCheckoutPage(mainEl, orderId);
    } else if (isAcompanhamento) {
      await renderAcompanhamentoPage(mainEl, orderId);
    } else if (isAdmin) {
      // Importa dinamicamente a view administrativa para otimização de bundle
      const { renderAdminPage } = await import('./adminDashboard.js');
      await renderAdminPage(mainEl, () => {
        window.location.hash = '#admin';
        renderRoute();
      });
    } else if (isQuiz) {
      mainEl.innerHTML = `
        <div class="quiz-page bg-dark" style="min-height: 100vh; min-height: 100dvh; min-height: 100dvh; position: relative; display: flex; align-items: center; justify-content: center; padding: 0;">
          <div id="quiz-container" style="width: 100%;"></div>
          <button class="quiz-close" onclick="window.location.hash = '#'">&times;</button>
        </div>
      `;
      window.scrollTo({ top: 0, behavior: 'instant' });
      QuizEngine(plan);
    } else if (isPlanos) {
      mainEl.innerHTML = `
        ${Pricing()}
        ${Warranty()}
      `;
      window.scrollTo({ top: 0, behavior: 'instant' });
      initMagneticButtons();
    } else {
      // Rota Padrão (Home)
      mainEl.innerHTML = `
        ${Hero()}
        ${HowItWorks()}
        ${MusicStyles()}
        ${SocialProofSection()}
        ${Categories()}
        ${Experience()}
        ${Warranty()}
        ${FAQ()}
        ${FooterCTA()}
      `;

      if (hash && hash !== '#') {
        // Usa hash apenas se parecer com uma âncora válida (começa com # + letra)
        if (/^#[a-zA-Z]/.test(hash)) {
          setTimeout(() => {
            try {
              const target = document.querySelector(hash);
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            } catch (_) { /* hash inválida para querySelector */ }
          }, 150);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }

    // Re-observe dynamic .reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    // Re-bind FAQ question toggles
    document.querySelectorAll('.faq-question').forEach(q => {
      q.onclick = () => {
        q.parentElement.classList.toggle('active');
      };
    });

    // Re-initialize dynamic components on the route
    initSpotifyPlayer();
    initAllAudioPlayers();
    initMusicStylesFilter();
    initMagneticButtons();
    initSocialProof();

    if (window.lucide) {
      lucide.createIcons();
    }

    // Track PageView on route change for SPA routing
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  } catch (err) {
    console.error('[AudioGift] Erro crítico ao renderizar rota:', err);
    mainEl.innerHTML = `
      <div style="
        min-height: 100vh; min-height: 100dvh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        padding: 2rem;
        background: #0a0a0a;
        color: #fff;
        font-family: Inter, sans-serif;
        text-align: center;
      ">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FC7301" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Algo deu errado</h2>
        <p style="color: #888; margin: 0; max-width: 360px;">Ocorreu um erro inesperado ao carregar a página. Por favor, tente novamente.</p>
        <button
          onclick="window.location.reload()"
          style="
            background: #FC7301;
            color: #fff;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 99px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
          "
        >Recarregar página</button>
      </div>
    `;
  }
};

// Initialize static components once
initMobileMenu();

// Listen to hash change and history navigation for routing
window.addEventListener('hashchange', renderRoute);
window.addEventListener('popstate', renderRoute);

// --- HEART TRAIL EFFECT ON MOUSEMOVE ---
if (window.matchMedia('(pointer: fine)').matches) {
  let lastX = 0;
  let lastY = 0;
  const minDistance = 50; // distância mínima em pixels para spawnar o próximo coração

  // Pool de corações para evitar criação/destruição constante no DOM
  const POOL_SIZE = 15;
  const heartPool = [];
  let poolIndex = 0;

  for (let i = 0; i < POOL_SIZE; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-trail';
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#FC7301', '#ffb3c1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    heart.innerHTML = `<svg viewBox="0 0 24 24" fill="${randomColor}" width="100%" height="100%"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    
    // Configurações iniciais de escuta para auto-ocultação ao final da animação
    heart.addEventListener('animationend', () => {
      heart.style.display = 'none';
      heart.classList.remove('active');
    });

    document.body.appendChild(heart);
    heartPool.push(heart);
  }

  const spawnHeart = (x, y) => {
    const heart = heartPool[poolIndex];
    poolIndex = (poolIndex + 1) % POOL_SIZE;

    const size = Math.random() * 8 + 8; // 8px a 16px
    const driftY = -50 - Math.random() * 50; // flutuar para cima
    const driftX = (Math.random() - 0.5) * 60; // balanço horizontal
    const rotate = (Math.random() - 0.5) * 60; // rotação leve

    // Atualiza propriedades e posiciona
    heart.style.display = 'block';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    
    heart.style.setProperty('--drift-x', `${driftX}px`);
    heart.style.setProperty('--drift-y', `${driftY}px`);
    heart.style.setProperty('--rotate', `${rotate}deg`);
    
    // Reinicia a animação CSS com hack de reflow super rápido
    heart.classList.remove('active');
    void heart.offsetWidth; // Força recálculo leve local
    heart.classList.add('active');
  };

  window.addEventListener('mousemove', (e) => {
    if (document.body.classList.contains('admin-mode')) {
      return;
    }
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const dist = Math.hypot(mouseX - lastX, mouseY - lastY);
    if (dist > minDistance) {
      spawnHeart(mouseX, mouseY);
      lastX = mouseX;
      lastY = mouseY;
    }
  });
}

// Initialize App and Lucide Icons
const initApp = () => {
  if (window.lucide) lucide.createIcons();
  renderRoute();
  initTrackOrderModal(); // Modal "Acompanhar pedido" — inicializado uma única vez

  // Fix Vimeo letterbox: measure the .smartphone-screen in real pixels and
  // set the iframe width to container_height × (9/16) so Vimeo sees a perfect
  // 9:16 container and renders the video without black bars.
  // The overflow is clipped by overflow:hidden on .smartphone-screen.
  function fixHeroVideoFill() {
    const screen = document.querySelector('.smartphone-screen');
    const iframe = screen ? screen.querySelector('iframe') : null;
    if (!screen || !iframe) return;

    const h = screen.offsetHeight;
    const w = screen.offsetWidth;
    // Video ratio is 9:16 = 0.5625
    const videoRatio = 9 / 16;
    // Width needed to fill the height with no letterbox
    const neededW = h * videoRatio;

    if (neededW > w) {
      // Container is narrower than 9:16: make iframe wider to fill height
      iframe.style.width = neededW + 'px';
      iframe.style.height = '100%';
      iframe.style.top = '0';
      iframe.style.left = '50%';
      iframe.style.transform = 'translateX(-50%)';
    } else {
      // Container is wider than 9:16 (landscape-ish): make iframe taller to fill width
      const neededH = w / videoRatio;
      iframe.style.width = '100%';
      iframe.style.height = neededH + 'px';
      iframe.style.left = '0';
      iframe.style.top = '50%';
      iframe.style.transform = 'translateY(-50%)';
    }
  }

  // Run after paint so offsetHeight is correct
  requestAnimationFrame(() => {
    fixHeroVideoFill();
    // Also rerun on resize
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(fixHeroVideoFill);
      const screen = document.querySelector('.smartphone-screen');
      if (screen) ro.observe(screen);
    }
  });

  // Desativa o preloader e exibe a página principal imediatamente para melhor performance
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('fade-out');
      document.body.classList.add('preloader-done', 'video-ready', 'content-ready', 'app-ready');
      document.body.style.backgroundColor = '';
      
      // Remove o preloader do DOM após a animação de fade-out (400ms)
      setTimeout(() => {
        preloader.remove();
      }, 400);
    } else {
      document.body.classList.add('preloader-done', 'video-ready', 'content-ready', 'app-ready');
      document.body.style.backgroundColor = '';
    }
  }, 50);
};

// Check if Lucide is already loaded via index.html script tag
if (window.lucide) {
  initApp();
} else {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';
  script.onload = initApp;
  document.head.appendChild(script);
}
