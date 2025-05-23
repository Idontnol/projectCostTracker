import { useState} from "react";
import './index.css';

const ItemModal = ({ type, id,projectId, onClose, onSave }) => {
  const isItem = type.includes("item");
  const isCost = type.includes("cost");
  const isEdit = type.includes("edit");
  const isShow = type.includes("show");

  const [form, setForm] = useState({
    id: id?.id || -1,
    name: isItem ? id?.name || "" : "",
    cost: isItem ? id?.cost || 0 : 0,
    description: isCost ? id?.description || "" : "",
    amount: isCost ? id?.amount || 0 : 0,
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    onSave(isItem
      ? { id: form.id, name: form.name, cost: Number(form.cost), projectId: projectId }
      : { id: form.id, description: form.description, amount: Number(form.amount), projectId: projectId });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isEdit ? "Edit" : "Create"} {isItem ? "Item" : "Cost"}</h2>

        {isItem && (
          <>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Item Name" />
            <input name="cost" type="number" value={form.cost} onChange={handleChange} placeholder="Cost" />
          </>
        )}

        {isCost && (
          <>
            <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
            <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" />
          </>
        )}

        {isShow ? (
          <pre>{JSON.stringify(form, null, 2)}</pre>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ItemModal;
