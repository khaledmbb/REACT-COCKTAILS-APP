import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleCocktail from "./Components/SingleCocktail";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          <span>/</span> Cocktails <span>/</span>
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
