import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { taskContext } from './context/taskContext';
import SignUpLoginModal from './components/Authenticate';
import AllTasks from './components/AllTasks';
import CompletedTasks from './components/CompletedTasks';
import PendingTasks from './components/PendingTasks';
import { tasks } from './utils/data';
import Hero from './components/Hero';
import ProjectItems from './components/ProjectItems';

function App() {
  const [showSignUpModal,setShowSignUpModal]=useState(false);
  const [currentTasks,setCurrentTasks]=useState(tasks);

  const [activeProject,setActiveProject]=useState(null);
 

  return (
    <div className="App">
        <BrowserRouter>
          <taskContext.Provider value={{currentTasks,setCurrentTasks,activeProject,setActiveProject}}>
            <Navbar setShowSignUpModal={setShowSignUpModal} />
            {showSignUpModal && <SignUpLoginModal setShowSignUpModal={setShowSignUpModal} />}
            {/* <TaskBoard/> */}
            {/* <Hero/> */}
            <Routes>
              <Route exact path="/" element={  <Hero/>} />
              <Route exact path="/all-projects" element={<AllTasks/>} />
              <Route exact path="/completed-projects" element={<CompletedTasks/>} />
              <Route exact path="/pending-projects" element={<PendingTasks/>} />
              <Route exact path="/projects/:projectId/items" element={<ProjectItems/>}/>

          </Routes>
          </taskContext.Provider >
        </BrowserRouter >
    </div>
  );
}

export default App;
