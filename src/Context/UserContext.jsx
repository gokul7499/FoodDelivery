import React, { createContext, useState } from "react";
import { food_items } from "../Pages/Food";
export const dataContext = createContext();
function UserContext({ children }) {
  let [input, setInput] = useState("");
  const [category, setCategory] = useState(food_items);
  let [showCart ,setShowCart]=useState(false)
  let data = {
    input,
    setInput,
    category,
    setCategory,
    showCart,
    setShowCart
  };
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
    </div>
  );
}

export default UserContext;
