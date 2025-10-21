import { useEffect, useState } from "react";
import "./PomodoroTimer.css"

export default function PomodoroTimer({ initialWorkMinutes = 25 }) {
  /* Estado para los minutos de trabajo seleccionados */
  const [workMinutes, setWorkMinutes] = useState(initialWorkMinutes);
  /* Cálculo del tiempo total en segundos */
  const WORK = workMinutes * 60;
  
  /* Estado del temporizador: segundos restantes */
  const [seconds, setSeconds] = useState(WORK);
  /* Estado de la ejecución: 'running' (corriendo) o 'paused' (pausado) o 'stopped' (detenido)*/
  const [status, setStatus] = useState('stopped'); 

  /* El temporizador se ejecuta si el estado es running */
  useEffect(() => {
    if (status !== 'running') return;
    
    const t = setInterval(() => {
      setSeconds(s => {
        if (s > 0) {
          return s - 1;
        } else {
          /* El tiempo ha terminado */
          setStatus('stopped'); 
          return 0;
        }
      });
    }, 1000);
    
    return () => clearInterval(t);
  }, [status]);

  /* Sincronizar los segundos cuando cambian los minutos de trabajo (si no está corriendo) */
  useEffect(() => {
    if (status === 'stopped') {
      setSeconds(workMinutes * 60);
    }
  }, [workMinutes, status]);


  /* Formato del tiempo */
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  /*  Manejadores de Eventos  */

  /* Inicia o reanuda el temporizador */
  const start = () => { 
    /* Si estaba detenido, reinicia con el tiempo seleccionado*/
    if (status === 'stopped') {
      setSeconds(workMinutes * 60);
    }
    setStatus('running'); 
  };
  
  /* Pausa el temporizador */
  const pause = () => setStatus('paused');
  
  /* detiene el temporizador y reinicia los segundos al tiempo inicial */

  const stop = () => {
    setStatus('stopped');
    setSeconds(workMinutes * 60); 
  };
  
  /* Manejador para cambiar los minutos de trabajo */
  const handleTimeChange = (e) => {
    const newMinutes = Number(e.target.value);
    setWorkMinutes(newMinutes);
    /* Asegura que al cambiar el tiempo, se detenga y se reinicien los segundos */
    setStatus('stopped'); 
    setSeconds(newMinutes * 60);
  };

  const renderButtons = () => {
    switch (status) {
      case 'running':
        return (
          <>
            <button className="btn warning" onClick={pause}>PAUSA</button>
            <button className="btn danger" onClick={stop}>DETENER</button>
          </>
        );
      case 'paused':
        return (
          <>
            <button className="btn danger2" onClick={start}>REANUDAR</button>
            <button className="btn danger" onClick={stop}>DETENER</button>
          </>
        );
      case 'stopped':
      default:
        return (
          <button className="btn primary2" onClick={start}>INICIAR POMODORO </button>
        );
    }
  };

  return (
    <div className="pomo-card">
      <h2 className="card-title">Pomodoro</h2>
      
      {/* Selector de Tiempo */}
      <div className="pomo-time-selector">
        <label htmlFor="work-time">Tiempo de Trabajo (min): </label>
        <select 
          id="work-time" 
          value={workMinutes} 
          onChange={handleTimeChange}
          /* Deshabilitar la selección mientras el temporizador está corriendo */
          disabled={status === 'running'} 
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={30}>30</option>
          <option value={45}>45</option>
          <option value={60}>60</option>
        </select>
      </div>

      {/* Reloj */}
      <div className="pomo-clock">{mm}:{ss}</div>
      
      {/* Botones de Control */}
      <div className="pomo-controls">
        {renderButtons()}
      </div>
      
    </div>
  );
}