import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./contexts/themeContext";
import { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }

  }, [theme]);

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : 'country/:countryName',
      element : <SingleCountry/>
    }
  ]);

  return (
    <ThemeContext.Provider value={{ setTheme : setTheme }}>
      <RouterProvider router={router}/>
    </ThemeContext.Provider>
  );
}

export default App;
