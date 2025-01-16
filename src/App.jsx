import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className="text-7xl bg-rose-500 p-8 text-center text-white">
        Vite + React
      </h1>
    </>
  );
}

export default App;
