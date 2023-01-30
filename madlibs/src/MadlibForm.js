import React from "react";
import "./MadlibForm.css";

const MadlibForm = ({
  formData,
  handleChange,
  handleSubmit,
  isShowingForm,
}) => {
  return (
    <form
      className={isShowingForm ? "MadlibForm" : "hidden"}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="noun1"
        value={formData.noun1}
        onChange={handleChange}
        placeholder="Noun"
      />
      <input
        type="text"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
        placeholder="Noun"
      />
      <input
        type="text"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
        placeholder="Adjective"
      />
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
        placeholder="Color"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MadlibForm;
