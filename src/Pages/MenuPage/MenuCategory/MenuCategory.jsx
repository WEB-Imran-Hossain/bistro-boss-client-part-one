import Cover from "../../SharedPage/Cover/Cover";
import MenuItem from "../../SharedPage/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
       { title && 
        <Cover img={img} title={title} description="Would you like to try a dish?"></Cover>
       }
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {
        items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))
        }
      </div>
    </div>
  );
};

export default MenuCategory;
