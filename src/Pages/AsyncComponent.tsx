import axios from "axios"
import { useAsync } from "../hooks/useAsync"

export const AsyncComponent = () => {
    const {execute, status, value, error} =  useAsync<any, string>(() => {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1');
    })

    return (
        <div>
            <div>{status}</div>
            <div>{value && status == 'succeeded' && (value as any).data.title}</div>
            <div>{error}</div>
            <button onClick={() => execute()}>OnClick</button>
        </div>
    )
}