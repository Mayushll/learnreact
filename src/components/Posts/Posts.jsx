import React, {useState} from 'react';
import {PostForm} from "./PostForm/PostForm";
import {PostList} from "./PostList/PostList";
import {PostFilter} from "./PostFilter/PostFilter";
import {usePosts} from "../../hooks/usePosts";

import {Modal} from "../../shared/Modal/Modal";
import {Button} from "../../shared/Button/Button";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export function Posts() {
    const [posts, setPosts] = useLocalStorage([], "posts") // следит за useState и добавляет посты в localStorage
    const [filter, setFilter] = useState({sort: "", query: ""})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const createPost = (newPost) => {setPosts([...posts, newPost])} // добавляет новый пост
    const removePost = (post) => {setPosts(posts.filter(p => p.id !== post.id))}

    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                key={posts.id} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Modal
                active={modalActive}
                setActive={setModalActive}
            >
                <PostForm
                    createPost={createPost}
                    posts={posts}
                />
            </Modal>
            <Button onClick={() => {setModalActive(true)}}>Добавить пост</Button>
        </div>
    )
}