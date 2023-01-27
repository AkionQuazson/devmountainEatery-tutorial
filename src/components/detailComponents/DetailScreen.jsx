import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { json, useParams } from 'react-router-dom';
import '../../css/detail.css'

const DetailScreen = () => {  
  const {id} = useParams()

  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      setRecipe(res.data)
    })
  }, [])

  const ingredientList = recipe.ing?.map((item, i) => {
    return <li key={i}>{item.quantity} {item.ingredient}</li>
  })
  console.log(ingredientList)

  return (
    <section>
      <div className='sectionHead'>
        <img src={recipe.image_url}/>
        <h1 className='sectionTitle'>{recipe.recipe_name}</h1>
      </div>
      <div className='mainContent'>
        <div className='listContent'>
          <h4>Recipe</h4>
          <ul>
            <li>Prep Time: {recipe.prep_time}</li>
            <li>Cook Time: {recipe.cook_time}</li>
            <li>Serves: {recipe.serves}</li>
          </ul>
          <h4>Ingredients</h4>
          <ul>
            {/* {ingredientList} */}
          </ul>
        </div>
        <div className='instructions'>
          <h4>Instructions</h4>
          <p>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
