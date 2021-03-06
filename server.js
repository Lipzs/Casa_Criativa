// Usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: " Aprender programação é semelhante ao aprendizado de um novo idioma. ",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "O exercício físico é um componente do moderno estilo de vida.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Quando meditamos, acabamos 'aquietando' a mente e criando ferramentas internas para lidar com o estress",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, veritatis debitis.",
        url: "https://rocketseat.com.br"
    },
]


//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //boolean
})



//criei uma rota /
// e capturei o pedido do cliente para responder
server.get("/", function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas })
})

// Liguei meu servidor na porta 3000
server.listen(process.env.PORT || 3000);