import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItemCard from "../../SharedPage/MenuItemCard";

const PopularMenu = () => {
    // state declar
    const [menu, setMenu] = useState([]);

    // json data load
    useEffect(() => {
        fetch("menu.json").then((res) => {
            res.json().then((data) => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            });
        });
    }, []);


    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
             <div className="grid md:grid-cols-2 gap-10">
            {
               menu.map(item=><MenuItemCard key={item._id} item={item}></MenuItemCard>) 
            }
            </div>
        </section>
       
    );
};

export default PopularMenu;
