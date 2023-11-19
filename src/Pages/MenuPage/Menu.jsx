import { Helmet } from "react-helmet-async";
import Cover from "../SharedPage/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../components/hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
//   console.log(" check offerd",offered);
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="our menu"
        description="Would you like to try a dish?"
      ></Cover>

      {/* main cover */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>

      {/* offered menu Items */}
      <MenuCategory items={offered} title="Offered"></MenuCategory>
      {/* desert menu Items */}
      <MenuCategory items={desserts} title="DESSERTS" img={dessertImg}></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="PIZZA" img={pizzaImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title="SALAD" img={saladImg}></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title="SOUPS" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
