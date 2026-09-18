document.addEventListener("DOMContentLoaded", () => {
    // Inicializar ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Toggle do Menu de Navegação (3 barrinhas)
    const menuToggleBtn = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggleBtn && navMenu) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        // Fechar o menu automaticamente se clicar em qualquer lugar fora dele
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Alternador de Gênero (Feminino / Masculino)
    const genderBtns = document.querySelectorAll('.gender-btn');
    genderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            genderBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Filtros por Categoria (Todos, Bermuda, Sunga, etc.)
    const filterTags = document.querySelectorAll('.filter-tags .tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');

            const category = tag.getAttribute('data-category');
            console.log(`Filtrando produtos por: ${category}`);
        });
    });

    // Seleção Interativa de Cores nos Cards
    const colorSwatches = document.querySelectorAll('.color-options .dot');
    colorSwatches.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita ativar a seleção do card ao clicar na cor
            const parent = e.target.parentElement;
            const dotsInGroup = parent.querySelectorAll('.dot');
            dotsInGroup.forEach(d => d.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Destaque de Card ao Clicar
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('featured-selected'));
            card.classList.add('featured-selected');
        });
    });

    // Ação do Botão "Ver mais"
    const seeMoreBtn = document.querySelector('.btn-see-more');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            alert('Carregando mais produtos da coleção...');
        });
    }
});