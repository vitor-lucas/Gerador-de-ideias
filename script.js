const ideias = [
    "Crie um clone de um site",
    "Construa seu próprio Site de Portfólio",
    "Crie um aplicativo da Web de operação CRUD",
    "Crie uma página de destino de pontuação perfeita",
    "Crie um reprodutor de música JavaScript",
    "Crie uma página de destino dinâmica",
    "Construa seu próprio leitor de código QR",
    "Construa uma calculadora",
    "Crie um aplicativo de clima",
    "Crie um questionário de JavaScript",    
]

const inputIdeia = document.querySelector("#inputIdeia")

function gerarIdeia (){

    const totalIdeias = ideias.length
    const numeroAleatorio = Math.floor(Math.random() *totalIdeias)
    console.log(ideias[numeroAleatorio])    
    
    const ideiaGerada = document.querySelector ("#ideiagerada")
    ideiaGerada.innerHTML = ideias[numeroAleatorio]

    if(inputIdeia.value == "") {
        alert("Digite sua ideia")
        return
    }
}