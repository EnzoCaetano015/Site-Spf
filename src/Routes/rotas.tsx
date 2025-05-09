import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "../Pages/Start";
import HomePage from "../Pages/Home";
import AdminLoginPage from "../Pages/Login";
import { AdminDashboardPage } from "../Pages/Admin";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/Home" element={<HomePage />} />
                <Route path="/Login" element={<AdminLoginPage />} />
                <Route path="/Admin" element={<AdminDashboardPage />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas