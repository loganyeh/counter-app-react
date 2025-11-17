import './App.css';
import TimerDisplay from './components/TimerDisplay';

function App() {

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center border-4 border-black '>
        <div id="timer-container" className='h-2/5 w-1/4 flex flex-col justify-center items-center border-2 border-blue-800 rounded-4xl overflow-visible'>
          <TimerDisplay />
          <div className='h-1/2 w-full border-2 border-red-600'>
              
          </div>
        </div>
      </div>
    </>
  )
}

export default App
