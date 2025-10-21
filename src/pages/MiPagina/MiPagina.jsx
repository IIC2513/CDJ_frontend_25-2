import { useMemo, useState } from "react";
import "./MiPagina.css";
import StatCard from "../../components/StatCard/StatCard";
import Tag from "../../components/Tag/Tag";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AlertsList from "../../components/AlertsList/AlertsList";
import TodoList from "../../components/TodoList/TodoList";
import PomodoroTimer from "../../components/PomodoroTimer/PomodoroTimer";

export default function MiPagina() {
  const [subs] = useState(["Cálculo III", "EDO", "Química", "Álgebra Lineal", "+"]);
  const [likes] = useState(16);
  const [uploads] = useState(3);
  const [saved] = useState(4);
  const [pomos] = useState(5);

  const [todos, setTodos] = useState([
    { id: 1, text: " Tarea de Cálculo III.", done: true },
    { id: 2, text: " Rehacer ayudantía EDO.", done: false },
    { id: 3, text: " Publicar borrador.", done: false },
    { id: 4, text: " Estudiar derivadas.", done: false },
    { id: 5, text: " Revisar clase 5 de Cálculo III.", done: false },
  ]);
  const toggleTodo = (id) =>
    setTodos(xs => xs.map(it => it.id === id ? { ...it, done: !it.done } : it));

  const progreso = useMemo(() => {
    const total = todos.length || 1;
    const done  = todos.filter(t => t.done).length;
    return Math.round((done / total) * 100);
  }, [todos]);

  const [alerts] = useState([
    { user: "Micaela Henríquez", text: "acaba de publicar un archivo sobre QUÍMICA:", meta: "“Ácido y base”." },
    { user: "Javier M.",        text: "acaba de publicar sobre EDO:",               meta: "“¿Qué es la linealidad?”." },
    { user: "Juan Vásquez", text: "acaba de publicar un archivo sobre CÁLCULO III:", meta: "“Integrales múltiples”." },
  ]);

  return (
    <div className="page mp">
      <h1 className="h1-mipagina">Mi página 📊</h1>

      <div className="mp-grid mp-6blocks">
        {/* Fila 1 */}
        <section className="g-stats">
          <div className="stats-row">
            <StatCard value={likes}   label="LIKES RECIBIDOS" />
            <StatCard value={pomos}   label="POMODOROS COMPLETADOS" />
            <StatCard value={uploads} label="ARCHIVOS SUBIDOS" />
            <StatCard value={saved} label="ARCHIVOS GUARDADOS" />
          </div>
        </section>

        <section className="g-pomodoro">
          <PomodoroTimer workMinutes={25} />
        </section>

        <section className="g-progress">
          <ProgressBar value={progreso} />
        </section>

        {/* Fila 2 */}
        <section className="g-todo">
          <TodoList items={todos} onToggle={toggleTodo} />
        </section>
        
        {/* Fila 3 */}
        <section className="g-subs">
          <div className="mp-card subs">
            <div className="mp-card-title card-title">SUSCRIPCIONES</div>
            <div className="tags">
              {subs.map((t, i) => <Tag key={t} text={t} active={i===4} />)}
            </div>
          </div>
        </section>

        <section className="g-alerts">
          <AlertsList items={alerts} />
        </section>
      </div>
    </div>
  );
}
