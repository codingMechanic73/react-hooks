import { useEffect, useState } from "react"

const UseEffectMousePosition = () => {
    const [positionX, setPositionX] = useState<number>(0);
    const [positionY, setPositionY] = useState<number>(0);

    useEffect(() => {

        const onMouseMove = (event: MouseEvent) => {
            setPositionX(event.clientX);
            setPositionY(event.clientY);
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])


    return (
        <div>
            <p>Position X:{positionX}</p>
            <p>Positoin Y:{positionY}</p>
        </div>
    )
}

export default UseEffectMousePosition;