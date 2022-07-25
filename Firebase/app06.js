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

const TURMA = 'tumaA'
let dataBase = firebase.firestore();
let authentication = firebase.auth();


function criaUsuario(){
    // O método abaixo tem a função de criar um novo usuario, os métodos podem ser encontrados em Ajuda e Documentos de autenticação.
    authentication.createUserWithEmailAndPassword('Email@testando.com', '12345abc')
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
// Os métodos de login não modificam tem como padrão de persistencia para 'Local', ou seja, o usuario pode abrir varias abas no mesmo navegador e continuara logado. Porém podemos alterar isso com o 'setPersistence'.
function login(){
    // O 'Persistence' possui 3 opções:
    //--'LOCAL' que é o padrão, continua logado enquanto no mesmo navegador.
    //--'SESSION' que é só na aba que foi efetuado o  login.
    //--'NONE' que é só 1 login, se atualizar a pagina ele desloga.
    authentication.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    // Então dentro do do 'setPersistence' é efetuado o login.
    .then(()=>{
        // O método abaixo tem a função de logar o usuario. É preciso do email e da senha.
        authentication.signInWithEmailAndPassword(Email2, Senha2)
        .then((users)=>{
            console.log('Usuario logou')
        }).catch(erro=>{
            console.log(erro)
        })
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