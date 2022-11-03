function persistence(num) {
	let stringNum = String(num)
	let counter = 0
	while(stringNum.length >= 2) {
		let tt = 1;
		for (let one of stringNum) {
			tt = one * tt;
		}
		stringNum = String(tt)
		counter++
	}
	console.log(counter);
	
}

persistence(39);

