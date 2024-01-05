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
        const catalogContainer = document.getElementById('content');

        fetch('http://localhost:3000/api/catalog')
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

    // Funções anteriores...

    // Novo código adicionado abaixo
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
});
