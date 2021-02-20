window.addEventListener("load",start);

// array dos dias da semana, a função getDay, pega o dia da semana como a possição de um array. Exemplo: Domingo ele retorna o número 0. Esse array serve para pegar o valor da posição 0.
let semana = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

// mesma coisa do dia da semana, é retornado a posição dp array, por isso a necessidade de criar um array com os meses do ano.
let mes =["janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let mesNumero = [01,02,03,04,05,06,07,08,09,10,11,12]

function start(){
  relogio();
  idade();
}

// função que cria o relógio
function relogio(){
  //pega os elementos referente a data e insere na variavel.
  let data = new Date();

  // pega os elementos de horas, minutos e segundos.
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds(); 
  
  
  // condição para colocar o zero na frente dos números menores que 10, assim todos os números ficam com 2 casas decimais.
  if(horas < 10){
    horas = "0"+horas;
  }
  if(minutos < 10){
    minutos = "0"+minutos;
  }
  if(segundos < 10){
    segundos = "0"+segundos;
  }

  // variavel que vai pegar os valores concatenados da hora, minuto e segundo.
  let horário = horas +":" + minutos +":" + segundos;

  // semana - pega o elemento na posição do array, referente ao dia da semana. Exemplo se for domingo retorna o valor 0 na posição do array e a função [data.getDay()], vai retornar domingo. A mesma coisa para a função [data.getMonth()].
  // getDate, pega o valor do dia.
  let diaSemana = semana[data.getDay()] + "," + data.getDate() + " de " + mes[data.getMonth()] + "de " + data.getFullYear();
  
  //insere as horas dentro do elemento no html.
  //document.getElementById("mostrarRelogio").innerHTML = horário;
  document.getElementById("mostrarHora").innerHTML = horas;
  document.getElementById("mostrarMinuto").innerHTML = minutos;
  document.getElementById("mostrarSegundo").innerHTML = segundos;

  // insere a semana, dia, mes e ano no html.
  document.getElementById("mostrarData").innerHTML = diaSemana;

}

//determina quanto tempo o relogico vai ficar atulizando em milisegundos, 1000 = 1segundo.
let tempo = setInterval(relogio,1000);


function idade(){
  //pega os elementos referente a data e insere na variavel.
  let data = new Date();
  
  const nascimento = 01;
  const mesNascimento = 08;
  const anoNascimento = 1990;

  const mesInicioFaculdade = (12/06); 
  const anoInicioFaculdade = 2020;

  let diaAtual = data.getDate();
  let mesAtual = mesNumero[data.getMonth()];
  let anoAtual = data.getFullYear();

  
  
  if (diaAtual >= nascimento && mesAtual >= mesNascimento){
    idadeAtual = (anoAtual)- (anoNascimento)
    
    
    
  } else{
    idadeAtual = (anoAtual - anoNascimento) - 1;
    
    
    
  }
    
  document.getElementById("idade").innerHTML = `Idade - ${idadeAtual}`;

  // representa o semestre do ano, (numero de meses divido por 6). Se o resultado da divisao for maior ou igual a 1 estara no segundo semestre.
  let semestral = mesAtual/6;

  if((semestral) <= 1 && anoAtual === 2021){
    semestre = 2;
  }
    
   else if (semestral >= 1 && anoAtual === 2021){
    semestre = 3;
  }
  else if (semestral <=1 && anoAtual === 2022){
    semestre = 4;
  }
  else if(semestral >=1 && anoAtual === 2022){
    semestre = 5;
  }
  document.getElementById("periodo").innerHTML =`Período - ${semestre}°`;
}


function mostrar(modalId){
  
  
  /*
  essa parte mostra o modal, agora descobrir como inserir a imagem nele
  */
 const modal = document.getElementById(modalId);
  if(modal){
    modal.classList.add("mostrar");
    btn= document.createElement("button");
    btn.classList.add("mostrar");
    modal.addEventListener('click', function(e){
      if(e.target.id == modalId || e.target.className ==='fechar'){
        console.log(e)
        modal.classList.remove('mostrar')
      }
    })
  }
}

const imagens = document.querySelector(".projetos");
imagens.addEventListener("click", function(){
  mostrar("modal-conteudo");
  console.log(imagens)
})

function volta(obj){

  obj.style.width ="120px"
  obj.style.height = '124px';
  if(obj.classList == "claro"){
    obj.style.background ="turquoise";
 }else if (obj.classList == "escuro"){
    obj.style.background ="midnightblue";
  }
  
}

/*document.getElementById("modal-resultado").innerHTML = `
    
    <img src='./img/amostra-calc.png' class='tamanho'>
    <button class="fechar">x</button>
    ` ;*/

  
    function trocaImg(tipo){
      btn= document.createElement("button");
      btn.classList.add("mostrar");
      btn.classList.add("fechar")

      console.log(tipo.value)
     console.log(tipo)
      if(tipo === 1){
        arquivo = '<img src="./img/amostra-github.png" class="tamanho"> <button class="fechar">x</button> '; 
      } else if (tipo === 2){
        arquivo = '<img src="./img/amostra-calc.png" class="tamanho"> <button class="fechar">x</button> ' ;
      }else if (tipo == 3){
        arquivo = '<img src="./img/amostra-bikcraft.png" class="tamanho"> <button class="fechar">x</button> ' ;
      } else if (tipo == 4){
        arquivo = '<img src="./img/amostra-curso.png" class="tamanho"> <button class="fechar">x</button> ' ;
      } else if (tipo == 5){
        arquivo = '<img src="./img/amostra-animes.png" class="tamanho"> <button class="fechar">x</button> ' ;
      } else if (tipo == 6){
        arquivo = '<img src="./img/amostra-filme.png" class="tamanho"> <button class="fechar">x</button> ' ;
      } 
      document.getElementById("modal-resultado").innerHTML = arquivo;
      return arquivo;
    }
      
       
    
    
 
