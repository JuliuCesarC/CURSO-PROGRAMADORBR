import { createSlice } from "@reduxjs/toolkit";

const CURRENT_MYD = "currentMYD";
const TODO_LS = "ToDoList";

function updateLS() {
	const months = [
		{ name: "janeiro" },
		{ name: "fevereiro" },
		{ name: "março" },
		{ name: "abril" },
		{ name: "maio" },
		{ name: "junho" },
		{ name: "julho" },
		{ name: "agosto" },
		{ name: "setembro" },
		{ name: "outubro" },
		{ name: "novembro" },
		{ name: "dezembro" },
	];

	if (!localStorage.getItem(TODO_LS)) {
		localStorage.setItem(TODO_LS, JSON.stringify(months));
	} else {
		let LS = JSON.parse(localStorage.getItem(TODO_LS));
		months.forEach((e, i) => {
			months[i] = LS[i];
		});
	}
	let currentMYD;
	if (!localStorage.getItem(CURRENT_MYD)) {
		currentMYD = {
			month: new Date().getMonth(),
			year: new Date().getFullYear(),
			day: new Date().getDate(),
			nameOfMonth: months[new Date().getMonth()].name
		};
		localStorage.setItem(CURRENT_MYD, JSON.stringify(currentMYD));
	} else {
		currentMYD = JSON.parse(localStorage.getItem(CURRENT_MYD));
	}
	return [currentMYD.month, currentMYD.year, months, currentMYD.day];
}
const LocalS = createSlice({
	name: "LocalS",
	initialState: {
		value: updateLS(),
	},
	reducers: {
		update_ls: (state) => {
			state.value = updateLS();
		},
	},
});
const calendar = createSlice({
	name: "calendar",
	initialState: {
		value: JSON.parse(localStorage.getItem(CURRENT_MYD)),
	},
	reducers: {
		next_month: (state) => {
			let crrMonthYear = JSON.parse(localStorage.getItem(CURRENT_MYD));
			if (crrMonthYear.month == 11) {
				crrMonthYear.month = 0;
				crrMonthYear.year += 1;
			} else {
				crrMonthYear.month += 1;
			}
			crrMonthYear.nameOfMonth = updateLS()[2][crrMonthYear.month].name
			localStorage.setItem(CURRENT_MYD, JSON.stringify(crrMonthYear));
			state.value = crrMonthYear
		},
		prev_month: (state) => {
			let crrMonthYear = JSON.parse(localStorage.getItem(CURRENT_MYD));
			if (crrMonthYear.month == 0) {
				crrMonthYear.month = 11;
				crrMonthYear.year -= 1;
			} else {
				crrMonthYear.month -= 1;
			}
			crrMonthYear.nameOfMonth = updateLS()[2][crrMonthYear.month].name
			localStorage.setItem(CURRENT_MYD, JSON.stringify(crrMonthYear));
			state.value = crrMonthYear
		},
	},
});
const selectedDay = createSlice({
	name: "selectedDay",
	initialState: {
		value: JSON.parse(localStorage.getItem(CURRENT_MYD)),
	},
	reducers: {
		select_day: (state, action) => {
			let { month, year, day} = action.payload;
			let crrMYD = JSON.parse(localStorage.getItem(CURRENT_MYD));
			crrMYD.month = month;
			crrMYD.year = year;
			crrMYD.day = day;
			localStorage.setItem(CURRENT_MYD, JSON.stringify(crrMYD));
			state.value = crrMYD
		},
	},
});
const addNewTask = createSlice({
	name: "addNewTask",
	initialState: {
		value: JSON.parse(localStorage.getItem(TODO_LS)),
	},
	reducers: {
		add_new_task: (state, action) => {
			let { month, year, day, TX } = action.payload;
			let fullLS = JSON.parse(localStorage.getItem(TODO_LS));
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
			localStorage.setItem(TODO_LS, JSON.stringify(fullLS));
			// return LocalS;
		},
	},
});
const updateTask = createSlice({
	name: "updateTask",
	initialState: {
		value: JSON.parse(localStorage.getItem(TODO_LS)),
	},
	reducers: {
		update_task: (state, action) => {
			let { month, year, day, ID, TX } = action.payload;
			let fullLS = JSON.parse(localStorage.getItem(TODO_LS));
			let LSMonth = fullLS[month].listOfAllTasks;
			let LSDay = LSMonth.filter((e) => e.year == year && e.day == day)[0]
				.tasks;
			let LSTask = LSDay.filter((e) => e.id == ID)[0];
			LSTask.cont = TX;

			localStorage.setItem(TODO_LS, JSON.stringify(fullLS));
		},
	},
});
const switchCheck = createSlice({
	name: "switchCheck",
	initialState: {
		value: JSON.parse(localStorage.getItem(TODO_LS)),
	},
	reducers: {
		switch_check: (state, action) => {
			let { month, year, day, ID } = action.payload;
			let fullLS = JSON.parse(localStorage.getItem(TODO_LS));
			let task = fullLS[month].listOfAllTasks
				.filter((e) => e.year == year && e.day == day)[0]
				.tasks.filter((e) => e.id == ID)[0];
			if (task.check == "working") {
				task.check = "check";
			} else {
				task.check = "working";
			}
			localStorage.setItem(TODO_LS, JSON.stringify(fullLS));
		},
	},
});
const deleteTask = createSlice({
	name: "deleteTask",
	initialState: {
		value: JSON.parse(localStorage.getItem(TODO_LS)),
	},
	reducers: {
		delete_task: (state, action) => {
			let { month, year, day, ID} = action.payload;
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
			localStorage.setItem(TODO_LS, JSON.stringify(fullLS));
		},
	},
});

function randomID() {
	return Math.random().toString(36).substring(2, 9);
}
export {
	LocalS,
	calendar,
	selectedDay,
	addNewTask,
	updateTask,
	switchCheck,
	deleteTask,
};
