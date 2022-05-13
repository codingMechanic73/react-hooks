import { useEffect, useState } from 'react'

const calculateDifference = (targetDateTime: Date) => {  
    return targetDateTime.getTime() - new Date().getTime();
}

export const useCountDown = (targetDateTime: Date) => {
    const [countDown, setCountDown] = useState(calculateDifference(targetDateTime));
    

    useEffect(() => {
        let interval!: NodeJS.Timer
        
        const difference = calculateDifference(targetDateTime);
        if (difference >= 0) {
            interval = setInterval(() => {
                setCountDown(calculateDifference(targetDateTime));
            }, 1000);
        } else {
            setCountDown(0);
            clearInterval(interval);
        }
       
        return () => {
            clearInterval(interval)
        }
    }, [targetDateTime]);

    
    const days = Math.floor(countDown / (24 * 60 * 60 * 1000));
    const hours = Math.floor((countDown % (24 * 60 * 60 * 1000))/(60 * 60 * 1000));
    const minutes = Math.floor((countDown % (60 * 60 * 1000))/(60 * 1000));
    const seconds = Math.floor((countDown % (60 * 1000))/(1000));

    return [days, hours, minutes, seconds];
}