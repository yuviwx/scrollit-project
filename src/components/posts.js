import Post from "./post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts, getSource } from "../features/filtersSlice";
import { useSelector } from "react-redux/es/exports";
import { selectFilters } from "../features/filtersSlice"; 
import { reSize } from "../features/filtersSlice";
export default function Posts() {
    let newPostList = []
    const dispatch = useDispatch();
    let maxWidth = window.outerWidth < 480 ? window.innerWidth*0.9 : window.innerWidth *0.7*0.85;
    const {postList, searchTerm, searchLimit, sortBy, didResize} = useSelector(selectFilters);

    useEffect(() => {
        dispatch(loadPosts({searchTerm:searchTerm, searchLimit:searchLimit, sortBy:sortBy}));
    },[dispatch, searchLimit, searchTerm, sortBy])

    const func = () => {newPostList = postList.map(post => ({title: post.title, source: getSource(maxWidth, post), postURL: post.url}))};
    func();
    window.addEventListener('resize',() => {
        console.log('enter resize');
        dispatch(reSize(true));
        setTimeout(()=>{
            dispatch(reSize(false))
        },100)
    })
    useEffect(()=>{
        if(didResize){
            func();
        };

    },[didResize, func])
    return (
    <main>
        {
            newPostList && newPostList.map((post, index ) => <Post key={index} Data={post}/>)
        }
    </main>
    );
}