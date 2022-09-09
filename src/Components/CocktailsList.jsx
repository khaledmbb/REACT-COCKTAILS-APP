import { useGlobalContext } from "./context";
import Loader from "./Loader";
import Cocktail from "./Cocktail";
const Cocktails = () => {
  const { loading, cocktailsL } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }
  if (cocktailsL.length < 1) {
    return (
      <div className="red">
        <p>No Cocktails Matched Your Search</p>
      </div>
    );
  }
  return (
    <div className="cocktails-list">
      <ul>
        {cocktailsL.map((item, idx) => (
          <li key={idx}>
            <Cocktail {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cocktails;
