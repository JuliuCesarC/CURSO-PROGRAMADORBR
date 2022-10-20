const imgWorking = "../public/img/workingProgress.png";
const imgCheck = "../public/img/iconeCheck.png";

function clearTasks() {
	let allTk = Array.from(
		document.getElementById("ToDo").getElementsByTagName("div")
	);
	allTk.forEach((el) => {
		document.getElementById("ToDo").removeChild(el);
	});
}
clearTasks();

function showTasks() {
	let taskTable = document.getElementById("taskTable");

	if (taskTable.children.length <= 1) {
		addEmptyTr();
	}

	function openEditMode(e) {
		let elem = e.target;
		if (elem.parentNode.classList == "empty") {
			elem.innerHTML = "";
			elem.parentNode.classList.remove("empty");
		}
		let elemText = elem.innerHTML;
		elem.innerHTML = "";

		let inputTx = document.createElement("input");
		let inputBtn = document.createElement("input");

		inputTx.setAttribute("type", "text");
		inputTx.setAttribute("maxlength", "100");
		inputTx.setAttribute("value", elemText);
		inputTx.id = "inputText";
		inputTx.classList.add("inputTx");
		inputBtn.classList.add("inputBtn");
		inputBtn.setAttribute("type", "submit");
		inputBtn.addEventListener("click", addNewTask);

		elem.appendChild(inputTx);
		elem.appendChild(inputBtn);
		inputTx.focus();

		function addNewTask() {
			let Text = document.getElementById("inputText");
			if (!Text.value == "") {
				elem.innerHTML = Text.value;
				addEmptyTr();
			}
			return;
		}
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
		let workingImg = document.createElement("img");
		let taskCont = document.createElement("td");

		workingImg.setAttribute("src", imgWorking);
		workingImg.classList.add("working");
		workingImg.addEventListener("click", switchCheck);
		workingTd.classList.add("workingTd");
		taskCont.innerHTML = "Clique duas vezes para adicionar uma tarefa...";
		taskCont.addEventListener("dblclick", openEditMode);
		taskCont.classList.add("content");
		emptyTr.classList.add("empty");

		workingTd.appendChild(workingImg);
		emptyTr.appendChild(workingTd);
		emptyTr.appendChild(taskCont);
		taskTable.appendChild(emptyTr);
	}
}
showTasks();
