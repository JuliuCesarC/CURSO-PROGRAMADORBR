import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";

const firebaseConfig = {
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();


const ref = storage.ref('/Imagens')

// ref.root.listAll.....
// O método 'root' serve para ir diretamente para a referencia raiz, sem precisar ficar utilizando varios 'parent.parent'.


// ref.listAll().then(res=>{
//     // O método 'listAll' retorna uma promise com os itens da referência utilizada, no caso acima é a pasta 'Imagens'.
//     let i = res._delegate.items.length;
//     for(let x=0; x<=i; x++){
//         let refs = storage.ref(res._delegate.items[x]._location.path)
//         refs.getDownloadURL().then(url=>{
//             console.log(url)
//         })
//     }
// })


// ref.parent.child('Nebulosa Carina.jpg').getDownloadURL().then(url=>{console.log(url)})
// Para o método 'parent' não é preciso de referência, pois cada filho só possui um unico pai.

// const fileref = ref.child('Campo Profundo.jpg')
// fileref.getDownloadURL().then(url=>{
//     console.log(url)
// })

// ref.listAll().then(res=>{
//     res.items[0].getDownloadURL().then(url=>{
//         console.log(url)
//     })
// })