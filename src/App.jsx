import { ProjectList } from "./components/ProjectList";
import projects from "../data/projects.json";

function App() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
