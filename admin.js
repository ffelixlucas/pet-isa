document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Coleta os dados do formulário
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productDescription = document.getElementById('productDescription').value;
        const productImage = document.getElementById('productImage').value;

        // Exibe os dados no console (para teste local)
        console.log('Nome:', productName);
        console.log('Preço:', productPrice);
        console.log('Descrição:', productDescription);
        console.log('Imagem:', productImage);

        // Limpa o formulário
        productForm.reset();
    });
});
