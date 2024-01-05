document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');

    // Função para carregar a página
    function loadPage(pageName) {
        fetch(`${pageName}.html`)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
                if (pageName === 'index') {
                    loadCatalog();
                } else if (pageName === 'carrinho') {
                    initializeCart();
                }
            })
            .catch(error => console.error('Erro ao carregar a página:', error));
    }

    // Função para carregar o catálogo
    function loadCatalog() {
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
    
                    contentContainer.appendChild(productItem);
                });
          })
          .catch(error => console.error('Erro ao obter catálogo:', error));
    }

    // Exemplo de como você pode adicionar um ouvinte de evento para o botão "Ver Detalhes"
    contentContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('view-details-button')) {
            const index = event.target.dataset.index;
            loadProductDetails(catalogData[index]); // Substitua 'catalogData' pela variável correta que contém os dados do catálogo
        }
    });

    // Função para carregar os detalhes do produto em um modal
    function loadProductDetails(product) {
        // Lógica para exibir os detalhes do produto no modal
        // ...

        // Exemplo: Abre um modal com os detalhes do produto
        console.log('Detalhes do Produto:', product);
    }

    // Inicialmente, carrega a página inicial
    loadPage('index');
});
