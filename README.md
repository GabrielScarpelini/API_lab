COMO RODAR O PROJETO, APÓS BAIXAR
instalar todas as dependencias pelo package.json
### npm install

Criar a base de dados MYSQL
Alterar as credenciais do banco de dados no arquivo ".env"

Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install --save express

Executar as migrations
### npx sequelize-cli db:migrate

Executar as seeders 
### npx sequelize-cli db:seed:all

Rodar o projeto
### node app.js

Instalar a depedência de forma global, -g significa globalmente
### npm install -g nodemon

Rodar projeto usando o nodemon
### nodemon app.js

Sequelize-cli interface de linha de comando usada para criar modelos,
configurações e arquivos de migreação para banco de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambiente
### npm install dotenv --save

Criar database
### npx sequelize-cli db:create

Criar tabelas banco de dados utilizando migrate
### npx sequelize-cli migration:generate --name create-users

Executar uma migrate. Criar o campo que não foi criado tbm.
### npx sequelize-cli db:migrate

Desfazer uma migrate
### npx sequelize-cli db:migrate:undo

Criar a Models usuários
### npx sequelize-cli model:generate --name users --attributes name:string,email:string,user_type_id:INTEGER,password:INTEGER,is_active:INTEGER,cpf_cnpj:string,phone:string

Criar tabela, basta apenas executar as migrations
### npx sequelize-cli db:migrate


Criar seeders chamando de users
### npx sequelize seed:generate --name users

Executar as seeders
### npx sequelize-cli db:seed:all
