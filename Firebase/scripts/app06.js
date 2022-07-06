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

const TURMA = 'turmaA'
let dataBase = firebase.firestore();
let authentication = firebase.auth();

let Email = 'Emailteste@testando.com'
let Senha = '12345abc'
let Email2 = 'email2teste@testando.com'
let Senha2 = 'cba54321'


function criaUsuario(){
    // O método abaixo tem a função de criar um novo usuario, os métodos podem ser encontrados em Ajuda e Documentos de autenticação.
    authentication.createUserWithEmailAndPassword(Email2, Senha2)
    .then(usuario=>{
        console.log(usuario)
    }).catch(erro=>{
        console.log(erro)
    })
}
// criaUsuario()

// O método abaixo é um observador que é disparado sempre que há alguma alteração no estado de login do usuario.
authentication.onAuthStateChanged(usuarios=>{
    if(usuarios){
        console.log(usuarios)
    }else{
        console.log('Ninguém logado')
    }
})
function login(){
    // O método abaixo tem a função de logar o usuario. É preciso do email e da senha.
    authentication.signInWithEmailAndPassword(Email2, Senha2)
    .then((users)=>{
        console.log('Usuario logou')
    }).catch(erro=>{
        console.log(erro)
    })
}
// login()



function logout(){
    // O método abaixo tem a função de deslogar o usuario.
    authentication.signOut().then(()=>{
        console.log('Usuario foi deslogado')
    }).catch(erro=>{
        console.log(erro)
    })
}
// logout()
// setTimeout(login, 2000);