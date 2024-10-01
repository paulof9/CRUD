'use strict'
// Abrir modal
const openModal = () => document.getElementById('modal').classList.remove('hidden')

// Fechar modal
const closeModal = () => {
    document.getElementById('modal').classList.add('hidden')
    document.getElementById('formulario').reset()
}

// abrir modal
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

// fechar modal
Array.from(document.getElementsByClassName('modalClose')).forEach(x => {
    x.addEventListener('click', closeModal)
})

// prisma