import RecipeButtonAdd from "./RecipeButtonAdd";
import RecipeButtonRemove from "./RecipeButtonRemove";
import "../App.css";

function SideCartRecipe({ recipe, addRecipe, removeRecipe }) {
  return (
    <div className="recipeCard">
      {recipe.inbasket === true ? (
        <RecipeButtonRemove removeRecipe={removeRecipe} recipe={recipe} />
      ) : (
        <RecipeButtonAdd addRecipe={addRecipe} recipe={recipe} />
      )}
      <div className="img-box">
        <img alt="recipe" src={recipe.img} className="recipeImg"></img>
      </div>
      <div className="recipeMeta">
        <img
          alt="recipe cook time"
          src="https://app.flavrfood.com/static/media/clock.1b70e1e9.svg"
          className="meta-icon"
        />
        <p className="meta-text">{recipe.cooktime} mins</p>
        <img
          alt="recipe best before"
          src="https://app.flavrfood.com/static/media/calendar.30e31c0b.svg"
          className="meta-icon"
        />
        <p className="meta-text">{recipe.best_before} days</p>
        <img
          alt="recipe difficulty"
          src="https://app.flavrfood.com/static/media/chart.ded6d7ab.svg"
          className="meta-icon"
        />
        <p className="meta-text">{recipe.difficulty}</p>
      </div>
      <div className="recipe-text-container">
        <div className="recipe-price-container">
          <h3 className="recipe-price">
            £{((recipe.recipe_price_2 * recipe.serving) / 100).toFixed(2)}
          </h3>
          <h4 className="recipe-serving-text">/serving</h4>
        </div>
        <h3 className="recipe-name-text">{recipe.name}</h3>
      </div>
    </div>
  );
}

export default SideCartRecipe;
