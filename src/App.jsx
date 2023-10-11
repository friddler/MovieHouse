import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SeriesAPI from "./components/SeriesAPI";
import MovieAPI from "./components/MovieAPI";
import MovieGenre from "./components/MovieGenre";
import SeriesGenre from "./components/SeriesGenre";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
