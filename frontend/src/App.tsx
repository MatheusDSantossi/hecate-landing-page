import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
