let timer;
function contador(){
	timer = setInterval(print, 1000);
}
function print(){
	console.log('i');
}

contador()

setTimeout(() => {
	console.log('entrou');
	clearInterval(timer)
	timer = null
}, 3000);