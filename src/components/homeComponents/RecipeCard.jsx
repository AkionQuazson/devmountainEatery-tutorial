import { Navigate } from 'react-router-dom';
import '../../css/recipeCard.css';

const RecipeCard = (props) => {

    const {recipe_name, recipe_id, image_url} = props.recipe;

    const handleClick = () => {
        console.log('clicked');
        Navigate(`/recipe/${recipe_id}`);
    }

    return <div className='card'>
        <img className='cardImg' src={image_url} />
        <h4 className='cardTxt'>{recipe_name}</h4>
        <button onClick={(e) => handleClick}>See More</button>
    </div>
}

export default RecipeCard;