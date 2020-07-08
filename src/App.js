import React, { useState, useEffect } from 'react';
import './App.css';

//import components
import Recipe from "./components/Recipe/recipe";

const App = () =>{

const APP_ID = "3578d2ac"
const APP_KEY = "2449367f68961da76db719b703561cfd"

const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState("")
const [query, setQuery] = useState("chicken")
const [isFailed, setIsFailed] = useState(false)

useEffect( () =>{
  getRecipes();
}, [query]);

const getRecipes = async () => {
  

  try{
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
    setIsFailed(false)
  }
  catch(error){
    console.log("we cant fetch data")
    setIsFailed(true)
  }
 
}

  const updateSearch = e =>{
   
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form"> 
        <input 
        placeholder="This App Can Only Take 10 request every one min.... wach sma3tii"
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />

        <button className="search-button" type="submit">Search</button>
      </form>

      <div>
        {isFailed ? "Please Try again......" : null}
      </div>

      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
         />
      ))}
      </div>
    </div>
  )
}

export default App;

