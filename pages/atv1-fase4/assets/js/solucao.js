var texto = " <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

var cidades = [];
var roteirosA = [];
var cidadesRoteirosA = [];
var pontosTuristicosSP = [];
var pontosTuristicosDT = [];

function mostrarNoDisplay() {
    document.querySelector("#cidades").innerHTML = nomeCidades().replaceAll("&", "<br><br>");
    document.querySelector("#roteirosA").innerHTML = conteudoRoteiroA().replaceAll("&", "<br><br>");
}

function resetarValores() {
    document.querySelector("#cidades").innerHTML = `Clicar no botão "Exibir Resolução"`;
    document.querySelector("#roteirosA").innerHTML = `Clicar no botão "Exibir Resolução"`;
}

function tirarEspacoBranco(parametro) {
    return parametro.replaceAll(" ", "+");
}

function nomeCidades() {
    var textoFormatado = tirarEspacoBranco(texto); 
    var textoFiltrado = textoFormatado.split("*");
     
    var count = 0;
    var index = 0;

    while (textoFiltrado.length > count) {
        if (count % 2 == 1) {
            cidades[index] = textoFiltrado[count];
            index++;
        }

        count++;
    }
    // console.log(cidades)
    return `Nome da cidade 1: ${cidades[0]} - Nome da cidade 2: ${cidades[1]} - Nome da cidade 3: ${cidades[2]}.`;
}


function conteudoRoteiroA() {
    var textoFormatado = tirarEspacoBranco(texto); 
    var textoFiltrado = textoFormatado.split("A+|");

    var count = 0;
    var index = 0;
    var exibicao = "";
     
    while (textoFiltrado.length > count) {
        if (textoFiltrado[count].startsWith("+Região")) {

            var delimitador = textoFiltrado[count].search("<");
            roteirosA[index] = textoFiltrado[count].substring(0, delimitador);

            index++;
        }
        count++;
    }

    console.log(roteirosA);    
    

    for (let index = 0; index < roteirosA.length; index++) {
        exibicao += `${roteirosA[index].replaceAll("+", " ")}.&`;
        
    }

    console.log(exibicao);    
    return exibicao;
}

// Implementar

// qtdDeLocaisRoteiroACadaCidade()
// pontosTuristicosCentroSP ()
// pontosTuristicosDowntownLA ()

// Refatorar 

// As duas primeiras linhas de cada método. Pensar em como fazer...

// Criar um loop para exibir o valor dos vetores em uma nova váriavel com o texto formatado conforme a necessidade. (Primeiro momento exibir somente o que foi pedido) (x)

// Criar um método chamado montarLayout para o item acima. 

// Passa o valor do split para um outro método.

// Arrumar o retorno do primeiro método. 