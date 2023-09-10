import React from "react";

function Intro({ formData, setFormData }) {
  return (
    <div className="user-container">
      <div className="main">
        <h3 className="text">UserName</h3>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
      </div>
      <div className="main">
        <h3 className="text">Email</h3>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Intro;
