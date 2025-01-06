import { createContext, useRef, useState } from "react";
import { DATA } from "../DATA";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [allitems, setAllItems] = useState(DATA.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  const [loading, setLoading] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0);
  const imgURL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  

  const value = {
    loading,
    setLoading,
    allitems,
    setAllItems,
    imgURL,
    totalProduct,
    setTotalProduct,

  };

  return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>;
}
