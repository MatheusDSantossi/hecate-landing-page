import "./App.css";
import Navbar from "./components/Navbar";

//  TODO: Add a loading overlay in the main page

function App() {

  return (
    <div className="w-full">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
