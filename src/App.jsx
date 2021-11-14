import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Registration from "./views/Registration";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleReg = () => {
    //axios code
  };

  const changeState = (state) => {
    setIsEnabled(state);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isEnabled ? (
            <Registration handleReg={handleReg} changeState={changeState} />
          ) : (
            <Login changeState={changeState} />
          )
        }
      />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
