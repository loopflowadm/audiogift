import './style.css'

const app = document.querySelector('#app')

const Header = () => `
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <span class="logo-text">AUDIOGIFT</span>
        <span class="logo-subtext">Homenagens Musicais</span>
      </div>
      <nav class="nav">
        <div class="nav-links">
          <a href="#how">Como Funciona</a>
          <a href="#pricing">Preços</a>
          <a href="#reviews">Avaliações</a>
        </div>
        <div class="lang-selector">
          <span>🇧🇷 PT</span>
        </div>
        <a href="#create" class="btn-nav">Criar Homenagem</a>
      </nav>
    </div>
  </header>
`

const MediaProof = () => `
  <section class="media-proof">
    <div class="container">
      <p class="text-center proof-title">VISTO EM:</p>
      <div class="logo-grid">
        <img src="https://logodownload.org/wp-content/uploads/2014/04/g1-globo-logo.png" alt="G1" class="grayscale">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_CNN_Brasil.svg/1200px-Logo_CNN_Brasil.svg.png" alt="CNN" class="grayscale">
        <img src="https://logodownload.org/wp-content/uploads/2014/04/sbt-logo.png" alt="SBT" class="grayscale">
        <img src="https://logodownload.org/wp-content/uploads/2016/09/forbes-logo.png" alt="Forbes" class="grayscale">
      </div>
    </div>
  </section>
`

