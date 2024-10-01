// Dados dos produtos (exemplo)
const produtos = [
    {
        nome: "Processador Intel Core i7",
        descricao: "Processador de alta performance para jogos e aplicações intensivas.",
        preco: "R$ 1.200,00",
        imagem: "https://via.placeholder.com/250x200"
    },
    {
        nome: "Placa de Vídeo NVIDIA RTX 3070",
        descricao: "Gráficos impressionantes para jogos e edição de vídeo.",
        preco: "R$ 3.500,00",
        imagem: "https://via.placeholder.com/250x200"
    },
    {
        nome: "Memória RAM 16GB DDR4",
        descricao: "Alta velocidade e eficiência para multitarefas.",
        preco: "R$ 600,00",
        imagem: "https://via.placeholder.com/250x200"
    },
    {
        nome: "SSD 1TB NVMe",
        descricao: "Armazenamento rápido para sistemas operacionais e aplicativos.",
        preco: "R$ 800,00",
        imagem: "https://via.placeholder.com/250x200"
    },
    {
        nome: "Fonte de Alimentação 750W",
        descricao: "Potência e confiabilidade para seu PC.",
        preco: "R$ 450,00",
        imagem: "https://via.placeholder.com/250x200"
    },
    {
        nome: "Gabinete Gamer",
        descricao: "Design moderno com excelente fluxo de ar.",
        preco: "R$ 350,00",
        imagem: "https://via.placeholder.com/250x200"
    }
];

// Função para exibir os produtos na página
function exibirProdutos() {
    const grid = document.getElementById('product-grid');

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('product');

        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p><strong>${produto.preco}</strong></p>
            <a href="#" class="btn">Comprar</a>
        `;

        grid.appendChild(produtoDiv);
    });
}

// Função para tratar o envio do formulário de contato
function tratarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
    // Por enquanto, vamos apenas exibir uma mensagem de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    document.getElementById('contact-form').reset();
}

// Evento que dispara quando o conteúdo da página é carregado
document.addEventListener('DOMContentLoaded', () => {
    exibirProdutos();
    document.getElementById('contact-form').addEventListener('submit', tratarFormulario);
});
