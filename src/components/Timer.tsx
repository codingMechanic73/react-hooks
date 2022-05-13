interface TimerProps {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

export const Timer = ({days, hours, minutes, seconds}: TimerProps) => {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            {days + hours + minutes + seconds > 0 ? (
                <>
                    <div>
                        <span>Days: </span>
                        <span>{days}</span>
                    </div><div>
                        <span>Hours: </span>
                        <span>{hours}</span>
                    </div><div>
                        <span>Minutes: </span>
                        <span>{minutes}</span>
                    </div><div>
                        <span>Seconds: </span>
                        <span>{seconds}</span>
                    </div></>
            ): 'Expired'}
        </div>
    );
}