
const incrementAction = (value)=>{ return {type: 'INCREMENT', payload: value || 1}};
const decrementAction = (value)=>{ return {type: 'DECREMENT', payload: value || 1}};

module.exports = {
	incrementAction,
	// Lembrando que quando o nome do campo e o nome do valor são iguais, podemos omitir a declaração do campo.
	decrementAction
}