import React, { useEffect } from "react";
import { useState,useContext } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCart, updateCart,decrementCart } from "../Redux/Slices/cartSlice";
import { AppContext } from "../Context/AppContext";


const imgURL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const Card = ({ data }) => {
    const { info } = data;
    let cuisines = info.cuisines.slice(0, 5);
    const dispatch = useDispatch();
    const { cart } = useSelector(state=>state);
    const [idOfCart,setIdOfCart] = useState([]);
    const {totalProduct,setTotalProduct} = useContext(AppContext);

    function addHandler(id){
        dispatch(addToCart(id));
        setIdOfCart((prev)=>{
           return [...prev,id]
        })
        setTotalProduct((prev)=>prev+1);
        // console.log(cart);
    }

    function updateHandler(id){
        dispatch(updateCart(id));
        quantity(id);
        setTotalProduct((prev)=>prev+1);
        // console.log(cart);
    }

    function decrement(id){
        dispatch(decrementCart(id));
        let qty = quantity(id);
        if(qty==1){
            setIdOfCart((prev)=>{
                return prev.filter((ele)=>{ele.id!==id})
            })
        }
        if(totalProduct>=1)
          setTotalProduct((prev)=>prev-1);
      
    }

    const quantity = (id)=>{
        if(idOfCart.includes(id)){
            const item = cart.find((ele) => ele.id === id);
            return item ? item.qty : 0;
        }else{
            return 0;
        }
    }
    useEffect(()=>{
        quantity();
    },[cart])


  return (
    <div className="w-[244px] drop-shadow-2xl relative  hover:scale-95 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img
          className="w-[244px] h-[146px]  object-cover rounded-md shadow-lg"
          src={imgURL + info.cloudinaryImageId}
          alt={info.name}
        />
        <div className="absolute top-[110px] left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent  rounded-md shadow-lg"></div>
        <p className="absolute left-2 top-[120px] font-bold text-white text-xl text-wrap">
          {info.aggregatedDiscountInfoV3?.header}{" "}
          {info.aggregatedDiscountInfoV3?.subHeader}
        </p>
      </div>
      <h1 className="font-bold mt-2 text-xl">{info.name}</h1>
      <div className="flex items-center gap-1">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="StoreRating20_svg__paint0_linear_32982_71567"
              x1="10"
              y1="1"
              x2="10"
              y2="19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#21973B" />
            </linearGradient>
          </defs>
          <circle
            cx="10"
            cy="10"
            r="9"
            fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
          ></circle>
          <path
            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
            fill="white"
          ></path>
        </svg>
        <span className="font-bold">{info.avgRating}</span>
        <span> • </span>
        <span className="font-semibold">{info.sla.slaString}</span>
      </div>
      <div>
        <p className="font-medium text-gray-500">{cuisines.join(", ")}</p>
      </div>
      <div>
        {
            idOfCart.includes(info.id)?(
                <div className="flex gap-2 w-[90px] text-[20px]  px-[10px] py-[4px] rounded-md text-white font-bold bg-[#ff5200] shadow-2xl">
                <button onClick={()=>{decrement(info.id)}} className="hover:bg-orange-600 active:bg-orange-600">-</button>
                <p className="px-2">{quantity(info.id)}</p>
                <button onClick={()=>{updateHandler(info.id)}} >+</button>
              </div> 
            ):(
                <button onClick={()=>{addHandler(info.id)}}
                className="border-2  border-[#ff5200] text-[#ff5200] font-semibold text-[16px] text-center rounded-md cursor-pointer  px-[10px] py-[4px]">
                    Add
               </button>
            )
        }
      
      
      </div>
     

    </div>
  );
};

export default Card;
