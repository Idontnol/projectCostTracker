import React from "react";
import { MdEdit, MdDelete, MdCheckCircle, MdPendingActions, MdHourglassTop } from "react-icons/md";
import './index.css'; // Ensure this CSS file is imported
import { useNavigate } from "react-router-dom";

const TaskCard = ({  title = "Untitled Task", 
    description = "No description available.", 
    dueDate = "No due date", 
    status = "pending", 
    onEdit, detailedInfo="",
    onDelete, projectId,
    onShow  }) => {
        console.log(detailedInfo,"details of task card");
    const navigate=useNavigate(); 
  return (
    // <div className="task-card" onClick={onShow}> 
    <div className="task-card" onClick={()=>navigate(`/projects/${projectId}/items`)}> 
      <div className="card-header">
        <h3 className="task-title">{title}</h3>
          <div className="status-indicator">
            {status === "completed" ? (
              <MdCheckCircle className="status-icon completed" title="Completed" />
            ) : status === "pending" ? (
              <MdPendingActions className="status-icon pending" title="Pending" />
            ) : (
              <MdHourglassTop className="status-icon not-started" title="Not Started" />
            )}
          </div>
      </div>
      <p className="task-description">{description}</p>
      <div className={`${status!=="completed"? 'card-footer':''}`}>
        {status!=="completed"?<span className="due-date">Due: {dueDate}</span>:<></>}
        <div className={'card-actions'}>
          <button className="edit-btn"  onClick={(event) => {
            event.stopPropagation(); // Prevent click from propagating to parent
            onEdit();
          }}>
            <MdEdit className="action-icon" /> Edit
          </button>
          <button className="delete-btn"  onClick={(event) => {
            event.stopPropagation(); // Prevent click from propagating to parent
            onDelete();
          }}>
            <MdDelete className="action-icon" /> Delete
          </button>
        </div>
      </div>

    </div>
  );
};

export default TaskCard;
