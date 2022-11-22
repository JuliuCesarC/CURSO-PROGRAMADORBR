import { useSelector } from "react-redux";

export default function Header() {
	const contador = useSelector((state)=>{return state.contador.value})

    return ( 
    <div className="Header">
			<h3>Contador</h3>
			<div>{contador}</div>
    </div> 
    );
}
