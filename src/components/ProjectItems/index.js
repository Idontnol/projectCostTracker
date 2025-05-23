import { useContext, useState } from "react";
import { taskContext } from "../../context/taskContext";
import { useParams } from "react-router-dom";
import { items, otherCosts, tasks } from "../../utils/data";
import ItemCard from "../ItemCard";

import './index.css';
import ItemModal from "../ItemModal";

const ProjectItems=()=>{
    const {projectId}=useParams();
    
     const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalType, setModalType] = useState(""); // "edit", "create", or "show"
      const [selectedTaskId, setSelectedTaskId] = useState(null);
      const [sortOrder, setSortOrder] = useState("asc");
      const {title}=tasks.filter(proj=>String(proj.id)===String(projectId))[0];
    //   const [projectItems, setProjectItems] = useState(
    //     items.filter(item => String(item.projectId) === String(projectId))
    //     );
    //     const [projectOtherCosts, setProjectOtherCosts] = useState(
    //     otherCosts.filter(item => String(item.projectId) === String(projectId))
    //     );
    
      const openModal = (type, taskId = null) => {
        setModalType(type);
        setSelectedTaskId(taskId);
        setIsModalOpen(true);
      };

    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    //   const saveTask = (task) => {
    //     if (task.id === -1) {
    //       // Create a new task
    //       const newTask = {
    //         ...task,
    //         id: currentTasks.length > 0 ? currentTasks[currentTasks.length - 1].id + 1 : 1,
    //       };
    //       setCurrentTasks([...currentTasks, newTask]);
    //       console.log("New Task Created:", newTask);
    //     } else {
    //       // Update an existing task
    //       const updatedTasks = currentTasks.map((t) =>
    //         t.id === task.id ? { ...t, ...task } : t
    //       );
    //       setCurrentTasks(updatedTasks);
    //       console.log("Task Updated:", task);
    //     }
    //     closeModal();
    //   };
      
      const {currentTasks,setCurrentTasks}=useContext(taskContext);
    
      const deleteTask=(id)=>{
        const updatedTasks=currentTasks.filter(task=>task.id !== id);
        setCurrentTasks(updatedTasks);
      }
    // const deleteTask = (id) => {
    //     setProjectItems(prev => prev.filter(item => item.id !== id));
    //     setProjectOtherCosts(prev => prev.filter(cost => cost.id !== id));
    // };
    let filteredItems=items.filter(item=>String(item.projectId)===String(projectId));
     const filteredOtherCosts=otherCosts.filter(item=>String(item.projectId)===String(projectId)) ;
    //   if(filteredOtherCosts.length!==0)filteredItems.push(filteredOtherCosts);
      const totalCost=filteredItems.reduce((sum,item)=>sum+(item.cost || 0),0)+filteredOtherCosts.reduce((sum,item)=>sum+(item.amount || 0),0);
      const sortedItems = [...filteredItems].sort((a, b) =>
            sortOrder === "asc" ? a.cost - b.cost : b.cost - a.cost
        );
        const sortedOtherCosts = [...filteredOtherCosts].sort((a, b) =>
            sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
        );

    return (
        <div className="all-tasks">
            <div className="gap-navbar"></div>
      <div className="header-row">
        <div className="project-entitle"><h2>Project: </h2><p>{title}</p></div>
        <div className="header-controls">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-dropdown"
          >
            <option value="asc">Cost: Low to High</option>
            <option value="desc">Cost: High to Low</option>
          </select>
          <span className="total-cost">Total: ₹{totalCost}</span>
        </div>
      </div>

        <div className="headerwithbutton">
            <h3>Items:</h3>
            <button className="create-btn" onClick={() => openModal("create-item")}>+ Add Item</button>
        </div>
      <div className="task-grid">
        {sortedItems.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            item={item}
            onEdit={() => openModal("edit-item", item)}
            onDelete={() => deleteTask(item.id)}
            onShow={() => openModal("show-item", item)}
          />
        ))}
      </div>
      <div className="headerwithbutton">
        <h3>Other Costs:</h3>
        <button className="create-btn" onClick={() => openModal("create-cost")}>+ Add Other Cost</button>
      </div>
        
      <div className="task-grid">
        {sortedOtherCosts.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.description}
            cost={item.amount}
            item={item}
            onEdit={() => openModal("edit-cost", item)}
            onDelete={() => deleteTask(item.id)}
            onShow={() => openModal("show-cost", item)}
          />
        ))}
      </div>

      {isModalOpen && (
        <ItemModal
        type={modalType}
        id={selectedTaskId}
        onClose={closeModal}
         projectId={projectId} 
        onSave={(data) => {
            if (data.id === -1) {
            // New
            const updated = { ...data, id: Date.now() };
            if (modalType.includes("item")) {
                items.push(updated);
            } else {
                otherCosts.push(updated);
            }
            } else {
            // Edit
            if (modalType.includes("item")) {
                const index = items.findIndex(i => i.id === data.id);
                if (index !== -1) items[index] = data;
            } else {
                const index = otherCosts.findIndex(i => i.id === data.id);
                if (index !== -1) otherCosts[index] = data;
            }
            }
            closeModal();
        }}
        />

      )}
    </div>
    )
}
export default ProjectItems;