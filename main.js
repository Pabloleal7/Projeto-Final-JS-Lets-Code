const botaoCadastrar = document.querySelector('.botao')

const elTarefa = document.querySelector('#tarefa')
const elData = document.querySelector('#data')


let statuss = "pendente"

botaoCadastrar.addEventListener('click', ()=>{
localStorage.setItem("tarefa",elTarefa.value)
localStorage.setItem("data",elData.value)
localStorage.setItem("status",statuss)
console.log("teste")
})