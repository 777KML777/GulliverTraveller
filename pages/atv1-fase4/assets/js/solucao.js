var texto = " <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

// Variáveis de retorno
var cidades = [];
var roteirosA = [];
var qtdCidadesRoteirosA = [];
var pontosTuristicosSP = [];
var pontosTuristicosDT = [];


// Chamado somente no HTML
function mostrarNoDisplay() {
    document.querySelector("#cidades").innerHTML = nomeCidades().replaceAll("&", "<br><br>");
    document.querySelector("#roteirosA").innerHTML = conteudoRoteiroA().replaceAll("&", "<br><br>");
    document.querySelector("#qtdCidadesRoteirosA").innerHTML = qtdDeLocaisRoteiroACadaCidade().replaceAll("&", "<br><br>");
}

function resetarValores() {
    document.querySelector("#cidades").innerHTML = `Clicar no botão "Exibir Resolução"`;
    document.querySelector("#roteirosA").innerHTML = `Clicar no botão "Exibir Resolução"`;
    document.querySelector("#qtdCidadesRoteirosA").innerHTML = `Clicar no botão "Exibir Resolução"`;
}

// **Formata o texto** - Chamada: Métodos Auxiliares
function formatarTexto(parametro) {
    return parametro.replaceAll(" ", "+");
}

// **Exibe as variávies de retorno** - Chamada: Métodos de atribuição do INNER HTML
function montarLayout(vetor) {
    var layout = "";
    for (let index = 0; index < vetor.length; index++) {
        layout += `${vetor[index].replaceAll("+", " ")}.&`;
    }
    return layout;
}

// **Métodos Auxiliares** Chamada: Métodos de atribuição do INNER HTML
function quebrarTextoPorCidade() {
    var totalCidadesEncontradas = formatarTexto(texto).split("->");
    return totalCidadesEncontradas;
}

function quebrarTextoPorRoteiros(roteiro) {
    // Valores para o parâmetro roteiro: A+|, B+|, C+|. Posso usar Case aqui. Seria melhor...
    var totalRoteirosEncontrados = [];

    if (roteiro == null || roteiro == "") {
        totalRoteirosEncontrados = formatarTexto(texto).split("#");
    }
    else {
        var count = 0;
        var index = 0;

        while (formatarTexto(texto).split(roteiro).length > count) {
            if (count > 0) {
                //Delimitar o roteiro pegando somente o correto
                var delimitador = formatarTexto(texto).split(roteiro)[count];
                totalRoteirosEncontrados[index] = delimitador.split("<br>#")[0];
                index++;
            }
            count++;
        }

    }
    return totalRoteirosEncontrados;

}

function quebrarTextoPorPontoTuristico() {
    var totalPontosTuristico = 0;
    return totalPontosTuristico;
}

// **Metódos de atribuição do INNER HTML**
function nomeCidades() {
    var count = 0;
    var index = 0;

    while (quebrarTextoPorCidade().length > count) {
        if (quebrarTextoPorCidade()[count].split("*").length > 1) {
            cidades[index] = quebrarTextoPorCidade()[count].split("*")[1];
            index++;
        }
        count++;
    }


    return montarLayout(cidades);
}


function conteudoRoteiroA() {
    var count = 0;

    while (quebrarTextoPorRoteiros("A+|").length > count) {
        roteirosA[count] = quebrarTextoPorRoteiros("A+|")[count].split("<br>")[0];
        count++;
    }

    return montarLayout(roteirosA);
}


function qtdDeLocaisRoteiroACadaCidade() {
    var count = 0;
    var proxIndex = 0;
    var nomeCidadesRoteirosA = "";
    var qtd = 0;

    while (quebrarTextoPorRoteiros("A+|").length > count) {
        do {
            // Pega o nome de cada local de cada cidade
            nomeCidadesRoteirosA = quebrarTextoPorRoteiros("A+|")[count].split("<br>")[1];
            proxIndex = nomeCidadesRoteirosA.indexOf(";", proxIndex);
            qtdCidadesRoteirosA[count] = qtd++;
            proxIndex++;
        } while (proxIndex != 0)

        qtdCidadesRoteirosA[count] = qtd++;
        count++;
        qtd = 0;
        proxIndex = 0;
    }

    //Criei somente para usar o montarLayout abaixo adicionando o sinal de +.
    for (let index = 0; index < qtdCidadesRoteirosA.length; index++) {
             qtdCidadesRoteirosA[index]+= "+";
        
    }

    return montarLayout(qtdCidadesRoteirosA);
}




// Para esses dois em questão eu recebo a região e a cidade
// pontosTuristicosCentroSP ()
// pontosTuristicosDowntownLA ()


// Passa o valor do split para um outro método.
