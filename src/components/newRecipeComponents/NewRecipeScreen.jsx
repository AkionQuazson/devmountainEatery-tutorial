import React from "react";
import '../../css/newRecipe.css';

const NewRecipeScreen = () => {
  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <form action="">
        <div className="row">
          <input type="text" id="name" placeholder="Name"/>
          <input type="text" id="image" placeholder="Image URL"/>
        </div>
        <div className="row">
          <input type="radio" name="type" id="cook" />
          <label htmlFor="cook">Cook</label>
          <input type="radio" name="type" id="bake" />
          <label htmlFor="bake">Bake</label>
          <input type="radio" name="type" id="drink" />
          <label htmlFor="drink">Drink</label>
        </div>
        <div className="row">
          <input type="text" id="prepTime" placeholder="Prep Time" />
          <input type="text" id="cookTime" placeholder="Cook Time" />
          <input type="text" id="serve" placeholder="Serves" />
        </div>
        <div className="row">
          <input type="text" id="ingredient" placeholder="Ingredient" />
          <input type="number" id="quantity" placeholder="Quanity"/>
          <ul></ul>
        </div>
        <button type="number" id="addIngredient">Add Another</button>
        <textarea id="instructions" placeholder="What are the instructions?"></textarea>
        <input type="submit" value="Save"/>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
