import './style.css'

const Logo = (color = 'var(--black)') => `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="48" viewBox="0 0 4070910 1075080" fill="${color}" style="display: block;">
 <g id="Camada_x0020_1">
  <g id="_2105988202176">
   <path d="M110700 853680c1650,0 3290,40 4930,110l0 -267560c0,-38180 14550,-56590 44700,-79580l399000 -304250 0 692060c0,61140 -49570,110700 -110700,110700 -61140,0 -110700,-49560 -110700,-110700 0,-63000 52460,-113330 115630,-110580l0 -89980 -232160 0 0 270410c390,60550 -49340,110770 -110700,110770 -61140,0 -110700,-49560 -110700,-110700 0,-61140 49560,-110700 110700,-110700zm342860 -260590l0 -177020 -232160 177020 232160 0zm1622330 57080c0,68360 -26880,115110 -82970,115110 -56090,0 -82970,-46750 -82970,-115110 0,-68360 26880,-115100 82970,-115100 56090,0 82970,46740 82970,115100zm-300320 0c0,152500 104590,220270 217350,220270 112760,0 217350,-67770 217350,-220270 0,-147230 -105750,-220270 -217350,-220270 -111600,0 -217350,73040 -217350,220270zm-200590 145490c0,44990 25710,72450 67190,72450 41480,0 67190,-27460 67190,-72450l0 -290970c0,-44990 -25710,-72450 -67190,-72450 -41480,0 -67190,27460 -67190,72450l0 290970zm-454750 -15190c0,56090 24540,80040 76530,80040l113940 0c139640,0 201570,-93480 201570,-210340 0,-116850 -61930,-210330 -201570,-210330l-113940 0c-51990,0 -76530,23950 -76530,80040l0 260590zm130870 -25130l0 -210330 29800 0c77710,0 96990,38560 96990,105160 0,66610 -19280,105170 -96990,105170l-29800 0zm-340820 -59010c0,43820 -20450,72450 -67770,72450 -47330,0 -67780,-28630 -67780,-72450l0 -191640c0,-44990 -25710,-72450 -67190,-72450 -41480,0 -67190,27460 -67190,72450l0 192810c0,127370 86470,172940 202160,172940 115680,0 202160,-45570 202160,-172940l0 -192810c0,-44990 -25710,-72450 -67200,-72450 -41480,0 -67190,27460 -67190,72450l0 191640z"/>
   <path d="M2716940 718530c-9350,32140 -32720,50250 -74200,50250 -67780,0 -87060,-44990 -87060,-116270 0,-84130 36810,-117440 81800,-117440 59010,0 60180,54340 103410,54340 42070,0 64270,-32130 64270,-59010 0,-32720 -36810,-100500 -172360,-100500 -94650,0 -211500,61350 -211500,220270 0,169440 111010,220270 205080,220270 46150,0 99320,-18690 120360,-53160l1160 0 0 11680c0,22200 16950,41480 44410,41480 37390,0 46740,-28630 46740,-55500l0 -120360c0,-35640 -23370,-63690 -63100,-63690l-86470 0c-29220,0 -44990,18120 -44990,46160 0,25120 19280,41480 39730,41480l32720 0zm201180 77130c0,44990 25710,72450 67190,72450 41480,0 67190,-27460 67190,-72450l0 -290970c0,-44990 -25710,-72450 -67190,-72450 -41480,0 -67190,27460 -67190,72450l0 290970zm357180 -184630l0 -66020 135550 0c50250,0 63680,-25710 63680,-52590 0,-26880 -13430,-52580 -63680,-52580l-193400 0c-52000,0 -76540,23950 -76540,80040l0 275780c0,44990 25710,72450 67200,72450 41480,0 67190,-27460 67190,-72450l0 -82970 121520 0c32140,0 48500,-24540 48500,-50830 0,-26290 -16360,-50830 -48500,-50830l-121520 0zm398420 -62520l0 247150c0,44990 25710,72450 67190,72450 41490,0 67190,-27460 67190,-72450l0 -247150 81220 0c37980,0 54920,-22200 54920,-54340 0,-32130 -16940,-54330 -59590,-54330l-287470 0c-42650,0 -59590,22200 -59590,54330 0,32140 16940,54340 54920,54340l81210 0zm-277630 -234090l560590 0c62870,0 114230,51360 114230,114220l0 451690c0,62870 -51360,114230 -114230,114230l-1547820 0c-62870,0 -114230,-51360 -114230,-114230l0 -451690c0,-62860 51360,-114220 114230,-114220 211170,0 422340,0 633520,0 18840,12400 38170,23210 57090,32090 7760,3650 15340,7050 22770,10210 -237800,0 -475590,0 -713380,0 -39520,0 -71920,32410 -71920,71920l0 451690c0,39520 32400,71920 71920,71920l1547820 0c39510,0 71920,-32400 71920,-71920l0 -451690c0,-39510 -32410,-71920 -71920,-71920l-558060 0c-111810,0 -177530,-1130 -280670,-49570 -57360,-26940 -126610,-77830 -159100,-138680 -17120,-32070 -20990,-61990 -15560,-87540 19260,-90580 125390,-99800 193220,-53980 35240,23810 65460,64320 83410,103360 34500,-56000 121760,-103980 179670,-54430 26050,22290 35840,54010 32530,85460 -7160,67980 -73540,105860 -123470,111970 28560,-16680 66000,-56280 77590,-96470 17620,-61090 -31790,-96990 -87960,-62920 -49080,29770 -65320,86330 -82350,137040 -11190,-57730 -52300,-154690 -103050,-188970 -41910,-28320 -115490,-32420 -128270,27700 -9590,45080 31410,93520 66250,124070 28560,25050 60390,43690 84940,55220 96720,45410 156220,45440 260290,45440z"/>
  </g>
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
          <h3 class="plan-name">Digital</h3>
          <div class="plan-price">
            <span class="currency">R$</span>
            <span class="amount">147</span>
            <span class="period">/único</span>
          </div>
          <ul class="plan-features">
            <li><i data-lucide="check-circle"></i> Canção Personalizada HD</li>
            <li><i data-lucide="check-circle"></i> Letra Exclusiva</li>
            <li><i data-lucide="check-circle"></i> Entrega em até 3 dias</li>
            <li><i data-lucide="check-circle"></i> Link para Spotify Privado</li>
          </ul>
          <button class="btn-primary-new w-full" onclick="startQuiz()">Começar Agora</button>
        </div>

        <div class="pricing-card popular reveal" data-delay="2">
          <div class="popular-badge">Mais Escolhido</div>
          <h3 class="plan-name">Presente</h3>
          <div class="plan-price">
            <span class="currency">R$</span>
            <span class="amount">297</span>
            <span class="period">/único</span>
          </div>
          <ul class="plan-features">
            <li><i data-lucide="check-circle"></i> <strong>Tudo do plano Digital</strong></li>
            <li><i data-lucide="check-circle"></i> Entrega em 24 Horas</li>
            <li><i data-lucide="check-circle"></i> Página de Homenagem Web</li>
            <li><i data-lucide="check-circle"></i> QR Code para Presente</li>
          </ul>
          <button class="btn-primary-new w-full" onclick="startQuiz()">Começar Agora</button>
        </div>

        <div class="pricing-card reveal" data-delay="3">
          <h3 class="plan-name">Eternidade</h3>
          <div class="plan-price">
            <span class="currency">R$</span>
            <span class="amount">497</span>
            <span class="period">/único</span>
          </div>
          <ul class="plan-features">
            <li><i data-lucide="check-circle"></i> <strong>Tudo do plano Presente</strong></li>
            <li><i data-lucide="check-circle"></i> Placa de Acrílico (Opcional)</li>
            <li><i data-lucide="check-circle"></i> Vídeo com Retrospectiva</li>
            <li><i data-lucide="check-circle"></i> Suporte VIP 24h</li>
          </ul>
          <button class="btn-primary-new w-full" onclick="startQuiz()">Começar Agora</button>
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
      <a href="#" class="btn-primary-new w-full mt-4">Criar sua canção</a>
    </div>
  </header>
`

