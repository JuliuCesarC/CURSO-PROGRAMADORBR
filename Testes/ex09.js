window.onload = function(){

    let pega = document.getElementsByTagName("p")

    for(let h of pega){
        console.log(h)
        h.addEventListener("click", pai)
    }

    function pai(e){
        let t = e.target;
        console.log(t.parentElement)
    }
    
}