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

// Quando precisamos apagar um documento inteiro, utilizamos o 'delete' após o 'doc' com o identificador desse documento.
dataBase.collection(TURMA).doc('N8DlBF6Z9YMzg7YgWcyu').delete().then(()=>{
    console.log('Documento apagado com sucesso')
}).catch(erro=>{
    console.log(erro)
})

// Caso necessarios apagar todos os documentos de uma coleção, precisamos apagar individualmente cada documento.
dataBase.collection(TURMA).get().then(snapshot=>{
    snapshot.forEach(doc=>{ //O forEach executa uma função para cada item da coleção, e além disso obtem as informações desse documentos.
        dataBase.collection(TURMA).doc(doc.id).delete() //Utilizando o método 'delete', todos os documentos seram removidos.
        .then(()=>{ //Como o 'delete' também é uma 'promise' podemos utilizar o 'then'.
            console.log('Documentos deletados.')
        })
        .catch(erro=>{
            console.log(erro)
        })
    })
})