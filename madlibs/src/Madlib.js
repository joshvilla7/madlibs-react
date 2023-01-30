import React, { useState } from "react";
import useFields from "./hooks/useFields";
import MadlibForm from "./MadlibForm";
import Story from "./Story";

const Madlib = () => {
  const [isShowingForm, setIsShowingForm] = useState(true);
  const [isShowingStory, setIsShowingStory] = useState(false);
  const [formData, handleChange, resetFormData] = useFields({
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShowingForm(false);
    setIsShowingStory(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetFormData();
    setIsShowingForm(true);
    setIsShowingStory(false);
  };

  return (
    <div>
      <MadlibForm
        isShowingForm={isShowingForm}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Story
        isShowingStory={isShowingStory}
        handleReset={handleReset}
        formData={formData}
      />
    </div>
  );
};

export default Madlib;
