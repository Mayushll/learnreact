import React from 'react';
import {Input} from "../../../shared/Input/Input";
import {Selector} from "./Selector/Selector";
import styles from "./PostFilter.module.scss"
export function PostFilter({filter, setFilter}) {
    return (
        <div className={styles.filter}>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})} // изменяет запрос на значение, введенное в Input
                placeholder="Поиск..."
            />

            <Selector
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Сортировка"}
                options={[
                    {value: "title", name: "По заголовку"},
                    {value: "body", name: "По содержанию"},
                ]}
            />
        </div>
    );
}