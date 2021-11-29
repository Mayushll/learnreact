import {useState, useEffect} from 'react';

function useLocalStorage(initialValue, key) { // передаем текущее значение и ключ
    const getValue = () => {
        const storage = localStorage.getItem(key) // при изменении забирает все данные из localStorage
        if (storage) {
            return JSON.parse(storage) // если данные забрали - то парсит их
        }
        return initialValue // если нет - возвращает исходное состояние
    }
    const [value, setValue] = useState(getValue)

    useEffect( () => {
        localStorage.setItem(key, JSON.stringify(value)) // добавляет данные в localStorage после каждого изменения
    }, [key, value]

    )
    return [value, setValue]
}

export {useLocalStorage};