import React from "react";
import "./Story.css";

const Story = ({ formData, handleReset, isShowingStory }) => {
  return (
    <div className={isShowingStory ? "Story" : "hidden"}>
      <p>
        There was a {formData.color} {formData.noun1} that loved a{" "}
        {formData.adjective} {formData.noun2}.
      </p>
      <button onClick={handleReset}>Restart</button>
    </div>
  );
};

export default Story;
