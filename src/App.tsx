import {useEffect, useState} from 'react';

function App() {
let timer = 300;
const interval = setInterval(() => {
let minutes = 300/60
let seconds = 300%60
timer--;
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
