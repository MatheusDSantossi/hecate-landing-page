import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";

//  TODO: Add a loading overlay in the main page

function App() {

  return (
    <div className="w-full bg-primary-dark">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
