import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    namesAray: [],
}

const setNamesSlice = createSlice({
    name: 'array',
    initialState,
    reducers: {
        setNameArray(state, action) {
            state.namesAray = action.payload
        }
    }
})

export const { setNameArray } = setNamesSlice.actions;

export default setNamesSlice.reducer;