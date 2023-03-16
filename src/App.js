import logo from "./logo.svg";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Greeting />
    </div>
  );
}

export default App;
