import { useEffect, useState } from "react";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // New state for sidebar open/close

  function toggleSideBar() {
    setIsSidebarOpen((prevState) => !prevState);
  }

  const [projectsState, setProjectsState] = useState(() => {
    // Retrieve projects from localStorage or initialize an empty array
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    // Retrieve tasks from localStorage or initialize an empty array
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return {
      projects: storedProjects,
      selectedProjectId: undefined,
      tasks: storedTasks,
    };
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projectsState.projects));
    localStorage.setItem("tasks", JSON.stringify(projectsState.tasks));
  }, [projectsState.projects, projectsState.tasks]);

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteproject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  // console.log(projectsState);
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let contents = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteproject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    contents = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    contents = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  const hmenu = isSidebarOpen ? "hidden" : "block";
  return (
    <main className="h-screen  flex gap-8">
      <div className={`md:hidden pt-2 pl-2`}>
        <GiHamburgerMenu
          className={`text-2xl cursor-pointer`}
          onClick={toggleSideBar}
        />
      </div>
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
        isOpen={isSidebarOpen} 
        togglebar = {toggleSideBar}
      />

      {contents}
    </main>
  );
}

export default App;
