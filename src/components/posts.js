import Post from "./post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts } from "../features/filters";
import { useSelector } from "react-redux/es/exports";
import { selectFilters } from "../features/filters"; 


export default function Posts() {
    const {postList, searchTerm, searchLimit, sortBy} = useSelector(selectFilters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts(searchTerm, searchLimit, sortBy))
    },[dispatch, searchLimit, searchTerm, sortBy])

    return (
    <main>
        {
            postList && postList.map((post, index ) => <Post key={index} Data={post} />)
        }
    </main>
    );
}