document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Coleta os dados do formulário
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productDescription = document.getElementById('productDescription').value;
        const productImage = document.getElementById('productImage').value;

        // Cria um objeto representando o novo produto
        const newProduct = {
            name: productName,
            price: parseFloat(productPrice),
            description: productDescription,
            image: productImage
        };

        // Envia os dados para o backend
        addProductToBackend(newProduct);
    });

    function addProductToBackend(product) {
        fetch('http://localhost:3000/api/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Produto adicionado com sucesso
                console.log(data.message);
                // Aqui você pode fazer algo adicional se necessário
            } else {
                // O servidor relatou um erro
                console.error(data.message);
            }
        })
        .catch(error => console.error('Erro ao adicionar produto:', error));
    }
});
