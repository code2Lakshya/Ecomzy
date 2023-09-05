import HomeItem from '../components/HomeItem';
import {products} from '../data'
import '../styles/homePage.css'

function HomePage(){
    return(
        <div className=' w-screen max-w-[1200px] mx-auto px-4 gap-6 py-14 home'>
             {products.map((item)=>{
                return <HomeItem item={item} key={item.id}></HomeItem>
             })}
        </div>
    );
}

export default HomePage;