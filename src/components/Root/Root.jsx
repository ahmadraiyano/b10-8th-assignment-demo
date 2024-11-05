import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {

    const selectedWindow = () => {
        document.getElementById("home").classList.add("hidden");
    }

    return (
        <div className="bg-gray-100">
            <div className="hidden"><NavBar></NavBar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;