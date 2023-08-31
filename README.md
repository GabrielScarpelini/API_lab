


## COMO RODAR O PROJETO, APÓS BAIXAR

instalar todas as dependencias pelo package.json
`npm install`

## Executar uma migrate.
Criar tabela, basta apenas executar as migrations
`npx sequelize-cli db:migrate`


## Executar as seeders
`npx sequelize-cli db:seed:all`

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

## Criar arquivo das Tabelas na pasta migrate
Criar tabelas banco de dados utilizando migrate
`npx sequelize-cli migration:generate --name create-users`

`npx sequelize-cli migration:generate --name create-user_types`


## Desfazer uma migrate
`npx sequelize-cli db:migrate:undo`



## Criar a Models usuários
`npx sequelize-cli model:generate --name users --attributes name:string,email:string,user_type_id:INTEGER,password:STRING,is_active:INTEGER,cpf_cnpj:string,phone:string`



## Criar seeders
criar para inserir valores na tabela users
`npx sequelize seed:generate --name user_types`

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

## docker host
#DB_HOST=172.17.0.2 # Local do banco de dados