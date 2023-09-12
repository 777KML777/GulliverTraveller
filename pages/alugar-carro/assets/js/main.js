filtroBtn = document.querySelector('[data-filtro-btn]')
filtroBarra = document.querySelector('[data-barra-de-filtros]')
filtroBackground = document.querySelector('[data-background-filtros]')

function sideShow() {
    filtroBarra.style.display = 'flex';
}

function sideHide() {
    filtroBarra.style.display = 'none'
}

// Parte da Api de Mapas
let agencias = []
const agenciasData = 'assets/data/agencia.json'
const carrosData = 'assets/data/carro.json'

repositorioAgencia()

async function repositorioAgencia() {
    const ags = await fetch(agenciasData)
    agencias = await ags.json()

    const car = await fetch(carrosData)
    carros = await car.json()

    exibirMarcadoresNoMapa(agencias);
    criarListaCarro(carros)
}

