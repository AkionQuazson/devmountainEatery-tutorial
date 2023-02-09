import React from "react";
import {Formik, Form} from 'formik';
import '../../css/newRecipe.css';
import { useState } from "react";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingName, setIngName] = useState('');
  const [ingQuant, setIngQuant] = useState('');

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    if (values.type.length > 0 && values.recipeName.length > 0 && values.imageURL.length > 0 && values.prepTime.length > 0 && values.cookTime.length > 0 && values.serves.length > 0 && values.instructions.length > 0) {
      axios
      .post(`https://recipes.devmountain.com/recipes`, values)
    }
    else {
      alert("A text field is empty");
    }
  }

  const addIngredient = (e) => {
    e.preventDefault();
    setIngName('');
    setIngQuant('');
    setIngredients([...ingredients, {name:ingName, quantity:ingQuant}])
  }

  const renderIngredients = ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient.quantity} {ingredient.name}</li>
  })

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({values, handleChange, handleSubmit}) => {
        return <Form onSubmit={handleSubmit}>
        <div className="row">
          <input type="text" id="recipeName" className="half" placeholder="Name" onChange={handleChange} value={values.recipeName}/>
          <input type="text" id="imageURL" className="half" placeholder="Image URL" onChange={handleChange} value={values.imageURL}/>
        </div>
        <div className="row" style={{justifyContent: 'space-evenly'}}>
          <div className="option">
          <input type="radio" name="type" id="cook" onChange={handleChange} value="Cook"/>
          <label htmlFor="cook">Cook</label>
          </div>
          <div className="option">
          <input type="radio" name="type" id="bake" onChange={handleChange} value="Bake"/>
          <label htmlFor="bake">Bake</label>
          </div>
          <div className="option">
          <input type="radio" name="type" id="drink" onChange={handleChange} value="Drink"/>
          <label htmlFor="drink">Drink</label>
          </div>
        </div>
        <div className="row">
          <input type="text" id="prepTime" className="third" placeholder="Prep Time" onChange={handleChange} value={values.prepTime}/>
          <input type="text" id="cookTime" className="third" placeholder="Cook Time" onChange={handleChange} value={values.cookTime}/>
          <input type="text" id="serves" className="third" placeholder="Serves" onChange={handleChange} value={values.serves}/>
        </div>
        <div className="row">
          <div className="half">
          <input type="text" id="ingredient" placeholder="Ingredient" onChange={(e) => setIngName(e.target.value)} value={ingName}/>
          <input type="text" id="quantity" placeholder="Quanity" onChange={(e) => setIngQuant(e.target.value)} value={ingQuant}/>
          </div>
          <ul className="half">{renderIngredients}</ul>
        </div>
        <button id="addIngredient" onClick={addIngredient}>Add Another</button>
        <textarea id="instructions" placeholder="What are the instructions?" onChange={handleChange} value={values.instructions}></textarea>
        <input type="submit" value="Save"/>
      </Form>
    }}</Formik>
  </section>
  );
};

export default NewRecipeScreen;
