import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>User Profile Card</h2>
      <UserCard
        name="B. Manoj Kumar"
        age={19}
        bio="Hello My Self Manoj(2400090001)"
      />
    </div>
  );
}

export default App;
