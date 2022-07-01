import { useState, useEffect } from "react";

import "./recipes.css";
import RecipeCards from "../../components/RecipeCards";
import SideCart from "../../components/SideCart";
import Footer from "../../components/Footer";
import RecipeFilter from "../../components/RecipeFilter";
import Header from "../../components/Header";

import { fetchRecipes } from "../../services/api";
import { addRecipeToBakset } from "../../services/api";
import { removeRecipeFromBasket } from "../../services/api";
import { fetchRecipeByCategory } from "../../services/api";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [servings, setServings] = useState(2);
  const [sideCart, setSideCart] = useState(false);

  // display / hide sidecart
  const toggleSideCart = () => {
    setSideCart(!sideCart);
  };

  // Get recipes
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const data = await fetchRecipes();
    setRecipes(data);
    setFiltered(data);
  };

  // Add Recipe to Basket
  const addRecipe = async (id) => {
    let index = recipes.findIndex((recipe) => recipe.id === id);
  // set recipes state
    if (index !== -1) {
      const newArr = recipes.map((obj) => {
        if (obj.id === id) {
          return { ...obj, inbasket: true, serving: Number(servings) };
        }
        return obj;
      });
      console.log(newArr);

      setRecipes(newArr);
    } else {
      console.log("no match");
    }

  // set filteredrecipes state 

  let indexFiltered = filtered.findIndex((filterdRecipe) => filterdRecipe.id === id);

    if (indexFiltered  !== -1) {
      const newArrFilteered = filtered.map((obj) => {
        if (obj.id === id) {
          return { ...obj, inbasket: true};
        }
        return obj;
      });
      console.log(newArrFilteered);

      setFiltered(newArrFilteered);
    } else {
      console.log("no match");
    }

// Network request to database add recipe by id
    const numberOfServing = { serving: servings };
    const res = await addRecipeToBakset(id, numberOfServing);
    console.log(res);
  };

  // Remove recipe from basket

  const removeRecipe = async (id) => {
  // Set recipes state
    let index = recipes.findIndex((recipe) => recipe.id === id);

    if (index !== -1) {
      let temporyarray = recipes.slice();
      temporyarray[index]["inbasket"] = false;
      setRecipes(temporyarray);
    } else {
      console.log("no match");
    }

  // Set filtered recipes state
   let indexFiltered = filtered.findIndex((filterdRecipe) => filterdRecipe.id === id);

   if (indexFiltered  !== -1) {
     const newArrFilteered = filtered.map((obj) => {
       if (obj.id === id) {
         return { ...obj, inbasket: false};
       }
       return obj;
     });
     console.log(newArrFilteered);

     setFiltered(newArrFilteered);
   } else {
     console.log("no match");
   }
// Network request to database to remove recipe by id 
    const res = await removeRecipeFromBasket(id);
    console.log(res);
  }; 

  // Get recipes by category

  const updateCategory = async (id) => {
    const data = await fetchRecipeByCategory(id);
    setFiltered(data);
  };

  return (
    <div className="recipes">
      <div>
        <Header toggleSideCart={toggleSideCart} />
      </div>
      <div className="filter">
        <RecipeFilter
          filteredRecipes={filtered}
          setFiltered={setFiltered}
          setServings={setServings}
          servings={servings}
          updateCategory={updateCategory}
          getRecipes={getRecipes}
        />
      </div>
      <div className="recipe">
        <RecipeCards
          filteredRecipes={filtered}
          addRecipe={addRecipe}
          removeRecipe={removeRecipe}
        />
      </div>
      <div className={sideCart ? "sideCart-active" : "sideCart"}>
        <SideCart
          toggleSideCart={toggleSideCart}
          recipes={recipes}
          removeRecipe={removeRecipe}
          servings={servings}
        />
      </div>
      <div className="footer">
        <Footer
          recipes={recipes}
          setRecipes={setRecipes}
          setFiltered={setFiltered}
          servings={servings}
        />
      </div>
    </div>
  );
}

export default Recipes;
