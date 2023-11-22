import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/SharedPage/Footer";
import Header from "../Pages/SharedPage/Header";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter=location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;