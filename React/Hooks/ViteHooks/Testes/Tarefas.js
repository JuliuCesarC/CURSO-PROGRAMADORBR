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

function showTasks(month, year, day, LS) {
	clearTasks();
	if (month == null && year == null) {
		month = Number(document.getElementById("Header").classList[0]);
		year = Number(document.getElementById("year").innerHTML);
		day = Number(day.innerHTML);
	}
	document.getElementById("Day").innerHTML = "Dia " + day + "/" + (month + 1);

	let monthsOfYear = LS[month].listOfAllTasks;
	if (monthsOfYear) {
		let dayWithTask = monthsOfYear.filter((e) => e.day == day)[0];
		if (dayWithTask) {
			dayWithTask.tasks.forEach((e) => {
				addTask(e);
			});
		} else {
			addEmptyTr();
		}
	}else{
		addEmptyTr()
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
			openEditMode(e, tk.id);
		});

		workingTd.appendChild(workingImg);
		editTd.appendChild(editImg);
		Tr.appendChild(workingTd);
		Tr.appendChild(taskContent);
		Tr.appendChild(editTd);
		taskTable.appendChild(Tr);
	}

	function openEditMode(eEdit, ID) {
		let contentTD = eEdit.target.parentNode.parentNode.children[1];
		let contentTx = contentTD.innerHTML;
		let Target = eEdit.target.parentNode;

		
		let inputTx = document.createElement("input");
		let inputImg = document.createElement("img");
		inputTx.setAttribute("type", "text");
		inputTx.setAttribute("maxlength", "125");
		inputImg.setAttribute("src", "../public/img/btt edit.png");
		inputTx.classList.add("inputTx");
		inputTx.value = contentTx;
		inputImg.addEventListener("click", (e) => {
			updateTaskLS(month, year, day, ID, inputTx.value);
		});
		
		contentTD.innerHTML = "";
		Target.innerHTML = "";
		contentTD.appendChild(inputTx);
		Target.appendChild(inputImg);
		inputTx.focus();
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
		let workingImg = document.createElement("img");

		workingImg.setAttribute("src", imgWorking);
		workingImg.classList.add("working");
		workingImg.addEventListener("click", switchCheck);
		workingTd.classList.add("workingTd");
		placeHolder.innerHTML = "Clique duas vezes para adicionar uma tarefa...";
		placeHolder.addEventListener("dblclick", (e) => {
			addNewTask(e);
		});
		placeHolder.classList.add("content");
		editTd.classList.add("editImg");
		emptyTr.classList.add("empty");

		workingTd.appendChild(workingImg);
		emptyTr.appendChild(workingTd);
		emptyTr.appendChild(placeHolder);
		emptyTr.appendChild(editTd);
		taskTable.appendChild(emptyTr);
	}
	function addNewTask(eAdd) {
		let contentTD = eAdd.target.parentNode.children[1];
		let contentTx = "";
		let Target = eAdd.target.parentNode.children[2];
		eAdd.target.parentNode.classList.remove("empty");

		let inputTx = document.createElement("input");
		let inputImg = document.createElement("img");
		inputTx.setAttribute("type", "text");
		inputTx.setAttribute("maxlength", "125");
		inputImg.setAttribute("src", "../public/img/btt edit.png");
		inputTx.classList.add("inputTx");
		inputTx.value = contentTx;
		inputImg.addEventListener("click", (e) => {
			newTask(e);
		});

		contentTD.innerHTML = "";
		Target.innerHTML = "";
		contentTD.appendChild(inputTx);
		Target.appendChild(inputImg);
		inputTx.focus();
	}
	function newTask(eNew) {
		let contentInput = eNew.target.parentNode.parentNode.children[1];
		let contentTx = contentInput.children[0].value;

		// contentInput.innerHTML = contentTx;
		// let updateImg = document.createElement("img");
		// updateImg.setAttribute("src", "../public/img/btt edit.png");
		// updateImg.addEventListener("click", (e) => {
		// 	openEditMode(e);
		// });
		// let Target = eNew.target.parentNode;
		// Target.innerHTML = "";
		// Target.appendChild(updateImg);
		addNewTaskLS(month, year, day, contentTx);
	}
}
