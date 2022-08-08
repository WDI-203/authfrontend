import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import NavBar from "./Components/NavBar";

import { useAuth } from "./Hooks/Auth";

import "./App.css";

const AdminLayout = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { verifyAdmin } = useAuth();

  useEffect(() => {
    const isAdminCheck = async () => {
      const isAdmin = await verifyAdmin();
      setIsAdmin(isAdmin);
    };
    isAdminCheck();
  }, []); // This useEffect will trigger once when the user tries to visit /admin

  return (
    <div>
      {!isAdmin && <h3>You Must Be An Admin To View This Page. Sorry.</h3>}
      {isAdmin && <Outlet />}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<h1>Admin Page</h1>} />
            </Route>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
