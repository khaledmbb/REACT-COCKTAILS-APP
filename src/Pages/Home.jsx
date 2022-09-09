import React from "react";
import CocktailsList from "../Components/CocktailsList";
import Form from "../Components/Form";

const Home = () => {
  return (
    <div className="cocktails">
      <Form />
      <CocktailsList />
    </div>
  );
};

export default Home;
