import React from "react";
import image1 from "../assets/image1.avif";
import { IoTrashBinSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
function Card2({ name, id, price, image, qty }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] shadow-lg p-2  flex justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[50%] h-full overflow-hidden ">
          <img src={image} alt="image1" className="object-cover rounded-lg" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3">
          <div className="text-[15px] text-gray-600 font-semibold">{name}</div>
          <div className="w-[100px] h-[50px]  text-xl rounded-lg overflow-hidden font-semibold border-2 border-green-400 shadow-lg bg-slate-200 flex  ">
            <button 
              onClick={() => {
               qty>1? dispatch(DecrementQty(id)):1;
              }}
            className="w-[30%] h-full text-green-400 bg-white flex justify-center items-center hover:bg-gray-200">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 text-green-400 flex justify-center items-center  ">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white  text-green-400 flex justify-center items-center hover:bg-gray-200"
              onClick={() => {
                dispatch(IncrementQty(id));
              }}
            >
              +
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <div className=" flex flex-col jusstify-start items-end gap-6">
        {/* <span className="text-lg text-gray-600 font-semibold">Qty: {qty}</span> */}
        <span className="text-xl text-green-400 font-semibold">
          Rs {price} /-
        </span>
       <IoTrashBinSharp
  onClick={() => {
    dispatch(RemoveItem(id));
    toast("Item Removed From Cart.", { type: "error" }); // optional config
  }}
  className="w-[30px] cursor-pointer h-[30px] text-red-400"
/>

      </div>
    </div>
  );
}

export default Card2;
