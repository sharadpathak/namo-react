import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="heading">Namo React</h1>;
};
const HeadingComponent = () => {
  return (
    <React.Fragment>
      <div>
        <Title />
        {Title()}
        <p>lorem ipsum </p>
      </div>
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
