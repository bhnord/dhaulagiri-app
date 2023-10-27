import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SiteManagerPage from "./pages/SiteManagerPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitemanager" element={<SiteManagerPage />} />
      </Routes>
    </div>
  );
}

export default App;
