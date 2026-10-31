
const animais = [
    {
        id: 1,
        nome: "Spark",
        imagem: "https://images.unsplash.com/photo-1783936093098-2daf9e8ef72e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 2,
        nome: "mimi",
        imagem: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 3,
        nome: "rex",
        imagem: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 4,
        nome: "mila",
        imagem: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 4,
        nome: "mila",
        imagem: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 4,
        nome: "mila",
        imagem: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 4,
        nome: "mila",
        imagem: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 4,
        nome: "mila",
        imagem: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 4,
        nome: "mila",
        imagem: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        idade: "3 anos",
        especie: "cachorro"
    },
    {
        id: 5,
        nome: "toddy",
        imagem: "https://www.google.com/imgres?q=cheetos%20cachorro%20filhote&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Ffilhote-de-cachorro-preto-e-branco-do-tzu-do-shih-14316455.jpg&imgrefurl=https%3A%2F%2Fpt.dreamstime.com%2Fphotos-images%2Fshih-tzu-preto-e-branco.html&docid=aIj8-RiOCHCFjM&tbnid=pqaNaZOPsUQIBM&vet=12ahUKEwjUi8L23eSXAxUiBbkGHQncE3cQnPAOegUImQEQAA..i&w=600&h=900&hcb=2&ved=2ahUKEwjUi8L23eSXAxUiBbkGHQncE3cQnPAOegUImQEQAA",
        idade: "3 anos",
        especie: "cachorro"
    }
];



document.addEventListener('DOMContentLoaded', () => {
    renderizaranimal(animais)

    document.getElementById('btn-busca').addEventListener("click", pesquisar)

    document.getElementById('input-pesquisa').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            pesquisar()
        }
    })
})


function renderizaranimal(lista) {
    const grid = document.getElementById('animais')
    grid.innerHTML = lista.map(cardsanimal).join('')
}


function cardsanimal(animais) {
    return `
        <div class="cardsanimal">
            <img src="${animais.imagem}">
            <h3>${animais.nome}</h3>
            <p>${animais.especie} ${animais.idade}</p>
            <button>QUERO ADOTAR</button>
        </div>    
    `
}


