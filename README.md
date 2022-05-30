# Backend Challenge 🏅 2022 - Covid Daily Cases

> This is a challenge by [Coodesh](https://coodesh.com/)

Desenvolvimento de uma REST API que utiliza o histórico de casos de Covid, disponível no [Kaggle](https://www.kaggle.com/datasets/yamqwe/omicron-covid19-variant-daily-cases).

## :pushpin: Back-end

### :wrench: Habilidades

Manipulação do sequelize para implementação do banco de dados e da tabela.

Realizado a rota `get` da aplicação com `ORM`.

Linguagem, framework, tecnologias e/ou libs usadas utilizadas no projeto:

  - MySQL
  - NodeJs
  - Express
  - Sequelize
  - Sequelize-cli
  - Chai
  - Mocha
  - Sinon
  - Nodemon
  - Dotenv

Desenvolvido arquitetura de softwares utilizando o modelo MSC(Model, Controller and Services).

Utilização do conceito de Arquitetura REST.


### :wrench: O que foi desenvolvido

Nesse projeto foi desenvolvido uma Rest API com as estatísticas de casos de COVID, com endpoints que irão permitir a interação do usuário com as informações exigidas pelo desafio.

O objetivo foi exibir o número de casos de COVID por país, data e variante.

Implementação das rotas `cases`, `dates` de acordo com as regras de negócio.


### :warning: Documentação da API e Acesso ao banco de dados

[Acesse a documentação aqui](https://documenter.getpostman.com/view/20097451/Uz5CNeSc)

[Acesse a API aqui](https://challenge-coodesh-covid-2022.herokuapp.com/)

- Endpoints: `/`, `/cases`, `/cases/:date/count`, `/cases/:date/cumulative`


## :pushpin: Docker

### :wrench: Habilidades

Criar um container Docker para uma aplicação de back-end.


### :wrench: O que foi desenvolvido

Habilidade de configurar um arquivo Docker compose e Dockerfile, utilizando Docker.


## :pushpin: Como acessar o projeto

1. Clone e rode o projeto localmente:
    * `git clone git@github.com:marianasaraiva/challenge-coodesh-back-covid.git`
    * `npm install`
    * configurar as variaveis de ambiente, conforme arquivo `.env.example`
    * ter o ambiente configurado para utilizar docker
    * `docker-compose up`


## :thought_balloon: Desenvolvido por  

- GitHub - [Mariana Saraiva](https://github.com/marianasaraiva)


:warning: Essa aplicação não possui Front-end.