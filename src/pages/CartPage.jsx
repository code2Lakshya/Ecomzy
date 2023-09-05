import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


function CartPage() {
    const cart = useSelector(state => state.cart);
    console.log(cart);
    return (
        <div className="flex justify-center my-10 w-screen max-w-[1100px] mx-auto px-5">
            {cart.length === 0 ?
                (
                    <div className="flex flex-col w-full h-screen gap-4 items-center justify-center">
                        <p className=" text-lg font-semibold">Your Cart is Empty !</p>
                        <Link to='/'>
                            <button
                                className=" px-[40px] py-[10px] text-lg border-solid border-[2px]
                                 text-white bg-green-600 rounded-xl hover:text-green-600 hover:bg-white
                                 hover:border-solid hover:border-[2px] hover:border-green-400 transition-colors duration-[0.5s]"
                            >
                                Shop Now
                            </button>
                        </Link>
                    </div>
                ) :
                (
                    <div className="flex justify-between cart">
                        <div className=" w-7/12">
                            {cart.map((item) => {
                                return <CartItem item={item} key={item.id}></CartItem>
                            })}
                        </div>
                        <div className="w-4/12 flex flex-col justify-between py-10">
                            <div>
                                <p className=" text-green-700 font-semibold text-3xl uppercase">Your Cart</p>
                                <p className=" text-green-700 font-semibold uppercase text-5xl ">Summary</p>
                                <p className=" mt-[30px] text-xl font-semibold text-gray-600">Total Items: {cart.length}</p>
                            </div>
                            <div>
                                <p
                                    className=" mt-[30px] text-xl font-semibold text-gray-600">
                                    Total Amount :
                                    <span
                                        className=" font-bold text-black"
                                    >$ {cart.reduce((acc, e) => acc + e.price, 0)}</span></p>
                                <button
                                    className="w-full py-3 mt-[20px] rounded-lg
                                             bg-green-700 text-white font-bold border-2 hover:border-green-700
                                             hover:bg-white hover:text-green-700 transition-colors duration-[0.5s]"
                                >
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default CartPage;