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

var dataBase = firebase.firestore();
const TURMA = 'turmaA'


function nomes(){
    return parseInt(Math.random()*100000)
}
function notas(){
    return (Math.random()*10).toFixed(1)
}
function faltas(){
    return Math.floor(Math.random()*4)
}


// for(let i=0; i<10; i++){
//     dataBase.collection(TURMA).add({
//         Nome: nomes(),
//         Notas: {Nota1: notas(), Nota2: notas(), Nota3: notas()},
//         Faltas: faltas()
//     }).then((docs)=>{
//         console.log('Os documentos "',docs,'" foram adicionados.')
//     })
// }


// dataBase.collection(TURMA).get().then(snapshot=>{
//     snapshot.forEach(docs=>{
//         dataBase.collection(TURMA).doc(docs.id).delete()
//     })
// })
