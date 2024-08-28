import React, { useState } from "react";

const Content = () => {
  const [User, setUser] = useState({
    name: "Arghya",
    age: 20,
  });
  return (
    <div>
      <h1>{User.name}</h1>
      <h1>{User.age}</h1>
    </div>
  );
};

export default Content;
