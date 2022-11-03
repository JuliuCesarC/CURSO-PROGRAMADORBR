function LocalS() {
	const months = [
		{ month: "janeiro" },
		{ month: "fevereiro" },
		{ month: "março" },
		{ month: "abril" },
		{ month: "maio" },
		{ month: "junho" },
		{ month: "julho" },
		{ month: "agosto" },
		{ month: "setembro" },
		{ month: "outubro" },
		{ month: "novembro" },
		{ month: "dezembro" },
	];

	if (!localStorage.getItem("ToDoList")) {
		localStorage.setItem("ToDoList", JSON.stringify(months));
	} else {
		months.forEach((e, i) => {
			months[i] = JSON.parse(localStorage.getItem("ToDoList"))[i];
		});
	}
	let currentMYD;
	if (!localStorage.getItem("currentMYD")) {
		currentMYD = {
			month: new Date().getMonth(),
			year: new Date().getFullYear(),
			day: new Date().getDate(),
		};
		localStorage.setItem("currentMYD", JSON.stringify(currentMYD));
	} else {
		currentMYD = JSON.parse(localStorage.getItem("currentMYD"));
	}
	return [currentMYD.month, currentMYD.year, months, currentMYD.day];
}
function prevNextMonth(e) {
	let crrMonthYear = JSON.parse(localStorage.getItem("currentMYD"));
	if (e.target.className == "btn-next") {
		if (crrMonthYear.month == 11) {
			crrMonthYear.month = 0;
			crrMonthYear.year += 1;
		} else {
			crrMonthYear.month += 1;
		}
		localStorage.setItem("currentMYD", JSON.stringify(crrMonthYear));
	} else {
		if (crrMonthYear.month == 0) {
			crrMonthYear.month = 11;
			crrMonthYear.year -= 1;
		} else {
			crrMonthYear.month -= 1;
		}
		localStorage.setItem("currentMYD", JSON.stringify(crrMonthYear));
	}
}
function selectedDay(month, year, day) {
	let crrMYD = JSON.parse(localStorage.getItem("currentMYD"));
	crrMYD.month = month;
	crrMYD.year = year;
	crrMYD.day = day;
	localStorage.setItem("currentMYD", JSON.stringify(crrMYD));
}
function addNewTaskLS(month, year, day, TX) {
	let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	let LSMonth = fullLS[month];
	let newTask = {
		year: year,
		day: day,
		tasks: [],
	};
	if (!LSMonth.listOfAllTasks) {
		LSMonth.listOfAllTasks = [];
	}
	if (
		!LSMonth.listOfAllTasks.filter((e) => e.year == year && e.day == day)
			.length < 1
	) {
		newTask = LSMonth.listOfAllTasks.filter(
			(e) => e.year == year && e.day == day
		)[0];
		newTask.tasks.push({ id: randomID(), cont: TX, check: "working" });
	} else {
		newTask.tasks.push({ id: randomID(), cont: TX, check: "working" });
		LSMonth.listOfAllTasks.push(newTask);
	}
	localStorage.setItem("ToDoList", JSON.stringify(fullLS));
	return LocalS;
}
function updateTaskLS(month, year, day, ID, TX) {
	let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	let LSMonth = fullLS[month].listOfAllTasks;
	let LSDay = LSMonth.filter((e) => e.year == year && e.day == day)[0].tasks;
	let LSTask = LSDay.filter((e) => e.id == ID)[0];
	LSTask.cont = TX;

	localStorage.setItem("ToDoList", JSON.stringify(fullLS));
}
function switchCheckLS(month, year, day, ID) {
	let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	let task = fullLS[month].listOfAllTasks
		.filter((e) => e.year == year && e.day == day)[0]
		.tasks.filter((e) => e.id == ID)[0];
	if (task.check == "working") {
		task.check = "check";
	} else {
		task.check = "working";
	}
	localStorage.setItem("ToDoList", JSON.stringify(fullLS));
}
function deleteTaskLS(month, year, day, ID) {
	let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	let fullLSWithoutDelTask = fullLS[month].listOfAllTasks
		.filter((e) => e.year == year && e.day == day)[0]
		.tasks.filter((e) => e.id != ID);

	fullLS[month].listOfAllTasks.filter(
		(e) => e.year == year && e.day == day
	)[0].tasks = fullLSWithoutDelTask;

	if (
		fullLS[month].listOfAllTasks.filter(
			(e) => e.year == year && e.day == day
		)[0].tasks.length < 1
	) {
		let delTaskDay = fullLS[month].listOfAllTasks.filter(
			(e) => e.year != year || e.day != day
		);
		fullLS[month].listOfAllTasks = delTaskDay;
	}
	localStorage.setItem("ToDoList", JSON.stringify(fullLS));
}
function randomID() {
	return Math.random().toString(36).substring(2, 9);
}
export {
	LocalS,
	prevNextMonth,
	selectedDay,
	addNewTaskLS,
	updateTaskLS,
	switchCheckLS,
	deleteTaskLS,
};
