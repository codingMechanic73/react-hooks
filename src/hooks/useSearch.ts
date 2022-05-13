import axios from "axios";
import { useEffect, useState } from "react"

export const useSearch = (defaultQuery: string, rateLimit: number):[string, any[], (name: string) => void] => {
    const [query, setQuery] = useState(defaultQuery);
    const [result, setResult] = useState<any[]>([]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            const result = await axios.get(`https://demo.dataverse.org/api/search?q=${query}`);
            setResult(result.data.data.items);
        }, rateLimit);

        return () => {
            clearTimeout(timeout);
        }

    }, [query])

    const searchHandler = (keyword: string) => {
        setQuery(keyword);
    }

    return [query, result, searchHandler];
}