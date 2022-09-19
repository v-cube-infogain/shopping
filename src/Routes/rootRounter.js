import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Pages/Login/login';
import Registration from '../Pages/Registartion/registartion';
import Dashboard from "../Pages/Dashbaord/dashbaord";
import Cart from '../Pages/Cart/cart';
import Header from '../Components/Header';
import Profile from '../Pages/Profile/profile';

const RootRouter = () => {
    return (
        <BrowserRouter basename="shopping">
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter;