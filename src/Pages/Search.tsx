import { useState } from "react";
import { useSearch } from "../hooks/useSearch";

export const Search = () => {
    const [query, setQuery] = useState('Fabso');
    const result = useSearch(query, 500);
    
    return (
        <div>
            <input value={query} onChange={(event)=> {
                    setQuery(event.target.value);
                }} />
            <div>
                {
                    result?.map(item => {
                        return (<div>{item.name}</div>)
                    })
                }
            </div>
        </div>
    )
}