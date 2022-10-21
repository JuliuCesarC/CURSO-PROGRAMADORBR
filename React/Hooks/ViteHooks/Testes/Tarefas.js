const imgWorking = "../public/img/workingProgress.png";
const imgCheck = "../public/img/iconeCheck.png";

function clearTasks() {
	let allTk = Array.from(
		document.getElementById("taskTable").getElementsByTagName("tr")
	);
	allTk.forEach((el) => {
		document.getElementById("taskTable").removeChild(el);
	});
}
clearTasks();

function showTasks(month, year, day) {
	clearTasks();
	if (month == null && year == null) {
		month = Number(document.getElementById("Header").classList[0]);
		year = Number(document.getElementById("year").innerHTML);
		day = Number(day.innerHTML);
	}

	document.getElementById("Day").innerHTML = "Dia " + day + "/" + (month + 1);

	let monthsOfYear = JSON.parse(localStorage.getItem("ToDoList"))[month]
		.listOfAllTasks;
	if (monthsOfYear) {
		let dayWithTask = monthsOfYear.filter((e) => e.day == day)[0];

		if (dayWithTask) {
			dayWithTask.tasks.forEach((e) => {
				addTask(e);
			});
		} else {
			addEmptyTr();
		}
	}

	function addTask(tk) {
		let taskTable = document.getElementById("taskTable");
		let Tr = document.createElement("tr");
		let workingTd = document.createElement("td");
		let workingImg = document.createElement("img");
		let taskContent = document.createElement("td");
		let editTd = document.createElement("td");
		let editImg = document.createElement("img");

		if (tk.check == "check") {
			workingImg.setAttribute("src", imgCheck);
		} else {
			workingImg.setAttribute("src", imgWorking);
		}
		workingImg.classList.add(tk.check);
		workingImg.addEventListener("click", switchCheck);
		workingTd.classList.add("workingTd");
		taskContent.innerHTML = tk.cont;
		taskContent.classList.add("content");
		editImg.setAttribute("src", "../public/img/btt edit.png");
		editTd.classList.add("editImg");
		editImg.addEventListener("click", (e) => {
			openEditMode(e);
		});

		workingTd.appendChild(workingImg);
		editTd.appendChild(editImg);
		Tr.appendChild(workingTd);
		Tr.appendChild(taskContent);
		Tr.appendChild(editTd);
		taskTable.appendChild(Tr);
	}

	function openEditMode(eEdit) {
		let contentTR;
		let contentTx;
		// if (eEdit.target.parentNode.classList[0] == "empty") {
		// 	let workingImg = document.createElement("img");
		// 	workingImg.setAttribute("src", imgWorking);
		// 	workingImg.classList.add('working');
		// 	workingImg.addEventListener("click", switchCheck);
		// 	eEdit.target.parentNode.children[0].appendChild(workingImg);
		// 	contentTR = eEdit.target
		// 	contentTx = ''
		// }else{
		// 	contentTR = eEdit.target.parentNode.parentNode.children[1];
		// 	contentTx = contentTR.innerHTML;
		// }
		contentTR.innerHTML = "";

		let inputTx = document.createElement("input");
		let inputImg = document.createElement("img");
		inputTx.setAttribute("type", "text");
		inputTx.setAttribute("maxlength", "125");
		inputImg.setAttribute("src", "../public/img/btt edit.png");
		inputTx.classList.add("inputTx");
		inputTx.value = contentTx;
		inputImg.addEventListener("click", (e) => {
			updateTask(e);
		});

		let Target = eEdit.target.parentNode;
		contentTR.appendChild(inputTx);
		Target.innerHTML = "";
		Target.appendChild(inputImg);
		inputTx.focus();
	}
	function updateTask(eUpdate) {
		let contentInput = eUpdate.target.parentNode.parentNode.children[1];
		let contentTx = contentInput.children[0].value;

		contentInput.innerHTML = contentTx;
		let updateImg = document.createElement("img");
		updateImg.setAttribute("src", "../public/img/btt edit.png");
		updateImg.addEventListener("click", (e) => {
			openEditMode(e);
		});
		let Target = eUpdate.target.parentNode;
		Target.innerHTML = "";
		Target.appendChild(updateImg);
	}
	function switchCheck(e) {
		let eC = e.target;
		if (eC.classList == "working") {
			eC.classList.remove("working");
			eC.classList.add("check");
			eC.setAttribute("src", imgCheck);
		} else {
			eC.classList.add("working");
			eC.classList.remove("check");
			eC.setAttribute("src", imgWorking);
		}
	}

	function addEmptyTr() {
		let emptyTr = document.createElement("tr");
		let workingTd = document.createElement("td");
		let placeHolder = document.createElement("td");
		let editTd = document.createElement("td");

		workingTd.classList.add("workingTd");
		placeHolder.innerHTML = "Clique duas vezes para adicionar uma tarefa...";
		placeHolder.addEventListener("dblclick", openEditMode);
		placeHolder.classList.add("content");
		editTd.classList.add("editImg");
		emptyTr.classList.add("empty");

		emptyTr.appendChild(workingTd);
		emptyTr.appendChild(placeHolder);
		emptyTr.appendChild(editTd);
		taskTable.appendChild(emptyTr);
	}
}
