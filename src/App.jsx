import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const[projectsState, setProjectsState] = useState({
    projects: [],
    selectedProjectId: undefined
  })

  function handleStartAddProject (){
    setProjectsState(prevState => {
      return{
      ...projectsState,
      selectedProjectId: null
  }})
  
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject = {handleStartAddProject}/>
      {/* <NewProject /> */}
      <NoProjectSelected onStartAddProject = {handleStartAddProject}/>

    </main>
  );
}

export default App;
