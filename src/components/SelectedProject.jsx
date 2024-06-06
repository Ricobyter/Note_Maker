import React from "react";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks
}) {
  const formattedData = new Date(project.dueDate).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-[18rem] md:w-[35rem] mt-16 ">
      <header className="pb-4 mb-4 border-b-2 border-stone-400">
        <div className="flex items-center justify-between">
          <h1 className=" text-3xl font-bold text-stone-600 mb-2 ">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-red-600 "
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedData}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
}
