import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username= useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16  ">
      <h1 className=" md:text-3xl mb-8 text-xl font-semibold 
      text-stone-700 ">
        <p className=" text-stone-700 text-4xl font-serif">Delicious pizza Bazar.</p>
        <br />
        <span className= "italic text-yellow-700">
          Straight out of the oven, straight to you.
        </span>
       </h1> 
       
        {username === '' ? (
          <CreateUser/>
        ) : (
          <Button to="/menu" type='primary'>
            Continue ordering, {username}
            </Button>
        )}
      
    </div>
  );
}

export default Home; 
