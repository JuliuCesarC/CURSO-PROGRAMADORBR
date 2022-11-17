import React from "react";
import "./App.css";
import GameRules from "./GameRules";
import HomePage from "./Homepage";

export default function App() {
	return (
		<GameRules>
			<HomePage />
		</GameRules>
	);
}
