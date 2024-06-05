import React from "react";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
  isOpen,
  togglebar
}) {
  const sidebarClass = isOpen ? "w-[55vw] md:static   md:w-72 z-50 fixed top-0 left-0 h-screen" : "w-0 overflow-hidden md:w-72 p-0 hidden";
  return (
    <div className={`z-10 bg-stone-900 text-stone-50  ${sidebarClass}`}>
      <div className="text-stone-200 text-xl pt-4 font-bold  absolute right-4 md:hidden" onClick={togglebar}>
      <RxCross2 />
      </div>
      <div className=" px-8 py-16">

      
        
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
      </div>
    </div>
  );
}
