import { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext<boolean>(false);
export const UpdateThemeContext = createContext<() => void>(() => {});

export const ThemeProvider = ({children}: any) => {
   
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const changeTheme = () => {
      setDarkTheme(darkTheme => !darkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={changeTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}


export const useTheme = (): [boolean, () => void] => {
    const darkTheme = useContext(ThemeContext);
    const updateTheme = useContext(UpdateThemeContext);

    return [darkTheme, updateTheme];
}