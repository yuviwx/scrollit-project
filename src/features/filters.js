import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filters",
    initialState: {
        searchTerm: "",
        searchLimit: 25,
        sortBy: "relevance"
    },
    reducers: {
        changeTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        changeLimit: (state, action) => {
            state.searchLimit = action.payload
        },
        changeSort: (state, action) => {
            state.sortBy = action.payload
        }
    }
})

export default filterSlice.reducer;
export const selectFilters = (state) => state.filters;
export const {changeTerm, changeLimit, changeSort} = filterSlice.actions;
