filtroBtn = document.querySelector('[data-filtro-btn]')
filtroBarra = document.querySelector('[data-barra-de-filtros]')
filtroBackground = document.querySelector('[data-background-filtros]')

function sideShow() {
    filtroBarra.style.display = 'flex';
}

function sideHide() {
    filtroBarra.style.display = 'none'
}