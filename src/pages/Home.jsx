import "../styles/Home.css";
import Trending from "../components/Trending";
import HomeVideo from "../assets/movie.mp4";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <h2>Welcome To</h2>
        <h1>
          M o v i e H o u s e
        </h1>
        <p>Cinema Comforts, Couch Convenience.</p>
      </div>

      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={HomeVideo} type="video/mp4" />
        </video>
      </div>

      <div className="trending-container">
        <KeyboardDoubleArrowDownIcon className="home-arrow"/>
        <h2>Trending now</h2>
        <Trending />
      </div>
    </div>
  );
}

export default Home;
