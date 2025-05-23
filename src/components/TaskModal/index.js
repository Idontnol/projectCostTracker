import React, { useState, useEffect, useContext } from 'react';
import './index.css';
import { taskContext } from '../../context/taskContext';
//import { addProject, updateProject } from '../../utils/firebaseUtils';

const TaskModal = ({ type, id, onClose, onSave }) => {
  const [task, setTask] = useState({
    id,
    title: '',
    description: '',
    dueDate: '',
    status: 'pending',
  });
  const {currentTasks}=useContext(taskContext);

  useEffect(() => {
    if (type === 'edit' || type === 'show') {

      const selectedTask = currentTasks.find((task) => task.id === id);
      if (selectedTask) setTask(selectedTask);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async() => {
      try {
    // if (type === "create") {
    //   const newProjectId = await addProject(task); // Firebase creates new doc
    //   console.log("Project created with ID:", newProjectId);
    // } else if (type === "edit") {
    //   await updateProject(id, task); // Firebase updates existing doc
    //   console.log("Project updated:", id);
    // }
    onSave(task); // update parent state
    onClose();
  } catch (error) {
    console.error("Error saving project:", error);
  }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {type === 'show' && (
          <div className='show-task'>
            <h2>Project Details</h2>
            <div className='record-format'><label>Title:</label><p> {task.title}</p></div>
            <div className='record-format'><label>Description:</label> <p>{task.description}</p></div>
            <div className='record-format'><label>Due Date:</label><p> {task.dueDate}</p></div>
            <div className='record-format'><label>Status:</label> <p> {task.status}</p></div>
          </div>
        )}
        {(type === 'edit' || type === 'create') && (
          <div>
            <h2>{type === 'edit' ? 'Edit Project' : 'Create Project'}</h2>
            <form>
              <div className='record-format'>
                <label >
                Title:
              </label><input
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  placeholder="Enter project title"
                /></div>
              <div  className='record-format'>
              <label  className='label-format'>
                Description:
              </label>
              <textarea
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  placeholder="Enter project description"
                ></textarea>
              </div>
              <div  className='record-format'>
              <label  className='label-format'>
                Due Date:
              </label>
              <input
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleChange}
                />
              </div>
              <div  className='record-format'>
                <label  className='label-format'>
                  Status:
                </label >
                <select name="status" value={task.status} onChange={handleChange}>
                  <option value="notStarted">Not Started</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
           
              <div className='see-items'>
                <a href={`/projects/${id}/items`} >see items</a>
              </div>
              
              <button type="button" onClick={handleSubmit}>
                {type === 'edit' ? 'Save Changes' : 'Create Project'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskModal;
