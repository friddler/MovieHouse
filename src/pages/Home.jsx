import "../styles/Home.css";
import Trending from "../components/Trending";

function Home() {
  return (
    <div className="home-container">
      
     
      <div className="welcome-container">
        <h2>Welcome To</h2>
        <h1>M o v i e H o u s e</h1>
        <p>Cinema Comforts, Couch Convenience.</p>
      </div>

      <div className="trending-container"> 
      <h2 id="trending-title">Trending now</h2>
      <Trending />
      </div>
      
    </div>
  )
}

export default Home
