import "./TodoList.css"

export default function TodoList({ items, onToggle }) {
  return (
    <div className="todo-card">
      <div className="card-title">TO DO LIST</div>
      {/* Contenedor de la lista de tareas */}
      <ul className="todo-list">
        {items.map(it => (
          <li key={it.id}>
            <label>
              {/* El label envuelve el checkbox y el texto, haciendo clic en el texto también activa el checkbox */}
              <input
                type="checkbox"
                checked={it.done}
                onChange={() => onToggle?.(it.id)}
              />
              {/* Muestra el texto de la tarea, aplica la clase done si la tarea está completada */}
              <span className={it.done ? "done" : ""}>{it.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
