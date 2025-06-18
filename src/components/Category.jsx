import { FaBorderAll } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
export const categories = [
  {
    id: 1,
    name: "All",
    image: <FaBorderAll className="w-[60px] h-[60px] text-green-500"/>,
  },
  {
    id: 2,
    name: "breakfast",
    image: <MdFreeBreakfast className="w-[60px] h-[60px] text-green-500"/>,
  },
  {
    id: 3,
    name: "soups",
    image: <TbSoupFilled className="w-[60px] h-[60px] text-green-500"/>,
  },
  {
    id: 4,
    name: "pasta",
    image: <CiBowlNoodles className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 5,
    name: "main course",
    image: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-500"/>,
  },
  {
    id: 6,
    name: "pizza",
    image: <GiFullPizza className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 7,
    name: "burger",
    image: <GiHamburger className="w-[60px] h-[60px] text-green-500"/>,
  },
];
