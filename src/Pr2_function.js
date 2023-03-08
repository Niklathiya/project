import React, { useState, useEffect } from 'react';

function Pr2_function() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 59) {
                setSeconds(0);
                if (minutes === 59) {
                    setMinutes(0);
                    setHours(hours + 1);
                }
                else {
                    setMinutes(minutes + 1);
                }
            }
            else {
                setSeconds(seconds + 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds, minutes, hours]);

    return (
        <div>
            <h2>Timer with function</h2>
            <h3>{hours}:{minutes}:{seconds}</h3>
        </div>
    );
}

export default Pr2_function;