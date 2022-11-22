import { useSelector, useDispatch } from "react-redux";

export default function List() {
	const lista = useSelector((state) => {
		return state.lista.value;
	});

	const dispatch = useDispatch();

	return (
		<div className="List">
			<ul>
				{lista.map((list, index) => {
					return <li key={index}>{list}</li>;
				})}
			</ul>
			<button
				onClick={() => {
					dispatch({ type: "list/add_item", payload: "Novo Item" });
				}}
			>
				Adiciona à lista
			</button>
		</div>
	);
}
