// passo 1 - pegar os personagens no JS para poder verificar quando o usuário passa o mouse em cima de um deles.

const personagens = document.querySelectorAll('.personagem');

//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mause.

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () =>{

    if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

//passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
    
      removerSelecaoDoPersonagem();

    personagem.classList.add('selecionado') 

// objetivo 2 - quando passar o mause em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem

// passo 1 - pegar o elemento do personagem grande para adicionar as informações nele.

      alterarImagemPersonagemSelecionado(personagem);

 // passo 3 - alterar o nome do personagem.

 alterarNomePersonagem(personagem);

  // passo 4 - alterar descrição do personagem

  alterarDscricaoPersonagem(personagem);
    
  })
})

function alterarDscricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar imagem do personagem Grande.
    alterarImagemPersonagem(personagem, imagemPersonagemGrande);
}

function alterarImagemPersonagem(personagem, imagemPersonagemGrande) {
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
