import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project doesn't have any task yet
        </p>
      )}
      {tasks.length > 0 && (
          <ul className=" mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between px-2 py-1 my-1 bg-stone-200 text-stone-800 rounded-sm">
                <span>{task.text}</span>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-400 hover:text-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
      )}
    </section>
  );
}
