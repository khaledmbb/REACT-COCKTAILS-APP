import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Form = () => {
  const { setSearchN } = useGlobalContext();
  const formInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    formInput.current.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={formInput}
        type="text"
        onChange={(e) => setSearchN(e.target.value)}
        placeholder="Search For Your Favorite Cocktail"
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Form;
