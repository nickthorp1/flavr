import SideCartRecipes from "./SideCartRecipes";
import SideCartFooter from "./SideCartFooter";
import SideCartHeader from "./SideCartHeader";

function SideCart({ recipes, removeRecipe, servings, toggleSideCart }) {

  // sum total cost of recipes in basket 
  let total = 0;
  recipes.forEach(function (eachRecipe) {
    if (eachRecipe.inbasket === true){
    total = total + (eachRecipe.recipe_price_2 * eachRecipe.serving)
    }
  })
  
  return (
    <div className="sideCart-container">
      <div className="sideCart-content">
        <SideCartHeader toggleSideCart={toggleSideCart} />
        {recipes.map((recipe) => (
          <SideCartRecipes
            key={recipe.id}
            recipe={recipe}
            removeRecipe={removeRecipe}
            servings={servings}
          />
        ))}
      </div>
      <SideCartFooter total={total} toggleSideCart={toggleSideCart} />
    </div>
  );
}

export default SideCart;
