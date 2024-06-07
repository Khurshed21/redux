import { useState } from "react";
import Switcher from "./Components/Switcher";
import { useTranslation } from "react-i18next";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Pakupat from "./pages/pakupat/Pakupat";
import Price from './pages/prices/Prices'
import Raspradaj from "./pages/raspradaj/Raspradaj";
import Help from "./pages/Help/Help";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {

  // let [age, setAge] = useState(localStorage.getItem('i18nextLng'));
  // let { t, i18n } = useTranslation();
  
  // console.log(age);
  // function handleClick(event) {
  //   setAge(event.target.value)
  //   i18n.changeLanguage(event.target.value)
  // }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/pakupat",
          element: <Pakupat/>,
        },
        {
          path: "/prices",
          element: <Price/>,
        },
        {
          path: "/raspradaj",
          element: <Raspradaj/>,
        },
        {
          path: "/help",
          element: <Help/>,
        },
      ],
    },
  ]);




  return (

      <div>
                    <RouterProvider router={router} />
      </div>
       
    
  );
};

export default App;
