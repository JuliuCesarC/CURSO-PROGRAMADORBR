let Days = document.getElementById("days");
// FUNÇÃO PARA INSERIR OS DIAS NA TABELA
function showDays(month, year, months) {
	// CONFIGURA O MÊS E O ANO NA TABELA
	document.getElementById("month").innerHTML = months[month].month;
	document.getElementById("Header").classList.add(month)
	document.getElementById("year").innerHTML = year;
	Days.dataset.month = month;
	Days.dataset.year = year;

	let fistDayOfWeek = new Date(year, month, 1).getDay() - 1;
	// É preciso colocar o -1 no final do 'fistDayOfWeek' pois durante o loop ele ira passar pelo valor 0, e como o valor 0 também é considerado, então teríamos 8 dias na semana.
	let totalDaysInMonth = new Date(year, month + 1, 0).getDate();
	let i = -fistDayOfWeek;
	let tr = document.createElement("tr");
	for (let index = 1; index <= 42; i++, index++) {
		let indexDay = new Date(year, month, i);
		let Now = new Date();

		let td = document.createElement("td");
		td.innerHTML = indexDay.getDate();
		td.classList.add('c'+indexDay.getDate())
		td.addEventListener("click", (e) => {
			showTasks(e.target);
		});
		if (
			indexDay.getFullYear() == Now.getFullYear() &&
			indexDay.getMonth() == Now.getMonth() &&
			indexDay.getDate() == Now.getDate()
		) {
			td.id = "current-day";
		}
		if (i < 1) {
			td.classList.add("prev-month");
		}
		if (i > totalDaysInMonth) {
			td.classList.add("next-month");
		}
		tr.appendChild(td);
		if (index % 7 === 0 && index < 40) {
			Days.appendChild(tr);
			tr = document.createElement("tr");
		}
	}
	Days.appendChild(tr);

	if(months[month].listOfAllTasks){
		months[month].listOfAllTasks.forEach(tk=>{
			if(tk.year==year){
				let element = document.querySelector(`.c${tk.day}`)
				if(element.classList.length < 2){
					element.classList.add('task');
				}else{
					document.querySelectorAll(`.c${tk.day}`)[1].classList.add('task')
				}
			}
		})
	}
	
}
	let Now = new Date();
	let month = Now.getMonth();
	let year = Now.getFullYear();
	
	document.getElementById("Btn-Next").onclick = function () {
		clearTable();
		month++;
		if (month > 11) {
			month = 0;
			year++;
		}
		showDays(month, year, JSON.parse(localStorage.getItem("ToDoList")));
	};
	document.getElementById("Btn-Prev").onclick = function () {
		clearTable();
		month--;
		if (month < 0) {
			month = 11;
		year--;
	}
	showDays(month, year, JSON.parse(localStorage.getItem("ToDoList")));
};
// LIMPA A TABELA QUANDO MUDA O MÊS
function clearTable() {
	let allTr = Array.from(document.querySelectorAll("tr"));
	document.getElementById("Header").classList.remove(month)
	allTr.slice(1, 7).forEach((el) => {
		Days.removeChild(el);
	});
}