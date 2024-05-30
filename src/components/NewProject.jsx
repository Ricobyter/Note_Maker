import React from "react";
import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[36rem] mt-16">
      <menu className="flex items-center justify-end gap-2 my-4">
        <li>
          <button className="text-stone-800 hover:text-black">Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 rounded-md py-2">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea={true} />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
