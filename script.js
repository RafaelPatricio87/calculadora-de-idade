const dias = document.getElementById('dia')
const meses = document.getElementById('mes');
const anos = document.getElementById('ano');
const btn = document.getElementById('btn');

const dataAtual = new Date()
const diaAtual =  dataAtual.getDate()
const mesAtual =  dataAtual.getMonth() + 1
const anoAtual =  dataAtual.getFullYear()
const diasDoMes = new Date(anoAtual, mesAtual,0).getDate()


function calcularIdade(dia,mes,ano){
  let years, months, days
  
 days = dia - diaAtual
 if(days <= 0){
    months = 12 + mesAtual - mes
    years = (anoAtual - ano) - 1
    if(days <= 0 && mesAtual == mes){
      years = (anoAtual - ano) 
       months = 0
      }
      days = diaAtual - dia
   
}else {
   years  =  anoAtual - ano - 1
   months = (12 + mesAtual - mes) 
   days = diasDoMes - days
}
 
  renderizar(days,months,years)

}

function pegarDatas(){
   if(dias.value > 31 || dias.value == null || dias.value < 1){
     alert('Erro: Digite um dia valido')
   }
   if(meses.value > 12 || meses.value == null || meses.value < 1){
      alert('Erro: Digite um mes valido')
    }
    if(anos.value > anoAtual || anos.value == null || anos.value < 1){
      alert('Erro: Digite um ano valido')
    }
   const dia = +dias.value
   const mes = +meses.value
   const ano = +anos.value
   calcularIdade(dia,mes,ano)
}

function renderizar(days,months,years){
   document.getElementById('year').innerText = years
   document.getElementById('month').innerText = months
   document.getElementById('day').innerText = days
}

btn.addEventListener('click',pegarDatas)