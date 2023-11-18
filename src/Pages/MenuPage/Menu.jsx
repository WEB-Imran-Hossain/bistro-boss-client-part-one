import { Helmet } from "react-helmet-async";
import Cover from "../SharedPage/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../HomePage/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | MENU</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" description="Would you like to try a dish?"></Cover>
             <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu" description="Would you like to try a dish?"></Cover>
             <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu" description="Would you like to try a dish?"></Cover>
             <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;