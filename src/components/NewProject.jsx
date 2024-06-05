import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //?for showing an error modal
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h1 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h1>
        <p className="text-stone-600 mb-4">It looks like you forgot to fill a field</p>
        <p className="text-stone-600 mb-4">
          Please fill valid input for every field
        </p>
      </Modal>
      <div className="w-[20rem] md:w-[36rem] mt-16 z-0">
        <menu className="flex items-center justify-end gap-2 my-4">
          <li>
            <button className="text-stone-800 hover:text-black" onClick={onCancel}>Cancel</button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 rounded-md py-2"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
