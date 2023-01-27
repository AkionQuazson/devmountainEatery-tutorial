import { useNavigate } from 'react-router-dom';
import '../../css/recipeCard.css';

const RecipeCard = (props) => {
    let recipeName = '';
    const {recipe_name, recipe_id, image_url} = props.recipe;
    const navigate = useNavigate();

    if (recipe_name.length > 50) {
        recipeName = recipe_name.slice(0, 50) + '...';
    }
    else {
        recipeName = recipe_name;
    }

    const handleClick = () => {
        console.log('clicked');
        navigate(`/recipe/${recipe_id}`);
    }

    return <div className='card'>
        <div className='cardImg'>
            <img className='cardImg' src={image_url} alt={image_url} />
        </div>
        <h4 className='cardTxt'>{recipeName}</h4>
        <button onClick={(e) => handleClick()}>See More</button>
    </div>
}

export default RecipeCard;