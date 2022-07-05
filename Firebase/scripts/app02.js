// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDAfa90inLgJWZHMOUVGYSFUXt5CjJaa4",
    authDomain: "teste-fa092.firebaseapp.com",
    projectId: "teste-fa092",
    storageBucket: "teste-fa092.appspot.com",
    messagingSenderId: "284270527532",
    appId: "1:284270527532:web:1587479a7db19a74747d89",
    measurementId: "G-1CV38N0GRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    // Precisamos inicializar o firebase para posteriormente podermos obter alguma informação do servidor.
firebase.initializeApp(firebaseConfig)

let dataBase = firebase.firestore();
const TURMA = 'turmaA'

// O método 'add' serve para adicionar um documento à coleção. O add é uma 'promise' e recebe um objeto como parametro.
// dataBase.collection(TURMA).add({
    // Quando utilizamos o add, o nome do documento/ID é gerado aleatoriamente.
//     Nome: {Nome: "Marco",Sobrenome: "da Rosa"},
//     Notas: {Nota1: 7.5, Nota2: 6.8}
// }).then(doc=>{ //O add tambem retorna uma promise com o objeto do documento adicionado.
//     console.log(`O documento foi adicionado com sucesso:`, doc)
// }).catch(erro=>{
//     console.log(erro)
// })

// O método 'set' em conjunto com o 'doc' possibilita adicionar ou alterar as informações do documento. Dentro do 'doc' é colocado o nome desejado do documento a ser criado ou alterado, e o 'set' coloca essas informações no Firestore.
// dataBase.collection(TURMA).doc('Aluno numero 8').set({
    // IMPORTANTE, o set sobrescreve os dados do documento, então caso seja necessario só alterar alguma informação, utilizar o método 'update'.
//     Nome: {Nome: "Juiliana",Sobrenome: "Felisbertina"},
//     Notas: {Nota1: 7, Nota2: 7}
// }).then(()=>{ //Diferente do add, o set não retorna para a promise o objeto adicionado.
//     console.log('Documento inserido com sucesso')
// }).catch(erro=>{
//     console.log(erro)
// })

// O método 'update' como o nome sugere, serve para atualizar informações no documento, diferente do 'set' que sobrescreveria e removeria os outros dados.
// dataBase.collection(TURMA).doc('Aluno numero 8').update({
//     'Nome.Sobrenome': 'Fragnhani',
//     // Como as informações do 'Nome' no documento estão dentro de um objeto, é possivel por exemplo alterar apenas o 'sobrenome' com as aspas e o ponto como foi feito acima.
//     'Notas.Nota1': 7.5,
//     // Podemos adicionar novos campos dentro do documento com o update também.
//     Faltas: 4,
//     ProvasFeitas: ['Prova 1 feita', 'Prova 2 feita']
// }).then(()=>{
//     console.log('Documento atualizado com sucesso')
// }).catch(erro=>{
//     console.log(erro)
// })

// dataBase.collection(TURMA).doc('Aluno numero 8').update({
//     // Caso necessario adicionar informações em um array, é preciso utilizar as funções abaixo. O 'FieldValue' com o 'arrayUnion' adiciona a informação no array, com o 'arrayRemove' remove a informação do array, com o 'increment' incrementa o numero no campo selecionado, por exemplo abaixo no campo da 'Nota1'.
//     ProvasFeitas: firebase.firestore.FieldValue.arrayUnion('Prova 3 feita'),
//     'Notas.Nota1': firebase.firestore.FieldValue.increment(2)
// }).then(()=>{
//     console.log('Documento atualizado com sucesso')
// }).catch(()=>{
//     console.log(erro)
// })