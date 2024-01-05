// script.js
function loadPage(pageName) {
    fetch(`${pageName}.html`)
        .then(response => response.text())
        .then(html => {
            const contentContainer = document.getElementById('content');
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
    const catalogContainer = document.getElementById('content');

    fetch('http://localhost:8080/api/catalog')
        .then(response => response.json())
        .then(catalogData => {
            catalogData.forEach((product, index) => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Preço: R$ ${product.price.toFixed(2)}</p>
                    <button class="view-details-button" data-index="${index}">Ver Detalhes</button>
                `;

                catalogContainer.appendChild(productItem);

                const viewDetailsButton = productItem.querySelector('.view-details-button');
                viewDetailsButton.addEventListener('click', function () {
                    openProductDetailsModal(catalogData[index]);
                });
            });
        })
        .catch(error => console.error('Erro ao obter catálogo:', error));
}

function initializeCart() {
    // Adicione lógica específica para a página do carrinho
    // Exemplo: preenchimento de informações sobre endereço e pagamento
}

function openProductDetailsModal(product) {
    const modal = document.getElementById('product-details-modal');
    const addToCartButton = document.getElementById('add-to-cart');

    // Adicione o código para exibir os detalhes do produto no modal
    // ...

    // Adicione um ouvinte de evento para o botão "Adicionar ao Carrinho"
    addToCartButton.addEventListener('click', function () {
        // Adicione o código para adicionar o produto ao carrinho
        // ...

        // Feche o modal após adicionar ao carrinho
        closeModal();
    });
}

function closeModal() {
    const modal = document.getElementById('product-details-modal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');
    const searchLink = document.getElementById('search-link');

    // ... outras funções compartilhadas ...

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
