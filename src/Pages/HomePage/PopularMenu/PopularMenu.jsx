import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItemCard from "../../SharedPage/MenuItemCard";
import useMenu from "../../../components/hooks/useMenu";

const PopularMenu = () => {
    // // state declar
    // const [menu, setMenu] = useState([]);

    // // json data load
    // useEffect(() => {
    //     fetch("menu.json").then((res) => {
    //         res.json().then((data) => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         });
    //     });
    // }, []);

    // 2nd way use custom hook
    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === "popular")


return (
    <section className="mb-12">
        <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                popular.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
            }
        </div>
        <div className="text-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Menu</button>
        </div>
    </section>

);
};

export default PopularMenu;
