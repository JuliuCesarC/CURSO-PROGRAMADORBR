import React from "react";
import GameRulesProvider from "./GameRulesProvider";
import GameInfo from "./GameInfo";
import HomePage from "./Homepage";
import "./App.css"


export default function App() {
	return (
		<GameRulesProvider>
				<GameInfo />
				<HomePage />			
		</GameRulesProvider>
	);
}
