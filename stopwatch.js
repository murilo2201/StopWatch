let hora = 0
let minuto = 0
let segundo = -1
let boot = false
let play = ''
let loop  = ''

function cronometro(hora, minuto, segundo){

    const formHora = hora < 10 ? `0${hora}` : hora;
    const formMinuto = minuto < 10 ? `0${minuto}` : minuto;
    const formSegundo = segundo < 10 ? `0${segundo}` : segundo;

return `${formHora}:${formMinuto}:${formSegundo}`
}


function start(){

    segundo++
if(segundo === 60){
    segundo = 0;
    minuto++
}
if(minuto === 60){
    minuto = 0;
    hora++
}
if(!boot){
    boot = true
    play = setInterval(start, 1000);
}

    const cro = cronometro(hora, minuto, segundo)
    let select = document.querySelector('#time')
    select.innerHTML = cro
    select.style.color = ' #F1336F'
    clearInterval(loop)
    ;document.querySelector('#start').disabled = true /*here*/
    document.querySelector('#start').style.backgroundColor = ' #c2c5b7' 
    document.querySelector('#start').style.color = 'black'
    document.querySelector('#start').style.boxShadow = 'none'
}

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        start();
    }
})


function stop(){

    boot = false
    clearInterval(play)
    const select = document.querySelector('#time')
    let isColor1 = true
    

    loop = setInterval(function(){

        if(isColor1){
            select.style.color = '#F1336F'
        }
        else{
            select.style.color = 'white'
        }
        isColor1 = !isColor1
    }, 500)/*here*/
    document.querySelector('#start').disabled = false;
    document.querySelector('#start').style.backgroundColor = 'white' 
    document.querySelector('#start').style.color = 'black'
    document.querySelector('#start').style.boxShadow = '0px 3px 0px  #9a9a9a'
}

document.addEventListener('keydown', function(event){
    if(event.key === ' '){
        stop();
    }
})

function restart(){

    clearInterval(play)
    boot = false
    let select = document.querySelector('#time')
    select.style.color = ' #F1336F'

    segundo = -1;
    minuto = 0;
    hora = 0;
    clearInterval(loop)
    document.querySelector('#start').disabled = false
    document.querySelector('#start').style.backgroundColor = 'white' 
    document.querySelector('#start').style.color = 'black'
    document.querySelector('#start').style.boxShadow = '0px 3px 0px  #9a9a9a'
}

document.addEventListener('keydown', function(event){
    if(event.key === 'Backspace'){
        restart();
    }/*here*/
})

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
      stopAll(); 
    }
  });
  
  function stopAll() {
   event.preventDefault();
    location.reload();
  }
  

  
