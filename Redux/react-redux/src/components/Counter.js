import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
	const contador = useSelector((state) => {
		return state.contador.value;
	});
	// IMPORTANTE, como temos mais de 1 reducer, precisamos colocar o nome do reducer(o nome que foi criado no 'combineReducers') apos o 'state'. Neste projeto estamos utilizando o Redux Toolkit, então precisamos utilizar o método '.value'(campo criado no 'initialState') no final do 'state'.

	const dispatch = useDispatch();

	return (
		<div className="Counter">
			<div>{contador}</div>
			<button
				onClick={() => {
					dispatch({ type: "counter/decrement", payload: 1 });
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					dispatch({ type: "counter/increment", payload: 1 });
				}}
			>
				+
			</button>
		</div>
	);
}
