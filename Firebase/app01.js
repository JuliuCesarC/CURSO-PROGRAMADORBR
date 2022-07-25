// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "*",
    authDomain: "*",
    projectId: "*",
    storageBucket: "*",
    messagingSenderId: "*",
    appId: "*",
    measurementId: "*"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    // Precisamos inicializar o firebase para posteriormente podermos obter alguma informação do servidor.
firebase.initializeApp(firebaseConfig)
let dataBase = firebase.firestore();

// O 'collection' é referente a coleção que foi colocada no firestore, no caso a coleção 'turmaA'.
// O get como visto anteriormente é um 'promise' que serve para pegar as informações da coleção, e como é uma promise, precisamos de um 'then' para trabalhar com as informações recebidas. Uma caracteristica do get, é que ele pega todos os dados da coleção.
dataBase.collection('turmaA').get().then((snapshot) => {
    // Geralmente é utilizado como NOME do parametro da arrow function do 'then' o nome 'snapshot'. 
    snapshot.forEach((doc)=>{ 
    // Como a coleção é mais ou menos como um "array", então podemos utilizar um 'forEach' para executar uma função com cada item desta coleção. O elemento 'doc' que utilizamos acima será um JSON.
        console.log(doc.data()) //O '.data()' é um método que retorna os dados dessa coleção.
        console.log(doc.data().Nome)//Imprime os nomes que foram setados nos dados da coleção.
    })
})

// Porem diferente do get acima que pega todos os dados, com um id do documente por exemplo podemos pegar um informação especifica.
let db = dataBase.collection('turmaA').doc('Jpuxf8VDFeLfWJJecras')
db.get().then((doc)=>{
    // console.log(doc.data())
})

// Com o método 'where' é possivel buscar as informações desejadas com outra maneira além do ID. Por exemplo abaixo, buscamos todos os alunos que tenham o sobrenome 'Silva'. Lembrando que depois do where é preciso um 'get', que pega o documento inteiro, não apenas o sobrenome que procuramos com o where.
dataBase.collection('turmaA')
.where('Nome.Sobrenome', '==', 'Silva')
.get()
.then(snapshot => {
    snapshot.forEach(doc=>{
            // Abaixo imprimimos o nome que esta no objeto 'Nome'.
        console.log(doc.data().Nome.Nome)
    })
})
// É possivel tambem utilizar 2 where, PORÉM muito importante, eles precisar estar buscando pela mesma coisa, por exemplo abaixo, os 2 where buscam por 'Notas.Nota1'.
dataBase.collection('turmaA')
.where('Notas.Nota1', '>', 6)
.where('Notas.Nota1', '<', 9)
.get()
.then(snapshot=>{
    snapshot.forEach(doc=>{
            // Abaixo imprimimos o objeto 'Nome', que contem o Nome e o Sobrenome.
        console.log(doc.data().Nome)
    })
})