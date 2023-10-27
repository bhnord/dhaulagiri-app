import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SiteManagerPage from "./pages/sitemanager/SiteManagerPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitemanager" element={<SiteManagerPage />} />
      </Routes>
    </div>
  );
}

export default App;
