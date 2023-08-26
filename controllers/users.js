// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Chamar a função express
const router = express.Router();

// Incluir o arquivo que possui a conexão com banco de dados 
const db = require('./../db/models');

// Criar a rota listar
// Endereço para acessar através da aplicação externa: http://localhost:8080/users?page=3
router.get("/users", async (req, res) => {

    // Receber o número da página, quando não é enviado o número da página é atributo página 1
    const { page=1 } = req.query;
    //console.log(page);

    // Limite de registros por página
    const limit = 10;

    // Variável com número da ultima página
    var lastPage = 1;

    // Contar a quantidade de registro no banco de dados 
    const countUtser = await db.users.count();
    console.log(countUtser)

    // Acessa o IF quando encontrar registro no banco de dados 
    if(countUtser !== 0) {
        lastPage = Math.ceil(countUtser / limit);
        //console.log(lastPage)

    } else {
        // Pausar o processamento e retornar mensagem de erro
        return res.status(400).json({
            mensagem: "Nenhum ususário cadastrado"
        
    })
    }

    //console.log((page * limit) - limit)

    // Recuperar todos usuários do banco de dados
    const users = await db.users.findAll({
        // Indicar quais colunas recuperar
        attributes: ['id', 'name', 'email', 'user_type_id', 'password', 'is_active', 'cpf_cnpj', 'phone'],
        // Ordenar os registros pela coluna id na forma decrescente
        order: [['name', 'ASC']],

        // Calcular a partir de qual registro deve retornar e o limite de resgistros
        offset: Number((page * limit) - limit),
        limit: limit
    })
    // Acessar o IF se encontrar o registro no banco de dados
    if(users){
        // Criar objeto com as informações para paginação
        var pagination = {
            // Caminho 
            path: '/users',
            // Página atual
            page,
            // URL da página anterior
            prev_page_url: page - 1 >= 1 ? page -1 : false,
            // URL da próxima página
            next_page_url : Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1),
            // Última pagina
            lastPage,
            total: countUtser
        }

        // Pausar o processamento e retornar os dados em formato de objeto
    return res.json({
        users,
        pagination
        
    })

    } else {
        // Pausar o processamento e retornar mensagem de erro
        return res.status(400).json({
        mensagem: "Nenhum ususário cadastrado"
        
    })
    }
})

// Criar a rota visualizar e recebe o parâmetro id enviando na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/users/{id}
router.get("/users/:id", async (req, res) => {
    // Receber parâmetro enviado na URL
    const { id } = req.params;
    console.log(id);

    // Recuperar usuário
    const user = await db.users.findOne({
        // Indicar quais colunas recuperar
        attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],

        // Acrescentando condições para indicar qual resgistro deve ser retornado do banco de dados
        where: { id }
});
console.log(user)
// Acessa o IF se encontrar o resgistro no banco de dados
if(user){
    // Pausar o processamento e retornar os dados
    return res.json({
        user: user.dataValues
        })
} else {
    // Pausar o processamento e retornar a mensagem de error
    return res.status(400).json({
    mensagem: "Erro: Usuário não cadastrado!!!!"

    })
}


    // Pausar o processamento e retornar mensagem de erro
    return res.json({
    mensagem: "Nenhum ususário cadastrado"
     
    })
})

// Criar a rota de cadastrar
router.post("/users", async (req, res) => {
    // Receber os dados enviado no corpo da requisição
    const dados = req.body;
    const type_name = dados.user_type_id;
    console.log(dados);

    const cod_type = await db.user_type.findOne({
        attributes: ['cod_type'],
        where: { type_name }
    });
    
    console.log(cod_type.dataValues.cod_type);
    dados.user_type_id = Number(cod_type.dataValues.cod_type);

    // Salvar banco de dados
    await db.users.create(dados).then((dadosUsuarios) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
            dadosUsuarios
        });
    }).catch(() => {
        // Pausar o processamento e retornar a mensagem de error
        return res.json({
            mensagem: "Erro: Usuário não cadastrado!",
            dadosUsuarios
        })
    })
})


router.put("/users", async (req, res) => {
    // Receber os dados enviados no corpo da requisição
    var dados = req.body;
    
    // Editar no banco de dados
    await db.users.update(dados, { where: {id: dados.id}})
    .then(() => {
        // Pausar o processamento e retorna a mensagem
        return res.json({
            mensagem: "Usuário editado com sucesso!"
        })
    }).catch(() => {
        // Pausar processamento e retorna a mensagem
        return res.status(400).json({
            mensagem: "Erro: Não será possivel editar, usuário não cadastrado!"
        })
    })

})

// Criar a rota apagar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/users/:id
router.delete("/users/:id", async (req, res) => {

    // Receber o parâmetro enviado na URL
    const { id } = req.params;
    
    // Apagar usuário no banco de dados utilizando a MODELS users
    await db.users.destroy({
        // Acrescentar WHERE na instrução SQL indicando qual registro excluir no banco de dados
        where: { id }
    }).then(() => {
        // Pausar processamento e retorna a mensagem
        return res.json({
            mensagem: "Usuário excluido com sucesso!"
        })
    }).catch(() => {
        // Pausar processamento e retorna a mensagem
        return res.status(400).json({
            mensagem: "Erro: não foi possível excluir usuário!"
        })
    })
})

// Exportar a instrução que está dentro da constante router
module.exports = router;