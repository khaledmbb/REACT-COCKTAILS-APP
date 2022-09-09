import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./context";
import Loader from "./Loader";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCocktail = () => {
  const { id } = useParams();
  const { setLoading, loading } = useGlobalContext();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchDrink() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        if (data.drinks) {
          setCocktail(
            data.drinks.map(
              ({
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
                strCategory,
                strInstructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
              }) => ({
                name: strDrink,
                info: strAlcoholic,
                img: strDrinkThumb,
                glass: strGlass,
                category: strCategory,
                instructions: strInstructions,
                ingredient: [
                  strIngredient1,
                  strIngredient2,
                  strIngredient3,
                  strIngredient4,
                ],
              })
            )
          );
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log("no data");
      }
    }
    fetchDrink();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  if (!cocktail) {
    return (
      <div className="red">
        <p>No Cocktail To Display</p>
      </div>
    );
  }

  return (
    <div className="cocktail-info">
      <button>
        <Link to="/">Back Home</Link>
      </button>
      {/* <h3>{cocktail[0].name}</h3> */}
      <div className="container">
        <div className="image">
          <img src={cocktail[0].img} alt={cocktail[0].name} />
        </div>
        <div className="list">
          <ul>
            <li>
              <span>Name :</span> {cocktail[0].name}
            </li>
            <li>
              <span>Category :</span> {cocktail[0].category}
            </li>
            <li>
              <span>Info :</span> {cocktail[0].info}
            </li>
            <li>
              <span>Glass :</span> {cocktail[0].glass}
            </li>
            <li>
              <span>Instructons :</span>{" "}
              {cocktail[0].instructions.slice(0, 200)}
            </li>
            <li>
              <span>Ingredients :</span>{" "}
              {cocktail[0].ingredient.map((el) => `${el}, `)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
