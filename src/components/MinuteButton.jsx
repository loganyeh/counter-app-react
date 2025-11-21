import { useEffect, useContext } from "react";

function MinuteButton({ digit, setDigit, text, size, fontSize }) {
    
    const clickButton = () => {
      setDigit(digit + 1);
    };

    useEffect(() => {
      // console.log(digit);
    }, [clickButton]);
  
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