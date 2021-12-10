import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ThemeContext from "./Context/ThemeContext";
import useTheme from "./hooks/useTheme";

const Main = () => {
    const theme = useTheme()
    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

ReactDOM.render(
          <Main/>,
  document.getElementById('root')
);



















reportWebVitals();
