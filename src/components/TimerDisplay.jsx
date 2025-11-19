import { useState } from "react";

function TimerDisplay({minuteTensDigit, setMinuteTensDigit, minuteOnesDigit, setMinuteOnesDigit, seconds, setSeconds, milliseconds, setMilliseconds}) { 
    // let [minuteTensDigit, setMinuteTensDigit] = useState(0);
    // let [minuteOnesDigit, setMinuteOnesDigit] = useState(0);
    // let [seconds, setSeconds] = useState(0);
    // let [milliseconds, setMilliseconds] = useState(0);

    const resetTimer = () => {
        console.log('timer has been reset');
        setMinuteTensDigit(0);
        setMinuteOnesDigit(0);
        setSeconds(0);
        setMilliseconds(0);
    }

    return (
        <div onClick={() => resetTimer()} className="h-3/5 w-11/12 flex justify-center items-center mt-7 border-2 border-black rounded-4xl">
            <div id="timer-number-container" className="h-3/5 w-2/3 flex justify-center items-center font-mono overflow-visible">
                <span id="minutes" className="h-full w-3/5 flex justify-center items-center text-9xl">{minuteTensDigit}{minuteOnesDigit}<span>:</span></span>
                <div id="seconds-container" className="h-full w-2/5 flex flex-col ml-5">
                    <span className="h-2/3 w-full text-8xl overflow-visible">{seconds}{milliseconds}</span>
                    <div className="h-1/3 w-full flex flex-row justify-around text-4xl">
                        <span className="h-full w-2/5 flex justify-center items-center mt-2">M</span>
                        <span className="h-full w-2/5 flex justify-center items-center mt-2">S</span>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default TimerDisplay;