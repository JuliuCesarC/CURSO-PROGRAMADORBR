import React from "react";
import "./App.css";
import GameRulesProvider from "./GameRulesProvider";
import HomePage from "./Homepage";

export default function App() {
	return (
		<GameRulesProvider>
				<HomePage />
		</GameRulesProvider>
	);
}
