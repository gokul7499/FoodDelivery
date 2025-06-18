import React, { useContext } from "react";
import Nav from "../components/Nav";
import { categories } from "../components/Category";
import Card from "../components/Card";
import { food_items } from "./Food";
import { dataContext } from "../Context/UserContext";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import Card2 from "../components/Card2";
import { toast } from 'react-toastify';

function Home() {
  const { category, setCategory, input, showCart, setShowCart } =
    useContext(dataContext);

  // Filter by category
  function filter(selectedCategory) {
    if (selectedCategory === "All") {
      setCategory(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === selectedCategory
      );
      setCategory(newList);
    }
  }

  // Filter by search input
  const filteredItems = category.filter((item) =>
    item.food_name.toLowerCase().includes(input.toLowerCase())
  );

  // Redux cart items
  const items = useSelector((state) => state.cart);
  const subtotal = items.reduce((acc, item) => acc + item.qty * item.price, 0);
  const deliveryFee = 20;
  const taxes = Math.floor((subtotal * 0.5) / 100);
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {/* Category Filter */}
      {!input && (
        <div className="flex justify-center items-center flex-wrap gap-5 w-full py-6">
          {categories.map((item) => (
            <div
              key={item.name}
              onClick={() => filter(item.name)}
              className="w-[120px] h-[120px] rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-500 flex flex-col items-center justify-center text-[14px] font-semibold text-gray-600 gap-2 p-4 bg-white"
            >
              {item.image}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* Filtered Cards */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
            />
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-600">No items found.</p>
        )}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-full md:w-[40vw] transition-all overflow-auto flex flex-col items-center duration-1000 h-[100vh] fixed top-0 p-6 right-0 shadow-xl bg-white ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="w-full flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>
          <ImCross
            onClick={() => setShowCart(false)}
            className="w-[20px] h-[20px] cursor-pointer text-green-400"
          />
        </header>

        {/* Cart Items + Summary */}
        {items.length > 0 ? (
          <>
            <div className="w-full mt-9 flex flex-col gap-8">
              {items.map((item) => (
                <Card2
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  qty={item.qty}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>

            {/* Bill Summary */}
            <div className="w-full mt-7 border-t-2 border-gray-400 border-b-2 flex flex-col gap-2 p-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-md font-semibold text-gray-600">
                  Subtotal
                </span>
                <span className="text-green-400 text-lg font-semibold">
                  Rs {subtotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md font-semibold text-gray-600">
                  Delivery Fee
                </span>
                <span className="text-green-400 text-lg font-semibold">
                  Rs {deliveryFee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md font-semibold text-gray-600">
                  Taxes
                </span>
                <span className="text-green-400 text-lg font-semibold">
                  Rs {taxes}/-
                </span>
              </div>
            </div>

            {/* Total and Order Button */}
           {/* Total and Order Button */}
<div className="w-full flex flex-col items-center gap-4 p-9">
  <div className="w-full flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-600">
      Total
    </span>
    <span className="text-green-400 text-2xl font-semibold">
      Rs {total}/-
    </span>
  </div>

  <button className="cursor-pointer w-full p-4 bg-green-400 rounded-lg font-semibold text-white hover:bg-green-500 transition-all duration-500">
    Place Order
  </button>
</div>
</>
        ) : (
          <div className="text-green-400 text-lg text-center font-semibold mt-40">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
