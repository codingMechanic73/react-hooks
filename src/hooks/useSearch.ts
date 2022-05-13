import axios from "axios";
import { useEffect, useState } from "react"

export const useSearch = (query: string, rateLimit: number):any[] => {
    const [result, setResult] = useState<any[]>([]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            const result = await axios.get(`https://demo.dataverse.org/api/search?q=${query}`);
            setResult(result.data.data.items);
        }, rateLimit);

        return () => {
            clearTimeout(timeout);
        }

    }, [query]);

    return result;
}