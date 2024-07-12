import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;
