import { useEffect, useState } from "react"

type responseType = { anime: string, character: string, quote: string }

const UseEffectFetch = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState<responseType>();

    useEffect(() => {
        let timerId: number | undefined;
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                if (query) {
                    const response = await fetch(`https://animechan.vercel.app/api/random/anime?title=${query}`, { signal });
                    const res = await response.json() as responseType;
                    setData(res);
                } else {
                    setData(undefined);
                }
            } catch (e) {
                console.error(e);
            } finally {
                controller.abort();
            }
        }

        timerId = setTimeout(fetchData, 500);

        return () => {
            clearTimeout(timerId);
            controller.abort();
        }
    }, [query]);

    return (
        <div>
            <input type="search" onChange={(event) => setQuery(event.target.value)} />
            {data?.anime}
        </div>
    )
}

export default UseEffectFetch;