import { Navigate } from 'react-router-dom';
import '../../css/recipeCard.css';

const RecipeCard = (props) => {
    let recipeName = '';
    const {recipe_name, recipe_id, image_url} = props.recipe;

    if (recipe_name.length > 30) {
        recipeName = recipe_name.slice(0, 30) + '...';
    }
    else {
        recipeName = recipe_name;
    }

    const handleClick = () => {
        console.log('clicked');
        Navigate(`/recipe/${recipe_id}`);
    }

    return <div className='card'>
        <img className='cardImg' src={image_url} alt={image_url} />
        <h4 className='cardTxt'>{recipeName}</h4>
        <button onClick={(e) => handleClick}>See More</button>
    </div>
}

export default RecipeCard;