import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
}

const searchValueSlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.searchQuery = action.payload;

        },

        removeQuery(state) {
            state.searchQuery = null;
        }
    }
})

export const { setQuery, removeQuery } = searchValueSlice.actions;

export default searchValueSlice.reducer;