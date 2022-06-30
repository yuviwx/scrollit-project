import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
    'filters/loadPosts',
    async ({searchTerm, searchLimit, sortBy}) => {
        console.log(`q=${searchTerm}&limit=${searchLimit}&sort=${sortBy}`)
        console.log(searchTerm)
        console.log(searchLimit)
        console.log(sortBy)
        const domain = searchTerm ? `https://www.reddit.com/search.json?q=${searchTerm}` : 'https://www.reddit.com/top.json?t=day';
        const endPoint = domain + `&limit=${searchLimit}&sort=${sortBy}`
        try{
            const res = await fetch(endPoint);
            const jsonRes = await res.json();
            const data = jsonRes.data.children.map(data => data.data)
            console.log(data.map(data => data.preview))
            return data;
        }catch(error){
            return error
        }
    }
)

export const filterSlice = createSlice({
    name: "filters",
    initialState: {
        postList: [],
        searchTerm: "",
        searchLimit: 25,
        sortBy: "relevance"
    },
    reducers: {
        loadPosts: (state, action) => {
            console.log("loading posts...")
            state.postList = action.payload
            console.log(state.postList)
        },
        changeTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        changeLimit: (state, action) => {
            state.searchLimit = action.payload
        },
        changeSort: (state, action) => {
            state.sortBy = action.payload
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            console.log("loading posts...")
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.postList = action.payload
        },
        [loadPosts.rejected]: (state, action) => {
            console.log(action.payload)
        },
    }
})

export default filterSlice.reducer;
export const selectFilters = (state) => state.filters;
export const {changeTerm, changeLimit, changeSort} = filterSlice.actions;
