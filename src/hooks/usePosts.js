import {useMemo} from "react";
import {useSortedPosts} from "./useSortedPosts";

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo( () => {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
        }, [query, sortedPosts]
    )
    return sortedAndSearchedPosts
}