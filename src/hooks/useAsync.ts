import { useCallback, useState } from "react";

type AsyncStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

export const useAsync = <V, E=string>(functionToExecute: ()=> Promise<V>) => {

    const [status, setStatus] = useState<AsyncStatus>('idle');
    const [value, setValue] = useState<V | null>(null);
    const [error, setError] = useState<E | null>(null);    

    const execute = useCallback(async () => {
        try {
            setStatus('pending');
            setError(null)
            const result = await functionToExecute();
            setStatus('succeeded');
            setValue(result);
        } catch(err: any) {
            setValue(null);
            setError(err)
        }
    }, [functionToExecute]);

    return {execute, status, value, error}
}