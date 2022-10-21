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
		monthsOfYear.forEach((e) => {
			if (e.day == day) {
				e.tasks.forEach((tk) => {
					addTask(tk);
				});
			}
		});
	}

	function addTask(tk) {
		let taskTable = document.getElementById("taskTable");
		let Tr = document.createElement("tr");
		let workingTd = document.createElement("td");
		let workingImg = document.createElement("img");
		let taskContent = document.createElement("td");
		let editTd = document.createElement('td')
		let editImg = document.createElement('img')

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
		editImg.setAttribute('src', '../public/img/btt edit.png')
		editTd.classList.add('editImg')
		editImg.addEventListener('click', e=>{
			openEditMode(taskContent, editTd)
		})

		workingTd.appendChild(workingImg);
		editTd.appendChild(editImg)
		Tr.appendChild(workingTd);
		Tr.appendChild(taskContent);
		Tr.appendChild(editTd);
		taskTable.appendChild(Tr);
	}
	
	function openEditMode(taskContent, editTd) {
		let contentTx = taskContent.innerHTML
		taskContent.innerHTML=''

		let inputTx = document.createElement('input')
		let inputBtn = document.createElement('input')
		inputTx.setAttribute('type', 'text')
		inputBtn.setAttribute('type', 'button')
		inputTx.classList.add('inputTx')
		inputBtn.classList.add('inputBtn')
		inputTx.value = contentTx
		inputBtn.value = 'Enviar'
		inputBtn.addEventListener('click', updateTask(taskContent))
		
		taskContent.appendChild(inputTx)
		editTd.innerHTML = ''
		editTd.appendChild(inputBtn)
		inputTx.focus()
		
	}
	function updateTask(taskContent){
		console.log('entrou', taskContent);
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
