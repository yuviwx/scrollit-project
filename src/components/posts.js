import Post from "./post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts } from "../features/filters";
import { useSelector } from "react-redux/es/exports";
import { selectPostList } from "../features/filters"; 

const chooseStyle = windowWidth => {
    if(windowWidth > 1000){
        return 3
    }else if(windowWidth > 600){
        return 2
    }
    return 1
}

export default function Posts() {
    let style = chooseStyle(window.outerWidth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPosts())
    },[dispatch])

    useEffect(() => {
        style = chooseStyle(window.outerWidth)
    }, [window.outerWidth])

    const postList = useSelector(selectPostList)

    return (
    <main>
        {
            postList && postList.map((post, index ) => <Post key={index} Data={post} style={style} video={post.media}/>)
        }
    </main>
    );
}