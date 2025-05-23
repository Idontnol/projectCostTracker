import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import './index.css';

const ItemCard = ({ id, name, cost, onEdit, onDelete }) => {
    console.log(name, cost);
  return (
    <div className="item-card">
      <div className="card-header">
        <h3 className="item-name">{name}</h3>
      </div>
      <p className="item-cost">Cost: ₹{cost}</p>
      <div className="item-footer">
        {/* <span className="item-id">Item ID: {id}</span> */}
        <div className="item-actions">
          <button
            className="edit-btn"
            onClick={(event) => {
              event.stopPropagation();
              onEdit();
            }}
          >
            <MdEdit className="action-icon" /> Edit
          </button>
          <button
            className="delete-btn"
            onClick={(event) => {
              event.stopPropagation();
              onDelete();
            }}
          >
            <MdDelete className="action-icon" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
