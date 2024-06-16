import { Outlet } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";

function App() {
  return (
  <>
        <Outlet />
        <Home/>
      
  </>
  );
}

export default App;
