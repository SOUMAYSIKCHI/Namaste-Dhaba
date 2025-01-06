import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLongArrowAltLeft } from "react-icons/fa";
import emptyCart from "../assets/emptyCart.avif";
import { AppContext } from "../Context/AppContext";
import CartItems from "../Components/CartItems";
import { removeAllCart } from "../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { allitems,totalProduct,setTotalProduct } = useContext(AppContext);

  function goBack() {
    navigate(-1);
  }
  function handleSuccess(){
    setTotalProduct(0);
    dispatch(removeAllCart());
    combinedArr();
  }

  const combinedArr = cart.map((ele) => {
    const details = allitems.find((item) => {
      return item.info.id === ele.id;
    });
    return { ...details, qty: ele.qty };
  });

   console.log(combinedArr);

  return (
    <>
      {cart.length == 0 ? (
        <div className="w-4/5 mx-auto mt-5">
          <div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div>
                <img src={emptyCart} width={400} alt="" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-500 text-center">
                  Your cart is empty
                </div>
                <div className="font-thin ">
                  You can go to home page to view more restaurants
                </div>
              </div>
              <div>
                <Link to="/">
                  <p className="bg-[#ff5200] font-semibold text-[16px] text-center cursor-pointer text-white px-[20px] py-[11px]">
                    SEE RESTAURANTS NEAR YOU
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-4/5 mx-auto">
          <div className="border-l-2 border-r-2 bg-[#f0f0f5]">
            <div className="flex items-center rounded-b-2xl bg-white p-3 gap-4 font-bold text-xl lg:text-2xl">
              <FaLongArrowAltLeft
                lg:size={40}
                className="cursor-pointer text-xl "
                onClick={goBack}
              />
              Your Cart
            </div>

            <div className="mt-4 p-2 ">
              <p className="font-bold text-[16px] lg:text-[20px]">Review your order</p>

              <div className="mt-4 rounded-2xl bg-white p-3  ">
                <div className=" w-full flex justify-between flex-wrap">
                  <p className="text-wrap font-semibold">
                    {" "}
                    Delivery in 6 Minutes
                  </p>
                  <p>{totalProduct} items</p>
                </div>
                <div className=" mt-4 w-full h-1 border-t-2 border-dotted border-gray-400"></div>
                <div className="">
                  {combinedArr.map((ele, idx) => {
                    return <CartItems ele={ele} key={idx} />;
                  })}
                </div>
              </div>

              {/* missed */}
              <div className="mt-5 rounded-2xl bg-white p-3 gap-4 ">
                <p className="text-center font-bold">
                  Missed Something ?{" "}
                  <Link to="/">
                    <span className="font-bold text-[#ff5200]">
                      Add more items
                    </span>
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="mt-4 p-2 rounded-t-2xl  bg-[#FFF0CD]">
              <p className="font-bold">To Pay : Free( On First Order)</p>
            </div>
            <div className="bg-[#ff5200] font-semibold text-[20px] text-center cursor-pointer rounded-2xl  text-white px-[20px] py-[11px]">
                <Link to="/success"> <button onClick={handleSuccess}> Proceed with Delivery</button> </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
