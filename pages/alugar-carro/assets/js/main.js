filtroBtn = document.querySelector('[data-filtro-btn]')
filtroBarra = document.querySelector('[data-barra-de-filtros]')
filtroBackground = document.querySelector('[data-background-filtros]')

function sideShow() {
    filtroBarra.style.display = 'flex';
}

function sideHide() {
    filtroBarra.style.display = 'none'
}

localForm = document.querySelectorAll('[data-input-local]')
dataForm = document.querySelectorAll('[data-input-data]')

let tamanhoJanela = window.innerWidth
window.addEventListener("resize", () => {
    tamanhoJanela = window.innerWidth
    if (tamanhoJanela > 1440 || tamanhoJanela < 1024) {
        for (let i = 0; i < dataForm.length; i++) {
            dataForm[i].style.display = "flex";
            dataForm[i].parentNode.style.width = "100%"
            dataForm[i].parentNode.parentNode.style.width = "100%"
            localForm[i].style.display = "flex"
            localForm[i].parentNode.style.width = "100%"
            localForm[i].parentNode.parentNode.style.width = "auto"
            localForm[i].parentNode.parentNode.style.width = "100%"
        }
    } else {
        for (let i = 0; i < dataForm.length; i++) {
            if (dataForm[i].style.display === "flex" & localForm[i].style.display === "flex") {
                dataForm[i].style.display = "none";
                dataForm[i].parentNode.style.width = "fit-content"
                dataForm[i].parentNode.parentNode.style.width = "fit-content"
            }
        }
    }
})

function toggleData() {
    if (tamanhoJanela < 1440 & tamanhoJanela > 1024) {
        for (let i = 0; i < dataForm.length; i++) {
            if (dataForm[i].style.display === "none") {
                dataForm[i].style.display = "flex";
                localForm[i].style.display = "none"
                dataForm[i].parentNode.style.width = "100%"
                dataForm[i].parentNode.parentNode.style.width = "100%"
                localForm[i].parentNode.style.width = "fit-content"
                localForm[i].parentNode.parentNode.style.width = "auto"
            } else {
                dataForm[i].style.display = "none";
                dataForm[i].parentNode.style.width = "fit-content"
                dataForm[i].parentNode.parentNode.style.width = "fit-content"
                localForm[i].style.display = "flex"
                localForm[i].parentNode.style.width = "100%"
                localForm[i].parentNode.parentNode.style.width = "inherit"
            }
        }
    } else {
        for (let i = 0; i < dataForm.length; i++) {
            dataForm[i].style.display = "flex";
            localForm[i].style.display = "flex"
            localForm[i].parentNode.style.width = "100%"
            localForm[i].parentNode.parentNode.style.width = "100%"
            dataForm[i].parentNode.parentNode.style.width = "100%"
        }
    }
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
