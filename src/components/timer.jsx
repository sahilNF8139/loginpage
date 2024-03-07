import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(5);
  const [isTimerRunning, setIsTimerRunning] = useState(true);//timer useState
  let [count, setcount] = useState(0)
  console.log("counttt", count);
  // const[show,setshow]=useState(true)

  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    else if (timer === 0) {
      setIsTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);


  function Rsethndler() {
    setcount(count + 1)
    localStorage.setItem('key', count + 1)
    console.log('getitem', gtitem);

    // if (count>=3) {
    // timer&&button
    // }
    if (setTimer <= 2) {
    }
    setTimer(5);
    setIsTimerRunning(true);
  }
  const gtitem = localStorage.getItem('key')

  console.log("counting", count);
  return (
    <div>
      {isTimerRunning === false ?
        <div> <button onClick={Rsethndler}>ResendOTP</button></div> : <p>Timer:{timer}</p>}
      {
        gtitem >= 2 ? null :
        <div> <button>ResendOTP</button></div>
      }
      {/* {   gtitem >= 2 ? null :
          <p>Timer:{timer}</p>        
      } */}
      <></>
    </div>
  );
};

export default Timer;

