import RecipeFilterCategorise from "./RecipeFilterCategorise";
import RecipeFilterServings from "./RecipeFilterServings";

function RecipeFilter({
  setRecipeFiltered,
  filteredRecipes,
  setServings,
  servings,
  updateCategory,
  getRecipes,
}) {
  function handleServingsOnchange(e) {
    const servingsCopy = filteredRecipes.map((x) => {
      return { ...x, serving: e.target.value };
    });
    setRecipeFiltered(servingsCopy);
    setServings(e.target.value);
  }

  return (
    <div>
      <RecipeFilterCategorise
        getRecipes={getRecipes}
        updateCategory={updateCategory}
      />
      <RecipeFilterServings
        handleServingsOnchange={handleServingsOnchange}
        servings={servings}
      />
    </div>
  );
}

export default RecipeFilter;
