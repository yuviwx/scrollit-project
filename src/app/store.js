import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filters"

export default configureStore({
    reducer: {
        filters: filterReducer
    }
});