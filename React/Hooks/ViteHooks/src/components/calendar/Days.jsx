import React, { useEffect, useState } from "react";
import "./Days.css";
import "./mediaDays.css";
let once = true;
let crrDay;

function Days(props) {
	const [trState, setTrState] = useState([]);

	let month = props.ls()[0];
	let year = props.ls()[1];
	let MONTHS = props.ls()[2];
	let upClassTask = props.upClass;
	let allTDs = [];
	let allTRs = [];

	function createDays() {
		allTDs = [];
		allTRs = [];
		month = props.ls()[0];
		year = props.ls()[1];
		MONTHS = props.ls()[2];

		let fistDayOfWeek = new Date(year, month, 1).getDay() - 1;
		let totalDaysInMonth = new Date(year, month + 1, 0).getDate();
		let fullMonth = -fistDayOfWeek;

		for (let index = 1; index <= 42; index++, fullMonth++) {
			let indexDate = new Date(year, month, fullMonth);
			let Now = new Date();

			let tdInnerHTML = indexDate.getDate();
			let tdID = "";
			let tdClass = "";

			if (
				indexDate.getFullYear() == Now.getFullYear() &&
				indexDate.getMonth() == Now.getMonth() &&
				indexDate.getDate() == Now.getDate()
			) {
				tdID = "currentDay";
				crrDay = indexDate.getDate().toString();
			}
			if (fullMonth < 1) {
				tdClass = "prevMonth";
			}
			if (fullMonth > totalDaysInMonth) {
				tdClass = "nextMonth";
			}
			if (MONTHS[month].listOfAllTasks) {
				if (
					MONTHS[month].listOfAllTasks.filter(
						(e) => e.year == year && e.day == indexDate.getDate()
					).length >= 1 &&
					tdClass == ""
				) {
					tdClass = "task";
				}
			}
			let TD;
			if (tdClass == "" || tdClass == "task") {
				TD = React.createElement(
					"td",
					{
						id: tdID,
						key: index,
						className: tdClass,
						onClick: (e) => props.selectedDay(e.target.innerHTML),
					},
					tdInnerHTML
				);
			} else {
				TD = React.createElement(
					"td",
					{ id: tdID, key: index, className: tdClass },
					tdInnerHTML
				);
			}
			allTDs.push(TD);

			if (index % 7 === 0 && index <= 42) {
				let TR = React.createElement("tr", { key: index }, allTDs);
				allTDs = []
				allTRs.push(TR);
			}
		}
	}
	// createDays();

	// useEffect(()=>{
	// }, [upClassTask])
	
	useEffect(() => {
		createDays()
		setTrState(allTRs);
	}, [month, upClassTask]);

	if (once) {
		once = false;
		setTimeout(() => {
			props.selectedDay(crrDay);
		}, 1);
	}

	return <tbody id="days">{trState}</tbody>;
}

export default Days;
