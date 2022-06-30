import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filtersSlice"

export default configureStore({
    reducer: {
        filters: filterReducer
    }
});