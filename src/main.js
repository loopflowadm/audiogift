import './style.css'

const Logo = (baseColor = 'white', giftColor = '#FC7301') => `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="5811px" height="1626px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 1507040 421800"
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

const AnnouncementBar = () => `
  <div class="announcement-bar">
    <div class="container announcement-content">
      <div class="announcement-badge">
        <i data-lucide="shield-check"></i>
        <span>100% satisfação garantida</span>
      </div>
      <p class="announcement-text">
        Seu dinheiro de volta se não se emocionar.
      </p>
      <a href="#create" class="announcement-link">
        Crie sua canção <i data-lucide="arrow-right"></i>
      </a>
    </div>
  </div>
`

const Pricing = () => `
  <section id="pricing" class="pricing-section py-large bg-white">
    <div class="container text-center">
      <h2 class="section-title-serif reveal">Escolha o plano perfeito para sua <em>história</em></h2>
      <p class="section-subtitle reveal">Presentes que emocionam, com a qualidade que sua história merece.</p>
      
      <div class="pricing-grid mt-12">
        <div class="pricing-card reveal" data-delay="1">
          <h3 class="plan-name">Especial</h3>
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
          <h3 class="plan-name">Memorável</h3>
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
          <h3 class="plan-name" style="color: #cda851; font-weight: 800;">★ VIP • Inesquecível</h3>
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
      <a href="#" class="logo">${Logo('white')}</a>
      <nav class="nav">
        <a href="#how">Como funciona</a>
        <a href="#styles">Estilos</a>
        <a href="#reviews">Depoimentos</a>
        <a href="#planos">Planos</a>
      </nav>
      <div class="nav-actions">
        <a href="#" class="btn-nav-outline">Acompanhar pedido</a>
        <a href="#create" class="btn-nav-gold">Criar sua canção</a>
        <button class="mobile-toggle" id="mobileToggle"><i data-lucide="menu"></i></button>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#how">Como funciona</a>
      <a href="#styles">Estilos</a>
      <a href="#reviews">Depoimentos</a>
      <a href="#planos">Planos</a>
      <a href="#" class="btn-primary-new w-full mt-4">Criar sua canção</a>
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
            <div class="style-player-card reveal" data-genre="${genre.name}" data-voice="${genre.voice}" data-delay="${(i % 4) + 1}">
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
        
        <div class="mt-4 reveal" data-delay="1">
          <button class="btn-outline">VER TODOS OS ESTILOS</button>
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
              <path fill="black" fill-rule="nonzero" d="M24880 0l102460 0c6450,0 12300,2630 16550,6880 4240,4240 6870,10100 6870,16540l0 54820 1910 0 0 40170 -1910 0 0 165550c0,6450 -2630,12300 -6870,16550 -4250,4240 -10100,6870 -16550,6870l-102460 0c-6440,0 -12300,-2630 -16540,-6870 -4240,-4250 -6880,-10100 -6880,-16550l0 -160060 -1460 0 0 -23420 1460 0 0 -6730 -1460 0 0 -23420 1460 0 0 -10320 -1460 0 0 -12810 1460 0 0 -23780c0,-6440 2640,-12300 6880,-16540 4240,-4250 10100,-6880 16540,-6880zm39450 11490l24010 0c2330,0 4240,1910 4240,4240l0 0c0,2340 -1910,4250 -4240,4250l-24010 0c-2330,0 -4240,-1910 -4240,-4250l0 0c0,-2330 1910,-4240 4240,-4240zm63010 -5630l-102460 0c-4820,0 -9210,1970 -12400,5160 -3180,3180 -5160,7570 -5160,12400l0 260540c0,4830 1980,9220 5160,12410 3190,3180 7580,5160 12400,5160l102460 0c4830,0 9220,-1980 12410,-5160 3180,-3190 5160,-7580 5160,-12410l0 -260540c0,-4830 -1980,-9220 -5160,-12400 -3190,-3190 -7580,-5160 -12410,-5160z"/>
            </svg>
            <div class="smartphone-screen">
              <iframe 
                class="hero-video" 
                src="https://player.vimeo.com/video/1195075467?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                style="width: 100%; height: 100%; object-fit: cover; border: none; background: #000; pointer-events: none;"
                allowfullscreen>
              </iframe>
            </div>
            <div class="smartphone-speaker"></div>
            <div class="smartphone-home-bar"></div>
            <button class="btn-play-example" aria-label="Ouvir Exemplo em Tela Cheia">
              <i data-lucide="volume-2"></i>
              Ouvir Exemplo
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
          <div class="tag-badge reveal"><i data-lucide="heart"></i> EMOÇÃO QUE TRANSFORMA</div>
          <h2 class="section-title-serif reveal" data-delay="1">Por que milhares de famílias se emocionam com o <em>Audiogift</em></h2>
          <p class="section-subtitle reveal" data-delay="2">Assista às reações em vídeo e veja os feedbacks reais de quem eternizou momentos inesquecíveis em música.</p>
          
          <div class="proof-tabs reveal" data-delay="3">
            <button class="proof-tab-btn active" data-tab="all">Mostrar Tudo</button>
            <button class="proof-tab-btn" data-tab="videos"><i data-lucide="video"></i> Reações em Vídeo</button>
            <button class="proof-tab-btn" data-tab="comments"><i data-lucide="image"></i> Prints e Depoimentos</button>
          </div>
        </div>

        <!-- Bento Grid -->
        <div class="proof-bento-grid" id="proofBentoGrid">
          ${bentoItems.map((item, idx) => {
            if (item.type === 'video') {
              return `
                <div class="proof-video-card bento-item reveal ${item.aspect === 'vertical' ? 'bento-portrait' : 'bento-square'}" data-delay="${(idx % 4) + 1}" data-video-url="${item.videoUrl}" data-aspect="${item.aspect}">
                  <div class="video-cover-wrap">
                    <img class="cover-img" src="${item.img}" alt="${item.title}">
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
                <div class="comment-img-card bento-item bento-square reveal" data-delay="${(idx % 4) + 1}" data-img-url="${item.imgUrl}">
                  <img src="${item.imgUrl}" alt="Feedback Cliente AudioGift" loading="lazy">
                  <div class="img-card-overlay">
                    <i data-lucide="zoom-in"></i>
                  </div>
                </div>
              `;
            }
          }).join('')}
        </div>
      </div>

      <!-- Video Player Modal -->
      <div class="video-modal-overlay" id="videoModalOverlay">
        <div class="video-modal-content" id="videoModalContent">
          <button class="video-modal-close" id="videoModalClose" aria-label="Fechar vídeo">&times;</button>
          <div class="video-player-container" id="modalVideoContainer" style="width:100%; height:100%;">
            <!-- Dynamic video player or iframe will be inserted here -->
          </div>
        </div>
      </div>

      <!-- Image Lightbox Modal -->
      <div class="image-modal-overlay" id="imageModalOverlay">
        <div class="image-modal-content-lightbox">
          <button class="image-modal-close" id="imageModalCloseBtn" aria-label="Fechar imagem">&times;</button>
          <img id="lightboxImage" src="" alt="Feedback Ampliado">
        </div>
      </div>
    </section>
  `;
};

const initSocialProof = () => {
  const tabs = document.querySelectorAll('.proof-tab-btn');
  const videoCards = document.querySelectorAll('.proof-video-card');
  const commentImgCards = document.querySelectorAll('.comment-img-card');

  if (!tabs.length) return;

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

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.tab;

      if (filter === 'all') {
        videoCards.forEach(c => c.style.display = 'block');
        commentImgCards.forEach(c => c.style.display = 'block');
      } else if (filter === 'videos') {
        videoCards.forEach(c => c.style.display = 'block');
        commentImgCards.forEach(c => c.style.display = 'none');
      } else if (filter === 'comments') {
        videoCards.forEach(c => c.style.display = 'none');
        commentImgCards.forEach(c => c.style.display = 'block');
      }
      
      // Re-trigger layout/reveal check
      if (window.observer) {
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      }
    });
  });

  // Modal Video Player logic
  const videoModal = document.getElementById('videoModalOverlay');
  const videoContent = document.getElementById('videoModalContent');
  const videoContainer = document.getElementById('modalVideoContainer');
  const videoCloseBtn = document.getElementById('videoModalClose');

  if (videoModal && videoContainer && videoCloseBtn) {
    videoCards.forEach(card => {
      card.addEventListener('click', () => {
        // Stop any background site audio that might be playing
        if (window.GlobalAudio) {
          window.GlobalAudio.pause();
        }
        
        const videoSrc = card.dataset.videoUrl;
        const isIframe = videoSrc.includes('vimeo.com') || videoSrc.includes('youtube.com') || videoSrc.includes('youtube-nocookie.com');
        const aspect = card.dataset.aspect || 'vertical';

        // Adjust modal content style for aspect ratio dynamically
        if (videoContent) {
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
              frameborder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              style="width:100%; height:100%; object-fit:cover; background:#000;" 
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

        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeVideoModal = () => {
      // Clear container to stop playback/destruct iframe or video
      videoContainer.innerHTML = '';
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    videoCloseBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal || e.target.classList.contains('video-player-container')) {
        closeVideoModal();
      }
    });
  }

  // Lightbox Image Logic
  const imageModal = document.getElementById('imageModalOverlay');
  const lightboxImg = document.getElementById('lightboxImage');
  const imageCloseBtn = document.getElementById('imageModalCloseBtn');

  if (imageModal && lightboxImg && imageCloseBtn) {
    commentImgCards.forEach(card => {
      card.addEventListener('click', () => {
        const imgSrc = card.dataset.imgUrl;
        lightboxImg.src = imgSrc;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeImageModal = () => {
      imageModal.classList.remove('active');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    };

    imageCloseBtn.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal || e.target.classList.contains('image-modal-content-lightbox')) {
        closeImageModal();
      }
    });
    
    // Close on ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeImageModal();
        if (videoModal && videoModal.classList.contains('active')) {
          closeVideoModal();
        }
      }
    });
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
                <img src="${cat.img}" alt="${cat.title}">
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
        <h2 class="section-title-serif reveal">Muito mais que uma música. <br><span class="text-orange">Uma experiência completa.</span></h2>
        <p class="section-subtitle reveal" data-delay="1">O presente ideal para emocionar e ser lembrado para sempre.</p>
        
        <div class="spotify-card-container reveal" data-delay="2">
          <div class="spotify-card player-scene">
            <!-- Capa do Álbum grande e quadrada -->
            <div class="spotify-art-wrap">
              <img id="spotifyAlbumImg" src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400" alt="Capa do Álbum" onerror="this.style.display='none';">
            </div>

            <!-- Informações da Música -->
            <div class="spotify-info-header">
              <div class="spotify-info-left">
                <span class="spotify-device-label"><i data-lucide="music"></i> Spotify Preview</span>
                <h3 class="spotify-song-title" id="playerTitle">Uma canção pra você</h3>
                <p class="spotify-song-artist" id="playerArtist">Audiogift · Single</p>
                <!-- Tag container hidden or kept hidden to satisfy JS query without breaking layout -->
                <div id="playerTags" style="display: none;"></div>
              </div>
              <div class="spotify-info-right">
                <button class="spotify-heart-btn" title="Salvar na sua Biblioteca"><i data-lucide="heart"></i></button>
              </div>
            </div>

            <!-- Barra de Progresso e Tempos -->
            <div class="spotify-progress-section">
              <div class="prog-bar-container" id="progBar">
                <div class="prog-fill" id="progFill"></div>
              </div>
              <div class="prog-times">
                <span id="timeCur">0:00</span>
                <span id="timeDur">0:30</span>
              </div>
            </div>

            <!-- Controles de Mídia -->
            <div class="spotify-controls-row">
              <button class="ctrl-btn" id="shuffleBtn" title="Ordem aleatória"><i data-lucide="shuffle"></i></button>
              <button class="ctrl-btn" id="prevBtn" title="Voltar"><i data-lucide="skip-back"></i></button>
              <button class="spotify-play-btn" id="playBtn" title="Tocar / Pausar">
                <i data-lucide="play" id="playIcon"></i>
              </button>
              <button class="ctrl-btn" id="nextBtn" title="Avançar"><i data-lucide="skip-forward"></i></button>
              <button class="ctrl-btn" id="repeatBtn" title="Repetir"><i data-lucide="repeat"></i></button>
            </div>

            <!-- Volume e Rodapé -->
            <div class="spotify-bottom-row">
              <div class="vol-control">
                <button class="ctrl-btn volume-icon-btn" id="volumeMuteBtn"><i data-lucide="volume-2" class="vol-icon"></i></button>
                <div class="vol-bar-container" id="volBar">
                  <div class="vol-fill" id="volFill"></div>
                </div>
              </div>
              <div class="spotify-device-info">
                <i data-lucide="monitor-speaker"></i> Devices Available
              </div>
            </div>
          </div>

          <!-- Playlist de faixas demonstrativas abaixo do player -->
          <div class="spotify-playlist-wrapper">
            <h4 class="playlist-title"><i data-lucide="list-music"></i> Escolha uma demonstração:</h4>
            <div class="player-footer" id="playerPlaylist">
              <!-- Playlist pills generated by JS -->
            </div>
          </div>
        </div>

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
      
      <div class="wa-how-section mt-4 reveal" data-delay="3">
        <div class="wa-container-premium">
          <div class="wa-header">
            <div class="wa-avatar">
              <img src="https://i.pravatar.cc/100?u=audiogift" alt="Consultor">
              <span class="online-indicator"></span>
            </div>
            <div class="wa-user-info">
              <strong>Especialista Audiogift</strong>
              <span>Online agora</span>
            </div>
          </div>
          <div class="wa-chat-body">
            <div class="wa-bubble-received">
              <p>Olá! Tudo bem? Ouça esse exemplo de como explicamos o processo para nossos clientes: ✨</p>
              <span class="wa-time">10:45</span>
            </div>
            <div class="wa-bubble-received">
              <div class="wa-voice-note">
                <button class="wa-play-main"><i data-lucide="play"></i></button>
                <div class="wa-audio-content">
                  <div class="wa-waveform">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <div class="wa-audio-meta">
                    <span>0:19</span>
                    <i data-lucide="check-check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <a href="https://wa.me/5511999999999" class="btn-primary-new btn-magnetic">
          <i data-lucide="message-circle"></i> Falar com especialista agora
        </a>
      </div>
    </div>
  </section>
`


