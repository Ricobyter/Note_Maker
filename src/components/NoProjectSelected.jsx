import React from "react";
import noteImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected() {
  return (
    <div className="w-2/3 text-center mt-24 ">
      <img
        src={noteImg}
        alt="no project selected"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h1 className="text-xl font-bold text-stone-500 my-4">
        No Project selected
      </h1>
      <p className="text-stone-400 mb-4">Select a project or make a new one</p>

      <p className="mt-8">
        <Button>Create New Project</Button>
      </p>
    </div>
  );
}
