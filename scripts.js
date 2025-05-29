/*
    JavaScript NÃO é Java

    Variáveis
É um pedacinho de memória do computador
que eu posso guardar o que eu quiser    

    Função
É um pedacinho de código que, só é
executado quando é chamado

    - Algorítmo (Receita de Bolo)
        [x] Descobrir quando o usuário clicou no botão
        [x] Assim que o botão for clicado...
        [x] Trocar a cor de fundo
        [ ] Trocar a imaagem principal 
        [ ] PUBLICAR na INTERNET 
  
        document = HTML
        querySelector = pega algo que eu quero no HTML
*/
let circulo = document.querySelector(".circulo") 
let imagem = document.querySelector(".starbucks")

function trocarCor(cor){
    circulo.style.background = cor
}

function trocarImagem(img){
    imagem.src = img 
}