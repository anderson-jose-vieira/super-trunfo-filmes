
//Cartas do Baralho
let carta1 = {
    nome: "O Poderoso Chefão",
    imagem: "./img/c_poderoso.png",
    atributos: {
      IMDB: 92,
      METACRITIC: 100,
      ROTTEN: 97
    }
  };
  let carta2 = {
    nome: "Batman: O Cavaleiro das Trevas",
    imagem: "./img/c_batman.png",
    atributos: {
      IMDB: 90,
      METACRITIC: 84,
      ROTTEN: 94
    }
  };

  let carta3 = {
    nome: "A Lista de Schindler",
    imagem: "./img/c_lista.png" ,
    atributos: {
      IMDB: 90,
      METACRITIC: 84,
      ROTTEN: 98
    }
  };

  let carta4 = {
    nome: "Pulp Fiction: Tempo de Violência",
    imagem: "./img/c_pulp.png" ,
    atributos: {
      IMDB: 89,
      METACRITIC: 94,
      ROTTEN: 92
    }
  };

  let carta5 = {
    nome: "Forrest Gump",
    imagem: "./img/c_forrest.png"  ,
    atributos: {
      IMDB: 88,
      METACRITIC: 82,
      ROTTEN: 70
    }
  };

  let carta6 = {
    nome: "Clube da Luta",
    imagem: "./img/c_clube.png" ,
    atributos: {
      IMDB: 88,
      METACRITIC: 66,
      ROTTEN: 79
    }
  };

  let carta7 = {
    nome: "Matrix",
    imagem: "./img/c_matrix.png"  ,
    atributos: {
      IMDB: 87,
      METACRITIC: 73,
      ROTTEN: 88
    }
  };

  let carta8 = {
    nome: "Os Bons Companheiros",
    imagem: "./img/c_bons.png" ,
    atributos: {
      IMDB: 87,
      METACRITIC: 90,
      ROTTEN: 96
    }
  };

  let carta9 = {
    nome: "A Felicidade Não se Compra",
    imagem: "./img/c_felicidade.png" ,
    atributos: {
      IMDB: 86,
      METACRITIC: 89,
      ROTTEN: 94
    }
  };

  let carta10 = {
    nome: "O Silêncio dos Inocentes",
    imagem: "./img/c_silencio.png"  ,
    atributos: {
      IMDB: 86,
      METACRITIC: 85,
      ROTTEN: 95
    }
  };
  
  
  let cartas = [carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10];
  let cartaMaquina;
  let cartaJogador;
  
  function sortearCarta() {
    let maquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[maquina];
  
    let jogador = parseInt(Math.random() * 10);
    //Averigar que a cara será diferente
    while (maquina == jogador) {
      jogador = parseInt(Math.random() * 10);
    }
    cartaJogador = cartas[jogador];
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    //exibirOpcoes();
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado(){
    let radioAtributos = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributos.length; i++){
      if (radioAtributos[i].checked == true){
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar(){
    let atributoSelecionado = obtemAtributoSelecionado();
    if(!atributoSelecionado){
        alert('Selecione um atributo antes de Jogar!')
    }else{
       let elementoResultado = document.getElementById("resultado");
       let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
       let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
       if (valorCartaJogador > valorCartaMaquina){
            htmlResultado = "<p class='resultado-final'>Venceu</P"
       }else if (valorCartaJogador < valorCartaMaquina){
                 htmlResultado = "<p class='resultado-final'>Você perdeu!</P"
            }else {
               htmlResultado = "<p class='resultado-final'>Empatou</P"
            }
       elementoResultado.innerHTML = htmlResultado
       document.getElementById('btnJogar').disabled = true;
       exibirCartaMaquina();
   }
  }
  
  function exibirCartaJogador(){
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    //divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"
    let moldura = '<img src="./img/card-super-trunfo.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"
    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'/>" + atributo + " = " + cartaJogador.atributos[atributo] + "<br>";
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }
  
  function exibirCartaMaquina(){
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    let moldura = '<img src="./img/card-super-trunfo.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"
    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p name='atributo' value='" + atributo +"'/>" + atributo + " = " + cartaMaquina.atributos[atributo] + "</p>";
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }

  function reiniciar(){
    location.reload();
  }
