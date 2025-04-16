document.addEventListener('DOMContentLoaded', function() {
    // Carrossel
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlide = 0;

    // Criar indicadores de slides
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    function updateSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Autoplay
    setInterval(nextSlide, 5000);
    // Inicialização das partículas
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });

    // Funcionalidade do menu lateral
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
    const searchContainer = document.querySelector('.search-container');

    // Adiciona eventos de foco e clique na barra de pesquisa
    searchInput.addEventListener('click', function(e) {
        e.stopPropagation();
        this.focus();
    });

    searchInput.addEventListener('focus', function() {
        searchContainer.classList.add('active');
    });

    searchInput.addEventListener('blur', function() {
        searchContainer.classList.remove('active');
    });

    // Melhora a funcionalidade de pesquisa
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = '';
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Adiciona funcionalidade de limpar pesquisa com Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            this.blur();
            cards.forEach(card => {
                card.style.display = '';
                card.style.animation = 'fadeIn 0.3s ease';
            });
        }
    });

    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Fechar a sidebar quando clicar fora dela
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Funcionalidade do tema escuro/claro
    const themeToggle = document.querySelector('.theme-toggle');
    let isDarkTheme = true;

    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.style.background = isDarkTheme
            ? 'linear-gradient(135deg, #3498db, #2c3e50)'
            : 'linear-gradient(135deg, #56ccf2, #2f80ed)';
        
        themeToggle.innerHTML = isDarkTheme
            ? '<i class="fas fa-moon"></i>'
            : '<i class="fas fa-sun"></i>';
    });
});

// Dados dos mods
const modsData = {
    'Genshin Impact': {
        description: 'Explore Teyvat com mods que melhoram sua experiência de jogo. Inclui melhorias gráficas, otimizações de performance e recursos adicionais para uma jogabilidade mais envolvente.',
        image: '../imagem/Genshin-Impact.jpg',
        downloads: '10k+',
        version: '2.1.0',
        lastUpdate: '2024-01-15',
        size: '256 MB'
    },
    'Solo Leveling Arise': {
        description: 'Mods exclusivos que aprimoram a experiência de jogo com novos recursos, melhorias visuais e otimizações de performance para uma jogabilidade mais fluida.',
        image: '../imagem/Solo leveling arise.jpg',
        downloads: '5k+',
        version: '1.5.0',
        lastUpdate: '2024-01-10',
        size: '180 MB'
    },
    'Counter-Strike': {
        description: 'Pacote de mods competitivos que incluem customizações de interface, melhorias de visualização e otimizações para máximo desempenho em partidas.',
        image: '../imagem/couter strike.jpg',
        downloads: '20k+',
        version: '3.2.1',
        lastUpdate: '2024-01-18',
        size: '320 MB'
    },
    'Naraka': {
        description: 'Conjunto de mods para aprimorar suas batalhas com melhorias visuais, otimizações de performance e recursos adicionais para uma experiência mais imersiva.',
        image: '../imagem/naraka.jpg',
        downloads: '8k+',
        version: '1.8.0',
        lastUpdate: '2024-01-12',
        size: '210 MB'
    },
    'Snowbreak': {
        description: 'Mods que transformam sua experiência de jogo com melhorias gráficas, otimizações e recursos exclusivos para uma jogabilidade única.',
        image: '../imagem/snowbreak.jpg',
        downloads: '3k+',
        version: '1.2.0',
        lastUpdate: '2024-01-08',
        size: '150 MB'
    },
    'Wuthering Waves': {
        description: 'Mods exclusivos que melhoram a performance e adicionam recursos para uma experiência de jogo mais fluida e envolvente.',
        image: '../imagem/wuthering waves.jpg',
        downloads: '2k+',
        version: '1.0.1',
        lastUpdate: '2024-01-05',
        size: '175 MB'
    }
};

// Função para abrir o painel lateral
function openSidePanel(gameTitle) {
    const sidePanel = document.querySelector('.side-panel');
    const modDetails = document.querySelector('.mod-details');
    const modData = modsData[gameTitle];

    // Preencher o conteúdo do painel
    modDetails.innerHTML = `
        <img src="${modData.image}" alt="${gameTitle}">
        <h2>${gameTitle}</h2>
        <p>${modData.description}</p>
        <div class="mod-stats-detailed">
            <div>
                <span>Downloads:</span>
                <span>${modData.downloads}</span>
            </div>
            <div>
                <span>Versão:</span>
                <span>${modData.version}</span>
            </div>
            <div>
                <span>Última Atualização:</span>
                <span>${modData.lastUpdate}</span>
            </div>
            <div>
                <span>Tamanho:</span>
                <span>${modData.size}</span>
            </div>
        </div>
        <button class="download-btn">Download Mod</button>
    `;

    // Abrir o painel
    sidePanel.classList.add('open');
}

// Função para fechar o painel lateral
function closeSidePanel() {
    const sidePanel = document.querySelector('.side-panel');
    sidePanel.classList.remove('open');
}

// Adicionar event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Botões "Ver Mods"
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameCard = button.closest('.game-card');
            const gameTitle = gameCard.querySelector('.game-title').textContent;
            openSidePanel(gameTitle);
        });
    });

    // Botão de fechar
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click', closeSidePanel);
});