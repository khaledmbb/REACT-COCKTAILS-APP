import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="red">
        <p>Page Not Found 404</p>
      </div>
      <button type="button" className="error-btn">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default Error;
