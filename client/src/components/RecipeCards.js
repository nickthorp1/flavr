import RecipeCard from "./RecipeCard";

function RecipeCards({ filteredRecipes, addRecipe, removeRecipe }) {
  return (
    <div className="recipeCards">
      {filteredRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          addRecipe={addRecipe}
          removeRecipe={removeRecipe}
        />
      ))}
    </div>
  );
}

export default RecipeCards;
