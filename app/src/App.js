import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "89f061a3";
  const YOUR_APP_KEY = "72c4e24935066c6e03e1e0ab51b6c5ea";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div className="row">
        {data.length > 1 ? data.map((item) => (
          <div className="col-md-4">
            <div className="card">
              <img
                src={item.recipe.image}
                className="card-img-top"
                alt={item.recipe.label}
              />
              <div className="card-body">
                <h5 className="card-title">{item.recipe.label}</h5>
                <p className="card-text">
                  {item.recipe.ingredientLines}
                </p>
              </div>
            </div>
          </div>
        )):null}
      </div>

      
    </div>
  );
};

export default App;
