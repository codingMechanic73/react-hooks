import { useState } from "react"

const UseStatePrimitiveExample = () => {
    const [count, setCount] = useState<number>(0); // using primitive type


    return (
        <div>
            <div>
                <h2>Using primitive</h2>
                <p>{count}</p>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            </div>
        </div>
    );
}

export default UseStatePrimitiveExample;