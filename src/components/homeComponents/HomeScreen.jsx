import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import AdBanner from './AdBanner';
import RecipeCard from './RecipeCard';
import axios from 'axios';

const HomeScreen = () => {  
  const [recipes, setRecipes] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes")
    .then((res) => {
      setRecipes(res.data);
      // console.log(res.data);
    })
  }

  const recipeDisplay = recipes.filter((recipe, i) => {
    const title = recipe.recipe_name.toLowerCase();
    const searchText = search.toLowerCase();
    return title.includes(searchText)
  }).map((recipe, i) => {
    return <RecipeCard key={i} recipe={recipe}/>
  })

  React.useEffect(() => {
    getRecipes()
  }, [])
  
  return (
    <div>
      <AdBanner />
      <span className='searchBar'>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input 
          type="text" 
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          placeholder='Search for a Recipe'
        />
      </span>
      <div className='cardContainer'> 
        {recipeDisplay}
      </div>
    </div>
  )
}

export default HomeScreen;