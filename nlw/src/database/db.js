// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// Exportar o Database
module.exports = db


// Utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {

    // Com comandos SQL vou:
    // 1Criar uma tabela 

//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            name TEXT,
//            image TEXT,
//            address TEXT,
//            address2 TEXT,
//           state TEXT,
//            city TEXT,
//            items TEXT
//        );
//    `)

    // 2. Inserir dados na tabela
//    const query = `
//                INSERT INTO places (
//                    name,
//                    image,
//                    address,
//                   address2,
//                    state,
//                    city,
//                    items
//                ) VALUES (?,?,?,?,?,?,?);
//            `
//    const values = [
//        "Papersider",
//        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//        "Rua 1, N 331",
//        "Alto Leal",
//        "Pernambuco",
//        "Vitória de Santo",
//        "Resíduos Eletrônicos, Papel"
//    ]

    //function afterInsertData(err) {
    //    if (err) {
    //        return console.log(err)
    //    }

    //    console.log("Cadastrado com Sucesso")
    //    console.log(this)
    //}

    //db.run(query, values, afterInsertData)

    // 3. Consultar os dados na Tabela
    //db.all(`SELECT * FROM places`, function(err, rows) {
    //    if (err) {
    //        return console.log(err)
    //    }
    //    console.log("Aqui estão seus registros: ")
    //    console.log(rows)
    //})
   

    // 4. Deletar um dado na tabela
    //db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //  if (err) {
    //       return console.log(err)
    //   }
    //   console.log("Registro deletado com sucesso!")
    //})

//})