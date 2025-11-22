import './App.css';
import TimerDisplay from './components/TimerDisplay';
import MinuteButton from './components/MinuteButton';
import StartStopButton from './components/StartStopButton';
import { MyContext } from './components/MyContext';
import { useState, useRef, createContext, useEffect } from "react";

function App() {
  // console.clear(); 
  const [isMinuteButton, setIsMinuteButton] = useState(false);

  let [minuteTensDigit, setMinuteTensDigit] = useState(0);
  let [minuteOnesDigit, setMinuteOnesDigit] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [milliseconds, setMilliseconds] = useState(0);
  const millisecondsRef = useRef(0);
  const [minuteOnesDigitCounter, setMinuteOnesDigitCounter] = useState(() => minuteOnesDigit + 1);
  const [minuteTensDigitCounter, setMinuteTensDigitCounter] = useState(() => minuteTensDigit + 1);

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center border border-black'>
        <div id="timer-container" className='h-2/5 w-1/4 flex flex-col justify-center items-center border-2 border-blue-700 rounded-4xl overflow-visible'>
          <MyContext.Provider value={{ minuteTensDigit, setMinuteTensDigit, minuteOnesDigit, setMinuteOnesDigit, seconds, setSeconds, milliseconds, setMilliseconds, minuteOnesDigitCounter, setMinuteOnesDigitCounter, minuteTensDigitCounter, setMinuteTensDigitCounter, setIsMinuteButton, isMinuteButton }}>
          <TimerDisplay />
          <div id='buttons' className='h-1/2 w-full relative flex justify-around items-center overflow-visible'>
              <div className='h-full w-full absolute grid grid-rows-12 grid-cols-12'>
                <span className='row-start-2 row-end-4 col-start-4 col-end-6 flex justify-center items-center text-xl font-normal'>CLEAR</span>
                <div className='row-start-3 row-end-4 col-start-3 col-end-4 border-t-4 border-l-4 border-black'></div>
                <div className='row-start-3 row-end-4 col-start-6 col-end-7 border-t-4 border-r-4 border-black'></div>
              </div>
                <MinuteButton digit={minuteOnesDigit} setDigit={setMinuteOnesDigit} name="Minute Button" text= "M" size= "h-20 w-20" fontSize="text-4xl"/>
                <MinuteButton digit={seconds} setDigit={setSeconds} name="Second Button" text="S" size="h-20 w-20" fontSize="text-4xl"/>
                <StartStopButton name="Start/Stop Button" text= "ST/SP" size="h-24 w-24" fontSize="text-3xl"/>
          </div>
          </MyContext.Provider>
        </div>
      </div>
    
    </>
  )
}

export default App
