import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export default function Focus() {
  const [time, setTime] = useState(25 * 60); // 25 min
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const { addFocusXP } = useContext(TaskContext);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
          addFocusXP(isBreak ? 5 : 25);

          setIsBreak((b) => !b);
          return isBreak ? 25 * 60 : 5 * 60;
        }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isBreak]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const reset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTime(25 * 60);
  };

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page flex items-center justify-center min-h-[70vh]">

        <div className="glass p-10 text-center w-[90%] max-w-md">

          <h1 className="text-3xl font-bold mb-4">
            {isBreak ? "Break Time ☕" : "Focus Mode 🎯"}
          </h1>

          <div className="text-6xl font-bold mb-6">
            {formatTime(time)}
          </div>

          <div className="flex justify-center gap-3">

            <button
              onClick={() => setIsRunning(!isRunning)}
              className="px-5 py-2 bg-green-500 rounded-xl"
            >
              {isRunning ? "Pause" : "Start"}
            </button>

            <button
              onClick={reset}
              className="px-5 py-2 bg-red-500 rounded-xl"
            >
              Reset
            </button>

          </div>

          <p className="mt-6 opacity-70">
            Stay focused. One task at a time.
          </p>

        </div>

      </div>
    </div>
  );
}