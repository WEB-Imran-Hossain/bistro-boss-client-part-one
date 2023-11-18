import Category from "../Category/Category";
import Banner from "./Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;