import { useEffect, useState } from "react"

const useSync = <T>(data: T, syncUrl: string, timeout: number = 1000) => {
    const [shouldSync, setShouldSync] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            if (shouldSync) {
                console.log("uploading data", data);
            }
        }, timeout)


        return () => {
            clearTimeout(timer);
        }
    }, [data, shouldSync])

    return [setShouldSync];
}

export default useSync;