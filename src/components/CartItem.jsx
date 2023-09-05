import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";
import { AiFillDelete } from 'react-icons/ai'


function CartItem({ item }) {
    const dispatch = useDispatch();
    function clickHandler() {
        dispatch(removeItem(item.id));
        toast.success('Removed Item');
    }
    return (
        <div className=" flex px-2 py-6 justify-center gap-10 
        items-center border-t-2 border-black first-of-type:border-none cart-item">
            <img src={item.image} alt='item-image' className=" h-6/6 w-3/12" />
            <div className="flex flex-col w-6/12 gap-5">
                <h1 className=" text-[20px] font-semibold text-gray-600">{item.title}</h1>
                <p>{item.description.substring(0, 126)}...</p>
                <div className="flex justify-between w-full items-center">
                    <p className=" text-green-500 font-bold text-xl">${item.price}</p>
                    <button
                        onClick={clickHandler}
                        className=" bg-red-300 text-red-800 hover:bg-red-600 hover:text-white
                        rounded-full h-[35px] w-[35px] flex justify-center items-center">
                        <AiFillDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CartItem;