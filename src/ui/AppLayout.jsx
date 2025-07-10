import CartOverview from "../features/cart/CartOverView";
import Header from "./Header";
import Loader from "./Loader";
import { Outlet,useNavigation } from "react-router-dom";

function AppLayout(props) {
    const navigation= useNavigation();
    const isLoading= navigation.state === "loading";

    return (
        <div className=" grid bg-stone-200 ">
            {isLoading && <Loader/>}
             
            <Header/>
            <div >
                <main>
                
                <Outlet/>
            </main>
            </div>
            
            <CartOverview/>
        </div>
    );
}

export default AppLayout;