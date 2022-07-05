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

// O 'collection' é referente a coleção que foi colocada no firestore, no caso a coleção 'turmaA'.
// O get como visto anteriormente é um 'promise' que serve para pegar as informações da coleção, e como é uma promise, precisamos de um 'then' para trabalhar com as informações recebidas.
dataBase.collection('turmaA').get().then((snapshot) => {
    // Geralmente é utilizado como NOME do parametro da arrow function do 'then' o nome 'snapshot'. 
    snapshot.forEach((doc)=>{ 
    // Como a coleção é mais ou menos como um "array", então podemos utilizar um 'forEach' para executar uma função com cada item desta coleção. O elemento 'doc' que utilizamos acima será um JSON.
        console.log(doc.data())
    })
})