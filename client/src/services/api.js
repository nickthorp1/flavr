import axios from "axios";

 export const fetchRecipes = async () => {
    return await axios
      .get("http://localhost:5000/recipes")
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err);
      }); 
  };



  // Add Recipe to Basket
 export const addRecipeToBakset = async (id, numberOfServing) => {
    return await axios
      .put(`http://localhost:5000/recipes/${id}`, numberOfServing)
      .then((res) => {
        return res
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Remove recipe from basket

  export const removeRecipeFromBasket = async (id) => {
    return await axios
      .put(`http://localhost:5000/recipes/remove/${id}`)
      .then((res) => {
        return res
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get recipes by category

  export const fetchRecipeByCategory = async (id) => {
    return await axios
      .get(`http://localhost:5000/recipes/category/${id}`)
      .then((res) => {
        return res.data;
       
      })
      .catch((err) => {
        console.log(err);
      });
  };