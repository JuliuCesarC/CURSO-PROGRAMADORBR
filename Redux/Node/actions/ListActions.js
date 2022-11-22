
const addItemAction = (item) => {
	return { type: "list/ADD_ITEM", payload: item };
};

module.exports = {
	addItemAction
}