import React from "react";

function RecipeFilterServings({ handleServingsOnchange, servings }) {
  return (
    <div>
      <div className="servings">
        <h4>Recipe Servings: {servings}</h4>
        <select
          defaultValue="2"
          onChange={handleServingsOnchange}
          className="servings-select"
        >
          <option value="1" className="servings-option">
            1 serving
          </option>
          <option value="2" className="servings-option">
            2 serving's
          </option>
          <option value="3" className="servings-option">
            3 serving's
          </option>
          <option value="4" className="servings-option">
            4 serving's
          </option>
        </select>
      </div>
    </div>
  );
}

export default RecipeFilterServings;
