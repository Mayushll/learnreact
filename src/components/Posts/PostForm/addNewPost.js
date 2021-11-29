export const addNewPost = (e, post, setPost, createPost, posts) => {

        e.preventDefault()
        const newPost = {
            ...post, id: posts.length+1 // берет значение из хука, добавляет id
        }
        createPost(newPost) // добавляет новый пост в массив постов
        setPost({      // сбрасывает значения поста => полей ввода.
                title: "",
                body: ""
            }
        )


}
