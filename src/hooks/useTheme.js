
import {useLocalStorage} from "./useLocalStorage";

const useTheme = () => { // хук меняет значение темы на противоположное, можно добавить новые темы.
    const [theme, setTheme] = useLocalStorage("light")
    const change = () => {
        switch (theme) {
            case "light":
                setTheme("dark")
                break
            default:
                setTheme("light")
                break
        }
    }
    return {
         change, theme,
    }
}

export default useTheme