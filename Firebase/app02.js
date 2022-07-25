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
const TURMA = 'turmaA'

// O método 'add' serve para adicionar um documento à coleção. O add é uma 'promise' e recebe um objeto como parametro.
dataBase.collection(TURMA).add({
    // Quando utilizamos o add, o nome do documento/ID é gerado aleatoriamente.
    Nome: {Nome: "Marco",Sobrenome: "da Rosa"},
    Notas: {Nota1: 7.5, Nota2: 6.8}
}).then(doc=>{ //O 'add' tambem retorna para a 'promise' o objeto do documento adicionado.
    console.log(`O documento foi adicionado com sucesso:`, doc)
}).catch(erro=>{
    console.log(erro)
})

// O método 'set' em conjunto com o 'doc' possibilita adicionar ou alterar as informações do documento. Dentro do 'doc' é colocado o nome desejado do documento a ser criado ou alterado, e o 'set' coloca essas informações no Firestore.
dataBase.collection(TURMA).doc('Aluno numero 8').set({
    // IMPORTANTE, o set sobrescreve os dados do documento inteiro, então caso seja necessario alterar só algum campo, utilizar o método 'update'.
    Nome: {Nome: "Juiliana",Sobrenome: "Felisbertina"},
    Notas: {Nota1: 7, Nota2: 7}
}).then(()=>{ //Diferente do add, o 'set' não retorna para a 'promise' o objeto que foi adicionado.
    console.log('Documento inserido com sucesso')
}).catch(erro=>{
    console.log(erro)
})

// O método 'update' como o nome sugere, serve para atualizar informações no documento, diferente do 'set' que sobrescreve e remove os outros dados.
dataBase.collection(TURMA).doc('Aluno numero 8').update({
    'Nome.Sobrenome': 'Fragnhani',
    // Acima temos um exemplo de como alterar uma informação que esta dentro de um objeto. É preciso utilizar as Aspas'' e o Ponto.
    'Notas.Nota1': 7.5,
    // Podemos adicionar novos campos dentro do documento com o update também.
    Faltas: 4,
    ProvasFeitas: ['Prova 1 feita', 'Prova 2 feita']
}).then(()=>{
    console.log('Documento atualizado com sucesso')
}).catch(erro=>{
    console.log(erro)
})

dataBase.collection(TURMA).doc('Aluno numero 8').update({
    // Caso necessario adicionar informações em um array, é preciso utilizar as funções abaixo. O 'FieldValue' com o 'arrayUnion' adiciona a informação no array, com o 'arrayRemove' remove a informação do array, com o 'increment' incrementa o numero no campo selecionado, por exemplo abaixo no campo da 'Nota1'.
    ProvasFeitas: firebase.firestore.FieldValue.arrayUnion('Prova 3 feita'),
    'Notas.Nota1': firebase.firestore.FieldValue.increment(2)
    // Podemos também utilizar o 'FieldValue.delete()' para remover um campo.
    //Faltas: firebase.firestore.FieldValue.delete()
}).then(()=>{
    console.log('Documento atualizado com sucesso')
}).catch(()=>{
    console.log(erro)
})