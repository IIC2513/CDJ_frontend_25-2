import "./TodoList.css"

export default function TodoList({ items, onToggle }) {
  return (
    <div className="todo-card">
      <div className="card-title">TO DO LIST</div>
      <ul className="todo-list">
        {items.map(it => (
          <li key={it.id}>
            <label>
              <input
                type="checkbox"
                checked={it.done}
                onChange={() => onToggle?.(it.id)}
              />
              <span className={it.done ? "done" : ""}>{it.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
