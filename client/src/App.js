import Recipes from "./pages/recipes/Recipes";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
