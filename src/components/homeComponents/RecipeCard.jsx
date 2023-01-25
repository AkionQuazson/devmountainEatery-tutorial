import '../../css/recipeCard.css';

const RecipeCard = (props) => {

    const {recipe_name, image_url} = {image_url: "https://midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg", recipe_name: "Easy Meal"}

    return <div className='card'>
        <img className='cardImg' src={image_url} />
        <h4 className='cardTxt'>{recipe_name}</h4>
        <button>See More</button>
    </div>
}

export default RecipeCard;