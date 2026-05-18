import {useEffect, useState} from 'react';
const TIME_IN_MILISECONDS_TO_COUNTDOWN = 60*10*1000;
const INTERVAL_IN_MILISECONDS = 100;
function App() {
    const[time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);

useEffect(() => {
        let interval;
        const countDownUntilZero = () => {
            setTime(prevTime => {
                if (prevTime === 0) clearInterval(interval);
                else return prevTime - INTERVAL_IN_MILISECONDS;
            })
        }
        interval = setInterval(countDownUntilZero, INTERVAL_IN_MILISECONDS);
        return () => clearInterval(interval);
    }, []);
    const minutes = Math.floor(time / 1000 / 60);
const seconds = Math.floor((time / 1000) % 60);
  return (
    <>
  {String(minutes).padStart(2, "0")}:
  {String(seconds).padStart(2, "0")}
</>
  )
}

export default App
