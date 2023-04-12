# Project TrybeWallet!
## Sobre :
Esse projeto é uma aplicação Front-End que consiste na manipulação de uma carteira de controle de gastos com conversor de moedas.

Ao utilizar essa aplicação um usuário deverá ser capaz de:
- Adicionar, remover e editar um gasto;
- Visualizar uma tabelas com seus gastos;
- Visualizar o total de gastos convertidos para uma moeda de escolha;

<strong>As principais tecnologias utilizadas no projeto são: </strong> React e Redux para manipulação de estado.

## Para inicializar o projeto em sua máquina :
⚠️ Todos os comandos descritos abaixo devem ser executados no terminal dentro da pasta raíz do projeto, após ser feito o clone do repositório com o comando `git clone git@github.com:lauralana/Project-MyWallet.git`  <br>

⚠️ O projeto só instala as dependências com a versão 16 do `node` para evitar conflitos de versão, caso não tenha essa versão instalada você pode usar o [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) para fazer o gerenciamento de versões.  <br>

  :information_source: Instale as dependências com `npm install`  <br>
  
  :information_source: Para inicializar o projeto, rode o comando `npm start`
  
## Informações adicionais:
 Para esse projeto foi utilizada a API, awesomeapi API de Cotações para realizar a busca de câmbio de moedas. <br>
 >ENDPOINT:  <https://economia.awesomeapi.com.br/json/all>

  >O retorno desse endpoint será algo no formato:

  ```json
  {
    {
      "USD": {
        "code":"USD",
        "codein":"BRL",
        "name":"Dólar Americano/Real Brasileiro",
        "high":"5.6689",
        "low":"5.6071",
        "varBid":"-0.0166",
        "pctChange":"-0.29",
        "bid":"5.6173",
        "ask":"5.6183",
        "timestamp":"1601476370",
        "create_date":"2020-09-30 11:32:53"
        },
        ...
    }
  }
  ```

 >Se você quiser aprender mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).
 >OBS: esse projeto possui pequenas divergências em relação ao projeto original proposto pela Trybe.
