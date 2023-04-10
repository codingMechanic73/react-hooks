import { useEffect, useState } from "react"

const UseEffectOnlineOffline = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const onNetworkChange = () => setIsOnline(navigator.onLine);

        window.addEventListener("online", onNetworkChange);
        window.addEventListener("offline", onNetworkChange);

        return () => {
            window.removeEventListener("online", onNetworkChange);
            window.removeEventListener("offline", onNetworkChange)
        }
    }, []);

    return (
        <div>
            {isOnline ? "Online" : "Offline"}
        </div>
    )
}

export default UseEffectOnlineOffline;