const { createSlice } = require("@reduxjs/toolkit");

module.exports = listSlice = createSlice({
	name: 'list',
	initialState:{value: ["Item valor inicial."]},
	reducers:{
		ADD_ITEM: (state, action)=>{
			state.value = [...state.value, action.payload]
		}
	}
})