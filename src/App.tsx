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
  return (
    <>
        {(time/1000).toFixed(1)}s
    </>
  )
}

export default App