const MusicStyles = () => {
  const genresTags = [
    'Arrocha / Brega', 'Axé', 'Black Music', 'Blues Americano', 'Bolero', 'Capoeira', 'Forró', 'Funk',
    'Gospel', 'Infantil', 'Jazz', 'Jovem Guarda', 'MPB', 'Música Clássica', 'Música Eletrônica', 'Música Latina',
    'Pagode', 'Pop', 'Rap', 'Reggae', 'Rock', 'Samba', 'Sertanejo', 'Tango', 'Valsa'
  ]
  
  const featuredGenres = [
    { name: 'Sertanejo', voice: 'Masculina' },
    { name: 'Pop', voice: 'Feminina' },
    { name: 'Gospel', voice: 'Feminina' },
    { name: 'MPB', voice: 'Masculina' },
    { name: 'Samba/Pagode', voice: 'Masculina' },
    { name: 'Rock', voice: 'Masculina' },
    { name: 'Forró', voice: 'Feminina' },
    { name: 'Jazz', voice: 'Instrumental' },
    { name: 'Infantil', voice: 'Feminina' },
    { name: 'Rap/Trap', voice: 'Masculina' },
    { name: 'Bossa Nova', voice: 'Feminina' },
    { name: 'Reggae', voice: 'Masculina' }
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
            <input type="text" placeholder="Buscar gênero musical..." class="search-input">
          </div>
          
          <div class="voice-toggle-wrapper">
            <span>Quero ouvir os exemplos com voz:</span>
            <div class="voice-toggle">
              <button class="toggle-btn active">Masculina</button>
              <button class="toggle-btn">Feminina</button>
            </div>
          </div>
        </div>

        <div class="genre-tags mb-4 reveal" data-delay="4">
          <button class="tag-btn active">Todos</button>
          ${genresTags.map(genre => `<button class="tag-btn">${genre}</button>`).join('')}
        </div>
        
        <div class="genre-grid-players">
          ${featuredGenres.map((genre, i) => `
            <div class="style-player-card reveal" data-delay="${(i % 4) + 1}">
              <div class="wa-bubble-small">
                <button class="wa-play-small"><i data-lucide="play"></i></button>
                <div class="wa-info-small">
                  <span class="wa-name-small">${genre.name}</span>
                  <div class="wa-wave-small"></div>
                  <span class="wa-time-small">0:30</span>
                </div>
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
        <div class="hero-visual-wrapper reveal" data-delay="1">
          <div class="hero-video-container">
            <iframe 
              class="hero-video" 
              src="https://www.youtube-nocookie.com/embed/euebKq4kErQ?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&loop=1&playlist=euebKq4kErQ" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            <button class="btn-play-example">
              <i data-lucide="play"></i>
              Ouvir Exemplo
            </button>
          </div>
        </div>
        
        <div class="hero-text-content text-center">
        <p class="tagline reveal" data-delay="2">A plataforma #1 de músicas personalizadas</p>
          <h1 class="main-title reveal" data-delay="3">Tudo que você nunca conseguiu dizer... <em>Agora em uma canção.</em></h1>
          <p class="hero-subtitle reveal" data-delay="4">A homenagem definitiva para quem você ama. Uma composição exclusiva, feita sob medida para a sua história.</p>
          <div class="hero-cta-wrapper reveal" data-delay="5">
            <a href="#create" class="btn-primary-new btn-magnetic">
              <i data-lucide="gift"></i>
              HOMENAGEAR ALGUÉM AGORA
            </a>
            <div class="hero-trust">
              <div class="stars">
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
                <i data-lucide="star"></i>
              </div>
              <p>Mais de <strong>2.000 pessoas</strong> já se emocionaram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      type: 'audio-song',
      title: 'Deus me Deu Você',
      artist: 'Audiogift',
      img: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'whatsapp',
      name: 'Rosely',
      role: 'Depoimento em Áudio',
      avatar: 'https://i.pravatar.cc/100?u=rosely',
      audios: [
        { time: '0:23', src: 'https://pub-b085b85804204c82b96e15ec554b0940.r2.dev/depoimento1.mp3' },
        { time: '0:45', src: 'https://pub-b085b85804204c82b96e15ec554b0940.r2.dev/depoimento2.mp3' }
      ]
    },
    {
      type: 'text',
      name: 'Vera Lúcia S.',
      content: 'Oh glória a Deus! Isso é absolutamente de tirar o fôlego. Eu não consigo acreditar... Vou ter dificuldade em manter isso em segredo até domingo. Vamos ouvir no caminho para a igreja! Deus abençoe este trabalho que vocês estão fazendo.',
      avatar: 'https://i.pravatar.cc/100?u=vera'
    },
    {
      type: 'audio-song',
      title: 'Três Apertos',
      artist: 'Audiogift',
      img: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'audio-song',
      title: 'Meu Coração é Seu',
      artist: 'Audiogift',
      img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return `
    <section class="testimonials-carousel-section py-large bg-soft overflow-hidden">
      <div class="container text-center mb-16">
        <h2 class="section-title-serif reveal">Por que mais de 10.000 famílias amam o <em>Audiogift</em></h2>
      </div>
      
      <div class="carousel-container-wrapper relative">
        <div class="carousel-track-viewport" id="testimonialViewport">
          <div class="carousel-track" id="testimonialTrack">
            ${testimonials.map(t => {
              if (t.type === 'audio-song') {
                return `
                  <div class="testimonial-card song-card">
                    <div class="card-image-wrap">
                      <img src="${t.img}" alt="${t.title}">
                      <div class="card-overlay"></div>
                      <div class="play-trigger">
                        <div class="play-circle"><i data-lucide="play"></i></div>
                      </div>
                      <div class="card-footer-info">
                        <h3>${t.title}</h3>
                        <p>${t.artist}</p>
                      </div>
                    </div>
                  </div>
                `;
              } else if (t.type === 'whatsapp') {
                return `
                  <div class="testimonial-card wa-testi-card">
                    <div class="wa-card-header">
                      <div class="wa-header-user">
                        <img src="${t.avatar}" alt="${t.name}">
                        <div>
                          <strong>${t.name}</strong>
                          <span>${t.role}</span>
                        </div>
                      </div>
                    </div>
                    <div class="wa-bubbles-list">
                      ${t.audios.map(a => `
                        <div class="wa-bubble-item">
                          <button class="wa-bubble-play"><i data-lucide="play"></i></button>
                          <div class="wa-bubble-progress">
                            <div class="wa-progress-line"></div>
                            <div class="wa-progress-meta">
                              <span>0:00</span>
                              <span>${a.time}</span>
                            </div>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `;
              } else {
                return `
                  <div class="testimonial-card text-testi-card">
                    <div class="stars-row">
                      ${Array(5).fill('<i data-lucide="star"></i>').join('')}
                    </div>
                    <blockquote class="testi-quote">
                      <p>${t.content}</p>
                    </blockquote>
                    <div class="testi-user">
                      <img src="${t.avatar}" alt="${t.name}">
                      <div>
                        <strong>${t.name}</strong>
                        <span class="verified"><i data-lucide="check-circle"></i> Cliente Verificado</span>
                      </div>
                    </div>
                    <div class="quote-icon-badge"><i data-lucide="quote"></i></div>
                  </div>
                `;
              }
            }).join('')}
          </div>
        </div>

        <div class="carousel-nav-controls">
          <button class="nav-btn prev" id="testiPrev"><i data-lucide="chevron-left"></i></button>
          <div class="nav-dots" id="testiDots">
            ${testimonials.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}"></button>`).join('')}
          </div>
          <button class="nav-btn next" id="testiNext"><i data-lucide="chevron-right"></i></button>
        </div>
      </div>
    </section>
  `;
};

const Reactions = () => `
    <section id="reviews" class="reactions py-large bg-soft">
      <div class="container text-center">
        <div class="tag-badge-small reveal">Reações reais</div>
        <h2 class="section-title-serif reveal" data-delay="1">Veja as reações de quem recebeu uma canção</h2>
        <p class="section-subtitle reveal" data-delay="2">Mais de 10.000 homenagens entregues. Assista os bastidores e as reações reais de quem foi surpreendido.</p>
        
        <div class="reactions-cta-group mt-4 reveal" data-delay="3">
          <a href="https://www.instagram.com/audiogiftbrasil/" target="_blank" class="btn-social-ig">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Assistir no Instagram
          </a>
          <a href="https://www.tiktok.com/@audiogift" target="_blank" class="btn-social-tk">
            <i data-lucide="music"></i> Assistir no TikTok
          </a>
        </div>
      </div>
    </section>
  `

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
        
        <div class="player-scene reveal" data-delay="2">
          <div class="player-top">
            <div class="vinyl-wrap">
              <canvas id="vinylCanvas" width="280" height="280"></canvas>
              <svg class="arm-svg" id="tonearm" width="100" height="130" viewBox="0 0 100 130">
                <line x1="88" y1="14" x2="55" y2="110" stroke="#888" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="88" cy="14" r="8" fill="#333" stroke="#555" stroke-width="1"/>
                <ellipse cx="55" cy="112" rx="5" ry="3" fill="#FC7301" transform="rotate(-20,55,112)"/>
                <line x1="88" y1="14" x2="100" y2="8" stroke="#555" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>

            <div class="player-info">
              <p class="track-label">AUDIOGIFT PLAYER</p>
              <h3 class="track-title" id="playerTitle">Uma canção pra você</h3>
              <p class="track-artist" id="playerArtist">Canção personalizada · 2025</p>
              
              <div class="player-tags" id="playerTags">
                <span class="tag">Romance</span>
                <span class="tag">Alma</span>
              </div>

              <div class="prog-wrapper">
                <div class="prog-bar-container" id="progBar">
                  <div class="prog-fill" id="progFill"></div>
                </div>
                <div class="prog-times">
                  <span id="timeCur">0:00</span>
                  <span id="timeDur">3:42</span>
                </div>
              </div>

              <div class="player-controls">
                <button class="ctrl-btn" id="prevBtn"><i data-lucide="skip-back"></i></button>
                <button class="play-btn-large" id="playBtn">
                  <i data-lucide="play" id="playIcon"></i>
                </button>
                <button class="ctrl-btn" id="nextBtn"><i data-lucide="skip-forward"></i></button>
                
                <div class="vol-control">
                  <i data-lucide="volume-2" class="vol-icon"></i>
                  <div class="vol-bar-container" id="volBar">
                    <div class="vol-fill" id="volFill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="player-footer" id="playerPlaylist">
            <!-- Playlist pills generated by JS -->
          </div>
        </div>

        <div class="experience-grid mt-5">
          <div class="exp-card reveal" data-delay="1">
            <div class="exp-icon"><i data-lucide="music"></i></div>
            <h4>Som profissional</h4>
            <p>Produzida por artistas de verdade, com qualidade que impressiona no primeiro acorde.</p>
          </div>
          <div class="exp-card reveal" data-delay="2">
            <div class="exp-icon"><i data-lucide="file-text"></i></div>
            <h4>Letra sob medida</h4>
            <p>Cada verso conta a história de vocês — com os detalhes que só vocês conhecem.</p>
          </div>
          <div class="exp-card reveal" data-delay="3">
            <div class="exp-icon"><i data-lucide="disc"></i></div>
            <h4>Você escolhe a melhor</h4>
            <p>Receba 2 versões com melodias diferentes e a mesma letra; escolha a que mais emociona.</p>
          </div>
          <div class="exp-card reveal" data-delay="4">
            <div class="exp-icon"><i data-lucide="calendar-clock"></i></div>
            <h4>Entrega rápida</h4>
            <p>Precisa pra ontem? Turbo em até 6h, Express em 24h ou até 7 dias no plano essencial.</p>
          </div>
          <div class="exp-card reveal" data-delay="5">
            <div class="exp-icon"><i data-lucide="podcast"></i></div>
            <h4>Eternize no Spotify</h4>
            <p>Serviço vendido separadamente: publique a canção no Spotify e outras plataformas.</p>
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

const initVinylPlayer = () => {
  const songs = [
    { title: "Uma canção pra você", artist: "Canção personalizada · 2025", tags: ["Romance", "Alma"], dur: 222, color: "#222", color2: "#FC7301" },
    { title: "Pro Amor da Minha Vida", artist: "Dedicada com carinho · 2025", tags: ["Amor", "Eterno"], dur: 198, color: "#1A2E5C", color2: "#4A7FCC" },
    { title: "Feliz Aniversário, Meu Bem", artist: "Canção especial · 2025", tags: ["Festa", "Alegria"], dur: 175, color: "#1A4A2A", color2: "#4AC47A" },
    { title: "Pra Minha Mãe", artist: "Com amor infinito · 2025", tags: ["Família", "Saudade"], dur: 210, color: "#4A1A3A", color2: "#CC4A9A" },
  ];

  let currentIdx = 0;
  let isPlaying = false;
  let elapsed = 0;
  let raf = null;
  let lastTime = null;
  let angle = 0;
  let volume = 0.7;

  const canvas = document.getElementById('vinylCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const tonearm = document.getElementById('tonearm');
  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const progFill = document.getElementById('progFill');
  const timeCur = document.getElementById('timeCur');
  const timeDur = document.getElementById('timeDur');
  const volFill = document.getElementById('volFill');
  const playlist = document.getElementById('playerPlaylist');

  const fmtTime = (s) => {
    s = Math.floor(s);
    return Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);
  };

  const drawVinyl = (ang, song) => {
    const W = 280, R = W / 2;
    if (!ctx) return;
    ctx.clearRect(0, 0, W, W);
    
    // 1. Static Shadow Base
    ctx.save();
    ctx.beginPath();
    ctx.arc(R, R, R - 6, 0, Math.PI * 2);
    ctx.shadowBlur = 45;
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.fillStyle = '#080808';
    ctx.fill();
    ctx.restore();

    // 2. Main Disc Layer
    ctx.save();
    ctx.translate(R, R);
    
    // ROTATING CONTENT
    ctx.save();
    ctx.rotate(ang);
    
    // Base Disc
    ctx.beginPath();
    ctx.arc(0, 0, R - 10, 0, Math.PI * 2);
    const discGrad = ctx.createRadialGradient(0,0,0, 0,0,R-10);
    discGrad.addColorStop(0, '#111');
    discGrad.addColorStop(0.9, '#080808');
    discGrad.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = discGrad;
    ctx.fill();

    // Procedural Grooves (with rotation flicker)
    for (let i = 0; i < 140; i++) {
      const r = 56 + (i * 0.9);
      if (r > R - 12) break;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      // Flicker effect: opacity changes slightly based on rotation + index
      const flicker = Math.sin(ang * 2 + i * 0.5) * 0.01;
      ctx.strokeStyle = `rgba(255,255,255,${0.01 + flicker})`;
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }

    // Rotating Imperfections (Tiny scratches/dust that follow rotation)
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 15; i++) {
      const seed = (i * 137) % 360;
      const rStart = 60 + (i * 5) % (R - 70);
      ctx.beginPath();
      ctx.arc(0, 0, rStart, seed, seed + 0.1);
      ctx.stroke();
    }

    // 3. Center Label
    const labelR = 54;
    ctx.beginPath();
    ctx.arc(0, 0, labelR, 0, Math.PI * 2);
    const lGrad = ctx.createRadialGradient(0,0,0, 0,0,labelR);
    lGrad.addColorStop(0, song.color2);
    lGrad.addColorStop(0.95, song.color);
    lGrad.addColorStop(1, 'rgba(0,0,0,0.3)');
    ctx.fillStyle = lGrad;
    ctx.fill();

    // Label Text
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = 'bold 10px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("AUDIOGIFT", 0, -22);
    ctx.font = '700 6px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillText("MASTER EDITION", 0, 26);

    // Spindle Detail
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();
    
    ctx.restore(); // END ROTATING CONTENT

    // 4. STATIC LIGHTING (The V Gloss)
    const drawConic = (rot, op, size = 0.15) => {
      if (!ctx.createConicGradient) return;
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      const g = ctx.createConicGradient(rot, 0, 0);
      g.addColorStop(0, 'transparent');
      g.addColorStop(size, `rgba(255,255,255,${op})`);
      g.addColorStop(size * 2, 'transparent');
      ctx.beginPath();
      ctx.arc(0, 0, R - 11, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    };

    // Main static highlights
    drawConic(Math.PI * 0.2, 0.12);
    drawConic(Math.PI * 1.2, 0.12);

    // 5. DYNAMIC ROTATING GLIMMER
    // This moves WITH the disc but much more subtly
    ctx.save();
    ctx.rotate(ang * 0.5); // Moves slower for a parallax effect
    drawConic(0, 0.05, 0.05);
    drawConic(Math.PI, 0.05, 0.05);
    ctx.restore();

    // 6. SURFACE GRAIN (Static)
    for (let i = 0; i < 400; i++) {
      const rx = (Math.random() - 0.5) * W;
      const ry = (Math.random() - 0.5) * W;
      if (Math.sqrt(rx*rx + ry*ry) < R - 12) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.03})`;
        ctx.fillRect(rx, ry, 1, 1);
      }
    }

    ctx.restore(); // END Main Disc Layer
  };

  const loadTrack = (idx) => {
    const s = songs[idx];
    document.getElementById('playerTitle').textContent = s.title;
    document.getElementById('playerArtist').textContent = s.artist;
    document.getElementById('playerTags').innerHTML = s.tags.map(t => `<span class="tag">${t}</span>`).join('');
    timeDur.textContent = fmtTime(s.dur);
    timeCur.textContent = '0:00';
    progFill.style.width = '0%';
    
    document.querySelectorAll('.song-pill').forEach((p, i) => {
      p.classList.toggle('active', i === idx);
    });
    
    drawVinyl(angle, s);
  };

  const updateLoop = (ts) => {
    if (!isPlaying) {
      lastTime = null;
      return;
    }
    if (lastTime !== null) {
      const dt = (ts - lastTime) / 1000;
      elapsed += dt;
      angle += dt * Math.PI * 1.5;
      const s = songs[currentIdx];
      if (elapsed >= s.dur) {
        elapsed = 0;
        angle = 0;
      }
      const pct = (elapsed / s.dur) * 100;
      progFill.style.width = pct + '%';
      timeCur.textContent = fmtTime(elapsed);
      drawVinyl(angle, s);
    }
    lastTime = ts;
    raf = requestAnimationFrame(updateLoop);
  };

  const togglePlayback = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playIcon.setAttribute('data-lucide', 'pause');
      tonearm.classList.add('playing');
      lastTime = null;
      raf = requestAnimationFrame(updateLoop);
    } else {
      playIcon.setAttribute('data-lucide', 'play');
      tonearm.classList.remove('playing');
      cancelAnimationFrame(raf);
    }
    lucide.createIcons();
  };

  playBtn.addEventListener('click', togglePlayback);

  document.getElementById('prevBtn').addEventListener('click', () => {
    cancelAnimationFrame(raf);
    isPlaying = false;
    elapsed = 0;
    angle = 0;
    currentIdx = (currentIdx - 1 + songs.length) % songs.length;
    loadTrack(currentIdx);
    tonearm.classList.remove('playing');
    playIcon.setAttribute('data-lucide', 'play');
    lucide.createIcons();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    cancelAnimationFrame(raf);
    isPlaying = false;
    elapsed = 0;
    angle = 0;
    currentIdx = (currentIdx + 1) % songs.length;
    loadTrack(currentIdx);
    tonearm.classList.remove('playing');
    playIcon.setAttribute('data-lucide', 'play');
    lucide.createIcons();
  });

  // Progress Bar Interaction
  document.getElementById('progBar').addEventListener('click', e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    elapsed = pct * songs[currentIdx].dur;
    angle = elapsed * Math.PI * 1.5;
    progFill.style.width = (pct * 100) + '%';
    timeCur.textContent = fmtTime(elapsed);
    drawVinyl(angle, songs[currentIdx]);
  });

  // Volume Interaction
  document.getElementById('volBar').addEventListener('click', e => {
    const rect = e.currentTarget.getBoundingClientRect();
    volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    volFill.style.width = (volume * 100) + '%';
  });

  // Build Playlist
  playlist.innerHTML = '';
  songs.forEach((s, i) => {
    const pill = document.createElement('div');
    pill.className = 'song-pill' + (i === 0 ? ' active' : '');
    pill.innerHTML = `<span class="pill-dot"></span><span class="pill-text">${s.title}</span>`;
    pill.addEventListener('click', () => {
      if (currentIdx === i) return;
      cancelAnimationFrame(raf);
      isPlaying = false;
      elapsed = 0;
      angle = 0;
      currentIdx = i;
      loadTrack(i);
      tonearm.classList.remove('playing');
      playIcon.setAttribute('data-lucide', 'play');
      lucide.createIcons();
    });
    playlist.appendChild(pill);
  });

  loadTrack(0);
};



