const { createSlice } = require("@reduxjs/toolkit");

module.exports = counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		INCREMENT: (state, action)=>{
			state.value += action.payload
		},
		DECREMENT: (state, action)=>{
			state.value -= action.payload
		},
	}
}) 
