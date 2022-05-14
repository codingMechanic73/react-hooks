import { useOnline } from "../hooks/useOnline"

export const OnlineStatus = () => {
    const isOnline =  useOnline();
    return (
        <div>
            {isOnline ? 'true': 'false'}
        </div>
    )
}