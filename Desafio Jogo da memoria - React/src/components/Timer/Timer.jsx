import React from "react";
import { InfoContext } from "../GameInfoProvider";

export default function Timer(){
	const timer = React.useContext(InfoContext)

	return(
		<h4>
			{`${timer.timer.Minutes}:${timer.timer.Seconds}`}
		</h4>
	)
}