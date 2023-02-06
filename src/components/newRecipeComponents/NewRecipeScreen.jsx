import React from "react";
import '../../css/newRecipe.css';

const NewRecipeScreen = () => {
  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <form action="">
        <div className="row">
          <input type="text" id="name" className="half" placeholder="Name"/>
          <input type="text" id="image" className="half" placeholder="Image URL"/>
        </div>
        <div className="row" style={{justifyContent: 'space-evenly'}}>
          <div className="option">
          <input type="radio" name="type" id="cook" />
          <label htmlFor="cook">Cook</label>
          </div>
          <div className="option">
          <input type="radio" name="type" id="bake" />
          <label htmlFor="bake">Bake</label>
          </div>
          <div className="option">
          <input type="radio" name="type" id="drink" />
          <label htmlFor="drink">Drink</label>
          </div>
        </div>
        <div className="row">
          <input type="text" id="prepTime" className="third" placeholder="Prep Time" />
          <input type="text" id="cookTime" className="third" placeholder="Cook Time" />
          <input type="text" id="serve" className="third" placeholder="Serves" />
        </div>
        <div className="row">
          <div className="half">
          <input type="text" id="ingredient" placeholder="Ingredient" />
          <input type="number" id="quantity" placeholder="Quanity"/>
          </div>
          <ul className="half"></ul>
        </div>
        <button id="addIngredient">Add Another</button>
        <textarea id="instructions" placeholder="What are the instructions?"></textarea>
        <input type="submit" value="Save"/>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
