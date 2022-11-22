import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
	name: 'list',
	initialState: { value: ['Primeiro Item'] },
	reducers: {
		add_item: (state, action)=>{
			state.value = [...state.value, action.payload]
		}
	}
})