let Days = document.getElementById("days");
let once = false;
// FUNÇÃO PARA INSERIR OS DIAS NA TABELA
function showDays(month, year, monthsOfYear) {
	if (!document.getElementById("days").children.length < 1) {
		clearTable();
	}
	// CONFIGURA O MÊS E O ANO NA TABELA
	document.getElementById("month").innerHTML = monthsOfYear[month].month;
	document.getElementById("Header").classList.add(month);
	document.getElementById("year").innerHTML = year;

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
		if (
			indexDay.getFullYear() == Now.getFullYear() &&
			indexDay.getMonth() == Now.getMonth() &&
			indexDay.getDate() == Now.getDate()
		) {
			td.id = "current-day";
			if (!once) {
				showTasks(month, year, indexDay.getDate(), monthsOfYear);
				once = true;
			}
		}

		if (i >= 1 && i <= totalDaysInMonth) {
			td.addEventListener("click", (e) => {
				showTasks(null, null, e.target, monthsOfYear);
			});
		}
		if (i < 1) {
			td.classList.add("prev-month");
		}
		if (i > totalDaysInMonth) {
			td.classList.add("next-month");
		}
		if (monthsOfYear[month].listOfAllTasks) {
			if (
				monthsOfYear[month].listOfAllTasks.filter(
					(e) => e.year == year && e.day == indexDay.getDate()
				).length >= 1
			) {
				td.classList.add("task");
			}
		}
		tr.appendChild(td);
		if (index % 7 === 0 && index < 40) {
			Days.appendChild(tr);
			tr = document.createElement("tr");
		}
	}
	Days.appendChild(tr);
}

	let Now = new Date();
	let monthNow = Now.getMonth();
	let yearNow = Now.getFullYear();

	document.getElementById("Btn-Next").onclick = function () {
		clearTable();
		monthNow++;
		if (month > 11) {
			monthNow = 0;
			yearNow++;
		}
		showDays(monthNow, yearNow, monthsOfYear);
	};
	document.getElementById("Btn-Prev").onclick = function () {
		clearTable();
		monthNow--;
		if (month < 0) {
			monthNow = 11;
			yearNow--;
		}
		showDays(monthNow, yearNow, monthsOfYear);
	};
	// LIMPA A TABELA QUANDO MUDA O MÊS
	function clearTable() {
		let allTr = Array.from(document.querySelectorAll("tr"));
		document.getElementById("Header").classList.remove(month);
		allTr.slice(1, 7).forEach((el) => {
			Days.removeChild(el);
		});
	}
