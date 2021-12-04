import React, {useState} from 'react';
import {Input} from "../../../shared/Input/Input";
import {Button} from "../../../shared/Button/Button";
import {addNewPost} from "./addNewPost";
import TextArea from "../../../shared/TextArea/TextArea";

export function PostForm({createPost, posts}) {
    const [post, setPost] = useState({ // тут хранится обьект отдельного поста, значения которого меняются
        title: "",
        body: ""
    })
    const [isBodyClear, setIsBodyClear] = useState(false)
    const [isTitleClear, setIsTitleClear] = useState(false)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addPost(e)
        }
    }
    function addPost (e) {
        post.title ? setIsTitleClear(false) : setIsTitleClear(true) // Проверка на наличие введенных данных.
        post.body ? setIsBodyClear(false) :  setIsBodyClear(true)
        if (post.title && post.body) {
            addNewPost(e, post, setPost, createPost, posts)
        }
    }
    return (
        <form>
            {isTitleClear && <div>Нужно обязательно что-то написать!</div>}
            Название поста
            <Input  // меняет заголовок поста на введенное в Input значение
                value={post.title}
                onChange={(e) => {
                    setIsTitleClear(false)
                    setPost({
                        ...post,
                        title: e.target.value
                    })
                }

                }
                onKeyDown={handleKeyDown}
                type="text"
            />
            {isBodyClear && <div>Нужно обязательно что-то написать!</div>}
            Содержание поста <br />
            <TextArea  // меняет текст поста на введенное в Input значение
                style={{width: "50vh", height: "50vh"}}
                value={post.body}
                onChange={(e) => {
                    setIsBodyClear(false)
                    setPost({
                    ...post,
                    body: e.target.value
                })
                }
                }
                onKeyDown={handleKeyDown}
            />
            <Button
                onClick={(e) => {
                    e.preventDefault()
                    addPost(e)
                } // функция добавляет пост по полям в инпутах
                }>
                Добавить пост
            </Button>
        </form>
    );
}