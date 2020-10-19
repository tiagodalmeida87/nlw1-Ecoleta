// Comments
// Document é um objeto e Write é uma funcionalidade do objeto que está recebendo uma String "Hello"
//document.write("Hello")

// Variaveis (var | let) tipos de dados - Registrar(Guardar) em memória para uso posterior.
//let    //palavra chave reservada para utilização como variável - JavaScript moderno.
// Ex: var myvar = "He he "   // undefined

// Constantes - Utilizado para itens que não muda o valor.
// Ex: const myconst = " Hello Hello " 


// Ex: document.write(myvar)
// Concatenação
// Ex: document.write(myvar + myconst)

// Ex: document.write(myconst)


// Tipos de Dados

// String - É escrita entre aspas duplas, simples e crase

// Ex: const s1 = "Isso é uma String"
//const s2 = 'Isso também é um string'
// Ex2: `Isso é uma string também`


// Ex: document.write(s1)
// Ex2: document.write(`Isso é uma string também`)

// Number - Tipo número / numerico

//const n1 = 1
//const n2 = 14
//document.write(n1 + n2)

// String + número = concatenar
//const n3 = "200"
//document.write(n2 + n3)


// Boolean = True ou False

// const bTrue = true
// const bFalse = false
// Ex: document.write(bTrue)

// OBJETO - estruturar os dados, todos objetos possuem propriedades e funcionalidades
//const pessoa = {
//  altura: "1,75m",
//  idade: 32,
//  casado: true,
//  filho: true,
  // Funcionalidade
//  correr() {
    //document.write("Run Forest") - Executa a função, mas como undefined
    // return "Run Forest"   // Ex Funcionalidade
    // exemplo de função
//      document.write("executar uma grande façanha de correr")    
//  }
//}

// Ex: document.write(pessoa.casado)
// Ex: document.write(pessoa.altura)
// Ex: document.write(pessoa.idade)

//document.write(pessoa.correr())  // Ex Funcionalidade
// Resposta da função
  //pessoa.correr()

// Array - Vetores:  Coleção de dados

//const colecaoDeBolinhas = ["blue", "red", 1, {name: "My Name"}]

// Ex: document.write(colecaoDeBolinhas)

// Exemplos individuais de acordo com o local do array
// Ex: document.write(colecaoDeBolinhas[1])

// Acessando a propriedade Name do objeto
// Ex: document.write(colecaoDeBolinhas[3].name)


//Funções - Funcionalidades - Atalhos - Reuso de código
// registrar função (Ex1)
//function sayMyName() {
  // document.write("Tiago")
//}

// Executar a função
// Ex1: sayMyName()


// registrar função (Ex2)
//function sayMyName(name) {
//  document.write(name)
//}

// Ex2: sayMyName("João ")
// Ex2: sayMyName("Zetti")
// Ex2: sayMyName(" Ryan")

// Condicional / Condicionais

//const notaFinal = 7

//if( notaFinal < 7 ) {
  // Caminho 1 - True
//  documente.write("Reprovado")
//} else {
  // Caminho 2 - False
//    documente.write("Aprovado")
//}

// Repetições / Loop

//for (i = 0; i < 10; i++) {
//    document.write("<p> Alo </p>")  // Ex com string
  
//    document.write(`<p> ${i} </p>`) // Ex com a variável i
//  }