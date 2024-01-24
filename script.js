const dias = document.getElementById('dia')
const meses = document.getElementById('mes');
const anos = document.getElementById('ano');
const btn = document.getElementById('btn');

const dataAtual = new Date()
const diaAtual =  dataAtual.getDate()
const mesAtual =  (dataAtual.getMonth() + 1)
const anoAtual =  dataAtual.getFullYear()

function calcularIdade(dia,mes,ano){
  let years, months, days
 
 months = 12 + mesAtual - mes
 days = diaAtual - dia
 if(months == 12){
  years = anoAtual - ano
 }else{
  years = anoAtual - ano - 1
 }
 console.log(years, months, days)
 console.log(mes,dia)
}

function pegarDatas(){
   const dia = +dias.value
   const mes = +meses.value
   const ano = +anos.value
   calcularIdade(dia,mes,ano)
}

btn.addEventListener('click',pegarDatas)