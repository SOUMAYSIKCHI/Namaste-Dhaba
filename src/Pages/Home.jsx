import React, { useEffect, useState, useRef, useContext } from "react";
import { DATA } from "../DATA";
import Image from "../Components/Image";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Resturants from "../Components/Resturants";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { loading, setLoading,imgURL } = useContext(AppContext);
  const [onMind, setonMind] = useState([]);
  const scrollRef = useRef(null);
  function fetchData() {
    setLoading(true);
    try {
      setonMind(DATA.data.cards[0].card.card.gridElements.infoWithStyle.info);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -500, // Adjust the scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 500, // Adjust the scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div>
      {loading ? (
        <Shimming />
      ) : (
        <div className="w-4/5 mx-auto mt-3">
          {/* section -1  */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xl lg:text-2xl font-bold font-sans">
                What's on your mind?
              </p>
              <div className="flex items-center">
                <IoIosArrowDropleft
                  size={30}
                  className="cursor-pointer"
                  onClick={scrollLeft} // Scroll left on click
                />
                <IoIosArrowDropright
                  size={30}
                  className="cursor-pointer"
                  onClick={scrollRight} // Scroll right on click
                />
              </div>
            </div>
            <div
              className="overflow-x-auto scrollbar-hide"
              ref={scrollRef} // Attach the ref to the scrollable container
            >
              <div className="flex">
                {onMind.map((ele) => (
                  <Image key={ele.id} imgSrc={imgURL + ele.imageId} />
                ))}
              </div>
            </div>
          </div>

          {/* line */}
          <div className="bg-slate-200 mt-6 h-0.5 w-full"></div>
          {/* section - 2 */}

          <div>
            <Resturants />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
