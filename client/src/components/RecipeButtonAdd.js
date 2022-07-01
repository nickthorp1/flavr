import { MdAdd } from "react-icons/md";

function RecipeButtonAdd({ addRecipe, recipe }) {
  return (
    <button className="addBtn" onClick={() => addRecipe(recipe.id)}>
      <MdAdd className="addIcon" />
    </button>
  );
}

export default RecipeButtonAdd;
