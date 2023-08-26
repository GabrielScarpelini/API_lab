


## COMO RODAR O PROJETO, APÓS BAIXAR
Projeto pode rodar com node app.js ou nodemon app.js.
instalar todas as dependencias pelo package.json
`npm install`

## Criar o arquivo package
criar package.json
`npm init`

instalando nodemon
`npm install -g nodemon`

startar projeto 
`node app.js`

startar projeto com nodemon
`nodemon app.js`

## Criar arquivo ENV
Criar a base de dados MYSQL
Alterar as credenciais do banco de dados no arquivo ".env" e manipular variaveis
`npm install dotenv --save`


## Criar database
`npx sequelize-cli db:create`

## Criar Tabelas
Criar tabelas banco de dados utilizando migrate
`npx sequelize-cli migration:generate --name create-users`



## Executar uma migrate.
Criar tabela, basta apenas executar as migrations
`npx sequelize-cli db:migrate`

## Desfazer uma migrate
`npx sequelize-cli db:migrate:undo`



## Criar a Models usuários
`npx sequelize-cli model:generate --name users --attributes name:string,email:string,user_type_id:INTEGER,password:INTEGER,is_active:INTEGER,cpf_cnpj:string,phone:string`



## Criar seeders
criar para inserir valores na tabela users
`npx sequelize seed:generate --name users`

## Seeders
Executar as seeders 
`npx sequelize-cli db:seed:all`



### Instalando expresso
Gerencia as requisições, rotas e URLs, entre outra funcionalidades
`npm install --save express`



## SEQUELIZE
Sequelize-cli interface de linha de comando usada para criar modelos,
configurações e arquivos de migreação para banco de dados
`npm install --save-dev sequelize-cli`

## Iniciar sequelize 
Iniciar o Sequelize-cli e criar o arquivo config
`npx sequelize-cli init`

## Migrations
Executar as migrations
`npx sequelize-cli db:migrate`
