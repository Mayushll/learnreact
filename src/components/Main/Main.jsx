import React from 'react';
import {Profile} from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Settings} from "../Settings/Settings";
import {Games} from "../Games/Games";
import {Learning} from "../Learning/Learning";
import {Promises} from "../Learning/Promises/Promises";
import {Posts} from "../Posts/Posts";
import {Axios} from "../Learning/Axios/Axios";
import styles from "./Main.module.scss"
import {NotFoundComponent} from "../NotFound/NotFound";
import {AboutSite} from "../AboutSite/AboutSite";
import {Todo} from "../Todo/Todo";
import {DynamicPagination} from "../Learning/DynamicPagination/DynamicPagination";
import {Music} from "../Music/Music";

export function Main(props) {
    return (
            <div className={styles.wrapper}>
                <Routes>
                    <Route path="/*"
                           element={<NotFoundComponent/>}
                    />
                    <Route path="/posts"
                           element={<Posts/>}
                    />
                    <Route path="/"
                           element={<Profile/>}
                    />
                    <Route path="/settings"
                           element={<Settings/>}/>
                    <Route path="/games"
                           element={<Games/>}
                    />
                    <Route path="/aboutsite"
                           element={<AboutSite/>}
                    />
                    <Route path="/todo"
                           element={<Todo/>}
                    />
                    <Route path="/learning" element={<Learning/>}>
                        <Route path="/learning/Promises"
                               element={<Promises/>}
                        />
                        <Route path="/learning/Axios"
                               element={<Axios/>}
                        />
                        <Route path="/learning/Pagination"
                               element={<DynamicPagination/>}
                        />
                    </Route>
                </Routes>
            </div>
    );
}