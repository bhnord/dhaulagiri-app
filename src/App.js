import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SiteManagerPage from "./pages/sitemanager/SiteManagerPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import StoreManagerPage from "./pages/storemanager/StoreManagerPage";
import { generateStoreInventory } from "./api/api-client";
import CreateStorePage from "./pages/createstore/CreateStorePage";

function App() {

  console.log(generateStoreInventory("Sam Store"))

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitemanager" element={<SiteManagerPage />} />
        <Route path="/storemanager" element={<StoreManagerPage />} />
        <Route path="/createstore" element={<CreateStorePage />} />
      </Routes>
    </div>
  );
}

export default App;
