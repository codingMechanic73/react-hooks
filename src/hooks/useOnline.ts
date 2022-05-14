import { useEffect, useState } from "react"

export const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);
    
    useEffect(() => {

        const listenrCallback = (event: any) => {
            console.log('event')
            if (navigator.onLine) {
                setIsOnline(true);
            } else {
                setIsOnline(false);
            }
        }

        window.addEventListener('online', listenrCallback);
        window.addEventListener('offline', listenrCallback)
    
      return () => {
        window.removeEventListener('online', listenrCallback);
        window.removeEventListener('offline', listenrCallback);
      }
    }, [])
    

    return isOnline;
}