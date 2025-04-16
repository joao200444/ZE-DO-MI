document.addEventListener('DOMContentLoaded', () => {
    const sidePanel = document.querySelector('.side-panel');
    const actionButtons = document.querySelectorAll('.action-btn');
    const closeButton = document.querySelector('.close-panel');

    // Dados dos mods com informações detalhadas
    const modsData = {
        'Genshin Impact': {
            description: 'Conjunto completo de mods para Genshin Impact, incluindo melhorias visuais, otimizações de performance e recursos adicionais para melhorar sua experiência em Teyvat.',
            downloads: '10k+',
            rating: '4.8'
        },
        'Solo Leveling Arise': {
            description: 'Pacote premium de mods para Solo Leveling Arise, oferecendo customizações exclusivas, melhorias de gameplay e recursos avançados.',
            downloads: '5k+',
            rating: '4.6'
        },
        'Counter-Strike': {
            description: 'Coleção de mods competitivos para Counter-Strike, incluindo customizações de interface, melhorias de visualização e otimizações.',
            downloads: '20k+',
            rating: '4.9'
        },
        'Naraka': {
            description: 'Mods exclusivos para Naraka, focados em melhorar a experiência de combate, otimizar a performance e adicionar recursos personalizados.',
            downloads: '8k+',
            rating: '4.7'
        },
        'Snowbreak': {
            description: 'Pacote de mods para Snowbreak, oferecendo melhorias visuais, otimizações e recursos adicionais para uma experiência mais imersiva.',
            downloads: '3k+',
            rating: '4.5'
        },
        'Wuthering Waves': {
            description: 'Coleção premium de mods para Wuthering Waves, incluindo melhorias de performance, customizações visuais e recursos exclusivos.',
            downloads: '2k+',
            rating: '4.4'
        }
    };

    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.game-card');
            const title = card.querySelector('.game-title').textContent;
            const image = card.querySelector('.game-image').src;
            const modInfo = modsData[title];

            // Atualizar o conteúdo do painel com dados detalhados
            sidePanel.querySelector('.mod-image img').src = image;
            sidePanel.querySelector('.mod-image img').alt = title;
            sidePanel.querySelector('.mod-title').textContent = title;
            sidePanel.querySelector('.mod-description').textContent = modInfo.description;
            
            // Atualizar estatísticas
            const statValues = sidePanel.querySelectorAll('.stat-value');
            statValues[0].textContent = modInfo.downloads;
            statValues[1].textContent = modInfo.rating;

            // Abrir o painel
            sidePanel.classList.add('open');

            // Fechar o painel quando clicar no botão de fechar
            closeButton.addEventListener('click', () => {
                sidePanel.classList.remove('open');
            });

            // Fechar o painel ao clicar fora dele
            document.addEventListener('click', (e) => {
                if (!sidePanel.contains(e.target) && 
                    !e.target.classList.contains('action-btn') && 
                    !e.target.closest('.action-btn')) {
                    sidePanel.classList.remove('open');
                }
            });
        });
    });
});