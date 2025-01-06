import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./Context/AppContext.jsx";
import { store } from "./Redux/store.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </AppContextProvider>
  </BrowserRouter>

);
