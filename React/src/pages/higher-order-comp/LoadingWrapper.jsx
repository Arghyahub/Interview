import React, { useState } from "react";

const LoadingWrapper = (ReactNode) => {
  return (props) => {
    const [Loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return <div>{Loading ? <p>Loading..</p> : <ReactNode />}</div>;
  };
};

export default LoadingWrapper;
