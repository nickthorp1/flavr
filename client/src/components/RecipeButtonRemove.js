import { FaTimes } from "react-icons/fa";

function RecipeButtonRemove({ removeRecipe, recipe }) {
  return (
    <div>
      <button className="removeBtn" onClick={() => removeRecipe(recipe.id)}>
        <FaTimes className="removeIcon" />
      </button>
    </div>
  );
}

export default RecipeButtonRemove;
