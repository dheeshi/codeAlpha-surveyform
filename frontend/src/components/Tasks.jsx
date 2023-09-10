import React from "react";

const Tasks = ({ formData, setFormData }) => {
  return (
    <div className="tasks-container">
      <div className="main">
        <h3 className="text">
          How many task are <br /> completed?
        </h3>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="9"
          value={formData.tasks}
          onChange={(e) => {
            setFormData({ ...formData, tasks: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default Tasks;
