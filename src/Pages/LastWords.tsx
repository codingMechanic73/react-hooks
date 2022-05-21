import { useStorage } from "../hooks/useStorage"

export const LastWords = () => {
    const [state, setState] = useStorage('word', '');
    return (
        <div>
            <input value={state} onChange={(event) => setState(event.target.value)} />
        </div>
    )
}