const Categories = () => {
  const cats = [
    { title: 'Pro Amor da Sua Vida', img: 'https://images.unsplash.com/photo-1518199266791-739d6ffec522?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pro Seu Filho(a)', img: 'https://images.unsplash.com/photo-1536640712247-c4547476f827?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pro Pedido Perfeito', img: 'https://images.unsplash.com/photo-1511733849024-88137bb893fd?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pra Celebrar a União', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pra Um Aniversário Inesquecível', img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pro Seu Pai ou Sua Mãe', img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pros Seus Avós', img: 'https://images.unsplash.com/photo-1522067821987-4322384e9086?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pra Aquele Amigo Especial', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pra Você Mesmo(a)', img: 'https://images.unsplash.com/photo-1494137319847-a9592a0e73ed?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pro Batizado do Seu Bebê', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pro Chá Revelação', img: 'https://images.unsplash.com/photo-1558244402-286dd748c593?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pra Uma Formatura Especial', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400' },
    { title: 'Pra Celebrar as Bodas', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=400' }
  ]
  
  return `
    <section class="categories py-large">
      <div class="container">
        <h2 class="text-center">Pra quem é essa canção?</h2>
        <div class="carousel-container">
          <div class="category-carousel">
            ${cats.map(cat => `
              <div class="category-card">
                <img src="${cat.img}" alt="${cat.title}">
                <div class="category-overlay">
                  <h3>${cat.title}</h3>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `
}

const SpotifySection = () => `
  <section class="spotify-section py-large bg-dark">
    <div class="container">
      <div class="spotify-content">
        <div class="spotify-text">
          <h2 class="text-gold">Muito mais que uma música</h2>
          <p>Eternize sua história nas maiores plataformas do mundo.</p>
          <div class="spotify-feature">
            <div class="spotify-icon">💿</div>
            <div>
              <h4>Eternize no Spotify</h4>
              <p>Serviço vendido separadamente: publique a canção no Spotify, Apple Music, Deezer e mais.</p>
            </div>
          </div>
          <a href="#create" class="btn-primary">Homenagear Agora</a>
        </div>
        <div class="spotify-visual">
          <div class="vinyl-record">
            <div class="vinyl-disc"></div>
            <div class="vinyl-cover">
              <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400" alt="Cover">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

const HowItWorks = () => `
  <section id="how" class="how-it-works py-large bg-porcelain">
    <div class="container">
      <h2 class="text-center">Como funciona?</h2>
      <p class="text-center subtitle">Ouça o áudio abaixo para entender como funciona.</p>
      
      <div class="whatsapp-audio-container">
        <div class="wa-audio-bubble">
          <button class="wa-play-btn">
            <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
          </button>
          <div class="wa-audio-info">
            <div class="wa-wave">
              <div class="wa-progress"></div>
            </div>
            <div class="wa-footer">
              <span class="wa-time">1:30</span>
              <div class="wa-checks">
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#34B7F1" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center" style="margin-top: 3rem;">
        <a href="#create" class="btn-primary">Homenagear alguém agora</a>
      </div>
    </div>
  </section>
`

const Pricing = () => `
  <section id="pricing" class="pricing py-large bg-porcelain">
    <div class="container">
      <h2 class="text-center">Escolha o seu plano</h2>
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="plan-header">
            <h3>Essencial</h3>
            <div class="price-old">R$ 147</div>
            <div class="price">R$ 69,90</div>
            <p class="delivery-time">Entrega em até 7 dias</p>
          </div>
          <ul class="plan-features">
            <li>✅ Letra personalizada</li>
            <li>✅ Produção profissional</li>
            <li>✅ Alta qualidade (MP3)</li>
          </ul>
          <a href="#" class="btn-secondary">Selecionar</a>
        </div>
        <div class="pricing-card popular">
          <div class="popular-badge">MAIS POPULAR</div>
          <div class="plan-header">
            <h3>Express</h3>
            <div class="price-old">R$ 197</div>
            <div class="price">R$ 99,90</div>
            <p class="delivery-time">Entrega em até 24 horas</p>
          </div>
          <ul class="plan-features">
            <li>✅ Prioridade na fila</li>
            <li>✅ Suporte VIP WhatsApp</li>
            <li>✅ Letra personalizada</li>
          </ul>
          <a href="#" class="btn-primary">Selecionar</a>
        </div>
        <div class="pricing-card">
          <div class="plan-header">
            <h3>Turbo</h3>
            <div class="price-old">R$ 347</div>
            <div class="price">R$ 199,90</div>
            <p class="delivery-time">Entrega em até 6 horas</p>
          </div>
          <ul class="plan-features">
            <li>✅ Entrega Ultra Rápida</li>
            <li>✅ Gift Experience</li>
            <li>✅ Playback Instrumental</li>
            <li>✅ Letra em PDF Premium</li>
          </ul>
          <a href="#" class="btn-secondary">Selecionar</a>
        </div>
      </div>
    </div>
  </section>
`

const Hero = () => `
  <section class="hero reveal">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-info">
          <h1>Transforme sua história em uma <span class="text-gold">canção inesquecível</span></h1>
          <p>O presente mais emocionante que alguém pode receber. Criamos músicas personalizadas com base na sua história real.</p>
          <a href="#create" class="btn-primary">Homenagear Alguém Agora</a>
          <div class="trust-badges">
            <span>⭐ 4.9/5 (2k+ avaliações)</span>
            <span>⏱️ Entrega em até 24h</span>
          </div>
        </div>
        <div class="hero-video">
          <div class="video-container">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/euebKq4kErQ?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&loop=1&playlist=euebKq4kErQ" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
`

const MusicStyles = () => `
  <section class="music-styles py-large">
    <div class="container">
      <h2 class="text-center">Escolha o seu estilo musical</h2>
      <p class="text-center subtitle">Nossos produtores dominam todos os gêneros para sua homenagem ser perfeita.</p>
      
      <div class="audio-grid">
        ${['Sertanejo', 'Pop', 'Gospel', 'MPB', 'Forró', 'Rock'].map(style => `
          <div class="whatsapp-player">
            <div class="player-content">
              <div class="play-icon-container">
                <button class="btn-play">
                  <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
                </button>
              </div>
              <div class="player-info">
                <span class="style-name">${style}</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 30%"></div>
                </div>
                <div class="player-footer">
                  <span class="duration">0:30</span>
                  <div class="check-marks">
                    <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#34B7F1" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`

const Benefits = () => `
  <section class="benefits py-large">
    <div class="container">
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="icon">🎸</div>
          <h3>Produção Profissional</h3>
          <p>Qualidade de estúdio com músicos e vocalistas reais selecionados.</p>
        </div>
        <div class="benefit-card">
          <div class="icon">✍️</div>
          <h3>Letra Exclusiva</h3>
          <p>Nossos compositores criam a letra com base nos detalhes que você nos conta.</p>
        </div>
        <div class="benefit-card">
          <div class="icon">🚀</div>
          <h3>Entrega Rápida</h3>
          <p>Receba sua música personalizada via WhatsApp e E-mail em tempo recorde.</p>
        </div>
      </div>
    </div>
  </section>
`

const Artists = () => `
  <section class="artists py-large">
    <div class="container">
      <h2 class="text-center">Artistas de Estúdio</h2>
      <p class="text-center subtitle">Nossa equipe de músicos profissionais.</p>
      <div class="artists-grid">
        ${[
          { name: 'Lucas Silva', role: 'Especialista em Sertanejo', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
          { name: 'Marina Costa', role: 'Vocalista Pop/Gospel', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
          { name: 'André Lima', role: 'Mestre em MPB', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' }
        ].map(art => `
          <div class="artist-card">
            <img src="${art.img}" alt="${art.name}">
            <h4>${art.name}</h4>
            <span>${art.role}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`

const Testimonials = () => `
  <section id="reviews" class="testimonials py-large">
    <div class="container">
      <h2 class="text-center">Histórias que emocionam</h2>
      <div class="testimonials-grid">
        ${[
          { name: 'Ana Souza', role: 'Aniversário de 50 anos da mãe', text: 'Não tenho palavras para descrever a emoção da minha mãe ao ouvir a música. Foi o melhor presente da vida dela.' },
          { name: 'Carlos Lima', role: 'Pedido de Casamento', text: 'A música capturou cada detalhe da nossa história. Ela chorou do início ao fim. Foi perfeito!' }
        ].map(t => `
          <div class="testimonial-card">
            <div class="quote-icon">"</div>
            <p class="testimonial-text">${t.text}</p>
            <div class="testimonial-author">
              <div class="author-info">
                <strong>${t.name}</strong>
                <span>${t.role}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`

const Reactions = () => `
  <section class="reactions py-large" style="background: var(--dark-brown); color: white;">
    <div class="container">
      <h2 class="text-center" style="color: var(--secondary-gold)">Reações Reais</h2>
      <p class="text-center" style="color: #ccc; margin-bottom: 3rem;">O momento exato em que a surpresa acontece.</p>
      <div class="reactions-grid">
        ${[1, 2, 3].map(i => `
          <div class="reaction-placeholder">
            <div class="play-small"></div>
            <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400" alt="Reaction ${i}">
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`

const FAQ = () => `
  <section class="faq py-large">
    <div class="container">
      <h2 class="text-center">Perguntas Frequentes</h2>
      <div class="faq-list">
        ${[
          { q: 'Como recebo minha música?', a: 'Você recebe um link exclusivo via WhatsApp e E-mail com sua música em alta qualidade, pronta para compartilhar ou baixar.' },
          { q: 'Quanto tempo demora a produção?', a: 'O prazo padrão é de até 3 dias úteis, mas temos a opção de entrega expressa em até 24 horas.' },
          { q: 'A música é mesmo exclusiva?', a: 'Sim! Nossos compositores criam a letra do zero com base nos detalhes que você fornece no formulário.' }
        ].map(item => `
          <div class="faq-item">
            <div class="faq-question">
              <h4>${item.q}</h4>
              <span class="plus">+</span>
            </div>
            <div class="faq-answer">
              <p>${item.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`

const Footer = () => `
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="logo">AUDIOGIFT</div>
        <p>A maior plataforma de homenagens musicais do Brasil.</p>
      </div>
      <div class="footer-links">
        <h4>Links Úteis</h4>
        <a href="#">Termos de Uso</a>
        <a href="#">Privacidade</a>
        <a href="#">Perguntas Frequentes</a>
      </div>
      <div class="footer-social">
        <h4>Siga-nos</h4>
        <div class="social-icons">
          <a href="#">IG</a>
          <a href="#">TK</a>
          <a href="#">YT</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 AUDIOGIFT. Todos os direitos reservados.</p>
    </div>
  </footer>
`

const FloatingButtons = () => `
  <div class="floating-controls">
    <a href="https://wa.me/5511999999999" class="btn-whatsapp" target="_blank">
      <svg viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42 1.55 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.19-.3a8.13 8.13 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.96 3.03c-.22 0-.36.03-.54.22-.19.2-.72.71-.72 1.73s.73 2.01.83 2.14c.1.14 1.44 2.2 3.5 3.08.49.21.87.33 1.17.43.5.16.95.13 1.3.08.4-.06 1.21-.5 1.38-.97.17-.47.17-.87.12-.96-.05-.08-.18-.13-.37-.23-.19-.1-.1.14-.5-.33-1.01-.26-1.01-1.06-.01-.39-.1-.08-.18-.13-.37-.23-.2-.1-.36-.14-.54-.04-.18.09-.78.33-1.12.92-.34.59-.34 1.1-.34 1.6s.1.92.25 1.18c.15.26.54.91 1.31 1.43.77.52 1.44.82 1.95 1.02.5.2 1.01.3 1.4.2.39-.1.97-.4 1.12-.76.15-.36.15-.66.1-.76-.05-.1-.19-.15-.37-.24z"/></svg>
    </a>
  </div>
`

app.innerHTML = `
  <div class="custom-cursor"></div>
  ${Header()}
  <main>
    ${Hero()}
    ${MediaProof()}
    ${Categories()}
    ${HowItWorks()}
    ${MusicStyles()}
    ${SpotifySection()}
    ${Benefits()}
    ${Artists()}
    ${Testimonials()}
    ${Reactions()}
    ${Pricing()}
    ${FAQ()}
    <section class="cta-section py-large text-center">
      <div class="container">
        <h2>Pronto para criar um momento eterno?</h2>
        <a href="#create" class="btn-primary" style="margin-top: 2rem">Começar Agora</a>
      </div>
    </section>
  </main>
  ${Footer()}
  ${FloatingButtons()}
`

// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor')
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
})

document.querySelectorAll('a, button, .category-card, .pricing-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'))
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'))
})

// Reveal Animation Logic
const observerOptions = {
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

document.querySelectorAll('section').forEach(section => {
  section.classList.add('reveal')
  observer.observe(section)
})

// FAQ Toggle Logic
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement
    item.classList.toggle('active')
  })
})
