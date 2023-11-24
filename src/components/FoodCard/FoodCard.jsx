const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const handleAddToCart = food => {
        console.log(food);
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
                        <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b=a">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
