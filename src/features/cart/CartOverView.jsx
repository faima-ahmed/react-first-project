import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity= useSelector(getTotalCartQuantity);
  const totalCartPrice= useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;
  return (
    <div className= "shadow-2xl flex items-center justify-between bg-gray-700 p-3 uppercase italic sm:px-4 text-sm md:text-base text-stone-200">
      <p className="text-stone-300 space-x-4 font-semibold">
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
