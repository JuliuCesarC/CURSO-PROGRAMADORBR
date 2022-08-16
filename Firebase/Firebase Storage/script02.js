import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";

const firebaseConfig = {
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

const ref02 = storage.ref('/Imagens')

let atualizaMeta = {
    contentType: 'image/png'
}


ref02.child('eclipse.jpg').updateMetadata(atualizaMeta).then(MetaD=>{
    console.log(MetaD)
}).catch(erro=>{
    console.log(erro)
})









// let addIMG = document.getElementById('FileIMG')
// addIMG.addEventListener('change', (e)=>{
//     let arq = e.target.files[0];
//     ref02.child(arq.name).put(arq).then((snapshot)=>{
//         // O método 'put' adiciona um arquivo no storage.
//         console.log(snapshot)
//     })
// })