
module.exports = listReducer = (state = ["Item padrão"], action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return [...state, action.payload];

		default:
			return state;
	}
};