import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SiteManagerPage from "./pages/sitemanager/SiteManagerPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import StoreOwnerPage from "./pages/storemanager/StoreOwnerPage";
import CreateStorePage from "./pages/createstore/CreateStorePage";
import LoginPage from "./pages/login/LoginPage";
import CustomerPage from "./pages/customer/CustomerPage";

function App() {

  // console.log(api.generateStoreInventory("Sam Store"))

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitemanager" element={<SiteManagerPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/storeowner" element={<StoreOwnerPage />} />
        <Route path="/createstore" element={<CreateStorePage />} />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
