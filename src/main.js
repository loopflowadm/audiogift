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
    'Pop Acústico', 'Soul Romântico', 'Violão e Voz', 'Pop Rock', 'Forró', 'Gospel',
    'MPB', 'Música Eletrônica', 'Samba', 'Pagode', 'Pop', 'Rap/Hip Hop', 'Reggae', 'Rock', 'Sertanejo'
  ]
  
  const featuredGenres = [
    { name: 'Sertanejo', voice: 'Masculina' },
    { name: 'Pop', voice: 'Feminina' },
    { name: 'Pop Acústico', voice: 'Feminina' },
    { name: 'MPB', voice: 'Masculina' },
    { name: 'Samba', voice: 'Masculina' },
    { name: 'Rock', voice: 'Masculina' },
    { name: 'Forró', voice: 'Feminina' },
    { name: 'Violão e Voz', voice: 'Instrumental' },
    { name: 'Soul Romântico', voice: 'Feminina' },
    { name: 'Rap/Hip Hop', voice: 'Masculina' },
    { name: 'Pagode', 'voice': 'Masculina' },
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
      title: 'Para Sempre Nós',
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
      content: 'Nossa, que emoção! Isso é absolutamente de tirar o fôlego. Eu não consigo acreditar... Choramos muito ouvindo juntos ontem à noite. Vocês conseguiram colocar toda a nossa história em 3 minutos! Muito obrigada pelo carinho.',
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.31-1.92 1.57-4.58 2.22-6.95 1.55-2.61-.75-4.75-2.88-5.46-5.51-.71-2.67-.09-5.61 1.72-7.75 1.77-2.09 4.61-3.1 7.29-2.71v4.06c-1.89-.3-3.83.27-5.06 1.63-1.45 1.63-1.47 4.15-.22 5.8 1.34 1.77 3.95 2.21 5.88 1.05 1.2-.73 1.94-2.03 1.98-3.41.05-4.22.03-8.45.03-12.68.01-2.05-.01-4.09.03-6.14z"/>
            </svg>
            Assistir no TikTok
          </a>
          <a href="https://open.spotify.com/artist/24rv68FArmAuCtAhHjoIEy" target="_blank" class="btn-social-sp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Ouça no Spotify
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
          { q: 'Como recebo minha música?', a: 'Você recebe um link exclusivo via WhatsApp e E-mail com sua música em alta qualidade (MP3/WAV), pronta para compartilhar.' },
          { q: 'Quanto tempo demora a produção?', a: 'Depende do plano escolhido: Essencial (7 dias), Express (24h) ou Turbo (6h).' },
          { q: 'A música é mesmo exclusiva?', a: 'Sim! Nossos compositores criam a letra do zero com base nos detalhes que você nos fornece.' },
          { q: 'Posso pedir alterações?', a: 'Fazemos até duas alterações caso necessário. Mas temos certeza que você vai amar o resultado.' },
          { q: 'Qual a garantia que vou receber minha música?', a: 'Além de sermos uma empresa verificada, nossa missão é entregar lágrimas de alegria. Se a música não tocar o coração de vocês do jeito que sonhou, nós refazemos. E se mesmo assim não for o presente mais inesquecível que ela já recebeu, devolvemos seu dinheiro em 7 dias.' }
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
            <a href="https://open.spotify.com/artist/24rv68FArmAuCtAhHjoIEy" target="_blank" title="Spotify"><i data-lucide="music"></i></a>
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
          <label class="quiz-label">O que faz o coração dela(e) ser tão lindo? *</label>
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
                <p>Prioridade Máxima + Letra PDF + Playback + sua música nos streamings</p>
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
    plan: 'memoravel',
    email: '',
    phone: ''
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
          const check = c.querySelector('.plan-radio i');
          if (check) check.remove();
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

  const renderStep = () => {
    const step = steps[currentStep];
    const progress = Math.round(((currentStep + 1) / steps.length) * 100);
    
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
  };

  const attachEvents = () => {
    document.querySelectorAll('.pill-option').forEach(btn => {
      btn.onclick = () => {
        btn.parentElement.querySelectorAll('.pill-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        saveCurrentStepData();
      };
    });

    document.querySelectorAll('.pricing-card-horizontal').forEach(card => {
      card.onclick = () => {
        document.querySelectorAll('.pricing-card-horizontal').forEach(c => {
          c.classList.remove('active');
          const check = c.querySelector('.plan-radio i');
          if (check) check.remove();
        });
        card.classList.add('active');
        card.querySelector('.plan-radio').innerHTML = '<i data-lucide="check"></i>';
        lucide.createIcons();
        saveCurrentStepData();
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
      };
    });

    const nameInput = document.getElementById('quizName');
    if (nameInput) {
      nameInput.oninput = () => {
        saveCurrentStepData();
      };
    }

    const captureInputs = document.querySelectorAll('.quiz-capture-section input');
    captureInputs.forEach(inp => {
      inp.oninput = () => {
        saveCurrentStepData();
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
        if (!answers.email || !answers.phone) {
          isValid = false;
          errorMsg = 'Por favor, preencha seu e-mail e WhatsApp para continuar.';
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
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;
    outlineX = outlineX + distX * 0.15;
    outlineY = outlineY + distY * 0.15;
    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top = outlineY + 'px';
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
