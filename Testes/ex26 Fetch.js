function converte() {
  let valor = document.getElementById("vreal").value;
//   Url abaixo de uma API de cotação do dollar e Real.
  let url = "https://economia.awesomeapi.com.br/last/USD-BRL";

    // O Fetch busca uma informação em uma api online, e retorna um 'Promise' como resultado, e tratando esse resultado com '.json' podemos utilizar esses dados recebidos.
  fetch(url)
//   como é uma 'promise' utilizamos o 'then', pois se não o programa pode passar direto sem esperar a resposta do servidor.
    .then((resposta1) => {
      return resposta1.json();
    })
    .then((dados) => {
      document.getElementById("resp").innerHTML =
        `${valor} reais são equivalente à ${(valor / dados.USDBRL.high).toFixed(2)} dollares` + `<p>Cotação atual do dolar: $${dados.USDBRL.high}`;
        // Apoz o 'then' anterior ter tratado a promise, agora podemos acessar os dados do objeto que foi recebido, por exemplo 'dados.USDBRL.high', onde acessamos a cotação maxima do Dollar no dia. 
    });
}
