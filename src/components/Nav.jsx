import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Pages/Food";
import { useSelector } from "react-redux";

function Nav() {
  const { input, setInput, category, setCategory, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    const filteredItems = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCategory(filteredItems);
  }, [input]);

    let items=useSelector(state=>state.cart);
console.log(items);

  return (
    <div className="w-full flex justify-between items-center px-5 py-4 md:px-8">
      
      {/* Logo */}
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>

      {/* Search */}
      <div className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-3 rounded-md shadow-md md:w-[70%]">
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3 w-full">
          <IoMdSearch className="text-green-500 w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full outline-none text-[16px] md:text-[20px]"
          />
        </form>
      </div>

      {/* Cart */}
      <div
        className="w-[60px] relative h-[60px] bg-white flex justify-center items-center rounded-md shadow-md cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">{items.length}</span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
