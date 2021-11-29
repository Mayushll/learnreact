import {useState, useEffect} from 'react';

function useSessionStorage(initialValue, key) { // забираем стартовое состояние и ключ которое передаем извне

    const [value, setValue] = useState(getValue) // создаем хук в который ложим то, что взяли из sessionStorage


    function getValue()  { // функция забирает и парсит данные из sessionStorage по ключу который передали
        const storage = sessionStorage.getItem(key) // забираем все данные из sessionStorage по ключу и кладем в переменную storage
        if (storage) { // проверяем взяли ли мы что-то из sessionStorage
            return JSON.parse(storage) // если данные забрали - то парсим и возвращаем их
        }
        return initialValue // если нет - возвращаем исходное состояние которое передавали
    }

            useEffect((key) => { // помещаем сюда ключ чтобы он был виден в setItem
                      sessionStorage.setItem(key, JSON.stringify(value)) // добавляем данные в sessionStorage предварительно преобразовав в строку
                }, [value] // срабатываем, когда меняется value
            )

    return [value, setValue] // возвращаем обратно значения
}

export {useSessionStorage};