import './App.css';
import TimerDisplay from './components/TimerDisplay';
import MinuteButton from './components/MinuteButton';

function App() {

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center border-4 border-black '>
        <div id="timer-container" className='h-2/5 w-1/4 flex flex-col justify-center items-center border-2 border-blue-800 rounded-4xl overflow-visible'>
          <TimerDisplay />
          <div id='buttons' className='h-1/2 w-full border-2 border-red-600'>
              <MinuteButton text= "M" size= "h-32 w-32"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
