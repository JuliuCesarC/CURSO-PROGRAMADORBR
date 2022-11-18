import React from "react";
import "./App.css";
import GameInfoProvider from "./GameInfoProvider";
import GameRulesProvider from "./GameRulesProvider";
import HomePage from "./Homepage";

export default function App() {
	return (
			<GameInfoProvider>
		<GameRulesProvider>
				<HomePage />
		</GameRulesProvider>
			</GameInfoProvider>
	);
}