const Warranty = () => `
  <section class="warranty-section py-medium">
    <div class="container">
      <div class="warranty-card-premium reveal">
        <div class="warranty-icon-circle">
          <i data-lucide="shield-check"></i>
        </div>
        <div class="warranty-text-content">
          <h3>Garantia de devolução em 7 dias</h3>
          <p>Se sua Canção Divina não tocar seu coração ou não captar sua história perfeitamente, é só nos avisar. Reescrevemos ou reembolsamos integralmente. Sem risco, só fé.</p>
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
        <h2 class="section-title-serif reveal">Veja como a <em>mágica acontece</em></h2>
        <p class="section-subtitle reveal" data-delay="1">Transformamos seus sentimentos em melodia em 3 passos simples.</p>
      </div>

      <div class="process-grid reveal" data-delay="2">
        <div class="process-step">
          <div class="step-num">1</div>
          <div class="step-icon"><i data-lucide="file-edit"></i></div>
          <h4>Conte sua história</h4>
          <p>Você preenche um formulário rápido com os detalhes e momentos mais importantes.</p>
        </div>
        <div class="process-step">
          <div class="step-num">2</div>
          <div class="step-icon"><i data-lucide="mic"></i></div>
          <h4>Nós compomos</h4>
          <p>Nossos artistas criam uma letra e melodia exclusivas, feitas sob medida para você.</p>
        </div>
        <div class="process-step">
          <div class="step-num">3</div>
          <div class="step-icon"><i data-lucide="heart"></i></div>
          <h4>Emocione</h4>
          <p>Você recebe a música e surpreende quem você ama com um presente eterno.</p>
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
          { q: 'Como recebo minha música?', a: 'Você recebe um link exclusivo via WhatsApp e E-mail com sua música em alta qualidade (MP3/WAV), pronta para compartilhar.' },
          { q: 'Quanto tempo demora a produção?', a: 'Depende do plano escolhido: Essencial (7 dias), Express (24h) ou Turbo (6h).' },
          { q: 'A música é mesmo exclusiva?', a: 'Sim! Nossos compositores criam a letra do zero com base nos detalhes que você nos fornece.' },
          { q: 'Posso pedir alterações?', a: 'Com certeza! Temos garantia de felicidade absoluta. Ajustamos a letra até você ficar 100% satisfeito.' }
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
          <a href="#" class="logo">${Logo('white')}</a>
          <p class="mt-2">Transformando histórias em canções desde 2024.</p>
        </div>
        <div class="footer-links">
          <h4>Institucional</h4>
          <a href="#">Como Funciona</a>
          <a href="#">Estilos Musicais</a>
          <a href="#">Depoimentos</a>
        </div>
        <div class="footer-links">
          <h4>Ajuda</h4>
          <a href="#">Dúvidas Frequentes</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Privacidade</a>
        </div>
        <div class="footer-contact">
          <h4>Contato</h4>
          <p>suporte@audiogift.com.br</p>
          <div class="social-icons mt-2">
            <a href="https://www.instagram.com/audiogiftbrasil/" target="_blank"><i data-lucide="instagram"></i></a>
            <a href="https://www.tiktok.com/@audiogift" target="_blank"><i data-lucide="video"></i></a>
            <a href="#"><i data-lucide="youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center py-medium">
      <p>&copy; 2026 AUDIOGIFT. Todos os direitos reservados.</p>
    </div>
  </footer>
`


