# Explanação do uso da API

A API Leaflet é uma biblioteca JavaScript popular para criação de mapas interativos em páginas da web. Ela é fácil de usar, personalizável e suporta uma variedade de recursos de mapas.

## Começando

Para começar a usar a API Leaflet, siga os seguintes passos:

1. *Instale a biblioteca*: Você pode incluir a biblioteca Leaflet em sua página da web usando um CDN ou instalando-a via npm ou yarn.

    *Via CDN*:
    html
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    

    *Via npm*:
    
    npm install leaflet
    

2. *Crie um contêiner HTML*: Adicione um elemento HTML onde o mapa será exibido, por exemplo:

    html
    <div id="map" style="width: 600px; height: 400px;"></div>
    

3. *Inicialize o mapa*: Use JavaScript para criar e configurar o mapa. Aqui está um exemplo simples:

    javascript
    // Inicialize o mapa
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Adicione um provedor de mapa (por exemplo, Mapbox)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    

4. *Adicione marcadores e camadas*: Você pode adicionar marcadores, polígonos, polilinhas e outras camadas ao seu mapa.

5. *Personalize e estilize*: Personalize o mapa e suas camadas de acordo com suas necessidades.

## Exemplo: Adicionar Marcadores ao Mapa

Aqui está um exemplo de como adicionar marcadores ao mapa usando a API Leaflet:

```javascript
// Crie um marcador
var marker = L.marker([51.5, -0.09]).addTo(map);

// Adicione uma pop-up ao marcador
marker.bindPopup("Eu sou um marcador!");

// Adicione um círculo ao redor do marcador
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// Adicione um polígono
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
