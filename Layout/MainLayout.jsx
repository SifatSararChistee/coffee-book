import Footer from "../src/Components/Footer";
import Navbar from "../src/Components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    
    );
};

export default MainLayout;