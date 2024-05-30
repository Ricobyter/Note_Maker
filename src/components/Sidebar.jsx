import React from "react";
import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {

          let cssClass = "text-left px-2 py-1 rounded-sm font-semibold w-full my-1  hover:text-stone-100 hover:bg-stone-800";
          if(project.id === selectedProjectId){
            cssClass += " bg-stone-800 text-stone-200";
          }else{
            cssClass += " text-stone-400"; 
          }


          return (
            <li key={project.id} className="">
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
