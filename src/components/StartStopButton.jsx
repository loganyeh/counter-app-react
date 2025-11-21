import { useState, useRef } from "react";

function StartStopButton({ minuteTensDigit, setMinuteTensDigit, minuteOnesDigit, setMinuteOnesDigit, seconds, setSeconds, milliseconds, setMilliseconds, text, size, fontSize }) {
    // const [isStart, setIsStart] = useState(false);
    const intervalRef = useRef(null);
    const currentCountRef = useRef({seconds});

    const clickButton = () => {
        // setIsStart(prev => !prev);

        if(!intervalRef.current){
            intervalRef.current = setInterval(() => {
                setSeconds(prev => {
                    console.log(prev);
                    return prev + 1
                });
            }, 1000);
        }
        else{
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
  
    return (
      <button
        onClick={clickButton}
        className={`${size} relative flex justify-center items-center font-semibold bg-blue-400 hover:bg-blue-300 active:bg-blue-500 border border-gray-900 shadow-lg rounded-full cursor-pointer z-10`}
      >
        <span className={fontSize}>{text}</span>
      </button>
    );
  }
  
export default StartStopButton;
