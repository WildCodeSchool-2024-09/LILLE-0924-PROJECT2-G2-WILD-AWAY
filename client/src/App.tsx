import "./App.css";

import NavBar from "./components/NavBar/NavBar";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>

      <NavBar />

      <Routes>
        <Route path="/" element={<App />} />
      </Routes>

    </>
  );
}

export default App;
