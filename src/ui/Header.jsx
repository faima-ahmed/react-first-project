import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
    return (
        <header className="  h-[500] sm:px-6 flex items-center justify-between border-b-2 border-black-500 px-3 py-2 bg-yellow-500 uppercase font-pizza">
            <Link to="/" className=" mb-7 tracking-widest text-black hover:text-white underline">Online Delivery Pizza Co.</Link>
            <SearchOrder/>
            <UserName/>
            
            
        </header>
    );
}

export default Header;