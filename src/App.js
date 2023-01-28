import "./App.css";
import { Routes, Route } from "react-router-dom";
import Osaka from "./pages/osaka";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Osaka />} />
    </Routes>
  );
}

export default App;
