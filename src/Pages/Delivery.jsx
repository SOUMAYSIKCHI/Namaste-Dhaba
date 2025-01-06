import React from "react";
import { Link, useNavigate } from "react-router-dom";
import emptyCart from "../assets/emptyCart.avif";

const Delivery = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <img src={emptyCart} width={400} alt="" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-500 text-center">
                Congrats !! Your Order has been placed!!Arriving in short....
              </div>
              <div className="font-thin text-center ">
                You can go to home page to place more Orders
              </div>
            </div>
            <div>
              <Link to="/">
                <p className="bg-[#ff5200] font-semibold text-[16px] text-center cursor-pointer text-white px-[20px] py-[11px]">
                  PLACE ANOTHER ORDER
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
