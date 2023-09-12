/* Criando o mapa na tela */
var map = L.map('map').setView([-23.554089836037775, -46.77735662393842], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 11,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

var markerMap = []


function exibirMarcadoresNoMapa(agencias) {

    for (let i = 0; i < agencias.length; i++) {

        let latitude = agencias[i].lat
        let longitude = agencias[i].lon

        let marker = L.marker([latitude, longitude]).addTo(map)
            // /* PopUp ao clicar no marcador */
            .bindPopup(agencias[i].nome + '<br>' + agencias[i].regiao)
        /* Colocando o marcador na array MarkerMap para poder limpar os marcadores */

        markerMap.push(marker)
    }
}

function criarListaCarro(carros) {

    var htmltext = "";

    for (let x = 0; x < carros.length; x++) {

        htmltext += `<li class="card">
       <p class="preco">${carros[x].preco}</p>
       <div class="conteudo">
           <p class="titulo">${carros[x].nome}</p>
           <ul class="descricao">
               <li>4 portas</li>
               <li>Automático</li>
               <li>Airbag</li>
               <li>Dir. Hidráulica</li>
           </ul>
       </div>
   </li>`

   
    }


    document.querySelector("#lstCarros").innerHTML = htmltext;
    document.querySelector(".card").style.background = 'url(../alugar-carro/assets/images/hummer-h1.jpg)';
    document.querySelector(".card").style.background_size = 'cover';


}