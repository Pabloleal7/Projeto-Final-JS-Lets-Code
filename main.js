const botaoCadastrar = document.querySelector('.botao')
const elTarefa = document.querySelector('#tarefa')
const elData = document.querySelector('#data')
const table = document.querySelector('.tbody')
const elExcluir = document.querySelectorAll('.excluir')

let tarefa = new Array


if(localStorage.getItem("tarefa") !==  null){
  tarefa  = JSON.parse(localStorage.getItem("tarefa"))
  atualizaTela()
} 

function adicionaTarefa() {

  if (elTarefa.value && elData.value !== "") {
    tarefa.push({ nome: elTarefa.value, data: elData.value, id: tarefa.length })
    atualizaTela()
  
    atualizaStorage()
  } else {
    alert("Preencha todos os campos!")
  }

 

}

function atualizaStorage(){
  localStorage.clear("tarefa")
  if(tarefa.length !== 0 ){
    localStorage.setItem("tarefa", JSON.stringify(tarefa))
  }
  
}

function excluir(id) {
tarefa.splice(id,1)
atualizaStorage()
atualizaTela()
}

function atualizaTela() {
  table.innerHTML = ""

  if(tarefa.length === 0 ){
    return
  }

  tarefa.forEach((item,i) => {
    const tr = document.createElement("tr")

    let tdTarefa = document.createElement("td")
    tdTarefa.innerText = item.nome
    tr.append(tdTarefa)

    let tdData = document.createElement("td")
    tdData.innerText = item.data
    tr.append(tdData)

    let tdExcluir = document.createElement("td")
    tdExcluir.innerHTML = `<button  onClick="excluir(${i})" class="excluir">Excluir</button>`

    tr.append(tdExcluir)

    table.append(tr)
    elData.value = ""
    elTarefa.value = ""

  })

  
}


botaoCadastrar.addEventListener('click', () => {

  adicionaTarefa()
  
 

})


