import React from 'react';
import {PostItem} from "./PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./PostList.scss"

export function PostList(props) {
    return (
        <div>
            <h1>Посты</h1>
            <TransitionGroup // добавляет анимацию для постов, использует библиотеку "react-transition-group"
            >
                    {props.posts.map((post, index) => (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem
                                remove={props.remove}
                                number={index + 1}
                                post={post}
                            />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </div>
    );
}
