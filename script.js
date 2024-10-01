'use strict'
// Abrir modal
const openModal = () => document.getElementById('modal').classList.remove('hidden')

// Fechar modal
const closeModal = () => {
    document.getElementById('modal').classList.add('hidden')
    document.getElementById('formulario').reset()
}

const tempClient = {
    nome:"Paulo",
    email:"paulo@gmail.com",
    celular:"28999582264",
    cidade:"Piúma"
}

//CRUD
const createClient = (client) => { //setItem envia e Get recebe
    localStorage.setItem("db_client", client)
}


// abrir modal
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

// fechar modal
Array.from(document.getElementsByClassName('modalClose')).forEach(x => {
    x.addEventListener('click', closeModal)
})