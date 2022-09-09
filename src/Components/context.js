import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false),
    [searchN, setSearchN] = useState("a"),
    [cocktailsL, setCocktailsL] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchN}`);
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        const list = drinks.map(
          ({ idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass }) => {
            return {
              id: idDrink,
              name: strDrink,
              info: strAlcoholic,
              img: strDrinkThumb,
              glass: strGlass,
            };
          }
        );
        setCocktailsL(list);
      } else {
        setCocktailsL([]);
      }
      setLoading(false);
    } catch (error) {
      console.log("no response");
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, [searchN]);

  return (
    <AppContext.Provider
      value={{ loading, searchN, cocktailsL, setSearchN, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
