import React from "react";

function RecipeFilterCategorise({ getRecipes, updateCategory }) {
  return (
    <div>
      <button onClick={() => getRecipes()} className="category-button-1">
        All Recipes
      </button>
      <button onClick={() => updateCategory(1)} className="category-button-2">
        Healthy
      </button>
      <button onClick={() => updateCategory(2)} className="category-button-3">
        Quick and easy
      </button>
      <button onClick={() => updateCategory(3)} className="category-button-4">
        Tasy
      </button>
    </div>
  );
}

export default RecipeFilterCategorise;
