import React from "react";

function Feedback({ formData, setFormData }) {
  return (
    <div className="feedback-container">
      <div className="main">
        <h3 className="text">
          Have you faced any <br /> problem?
        </h3>
        <textarea
          type="text"
          placeholder="type here..."
          value={formData.problem}
          onChange={(e) => {
            setFormData({ ...formData, problem: e.target.value });
          }}
        />
      </div>

      <div className="main">
        <h3 className="text">
          If you have any <br /> suggestions?
        </h3>
        <textarea
          type="text"
          placeholder="type here..."
          value={formData.suggestion}
          onChange={(e) => {
            setFormData({ ...formData, suggestion: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default Feedback;
