import { useTheme } from "../hooks/useTheme"


export const Themes = () => {
    const [darkTheme, updateTheme] = useTheme();

    console.log(darkTheme, updateTheme);
    const style = {
        color: darkTheme? '#fff': '#000',
        backgroundColor: darkTheme? '#000': '#fff',
    }

    
    return (
        <div>
            <div style={style}>
                testing
            </div>
            <button onClick={() => updateTheme()}>Toggle</button>
        </div>
    );
}