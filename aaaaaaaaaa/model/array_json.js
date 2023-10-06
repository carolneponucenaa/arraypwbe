/************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON.
 * Data: 29/09/2023.
 * Autor: Carolina Neponucena.
 * Versao: 1.0
 ************************************************************/

// [ ] -> Representa a estrutura array.
// { } -> Representa a estrutura JSON.

const introducaoArray = function(){
    //Criando um array de forma manual.
    let listaDeNomes = ['José', 'Ana', 'Luis', 'Maria', 'Carlos','Eduardo']

    //Exibe os dados do array.
    console.log(listaDeNomes)
    //Exibe os dados do array em formato de tabela.
    console.table(listaDeNomes)
    //Retorna a qtde de elementos de um array.
    console.log(listaDeNomes.length)

    //Adiciona elemento na tabela 'no final'.
    listaDeNomes.push('Roberto')
   
    //Adiiciona elemento na tabela 'no começo'.
    listaDeNomes.unshift('Roberto')
   
    console.table(listaDeNomes)

    //Remove o último elemento do array.
    listaDeNomes.pop()

    //Remove o primeiro elemento do array.
    listaDeNomes.shift()

    //Remove um elemento baseado no índice, podendo definir a qtde de itens a serem excuídos.
    //Ex: splic(2,3) -> 2 é referente ao índice e 3 é refereente a qtde de itens.
    listaDeNomes.splice(2,3)
   
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva', 'ricardo da Silva', 'João da Silva', 10 , true)
    console.log(listaDeNomes);

    //typeof -> Retorna tipo de dados de um elemento
    console.log(typeof(listaDeNomes[7]))
   
}

const percorrendoArray = function (){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', ' Processador', 'HD']

    //------------------------------------------------------------------------------------------------------------------------------------------------
    //While

    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do Produto: ' + listaDeProdutos [cont])
    //     cont +=1
    // }

    //For

    // for(let cont=0; cont < listaDeProdutos.length; cont++){
    //     console.log('Nome do Produto: ' + listaDeProdutos [cont])
    // }

    //Foreach 
    // listaDeProdutos.forEach(function (produto, indice){
    //     console.log(indice + '- Nome do produto: ' + produto)
    // })

    //-------------------------------------------------------------------------------------------------------------------------

    //Retorna o indice do elemento que foi encontrado
    //Caso não exista o item retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'))

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Notebook'))
}
const filtrarProdutos = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', ' Processador', 'HD']
    let nome = nomeProduto;

    // return listaDeProdutos.includes(nome);

    let status = false;

    listaDeProdutos.forEach(function(produto){
        if (produto.toUpperCase() == nome.toUpperCase())
        status = true
    })
    return status
}
const manipulandoArrayJson = function(){
    // [] -> Representa um Array
    // {}-> Representa um JSON
    // EX: { atributo: valor}
    // {nome: 'José', telefone: '234567890'}

    // Criando objetos ARRAY (COLUNAS)
    
    let contato = {nome:'José da Silva', telefone: '123456789', email:'jsilva9@gmail.com'};
    let contato2 = {nome:'Maria da Silva', telefone: '123456789', email:'msilva5@gmail.com'};
    let contato3 = {nome:'João da Silva', telefone: '123456789', email:'josilva5@gmail.com'};

    //Adicionando elementos individuais nos objetos JSON
    contato.celular = '2345678909';
    contato2.celular = '98765456789';
    contato3.celular = '76543567899';

    contato.data_nascimento = '29/08/2000'
    contato2.data_nascimento = '06/05/1987'
    contato3.data_nascimento = '23/04/2005'

    // Criando um array de dados com o JSON
    let arrayContatos = [contato, contato2,contato3]

    arrayContatos.forEach(function(dadosContato){
    
    console.log('NOME: '+ dadosContato.nome);
    console.log('TELEFONE: '+ dadosContato.telefone);
    console.log('EMAIL: '+ dadosContato.email);

    //Tratamento de dados para quando não houver conteúdo
    if(dadosContato.celular != undefined)
    console.log('CELULAR: '+ dadosContato.celular);
    if(dadosContato.data_nascimento != undefined)
    console.log('DATA DE NASCIMENTO: '+ dadosContato.data_nascimento);
    console.log('------------------------------------')
})
    }
const cadastrarProdutos = function(){
    //Cria um array para guardar todos os produtos
    let arrayProdutos = [];
    //Cria o objeto JSON para colocar o array de produtos
    let jsonProdutos = {};
    
    
    let listaDeMarcas = [
        {id: 1, nome_marca:'Dell'},
        {id: 2, nome_marca:'Apple'},
        {id: 3, nome_marca:'Lenovo'},
        {id: 4, nome_marca:'Positivo'},
        {id: 5, nome_marca:'Razer'},
        {id: 6, nome_marca:'Logitech'},
        {id: 7, nome_marca:'Multilaser'}

                        ];

    let listaDeCategorias = [

        {id: 1, nome_categoria: 'Periféricos', descricao_categoria: 'Periféricos de computadores'},
        {id: 2, nome_categoria: 'Hardware', descricao_categoria: 'Hardware para montar computadores'},
        {id: 3, nome_categoria: 'Computador', descricao_categoria: 'Computadores completos'},
        {id: 4, nome_categoria: 'Games', descricao_categoria: 'Acessórios para Gamers'}
                            ]
     
    let listaDeSituacao = [

        {id: 1, situacao: 'Novo'},
        {id: 2, situacao: 'Usado'}
                        ]     
                        
    let listaDeCores = [

        {id: 1, nome_cor : 'Branco'},
        {id: 2, nome_cor : 'Preto'},
        {id: 3, nome_cor : 'Cinza'},
        {id: 4, nome_cor : 'Vermelho'},
        {id: 5, nome_cor : 'Azul'}

                        ]   

    let produto1 ={
        nome: 'Mouse',
        descricao: 'Mouse Optico com fio',
        qtde: 50,
        valor:60.00,
        marcar:listaDeMarcas [0],
        categoria: listaDeCategorias[0],
        situacao: listaDeSituacao[0],
        cor: [
            listaDeCores[0],
            listaDeCores[1],
            listaDeCores[2]
        ]
    }
    let produto2 ={
        nome: 'Teclado',
        descricao: 'Teclado Mecânico sem fio ',
        qtde: 150,
        valor:90.00,
        marcar:listaDeMarcas [5],
        categoria: listaDeCategorias[0],
        situacao: listaDeSituacao[0],
        cor:
           listaDeCores
    };

    //Adiciona em um Array  os produtos
    arrayProdutos.push(produto1);
    arrayProdutos.push(produto2);

    //Adiciona o array com todos os produtos em um JSON
    jsonProdutos.lista_produtos = arrayProdutos;
    //Retorna a quantidade de produtos
    jsonProdutos.count = arrayProdutos.length;
    console.log(jsonProdutos);
}

// manipulandoArrayJson();
// percorrendoArray();
//introducaoArray()
cadastrarProdutos();