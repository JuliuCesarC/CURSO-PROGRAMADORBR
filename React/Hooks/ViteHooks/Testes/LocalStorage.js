function startTodo() {
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

	let Now = new Date();
	let month = Now.getMonth();
	let year = Now.getFullYear();
	showDays(month, year, months);
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
	startTodo();
	showTasks(month, year, day, fullLS);
}
function updateTaskLS(month, year, day, ID, TX) {
	let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	let LSMonth = fullLS[month].listOfAllTasks;
	let LSDay = LSMonth.filter((e) => e.year == year && e.day == day)[0].tasks;
	let LSTask = LSDay.filter((e) => e.id == ID)[0];
	LSTask.cont = TX;

	localStorage.setItem("ToDoList", JSON.stringify(fullLS));
	startTodo();
	showTasks(month, year, day, fullLS);
}
function switchCheckLS(month, year, day, ID) {
	// let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	// let task = fullLS[month].listOfAllTasks
	// 	.filter((e) => e.year == year && e.day == day)[0]
	// 	.tasks.filter((e) => e.id == ID)[0];
	// if (task.check == "working") {
	// 	task.check = "check";
	// } else {
	// 	task.check = "working";
	// }
	// localStorage.setItem("ToDoList", JSON.stringify(fullLS));
}
function deleteTaskLS(month, year, day, ID) {
	let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	let fullLSWithoutDelTask = fullLS[month].listOfAllTasks
		.filter((e) => e.year == year && e.day == day)[0]
		.tasks.filter((e) => e.id != ID);

	fullLS[month].listOfAllTasks.filter(
		(e) => e.year == year && e.day == day
	)[0].tasks = fullLSWithoutDelTask;

	if(fullLS[month].listOfAllTasks
		.filter((e) => e.year == year && e.day == day)[0]
		.tasks.length < 1){
			let delTaskDay = fullLS[month].listOfAllTasks
		.filter((e) => e.year != year || e.day != day);
		fullLS[month].listOfAllTasks = delTaskDay
		}
	localStorage.setItem('ToDoList', JSON.stringify(fullLS))
	startTodo();
	showTasks(month, year, day, fullLS);
}
function randomID() {
	return Math.random().toString(36).substring(2, 9);
}


