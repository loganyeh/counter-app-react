import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "./MyContext";

function MinuteButton({ digit, setDigit, text, size, fontSize }) {
  const { minuteTensDigit, setMinuteTensDigit, minuteOnesDigit, setMinuteOnesDigit, seconds, setSeconds, milliseconds, setMilliseconds, minuteOnesDigitCounter, setMinuteOnesDigitCounter, minuteTensDigitCounter, setMinuteTensDigitCounter, setIsMinuteButton, isMinuteButton  } = useContext(MyContext);
  
  const clickButton = () => {
      if(minuteOnesDigitCounter < 10){
        setMinuteOnesDigit(prev => prev + 1);
        setMinuteOnesDigitCounter(prev => prev + 1);
        setMinuteTensDigitCounter(prev => prev + 1);
        console.log(minuteOnesDigitCounter);
      }
      else if(minuteOnesDigitCounter > 9){
        setMinuteOnesDigit(prev => prev = "");
        setMinuteTensDigitCounter(prev => prev + 1);
        setMinuteTensDigit(prev => prev = minuteTensDigitCounter);
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
  

export default MinuteButton;