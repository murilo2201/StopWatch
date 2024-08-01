const data = new Date();

//...
let hora = data.getHours();
let minuto = data.getMinutes();
let segundo = data.getSeconds();
//...
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();

function timer(hora, minuto, segundo){
 const formHora = hora < 10 ? `0${hora}` : hora;
 const formMin  = minuto < 10 ? `0${minuto}` : minuto;
 const formSeg  = segundo < 10 ? `0${segundo}` : segundo;

 return `${formHora}:${formMin}:${formSeg}`

}

function updateClock() {
    const data = new Date();
    const newHora = data.getHours();
    const newMinuto = data.getMinutes();
    const newSegundo = data.getSeconds();
      
const select = document.querySelector('#time')
select.innerHTML = timer(newHora, newMinuto, newSegundo);
}
  
updateClock();/*HERE*/
setInterval(updateClock, 1000);

function fullDate(dia, mes, ano){
    
    const formD = dia <10 ? `0${dia}` : dia;
    const formM =  mes <10 ? `0${mes}` : mes;
    const formA =  ano <10 ? `0${ano}` : ano;

    return `- ${formD}/${formM}/${formA} -`
}

    const sele = document.querySelector('#date')
    sele.innerHTML = fullDate(dia, mes, ano)