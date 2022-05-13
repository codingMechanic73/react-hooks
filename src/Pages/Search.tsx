import { useSearch } from "../hooks/useSearch";

export const Search = () => {
    const [query, result, searchHandler] = useSearch('Fabso', 1000);
    
    return (
        <div>
            <input value={query} onChange={(event)=> {
                    searchHandler(event.target.value);
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