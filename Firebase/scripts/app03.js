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

// O 'onSnapshot' é um método que fica observando o servidor, e sempre que houver alguma atualização no banco de dados, ele é ativado. 
// Porém como vemos abaixo temos um 'where' que esta buscando apenas os alunos com a 'Nota1' maior que 6, ou seja, se houver alguma alteração nas informações de algum aluno com nota abaixo de 6, mesmo o 'onSnapshot' sendo ativado, nada acontece. O 'where' só deixara as funções abaixo serem executadas caso a 'Nota1' desse aluno seja alterada para acima de 6. Se houver alguma alteração nas informações de um aluno com 'Nota1' maior que 6, o 'onSnapshot' também sera ativado.
dataBase.collection(TURMA).where('Notas.Nota1', '>', 6).onSnapshot((snapshot) => {
    // O 'onSnapshot' não é uma promise, por isso que utilizamos um callback para executar as funções abaixo.
    snapshot.forEach(doc=>{
        console.log(doc.data())
    })
    console.log('----------/----------')
})
