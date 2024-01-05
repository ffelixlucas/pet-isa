document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');
    const searchLink = document.getElementById('search-link');

    function loadPage(pageName) {
        fetch(`${pageName}.html`)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
                if (pageName === 'index') {
                    initializeCatalog();
                } else if (pageName === 'carrinho') {
                    initializeCart();
                }
            })
            .catch(error => console.error('Erro ao carregar a página:', error));
    }

    function initializeCatalog() {
        // Adicione lógica específica para a página do catálogo
        // Exemplo: abrir o modal de detalhes do produto ao clicar em um item
        const productItems = document.querySelectorAll('.product-item');
        productItems.forEach(item => {
            item.addEventListener('click', function () {
                openProductDetailsModal();
            });
        });
    }

    function initializeCart() {
        // Adicione lógica específica para a página do carrinho
        // Exemplo: preenchimento de informações sobre endereço e pagamento
    }

    function openProductDetailsModal() {
        const modal = document.getElementById('product-details-modal');
        modal.style.display = 'block';

        const closeModalButton = document.getElementById('close-product-details');
        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        const addToCartButton = document.getElementById('add-to-cart');
        addToCartButton.addEventListener('click', function () {
            // Adicione aqui a lógica para adicionar o produto ao carrinho
            console.log('Produto adicionado ao carrinho.');
            modal.style.display = 'none';
        });
    }

    // Inicialmente, carrega a página inicial
    loadPage('index');

    // Adiciona um ouvinte de evento para os links de navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const pageName = link.getAttribute('href').replace('.html', '');
            loadPage(pageName);
        });
    });

    // Adiciona um ouvinte de evento para o link de busca
    searchLink.addEventListener('click', function () {
        // Adicione aqui a lógica para abrir a caixa de busca
        console.log('Abrir caixa de busca.');
    });
});
