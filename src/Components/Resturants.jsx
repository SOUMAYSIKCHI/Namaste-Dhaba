import React, { useContext, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AppContext } from "../Context/AppContext";
import Shimming from "../Components/Shimming";
import Card from "../Components/Card"
import { RxCross2 } from "react-icons/rx";

const Resturants = () => {
  const [searched,setSearched] = useState('');
  const {allitems, loading } = useContext(AppContext);
  const [filterItems, setfilterItems] = useState(allitems);
  const [selectedFilters,setSelectedFilters] = useState([]);
  const filters = ["Ratings 4.0+","Fast Delivery","Ratings 4.5+"];

  function handleFilterButton(category){
    if(selectedFilters.includes(category)){
        setSelectedFilters((prev)=>{
          const newFilters = prev.filter((ele)=>(ele!==category))
          return newFilters;
        })
    }else{
      setSelectedFilters((prev)=>{
        const newFilters = [...prev, category];
          return newFilters;
      })
    }
  }

  function fetchSortedData() {
    let newFiltered = [...allitems];  // Make a copy of the allitems array to avoid mutating the original
    
    // Filter by ratings first, if applicable
    if (selectedFilters.includes("Ratings 4.0+")) {
      newFiltered = newFiltered.filter((ele) => ele.info.avgRating >= 4.0);
    }
    
    if (selectedFilters.includes("Ratings 4.5+")) {
      newFiltered = newFiltered.filter((ele) => ele.info.avgRating >= 4.5);
    }
  
    // Apply "Fast Delivery" filter and sort if needed
    if (selectedFilters.includes("Fast Delivery")) {
      newFiltered.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
    }
  
    // Set the filtered and sorted items
    setfilterItems(newFiltered);
  }
  

  useEffect(() => {
    if(selectedFilters.length>0){
        fetchSortedData();
    }else{
      setfilterItems(allitems);
    }
  }, [selectedFilters]);

  function changeHandler(e){
     let ch = e.target.value.toLowerCase();
     
     setSearched(ch);
     console.log(searched);
      const newFiltered = allitems.filter((ele)=>{
        let temp = ele.info.name.toLowerCase();
        if(temp.startsWith(searched) || temp.includes(searched) ){
          return ele;
        }
        let cuisines  = ele.info.cuisines;
        // if atleast 1 matches in cusine return true 
        //return true to filter arr means include that ele
        const cuisineMatch = cuisines.some((item) => 
          item.toLowerCase().startsWith(searched) || item.toLowerCase().includes(searched)
        );
        
    
        return cuisineMatch;

      })

      setfilterItems(newFiltered);
  }

  return (
    <div>
      {loading ? (
        <div>
          <Shimming />
        </div>
      ) : (
        <div className="mt-[20px]">
          <div>
            <p className="text-xl lg:text-2xl font-bold font-sans">
              Restaurants with online food delivery
            </p>
          </div>
          <div className="mt-4 relative flex flex-wrap items-center gap-5">
            <input
            onChange={(e)=>{changeHandler(e)}}
              type="search"
              value={searched}
              placeholder="Search for restaurants and food"
              className="w-full text-[12px] h-[36px] mr-[1rem]  lg:w-2/5 lg:text-xl lg:h-[46px] border-2 text-black px-4 border-gray-900 rounded-sm focus:outline-none "
            />
            <div className="flex items-center flex-wrap gap-3">
            {
              filters.map((ele,idx)=>(
                <div className="" key={idx}>
                <button
                  onClick={()=>handleFilterButton(ele)}
                  className={`${selectedFilters.includes(ele)?"px-6 flex justify-between bg-gray-100 font-bold text-[16px]":" px-4 text-[rgba(2,6,12,0.89)] text-[14px] fonr-medium"} cursor-pointer shadow-[0px_2px_12px_rgba(2,6,12,0.04)] py-2 leading-4 tracking-tight border-2 border-gray-600 rounded-2xl  font-sans `}>
                    {ele} {selectedFilters.includes(ele) && (
                      <RxCross2 className="ml-2 cursor-pointer " size={18} onClick={() => handleFilterButton(ele)} />
                    )}
                  </button>
                </div>
              ))
            }
            </div>
            
            {/* <IoIosSearch className="absolute right-0" /> */}
          </div>

          <div className="mt-5 grid   grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-[40px] lg:grid-cols-4  mb-10">
            {
              filterItems.map((ele) => {
                return <Card data={ele} key={ele.info.id} />;
              })
            }
          </div>



        </div>
      )}
    </div>
  );
};

export default Resturants;
