import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()


    const handleAddToCart = food => {
        if (user && user.email) {
            // send cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email:user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem).then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      }); 
                }
            })
        }
        Swal.fire({
            title: "You are not login",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
        }).then((result) => {
            if (result.isConfirmed) {
                //    send the user to the login page
                navigate("/login", { state: { from: location } })
            }
        });
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} />
            </figure>
            <p className="absolute right-0 bg-slate-900 mr-4 mt-4 px-4 text-white">
                $ {price}
            </p>
            <div className="card-body ">
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b=a">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
