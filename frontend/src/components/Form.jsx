import React, { useState } from "react";
import axios from "axios";

import User from "./User";
import Experience from "./Experience";
import Feedback from "./Feedback";
import Tasks from "./Tasks";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    tasks: "",
    experience: "",
    problem: "",
    suggestion: "",
  });

  const submitData = async () => {
    const response = await axios.post("http://localhost:5000/form", {
      formData,
    });
    console.log("Success", response);
  };

  const FormTitles = ["Intro", "Experience", "Tasks", "Feedback"];

  const PageDisplay = () => {
    if (page === 0) {
      return <User formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Tasks formData={formData} setFormData={setFormData} />;
    } else {
      return <Feedback formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            className="button1"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="button2"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
                submitData();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