const FloatingButtons = () => `
  <div class="floating-actions">
    <a href="https://wa.me/5511999999999" class="float-btn wa-float" target="_blank">
      <i data-lucide="message-circle"></i>
      <span class="tooltip">Falar com especialista</span>
    </a>
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
            <a href="https://www.tiktok.com/@audiogift" target="_blank" class="btn-social-tk footer-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.31-1.92 1.57-4.58 2.22-6.95 1.55-2.61-.75-4.75-2.88-5.46-5.51-.71-2.67-.09-5.61 1.72-7.75 1.77-2.09 4.61-3.1 7.29-2.71v4.06c-1.89-.3-3.83.27-5.06 1.63-1.45 1.63-1.47 4.15-.22 5.8 1.34 1.77 3.95 2.21 5.88 1.05 1.2-.73 1.94-2.03 1.98-3.41.05-4.22.03-8.45.03-12.68.01-2.05-.01-4.09.03-6.14z"/></svg>TikTok</a>
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
  window.Quiz = Quiz;
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
            <label class="quiz-label">Nome do homenageado(a) que aparecerá na música</label>
            <input type="text" placeholder="Digite o primeiro nome" class="quiz-input" id="quizName">
            <p class="quiz-hint">Dica: use a acentuação correta para garantir a pronúncia (ex: Thaís, Jéssica, Luísa).</p>
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
        </div>
      `
    },
    {
      title: 'Como ela faz você se sentir?',
      subtitle: 'Descreva tudo que essa pessoa significa para você e o porquê merece essa linda homenagem',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Como ela faz você se sentir? *</label>
          <textarea class="quiz-textarea" placeholder="Ele(a) é paciente, sábio(a), engraçado(a), encorajador(a), piedoso(a)? O que faz dessa pessoa alguém incrível para você? O que você sente quando pensa nele(a) ou está com ele(a)? Por que ela significa tanto para você?"></textarea>
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
                <h3>Especial • <span>entrega em 7 dias</span></h3>
                <p>Ideal para quem pode esperar um pouco mais</p>
              </div>
              <div class="plan-price">R$ 89,90</div>
              <div class="plan-radio"></div>
            </div>

            <div class="pricing-card-horizontal active popular" data-plan="memoravel">
              <div class="plan-badge-top">MAIS POPULAR</div>
              <div class="plan-icon-box"><i data-lucide="rocket"></i></div>
              <div class="plan-info">
                <h3>Memorável • <span>entrega em até 72h</span></h3>
                <p>Letra em PDF + Playback instrumental</p>
              </div>
              <div class="plan-price">R$ 149,90</div>
              <div class="plan-radio"><i data-lucide="check"></i></div>
            </div>

            <div class="pricing-card-horizontal vip" data-plan="inesquecivel">
              <div class="plan-badge-top-vip">★ VIP</div>
              <div class="plan-icon-box"><i data-lucide="zap"></i></div>
              <div class="plan-info">
                <h3>Inesquecível • <span>entrega em até 24h</span></h3>
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
    genre: '',
    voice: '',
    feelings: '',
    story: '',
    message: '',
    babyName: '',
    plan: defaultPlan,
    email: '',
    phone: ''
  };

  const checkStepValidity = () => {
    if (currentStep === 0) {
      return !!(answers.forWho && answers.occasion);
    } else if (currentStep === 1) {
      return !!answers.genre;
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
      const isPhoneValid = !isWhatsappChecked || (answers.phone && answers.phone.trim().length >= 8);
      return isEmailValid && isPhoneValid;
    }
    return true;
  };

  const updateNextButtonState = () => {
    const nextBtn = document.querySelector('.btn-quiz-next');
    if (!nextBtn) return;
    const isValid = checkStepValidity();
    if (isValid) {
      nextBtn.removeAttribute('disabled');
      nextBtn.classList.remove('disabled');
    } else {
      nextBtn.setAttribute('disabled', 'true');
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
    } else if (currentStep === 1) {
      const optionGroups = document.querySelectorAll('.quiz-step-content .quiz-options');
      const activeGenre = optionGroups[0] ? optionGroups[0].querySelector('.active') : null;
      if (activeGenre) answers.genre = activeGenre.dataset.value;

      const activeVoice = optionGroups[1] ? optionGroups[1].querySelector('.active') : null;
      if (activeVoice) answers.voice = activeVoice.dataset.value;
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
      const inputs = document.querySelectorAll('.quiz-capture-section input');
      if (inputs[0]) answers.email = inputs[0].value.trim();
      if (inputs[1]) answers.phone = inputs[1].value.trim();
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
    } else if (currentStep === 1) {
      if (answers.genre) {
        const pill = document.querySelector(`.pill-option[data-value="${answers.genre}"]`);
        if (pill) pill.classList.add('active');
      }
      if (answers.voice) {
        const pill = document.querySelector(`.pill-option[data-value="${answers.voice}"]`);
        if (pill) pill.classList.add('active');
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
      const inputs = document.querySelectorAll('.quiz-capture-section input');
      if (inputs[0] && answers.email) inputs[0].value = answers.email;
      if (inputs[1] && answers.phone) inputs[1].value = answers.phone;

      const planNames = {
        especial: { name: 'Especial • entrega em 7 dias', price: 'R$ 89,90' },
        memoravel: { name: 'Memorável • entrega em até 72h', price: 'R$ 149,90' },
        inesquecivel: { name: 'Inesquecível • entrega em até 24h', price: 'R$ 199,90' }
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
    const planNames = {
      especial: { name: 'Especial', nameFull: 'Especial • entrega em 7 dias', price: 89.90, priceStr: 'R$ 89,90', delivery: '7 dias', deliveryHours: '7 dias', icon: 'clock' },
      memoravel: { name: 'Memorável', nameFull: 'Memorável • entrega em até 72h', price: 149.90, priceStr: 'R$ 149,90', delivery: 'até 72h', deliveryHours: '72 horas', icon: 'rocket' },
      inesquecivel: { name: 'Inesquecível', nameFull: 'Inesquecível • entrega em até 24h', price: 199.90, priceStr: 'R$ 199,90', delivery: 'até 24h', deliveryHours: '24 horas', icon: 'zap' }
    };
    
    const planObj = planNames[answers.plan] || planNames['memoravel'];
    const totalPriceStr = planObj.priceStr;

    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-modal-inner checkout-step-inner">
        <div class="quiz-header checkout-header">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="quiz-top-info">
            <span>Passo 7 de 7</span>
            <div class="quiz-logo-small">${Logo('white', '#000000')}</div>
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
              <label class="quiz-label" style="margin-bottom:8px; font-weight:800; font-size: 0.95rem;">Insira o seu melhor endereço de email * <span class="label-required">Obrigatório</span></label>
              <input type="email" placeholder="voce@email.com" class="quiz-input checkout-email-input" value="${answers.email || ''}">
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
              <li><i data-lucide="check"></i> <span>Suporte exclusivo via WhatsApp: +55 (11) 99999-9999</span></li>
            </ul>
          </div>

          <div class="checkout-testimonial-card mt-4">
            <h3>💬 O Que Nossos Clientes Dizem</h3>
            <div id="checkout-testimonial-container"></div>
            <div class="testimonial-nav">
              <button class="testi-arrow prev" id="testi-checkout-prev"><i data-lucide="chevron-left"></i></button>
              <div class="testi-dots" id="testi-checkout-dots"></div>
              <button class="testi-arrow next" id="testi-checkout-next"><i data-lucide="chevron-right"></i></button>
            </div>
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

    const testimonials = [
      {
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
        quote: '"Minha mãe chorou quando ouviu a música. Ela disse que foi o presente mais especial que já recebeu em 70 anos de vida. Valeu cada centavo!"',
        name: 'Maria Silva',
        city: 'São Paulo, SP'
      },
      {
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
        quote: '"Fiz para o aniversário de namoro com a Thaís. A voz ficou linda demais e a letra pegou cada detalhe que escrevi. Ficou perfeito!"',
        name: 'Thiago M.',
        city: 'Rio de Janeiro, RJ'
      },
      {
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
        quote: '"O plano VIP de 24h foi a salvação! Entregaram super rápido e ficou simplesmente emocionante. Toda a família chorou reunida."',
        name: 'Ana Laura G.',
        city: 'Belo Horizonte, MG'
      }
    ];

    let currentTestiIdx = 0;
    const renderTesti = () => {
      const t = testimonials[currentTestiIdx];
      const container = document.getElementById('checkout-testimonial-container');
      if (!container) return;

      container.innerHTML = `
        <div class="checkout-testimonial-slide active">
          <img src="${t.img}" alt="${t.name}" class="testimonial-avatar">
          <blockquote class="testimonial-quote">
            ${t.quote}
          </blockquote>
          <cite class="testimonial-author">
            <strong>${t.name}</strong>
            <span>${t.city}</span>
          </cite>
        </div>
      `;

      const dotsContainer = document.getElementById('testi-checkout-dots');
      if (dotsContainer) {
        dotsContainer.innerHTML = testimonials.map((_, idx) => `
          <span class="dot ${idx === currentTestiIdx ? 'active' : ''}" data-idx="${idx}"></span>
        `).join('');

        dotsContainer.querySelectorAll('.dot').forEach(dot => {
          dot.onclick = () => {
            currentTestiIdx = parseInt(dot.dataset.idx);
            renderTesti();
          };
        });
      }
      lucide.createIcons();
    };

    renderTesti();

    const btnTestiPrev = document.getElementById('testi-checkout-prev');
    const btnTestiNext = document.getElementById('testi-checkout-next');

    if (btnTestiPrev) {
      btnTestiPrev.onclick = () => {
        currentTestiIdx = currentTestiIdx === 0 ? testimonials.length - 1 : currentTestiIdx - 1;
        renderTesti();
      };
    }
    if (btnTestiNext) {
      btnTestiNext.onclick = () => {
        currentTestiIdx = currentTestiIdx === testimonials.length - 1 ? 0 : currentTestiIdx + 1;
        renderTesti();
      };
    }

    const emailInput = document.querySelector('.checkout-email-input');
    const phoneInput = document.querySelector('.checkout-phone-input');

    const handleInputChanges = () => {
      answers.email = emailInput ? emailInput.value.trim() : '';
      answers.phone = phoneInput ? phoneInput.value.trim() : '';
      
      const isWhatsappChecked = document.getElementById('whatsapp-followup') 
        ? document.getElementById('whatsapp-followup').checked 
        : true;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email);
      const isPhoneValid = !isWhatsappChecked || (answers.phone && answers.phone.trim().length >= 8);
      const isValid = isEmailValid && isPhoneValid;
      
      const btns = [
        document.getElementById('btn-checkout-top'),
        document.getElementById('btn-checkout-bottom')
      ];

      btns.forEach(btn => {
        if (!btn) return;
        if (isValid) {
          btn.removeAttribute('disabled');
          btn.classList.remove('disabled');
        } else {
          btn.setAttribute('disabled', 'true');
          btn.classList.add('disabled');
        }
      });
    };

    if (emailInput) emailInput.oninput = handleInputChanges;
    if (phoneInput) phoneInput.oninput = handleInputChanges;

    const whatsappCheckbox = document.getElementById('whatsapp-followup');
    if (whatsappCheckbox) whatsappCheckbox.onchange = handleInputChanges;

    handleInputChanges();

    // --- Extras Modal Logic ---
    const extrasModal = document.getElementById('extras-modal-overlay');
    const btnOpenExtras = document.getElementById('btn-open-extras-modal');
    const btnCloseExtras = document.getElementById('extras-modal-close');
    const btnSaveExtras = document.getElementById('btn-extras-save');
    const btnClearExtras = document.getElementById('btn-extras-clear');

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

    const triggerCheckoutPayment = () => {
      const isWhatsappChecked = document.getElementById('whatsapp-followup') 
        ? document.getElementById('whatsapp-followup').checked 
        : true;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email || '');
      if (!isEmailValid) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
      }
      if (isWhatsappChecked && (!answers.phone || answers.phone.trim().length < 8)) {
        alert('Por favor, preencha o WhatsApp para receber o acompanhamento da música.');
        return;
      }
      
      const kiwifyLinks = {
        'especial': 'https://pay.kiwify.com.br/yZYhb1T',
        'memoravel': 'https://pay.kiwify.com.br/1RiFp8q',
        'inesquecivel': 'https://pay.kiwify.com.br/VZnGyRD'
      };
      
      const baseUrl = kiwifyLinks[answers.plan] || kiwifyLinks['memoravel'];
      
      // Build checkout URL with prefill parameters and metadata parameters
      const params = [];
      if (answers.email) params.push(`email=${encodeURIComponent(answers.email)}`);
      if (answers.phone) {
        params.push(`phone=${encodeURIComponent(answers.phone)}`);
        params.push(`mobile=${encodeURIComponent(answers.phone)}`);
      }
      if (answers.forWho) params.push(`para_quem=${encodeURIComponent(answers.forWho)}`);
      if (answers.occasion) params.push(`ocasiao=${encodeURIComponent(answers.occasion)}`);
      if (answers.name) params.push(`homenageado=${encodeURIComponent(answers.name)}`);
      if (answers.genre) params.push(`estilo=${encodeURIComponent(answers.genre)}`);
      if (answers.voice) params.push(`voz=${encodeURIComponent(answers.voice)}`);
      if (answers.feelings) params.push(`qualidades=${encodeURIComponent(answers.feelings)}`);
      if (answers.story) params.push(`historia=${encodeURIComponent(answers.story)}`);
      if (answers.message) params.push(`mensagem=${encodeURIComponent(answers.message)}`);
      if (answers.babyName) params.push(`bebe_nome=${encodeURIComponent(answers.babyName)}`);
      
      const checkoutUrl = `${baseUrl}?${params.join('&')}`;
      
      alert('Tudo certo! Redirecionando para a página segura de pagamento da Kiwify...');
      window.location.href = checkoutUrl;
      document.getElementById('quiz-overlay').classList.remove('active');
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
    const step = steps[currentStep];
    const progress = Math.round(((currentStep + 1) / steps.length) * 100);
    
    if (currentStep === 6) {
      renderCheckoutStep(progress);
      return;
    }
    
    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-modal-inner">
        <div class="quiz-header">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="quiz-top-info">
            <span>Passo ${currentStep + 1} de ${steps.length}</span>
            <div class="quiz-logo-small">${Logo('white', '#000000')}</div>
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
    document.querySelectorAll('.pill-option').forEach(btn => {
      btn.onclick = () => {
        btn.parentElement.querySelectorAll('.pill-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
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
        if (!answers.forWho || !answers.occasion) {
          isValid = false;
          errorMsg = 'Por favor, selecione para quem é a canção e qual a ocasião.';
        }
      } else if (currentStep === 1) {
        if (!answers.genre) {
          isValid = false;
          errorMsg = 'Por favor, selecione o gênero musical preferido.';
        }
      } else if (currentStep === 2 || currentStep === 3) {
        if (currentStep === 2 && answers.feelings.length < 5) {
          isValid = false;
          errorMsg = 'Por favor, descreva com suas palavras para prosseguir.';
        }
        if (currentStep === 3 && answers.story.length < 5) {
          isValid = false;
          errorMsg = 'Por favor, descreva com suas palavras para prosseguir.';
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
        if (!isEmailValid) {
          isValid = false;
          errorMsg = 'Por favor, insira um endereço de e-mail válido.';
        } else if (isWhatsappChecked && (!answers.phone || answers.phone.trim().length < 8)) {
          isValid = false;
          errorMsg = 'Por favor, preencha o WhatsApp para receber o acompanhamento da música.';
        }
      }

      if (!isValid) {
        alert(errorMsg);
        return;
      }

      if (currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
      } else {
        alert('Tudo certo! Redirecionando para o ambiente seguro de pagamento...');
        document.getElementById('quiz-overlay').classList.remove('active');
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

  document.getElementById('quiz-overlay').classList.add('active');
  renderStep();
};

app.innerHTML = `
  <div id="quiz-overlay" class="quiz-overlay">
    <div id="quiz-container"></div>
    <button class="quiz-close" onclick="document.getElementById('quiz-overlay').classList.remove('active')">&times;</button>
  </div>
  ${AnnouncementBar()}
  ${Header()}
  <main></main>
  ${Footer()}
  ${FloatingButtons()}

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
    const href = btn.getAttribute('href');
    if (href === '#create' || btn.classList.contains('btn-primary-new') || btn.classList.contains('btn-nav-gold') || (btn.tagName === 'BUTTON' && btn.closest('.pricing-card'))) {
      if (btn.hasAttribute('onclick')) {
        return;
      }
      e.preventDefault();
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

// Initialize Lucide Icons via dynamic script injection
const script = document.createElement('script');
script.src = 'https://unpkg.com/lucide@latest';
script.onload = () => {
  if (window.lucide) lucide.createIcons();
  renderRoute();
};
document.head.appendChild(script);

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
    if (entry.isIntersecting) entry.target.classList.add('visible');
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
};

// --- MUSIC STYLES FILTER AND SEARCH ---
const initMusicStylesFilter = () => {
  const searchInput = document.querySelector('.search-input');
  const styleCards = document.querySelectorAll('.style-player-card');

  if (!searchInput || !styleCards.length) return;

  let searchQuery = '';

  const filterCards = () => {
    styleCards.forEach(card => {
      const genreName = card.getAttribute('data-genre').toLowerCase();
      const songTitle = (card.querySelector('.genre-name-label')?.textContent || '').toLowerCase();

      const matchesSearch = genreName.includes(searchQuery) || songTitle.includes(searchQuery);

      if (matchesSearch) {
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

const initMobileMenu = () => {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    const icon = toggle.querySelector('[data-lucide]');
    if (menu.classList.contains('active')) {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      lucide.createIcons();
    });
  });
};

// Roteador SPA
const renderRoute = () => {
  const hash = window.location.hash;
  const mainEl = document.querySelector('main');
  if (!mainEl) return;

  if (window.GlobalAudio) {
    window.GlobalAudio.pause();
    window.GlobalAudio.resetActiveBtnVisuals();
  }

  if (hash === '#planos') {
    mainEl.innerHTML = `
      ${Pricing()}
      ${Warranty()}
    `;
    window.scrollTo({ top: 0, behavior: 'instant' });
  } else {
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
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
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
};

// Initialize static components once
initMobileMenu();

// Listen to hash change for routing
window.addEventListener('hashchange', renderRoute);

// --- CUSTOM CURSOR LOGIC ---
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  const cursorOutline = document.createElement('div');
  cursorOutline.className = 'cursor-outline';
  
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;
    
    // Snappier 0.32 lerp for instant responsive tracking
    outlineX = outlineX + distX * 0.32;
    outlineY = outlineY + distY * 0.32;
    
    // GPU hardware-accelerated translate3d transforms
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
    
    requestAnimationFrame(animate);
  };
  animate();

  // Re-bind hover events periodically in case of dynamic DOM changes
  setInterval(() => {
    const interactables = document.querySelectorAll('a, button, .btn-primary-new, .btn-nav-gold, .pill-option, .faq-question');
    interactables.forEach(el => {
      if(!el.dataset.cursorBound) {
        el.dataset.cursorBound = 'true';
        el.addEventListener('mouseenter', () => {
          cursorOutline.classList.add('cursor-hover');
          cursorDot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
          cursorOutline.classList.remove('cursor-hover');
          cursorDot.classList.remove('cursor-hover');
        });
      }
    });
  }, 1000);
}
