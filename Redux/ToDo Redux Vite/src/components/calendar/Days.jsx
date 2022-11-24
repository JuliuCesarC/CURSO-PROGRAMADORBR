import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Days.css";
import "./DaysMedia.css";
let once = true;
let crrDay;

function Days() {
	const [trState, setTrState] = useState([]);
	const taskLS = useSelector((state) => {
		return state.LocalS.value;
	});
	const calendar = useSelector((state) => {
		return state.calendar.value;
	});
	const dispatch = useDispatch();

	let monthNumber = calendar.month;
	let year = calendar.year;
	let MONTHS = taskLS[2];
	let allTDs = [];
	let allTRs = [];
	let nameMonth = calendar.nameOfMonth;

	function createDays() {
		allTDs = [];
		allTRs = [];
		monthNumber = calendar.month;
		year = calendar.year;
		MONTHS = taskLS[2];

		let fistDayOfWeek = new Date(year, monthNumber, 1).getDay() - 1;
		let totalDaysInMonth = new Date(year, monthNumber + 1, 0).getDate();
		let daysShown = -fistDayOfWeek;

		for (let index = 1; index <= 42; index++, daysShown++) {
			let indexDate = new Date(year, monthNumber, daysShown);
			let Now = new Date();

			let tdInnerHTML = indexDate.getDate();
			let tdID = "";
			let tdClass = "";

			if (
				indexDate.getFullYear() == Now.getFullYear() &&
				indexDate.getMonth() == Now.getMonth() &&
				indexDate.getDate() == Now.getDate()
			) {
				//Checks if the day is the current day.
				tdID = "currentDay";
				crrDay = indexDate.getDate().toString();
			}
			if (daysShown < 1 || daysShown > totalDaysInMonth) {
				//Whether the day belongs to the last month or the next month
				tdClass = "prevNextMonth";
			}
			if (
				MONTHS[monthNumber].listOfAllTasks &&
				MONTHS[monthNumber].listOfAllTasks.filter(
					(e) => e.year == year && e.day == indexDate.getDate()
				).length >= 1 &&
				tdClass == ""
			) {
				//Checks if the selected day has tasks.
				tdClass = "task";
			}
			let TD;
			if (tdClass == "" || tdClass == "task") {
				//Ensures that the day of the previous or next month cannot be selected.
				TD = React.createElement(
					"td",
					{
						id: tdID,
						key: index,
						className: tdClass,
						onClick: (e) => {
							dispatch({
								type: "selectedDay/select_day",
								payload: { month: monthNumber, year, day: e.target.innerHTML },
							});
							dispatch({
								type: "tasks/update_task_state",
							});
						},
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
				//Every week a new line with the TDs is created.
				let TR = React.createElement("tr", { key: index }, allTDs);
				allTDs = [];
				allTRs.push(TR);
			}
		}
	}

	useEffect(() => {
		createDays();
		setTrState(allTRs);
	}, [monthNumber, taskLS]);

	if (once) {
		//The first time the site is opened, the current day is selected.
		once = false;
		setTimeout(() => {
			dispatch({
				type: "selectedDay/select_day",
				payload: {
					month: new Date().getMonth(),
					year: new Date().getFullYear(),
					day: new Date().getDate(),
				},
			});
			dispatch({
				type: 'calendar/update_calendar'
			})
		}, 10);
	}

	return (
		<div id="Table">
			<header id="Header">
				<button
					className="btn-prev"
					id="Btn-Prev"
					onClick={() => {
						dispatch({ type: "calendar/prev_month" });
					}}
				>
					&lt;
				</button>
				<h2 id="month">{nameMonth}</h2>
				<button
					className="btn-next"
					id="Btn-Next"
					onClick={() => {
						dispatch({ type: "calendar/next_month" });
					}}
				>
					&gt;
				</button>
			</header>
			<table>
				<thead>
					<tr id="daysOfWeek">
						<td>D</td>
						<td>S</td>
						<td>T</td>
						<td>Q</td>
						<td>Q</td>
						<td>S</td>
						<td>S</td>
					</tr>
				</thead>
				<tbody id="days">{trState}</tbody>
				<tfoot>
					<tr>
						<td colSpan={7} id="year">
							{year}
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

export default Days;
