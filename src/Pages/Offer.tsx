import { useState } from "react";
import { Timer } from "../components/Timer";
import { useCountDown } from "../hooks/useCountDown";

export const Offer = () => {

    const [targetDateTime, setTargetDateTime] = useState<Date>(new Date());
    const [days, hours, minutes, seconds] = useCountDown(targetDateTime);
    const now = new Date(targetDateTime.getTime() - targetDateTime.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 19);

    return (
        <div>
            <div>
                <input type={'datetime-local'} value={now} onChange={(event) => setTargetDateTime(new Date(event.target.value))} />
            </div>
            <div>
                <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
            </div>
        </div>
    );
}

