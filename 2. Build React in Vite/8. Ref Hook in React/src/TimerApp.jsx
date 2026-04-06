import { useRef } from "react";
import { useState } from "react";

export default function TimerApp() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timer = useRef(null);

  function handleStart() {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>
      <h1>Timer App</h1>
      <h3>timer: {now - start} ms</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
