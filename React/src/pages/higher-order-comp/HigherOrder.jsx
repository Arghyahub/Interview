import React from "react";
import LoadingWrapper from "./LoadingWrapper";
import Content from "./Content";

const VerrifiedContent = LoadingWrapper(Content);

const HigherOrder = () => {
  return (
    <div>
      <VerrifiedContent />
    </div>
  );
};

export default HigherOrder;
