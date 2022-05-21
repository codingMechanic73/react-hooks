import { useEffect, useState } from "react"

export const useStorage = (key: string, value: any) => {
   
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }

        if (value instanceof Function) {
            return value();
        }
        return value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state])

    return [state, setState];
    
}