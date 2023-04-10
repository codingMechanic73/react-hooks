import { useEffect, useState } from "react"

const UseEffectTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    console.log("rendering")
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(prevCount => prevCount + 1) }}>Click Me</button>
        </div>
    )
}

export default UseEffectTitle;