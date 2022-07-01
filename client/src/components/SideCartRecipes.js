import RecipeCard from "./RecipeCard";

function SideCartRecipes({ recipe, removeRecipe, servings }) {
  return (
    <div className="recipe-basket-container">
      {recipe.inbasket === true ? (
        <RecipeCard
          recipe={recipe}
          removeRecipe={removeRecipe}
          servings={servings}
        />
      ) : (
        <div className="basket-empty"></div>
      )}
    </div>
  );
}

export default SideCartRecipes;
