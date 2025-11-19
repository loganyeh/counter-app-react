
function TimerDisplay({minuteOne, minuteOnClick, minuteTwo, seconds, milliseconds}) { 

    const resetTimer = () => {
        console.log(`reset timer function clicked`);
    }

    return (
        <div onClick={resetTimer} className="h-3/5 w-11/12 flex justify-center items-center mt-7 border-2 border-black rounded-4xl">
            <div id="timer-number-container" className="h-3/5 w-2/3 flex justify-center items-center font-mono overflow-visible">
                <span onClick={() => {minuteOnClick(minuteOne + 1)}} id="minutes" className="h-full w-3/5 flex justify-center items-center text-9xl">{minuteOne}{minuteTwo}<span>:</span></span>
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