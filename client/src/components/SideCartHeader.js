import { FaTimes } from "react-icons/fa";

function SideCartHeader({ toggleSideCart }) {
  return (
    <div>
      <FaTimes onClick={() => toggleSideCart()} className="close-SideCart" />
      <div className="sideCart-title-container">
        <h2 className="sideCart-title">Recipes In SideCart</h2>
      </div>
    </div>
  );
}

export default SideCartHeader;
