const botaoCadastrar = document.querySelector('.botao')

const elTarefa = document.querySelector('#tarefa')
const elData = document.querySelector('#data')
const table = document.querySelector('.table')


let statuss = "pendente"

botaoCadastrar.addEventListener('click', ()=>{
/* localStorage.setItem("tarefa",elTarefa.value)
localStorage.setItem("data",elData.value)
localStorage.setItem("status",statuss)
console.log("teste") */
const tr = document.createElement("tr")
let tdTarefa  = document.createElement("td")
tdTarefa.innerText =  elTarefa.value
tr.append(tdTarefa)
let tdData  = document.createElement("td")
tdData.innerText = elData.value
tr.append(tdData)
let tdStatus  = document.createElement("td")
tdStatus.innerText = "Pendente"
tr.append(tdStatus)

let tdExcluir  = document.createElement("td")
tdExcluir.innerHTML = "<button>Excluir</button>"
tr.append(tdExcluir)

table.append(tr)

console.log(elData.value)

})