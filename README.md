# delivery-much-challenge
Desafio proposto pela Delivery Much, onde se deve criar uma api que lista receitas de acordo com os ingredientes fornecidos pelo usuário.
Para compor os resultados da api, foi proposto o uso das APIs Recipe Puppy (https://www.recipepuppy.com) para as receitas e Giphy (https://giphy.com/) para um gif que tenha a ver com a receita informada.

## Sobre o projeto desenvolvido
O projeto foi desenvolvido utilizando NodeJs com Typescript.
Para montar a estrutura do projeto usei como guia o DDD (Domain Driven Design), separando ao máximo as responsabilidades.
Para desenvolvimentos dos testes foi utilizado a lib Jest.

## Executando o Projeto
O projeto pode ser executado local com Npm ou Yarn, ou via Docker.

### Passos que devem ser seguidos independente da escolha de onde rodar o app:

 1. Faça o clone do projeto em uma pasta de sua preferência. 
 2. Na raiz do projeto existe um arquivo chamado ".env.example", copiei e cole esse arquivo na raíz mesmo com o nome ".env";
 3. Entre editando esse arquivo ".env", configurações padrões já estarão setadas,a única informação que você precisa preencher é o "GIPHY_API_KEY". Para conseguir a chave de acesso use o link https://developers.giphy.com/docs/api#quick-start-guide;

Pronto agora você pode escolher uma das opções em que quer rodar o projeto.

### NPM e Yarn (Execute esses passos se deseja rodar o projeto local via Npm ou Yarn)
Primeiro você deve ter o Node instalado local em sua máquina, você pode seguir o link abaixo para instalação do mesmo no seu ambiente.

 - NodeJs -> https://github.com/nvm-sh/nvm#installing-and-updating

Caso escolha usar o Yarn faça também a instalação do mesmo:

 - Yarn -> https://classic.yarnpkg.com/en/docs/install

Feito a instalação das libs necessárias vamos então rodar o projeto:
Na raíz do projeto execute um dos comandos a seguir:

#### NPM

 - 1 - execute: `npm install`

Para executar como ambiente de desenvolvimento:

 - 2 - execute: `npm dev:server`

Para executar como ambiente de produção:

 - 2 - execute: `npm build` 
 - 3 - execute: `npm start`

#### Yarn

 - 1 - execute: yarn

  Para executar como ambiente de desenvolvimento:

 - 2 - execute: yarn dev:server
 
  Para executar como ambiente de produção:
 - 2 - execute: yarn build
 - 3 - execute: yarn start

 
Pronto, se você manteve a configuração de porta padrão, basta acessar a url http://localhost:3333/recipes?i=ice e verá o resultado em Json, mais detalhes na doc abaixo sobre como usar a api.

### Usando o docker
Para usar o docker aqui também é bem fácil. Primeiro verifique se você tem o docker instalado em seu ambiente. Em seguida utilize os comandos:

 - 1 - `docker build -t seu_nome_de_usuario/delivery-much-challenge .`

Obs.: Verifique que o comando acima tem um "." no final da linha, ele é obrigatório.
Esse comando irá criar a imagem que você precisa em sua conta no dockerhub, caso não possua uma conta, você pode criar ou usar a minha imagem, caso faça a opção por usar minha imagem, você não precisa executar esse primeiro passo.

O próximo passa é criar o container usando a imagem que você criou ou a minha: 

 - 2 - `docker run --name dm_challenge -p 8080:3333 -d seu_usuario/delivery-much-challenge`

Caso queira usar minha imagem: 

 - 2 - `docker run --name dm_challenge -p 8080:3333 -d kmayconn/delivery-much-challenge`

Explicando: dm_challenge é o nome do container, e será por esse nome que você irá parar ou iniciar os containers. 8080 é a porta que você irá usar para acessar sua api. E 3333 é a porta que o app está rodando dentro do docker.
Feito isso, basta usar a url localhost:8080 e você terá acesso a api.

Obs.: o comando "docker run" deve ser usado apenas na primeira vez que se sobe o container. nas próximas utilize o comando "docker start".
ex.: `docker start dm_challenge`

## Demo
Caso queira testar a api sem baixar o projeto, você pode usar a url: 
http://delivery-much-challenge.herokuapp.com

## API
Existe apenas um endpoint:

    {{ $HOST }}/recipes/?i=onion,tomato

Os parâmetros enviados no "i" devem ser separados por vírgula, mínimo de 1 e máximo de 3 ingredientes.
A resposta será assim: 

    {
    	"keywords": ["onion", "tomato"],
    	"recipes": [{
    		"title": "Greek Omelet with Feta",
    		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
    		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
    		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
    	   },{
    		"title": "Guacamole Dip Recipe",
    		"ingredients": ["avocado", "onions", "tomato"],
    		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
    		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
    	   }
    	]
    }

## Finalizando

Espero que gostem, fui bem atencioso ao projeto e apesar de se tratar de um projeto pequeno, apliquei conceitos que são aplicados em sistemas de grande porte.

# Delivery Much


