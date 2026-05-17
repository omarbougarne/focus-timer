import {useEffect, useState} from 'react';

function App() {
let timer = 300;
const interval = setInterval(() => {
let minutes = 300/60
let seconds = 300%60
timer--;
})
const countDownUntilZero = () => {
            setTime(prevTime => {
                if (prevTime === 0) clearInterval(interval);
                else return prevTime - INTERVAL_IN_MILISECONDS;
            })
  return (
    <>
    <p>
        <select value="Select Duration">
            <option></option>
        </select>
    </p>
    </>
  )
}

export default App
