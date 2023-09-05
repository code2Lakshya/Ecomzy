import { Link, Outlet } from 'react-router-dom';
import logo from '../logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux';

function Header() {
    const cart = (useSelector(state => state.cart));
    return (
        <div>
            <div className='py-4 bg-slate-900 text-white '>
                <div className='flex w-screen max-w-[1200px] mx-auto justify-between items-center px-4'>
                    <Link to='/'><img src={logo} height='100' width='150' alt='logo' /></Link>
                    <div className='flex gap-4 items-center relative'>
                        <Link to='/'><p className='hover:text-green-400'>Home</p></Link>
                        {cart.length > 0 &&
                            <div
                                className='absolute right-[-10px] top-0 bg-green-500 w-[20px] 
                                    rounded-full h-[20px] grid place-items-center text-[15px]
                                     animate-bounce'
                            >
                                {cart.length}</div>}
                        <Link to='/cart'><AiOutlineShoppingCart className='h-[40px] w-[30px] hover:text-green-400' /></Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Header;