import React from "react";

import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
function Card({ id, name, image, price, type }) {
  let dispatch = useDispatch();
  return (
    <div
      className="w-[250px] h-[340px] bg-white p-3 
    rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300"
    >
      <div className="w-full h-[75%] overflow-hidden rounded-lg">
        <img
          src={image}
          alt="image1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="text-xl font-semibold">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-green-500 text-lg font-bold">Rs {price}/-</div>
        <div className="flex items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <button
        onClick={() =>
      {    dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          );
          toast.success("Item Added to Cart.")}
        }
        className=" cursor-pointer w-full p-3 bg-green-400 rounded-lg font-semibold text-white hover:bg-green-400 transition-all duration-500"
      >
        Add To Dish
      </button>
    </div>
  );
}

export default Card;
