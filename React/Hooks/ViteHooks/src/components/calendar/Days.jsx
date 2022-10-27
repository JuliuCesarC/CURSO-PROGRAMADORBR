import React, { useState } from "react";
import "./Days.css"

const months = [
	"janeiro",
	"fevereiro",
	"março",
	"abril",
	"maio",
	"junho",
	"julho",
	"agosto",
	"setembro",
	"outubro",
	"novembro",
	"dezembro",
];
let once = true;
function Days(props) {
	
	let newArray = []
	for(let i = 1; i<6; i++){
		let tx = <td onClick={mostra}>{i}</td>
		newArray.push(tx)
	}
		
	let final = <tr>{newArray[0]}{newArray[1]}{newArray[2]}{newArray[3]} </tr>
	
	let outroArray = [<tr>{newArray[0]}{newArray[1]}{newArray[2]}{newArray[3]} </tr>,<tr>{newArray[0]}{newArray[1]}{newArray[2]}{newArray[3]} </tr>]

	function mostra(){
		console.log('Testando');
	}
	
	// let month = props.ls[0];
	// let year = props.ls[1];
	// let months = props.ls[2];
// 	let fistDayOfWeek = new Date(year, month, 1).getDay() - 1;
// 	let totalDaysInMonth = new Date(year, month + 1, 0).getDate();
// 	let i = -fistDayOfWeek;
// 	let tr = document.createElement("tr");
// 	for (let index = 1; index <= 42; i++, index++) {
// 		let indexDay = new Date(year, month, i);
// 		let Now = new Date();

// 		let td = document.createElement("td");
// 		td.innerHTML = indexDay.getDate();
// 		if (
// 			indexDay.getFullYear() == Now.getFullYear() &&
// 			indexDay.getMonth() == Now.getMonth() &&
// 			indexDay.getDate() == Now.getDate()
// 		) {
// 			td.id = "current-day";
// 			if (!once) {
// 				showTasks(month, year, indexDay.getDate(), monthsOfYear);
// 				once = true;
// 			}
// 		}

// 		if (i >= 1 && i <= totalDaysInMonth) {
// 			td.addEventListener("click", (e) => {
// 				showTasksLS(e.target);
// 			});
// 		}
// 		if (i < 1) {
// 			td.classList.add("prev-month");
// 		}
// 		if (i > totalDaysInMonth) {
// 			td.classList.add("next-month");
// 		}
// 		if (monthsOfYear[month].listOfAllTasks) {
// 			if (
// 				monthsOfYear[month].listOfAllTasks.filter(
// 					(e) => e.year == year && e.day == indexDay.getDate()
// 				).length >= 1 &&
// 				td.classList.length < 1
// 			) {
// 				td.classList.add("task");
// 			}
// 		}
// 		tr.appendChild(td);
// 		if (index % 7 === 0 && index < 40) {
// 			Days.appendChild(tr);
// 			tr = document.createElement("tr");
// 		}
// 	}
// 	Days.appendChild(tr);

	return <tbody id="days">{outroArray}</tbody>;
}

export default Days;
