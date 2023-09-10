import React from "react";

function Experience({ formData, setFormData }) {
  return (
    <div className="experience-container">
      <div className="main">
        <h3 className="text">
          How was your <br /> experience?
        </h3>
        <textarea
          type="text"
          placeholder="type here..."
          value={formData.experience}
          onChange={(e) => {
            setFormData({ ...formData, experience: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default Experience;
