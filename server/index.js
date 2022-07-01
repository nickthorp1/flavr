const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./config/databaseconfig");

//middleware
app.use(cors());
app.use(express.json());

// routes

// get all recipes
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await pool.query("SELECT * FROM recipes");
    res.json(recipes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get single recipe by recipe id

app.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await pool.query("SELECT * FROM recipes WHERE id = $1", [
      id,
    ]);
    res.json(recipes.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// add recipe to basket by recipe id and number of recipe servings selected

app.put("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const serving = req.body.serving;
    const addRecipeToBakset = await pool.query(
      "UPDATE recipes SET inbasket = TRUE, serving = $1 WHERE id = $2",
      [serving, id]
    );
    res.json("recipe added to basket");
  } catch (err) {
    console.error(err.message);
  }
});

// Removee recipe from basket by recipe id

app.put("/recipes/remove/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const addRecipeToBakset = await pool.query(
      "UPDATE recipes SET inbasket = FALSE WHERE id = $1",
      [id]
    );
    res.json("recipe remove from basket");
  } catch (err) {
    console.error(error.message);
  }
});

// post
app.post("/recipes", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

// recipe by category

app.get("/recipes/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipesByCategory = await pool.query(
      "SELECT * FROM recipes WHERE category = $1",
      [id]
    );
    res.json(recipesByCategory.rows);
  } catch (error) {
    console.error(error.message);
  }
});


app.listen(5000, () => {
  console.log("server started on 5000");
});
