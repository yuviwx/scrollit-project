import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
    'filters/loadPosts',
    async ({searchTerm, searchLimit, sortBy}) => {
        const domain = searchTerm ? `https://www.reddit.com/search.json?q=${searchTerm}` : 'https://www.reddit.com/top.json?t=day';
        const endPoint = domain + `&limit=${searchLimit}&sort=${sortBy}`
        try{
            const res = await fetch(endPoint);
            const jsonRes = await res.json();
            const data = jsonRes.data.children.map(data => data.data)
            //console.log(data.map(data => data.preview))
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
        sortBy: "relevance",
        didResize: false
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
        },
        reSize: (state, action) => {
            state.didResize = action.payload;
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

const encodedSource = (source) => {
    let encoded = source.replace('amp;s', 's')
    while(encoded.includes('amp;')){
        encoded = encoded.replace('amp;', '')
    }
    return encoded
}

const getResolution = (maxWidth, resolutions) => {
    for(let i = (resolutions.length - 1); i > 0; i--){
        if(maxWidth >= resolutions[i].width) {
           return resolutions[i];
        }
    }
    return resolutions[0]
}

export const getSource = (maxWidth, post) => {
    let source = null
    if(post.preview) {
        if(post.preview.images[0].source.width <= maxWidth) {
            source = {...post.preview.images[0].source}
        }else{
            source = {...getResolution(maxWidth, post.preview.images[0].resolutions)}
        }
        let url = encodedSource(source.url) 
        return {...source, url: url}
    }
    return null
}

export default filterSlice.reducer;
export const selectFilters = (state) => state.filters;
export const {changeTerm, changeLimit, changeSort, reSize} = filterSlice.actions;