const Quiz = () => {
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
      subtitle: 'Selecione o som que melhor combina com seu ente querido',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Gênero Preferido *</label>
          <div class="quiz-options">
            ${['Samba', 'Gospel', 'Sertanejo', 'Pagode', 'MPB', 'Pop', 'Jovem Guarda', 'Forró', 'Reggae', 'Rock', 'Eletrônica', 'Latina', 'Rap', 'Jazz', 'Axé', 'Infantil'].map(opt => `
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
      title: 'O que faz essa pessoa especial?',
      subtitle: 'Descreva o caráter e as qualidades que você mais ama',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">As belas qualidades dela(e) *</label>
          <textarea class="quiz-textarea" placeholder="Ela(e) é paciente, sábia(o), engraçada(o), encorajadora(or), piedosa(o)? O que faz dessa pessoa alguém incrível para você?"></textarea>
          <div class="text-right"><span class="word-count">0 palavras</span></div>
        </div>
      `
    },
    {
      title: 'Histórias, memórias e datas favoritas',
      subtitle: 'Quanto mais detalhes específicos, melhor a letra que criaremos!',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Momentos especiais juntos *</label>
          <textarea class="quiz-textarea" placeholder="Quais memórias você sempre volta? Um momento que vocês sempre riem juntos? Algo que passaram juntos que os aproximou?"></textarea>
          <div class="text-right"><span class="word-count">0 palavras</span></div>
        </div>
      `
    },
    {
      title: 'Uma mensagem do coração',
      subtitle: 'Escreva qualquer coisa que você acha relevante incluir na canção',
      content: `
        <div class="quiz-step-content">
          <label class="quiz-label">Mensagem especial (opcional)</label>
          <textarea class="quiz-textarea" placeholder="O que você quer que essa pessoa saiba, que nunca disse o suficiente? Pelo que quer agradecer? Qual é aquela coisa do fundo do coração que quer dizer?"></textarea>
          <div class="text-right"><span class="word-count">0 palavras</span></div>
        </div>
      `
    },
    {
      title: 'Escolha Seu Plano',
      subtitle: 'Selecione o prazo de entrega ideal para você',
      content: `
        <div class="quiz-step-content">
          <div class="quiz-pricing-options">
            
            <div class="pricing-card-horizontal" data-plan="essencial">
              <div class="plan-icon-box"><i data-lucide="clock"></i></div>
              <div class="plan-info">
                <h3>Essencial • <span>Entrega em 7 dias</span></h3>
                <p>Ideal para quem pode esperar um pouco mais</p>
              </div>
              <div class="plan-price">R$69,90</div>
              <div class="plan-radio"></div>
            </div>

            <div class="pricing-card-horizontal active popular" data-plan="express">
              <div class="plan-badge-top">MAIS POPULAR</div>
              <div class="plan-icon-box"><i data-lucide="rocket"></i></div>
              <div class="plan-info">
                <h3>Express • <span>Entrega em até 24h</span></h3>
                <p>Prioridade máxima + Revisões Ilimitadas + Suporte via WhatsApp</p>
              </div>
              <div class="plan-price">R$99,90</div>
              <div class="plan-radio"><i data-lucide="check"></i></div>
            </div>

            <div class="pricing-card-horizontal vip" data-plan="turbo">
              <div class="plan-badge-top-vip">★ VIP</div>
              <div class="plan-icon-box"><i data-lucide="zap"></i></div>
              <div class="plan-info">
                <h3>Turbo • <span>Entrega em até 6h</span></h3>
                <p>Tudo do Express + <b>Experiência de Presente</b> + <b>Letra em PDF</b> + <b>Playback Instrumental</b></p>
              </div>
              <div class="plan-price">R$199,90</div>
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
    }
  ];

  let currentStep = 0;

  const renderStep = () => {
    const step = steps[currentStep];
    const progress = Math.round(((currentStep + 1) / 7) * 100); // 7 steps total like the image
    
    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-modal-inner">
        <div class="quiz-header">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="quiz-top-info">
            <span>Passo ${currentStep + 1} de 7</span>
            <div class="quiz-logo-small">${Logo('var(--black)')}</div>
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
          <button class="btn-quiz-next">
            ${currentStep === steps.length - 1 ? 'Próximo, já falei tudo que queria' : 'Próximo'} <i data-lucide="arrow-right"></i>
          </button>
        </div>
        
        <p class="quiz-legal">Ao continuar, você concorda com nossos <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a>.</p>
        <p class="quiz-copyright">AUDIOGIFT.COM.BR</p>
      </div>
    `;
    lucide.createIcons();
    attachEvents();
  };

  const attachEvents = () => {
    document.querySelectorAll('.pill-option').forEach(btn => {
      btn.onclick = () => {
        btn.parentElement.querySelectorAll('.pill-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      };
    });

    document.querySelector('.btn-quiz-next').onclick = () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
      } else {
        document.getElementById('quiz-overlay').classList.remove('active');
        window.location.hash = 'pricing';
        alert('Dados salvos! Escolha seu plano agora.');
      }
    };

    document.querySelector('.btn-quiz-back').onclick = () => {
      if (currentStep > 0) {
        currentStep--;
        renderStep();
      }
    };
    
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
  ${Header()}
  <main>
    ${Hero()}
    ${HowItWorks()}
    ${MusicStyles()}
    ${TestimonialsCarousel()}
    ${Categories()}
    ${Experience()}
    ${Warranty()}
    ${Reactions()}
    ${FAQ()}
    ${FooterCTA()}
  </main>
  ${Footer()}
  ${FloatingButtons()}
`

// Bind all create buttons
document.querySelectorAll('a[href="#create"], .btn-primary-new, .btn-nav-gold, .btn-primary-pill, .pricing-card button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const href = btn.getAttribute('href');
    if (href === '#create' || btn.classList.contains('btn-primary-new') || btn.classList.contains('btn-nav-gold') || btn.textContent.includes('ESCOLHER')) {
      e.preventDefault();
      Quiz();
    }
  });
});

