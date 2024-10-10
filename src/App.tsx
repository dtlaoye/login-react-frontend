import React, { useState } from "react";
import ToggleLogin from "./pages/ToggleLogin";
import Homepage from "./pages/Homepage";
import "./styles/App.css";

function App() {
  const [parentValue, setParentValue] = useState<boolean>(false);

  const handleChildValue = (valueFromChild: boolean) => {
    setParentValue(valueFromChild);
  };
  return (
    <div className="app">
      <ToggleLogin />
    </div>
  );
}

export default App;
