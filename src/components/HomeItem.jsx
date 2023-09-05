import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

function HomeItem({ item }) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    function clickHandler(type) {
        if (type === 'remove') {
            dispatch(removeItem(item.id));
            toast.error('Removed Item');
        }
        else {
            dispatch(addItem(item));
            toast.success('Added Item');
        }
    }
    return (
        <div className=" group hover:scale-110 transition duration-300 ease-in flex flex-col 
        items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
        hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl ">
            <h1 className=" font-semibold text-[18px]">{item.title.slice(0, 14)}...</h1>
            <p className=" text-gray-500 text-[10px] break-words w-9/12 text-center">{item.description.slice(0, 50)}...</p>
            <img src={item.image} className=" h-[180px] w-[126px]" alt='item-image' />
            <div className="flex justify-between w-full">
                <p className=" text-green-500 font-bold">$ {item.price}</p>
                {
                    cart.find(elem => elem.id === item.id) ?
                        (
                            <button
                                className="group-hover:bg-gray-700 
                                group-hover:text-white transition duration-300 
                                ease-in text-gray-700 border-2 border-gray-700 
                                rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
                                onClick={() => clickHandler('remove')}>
                                Remove From Cart
                            </button>
                        ) :
                        (
                            <button
                            className="group-hover:bg-gray-700 
                                group-hover:text-white transition duration-300 
                                ease-in text-gray-700 border-2 border-gray-700 
                                rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
                                onClick={() => clickHandler('add')}>
                                Add to Cart
                            </button>
                        )
                }
            </div>
        </div>
    );
}

export default HomeItem;