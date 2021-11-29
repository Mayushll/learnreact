import {createContext} from 'react';

export const lightTheme = {
    color: "rgb(20, 20, 20)",
    background: "rgb(220, 220, 220)",
}
export const darkTheme = {
    color: "rgb(220, 220, 220)",
    background: "rgb(20, 20, 20)",
}

const ThemeContext = createContext(lightTheme);

export default ThemeContext