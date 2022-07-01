import React from "react";

function SideCartFooter({ total, toggleSideCart }) {
  return (
    <div>
      <div className="sideCart-totals">
        <h4 className="total-price">Total: </h4>
        <h5 className="recipe-price">£{(total / 100).toFixed(2)}</h5>
      </div>
      <div className="sideCart-footer-container">
        <button
          className="sideCart-close-button-footer"
          onClick={() => toggleSideCart()}
        >
          Close SideCart
        </button>
        <button
          className="sideCart-complete-button-footer"
          onClick={() =>
            alert("This is a demo and an order will not actually be placed")
          }
        >
          Complete Order
        </button>
      </div>
    </div>
  );
}

export default SideCartFooter;
