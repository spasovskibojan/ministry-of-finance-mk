import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default MainLayout;