// Initialize Lucide Icons
const script = document.createElement('script');
script.src = 'https://unpkg.com/lucide@latest';
script.onload = () => {
  lucide.createIcons();
};
document.head.appendChild(script);

// Magnetic Button Effect
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Smooth magnetic pull
    btn.style.transition = 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
    btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`
  })
  
  btn.addEventListener('mouseleave', () => {
    // Elegant return
    btn.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
    btn.style.transform = `translate(0, 0)`
  })
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  })
}, { threshold: 0.1 })

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el)
})

document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('active');
  })
})


// Testimonials Carousel Logic
const initTestimonialsCarousel = () => {
  const track = document.getElementById('testimonialTrack');
  const prev = document.getElementById('testiPrev');
  const next = document.getElementById('testiNext');
  const dots = document.querySelectorAll('#testiDots .dot');
  
  if (!track || !prev || !next) return;

  let currentIdx = 0;
  const cardWidth = 350 + 32; // card + gap
  const totalCards = document.querySelectorAll('.testimonial-card').length;
  const viewportWidth = document.getElementById('testimonialViewport').offsetWidth;
  const cardsInView = Math.floor(viewportWidth / cardWidth) || 1;
  const maxIdx = totalCards - cardsInView;

  const update = () => {
    track.style.transform = `translateX(-${currentIdx * cardWidth}px)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIdx);
    });
  };

  next.addEventListener('click', () => {
    if (currentIdx < maxIdx) {
      currentIdx++;
      update();
    } else {
      currentIdx = 0; // Loop back
      update();
    }
  });

  prev.addEventListener('click', () => {
    if (currentIdx > 0) {
      currentIdx--;
      update();
    } else {
      currentIdx = maxIdx; // Go to end
      update();
    }
  });

  // Auto-init icons for dynamic content
  lucide.createIcons();
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

// Initialize components
initTestimonialsCarousel();
initVinylPlayer();
initMobileMenu();

// Robust Lucide Init
const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  } else {
    setTimeout(initIcons, 100);
  }
};
initIcons();
