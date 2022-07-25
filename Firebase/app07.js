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

const ITENS = 'itens'
let dataBase = firebase.firestore();
let authentication = firebase.auth();
let email = 'email@testando.com'
let senha = 'lkjhgfdsa'

authentication.onAuthStateChanged(usuarios=>{
    if(usuarios){
        console.log('Usuario que esta logado',usuarios)
    }else{
        console.log('Ninguem logado')
    }
})
function logar(){
    authentication.signInWithEmailAndPassword(email, senha)
    .then(()=>{
        console.log('Usuario logou')
    }).catch(erro=>{
        console.log(erro)
    })
}
// logar()

function adicionaItem(){
    dataBase.collection(ITENS).add({
        valor: Math.floor(Math.random()*1000)
    }).then(doc=>{
        console.log('Documento adicionado com sucesso.')
    }).catch(erro=>{
        console.log(erro)
    })
}
// adicionaItem()

function adicionaUsuario(){
    authentication.createUserWithEmailAndPassword(email, senha)
    .then(user=>{
        console.log('Usuario criado ',user)
    }).catch(erro=>{
        console.log(erro)
    })
}
// adicionaUsuario()