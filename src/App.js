import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(1, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return ` ${minutes}:${seconds}`;
  };

  const startTime=()=>{
    setIsRunning(true);
    intervalRef.current = setInterval(()=>{
      setTime((prev)=>prev+1)
    },1000)
  }

  const stopTime=()=>{
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  const resetTimer = () => {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time:{formatTime(time)}</div>
      {!isRunning? (<button onClick={startTime}><b>Start</b></button>) : (<button onClick={stopTime}><b>Stop</b></button>)}
      <button onClick={resetTimer}><b>Reset</b></button>
    </div>
  );
}

export default App;
