// SignupForm.js
import React, { useState } from "react";
import axios from "axios";
import Membership from "../../models/Membership";

const Membership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/signup", formData)
      .then((response) => {
        console.log("Server Response:", response.data);
        // Optionally, you can show a success message to the user here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the form submission
      });

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 main">
          <form onSubmit={handleSubmit}>
            {/* Form inputs and elements */}
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Membership;
