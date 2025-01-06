import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const CartItems = ({ ele }) => {
  const { imgURL } = useContext(AppContext);

  return (
    <div className="mb-[10px] flex justify-between items-center">
      <div className="flex items-center gap-3 ">
        <img
          className="rounded-md object-contain h-[46px] lg:h-[80px] "
          src={imgURL + ele.info.cloudinaryImageId}
          alt=""
        />
        <div>
          <p className=" font-medium">{ele.info.name}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-2  text-[12px] lg:text-[16px]  px-[10px] py-[4px] rounded-md text-white font-bold bg-[#ff5200] shadow-2xl">
          <p className="px-2">{ele.qty} Selected</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
