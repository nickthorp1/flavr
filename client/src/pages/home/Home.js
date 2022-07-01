import {useNavigate} from 'react-router-dom';
import "./home.css";

function Home() {
    let navigate = useNavigate();
  return (
    <div className='home-container'>
      <img className='backgound-img' alt='Women cooking'src="https://global-uploads.webflow.com/60197c826c807e1ad27c6681/601bec2f3f11497933dd5bcb_pablo-merchan-montes-Orz90t6o0e4-unsplash%201.png" />

      <div className='heading'>
        <h1 >Grocery</h1>
        <h1 >Shoping By</h1>
        <h1 className='header-color-transition'>Recipes</h1>
      </div>

      <div className='CTA'>
        <h4>Shop 100+ recipes and get ingreidents delivered straight to your door</h4>
        <button className='btn-explore' onClick={() => navigate("/recipes")}>Explore Recipes</button>
      </div>
    </div>
  )
}

export default Home
