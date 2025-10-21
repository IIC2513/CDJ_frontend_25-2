import { useEffect, useState } from "react";
import "./PomodoroTimer.css"

export default function PomodoroTimer({ workMinutes=25 }) {
  const WORK = workMinutes * 60;
  const [seconds, setSeconds] = useState(WORK);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds(s => (s>0 ? s-1 : 0)), 1000);
    return () => clearInterval(t);
  }, [running]);

  const mm = String(Math.floor(seconds/60)).padStart(2,"0");
  const ss = String(seconds%60).padStart(2,"0");

  const start = () => { setSeconds(WORK); setRunning(true); };
  const stop  = () => setRunning(false);

  return (
    <div className="pomo-card">
      <div className="pomo-clock">{mm}:{ss}</div>
      {!running
        ? <button className="btn primary2" onClick={start}>INICIAR POMODORO</button>
        : <button className="btn danger" onClick={stop}>DETENER</button>}
    </div>
  );
}
