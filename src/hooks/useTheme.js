import { useContext } from 'react'         //hook to use context in a component
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
    const context=useContext(ThemeContext);
    
    if(context===undefined){
        throw new Error("useTheme() musb be used in ThemeProvider")
    }
    
    return context
}
