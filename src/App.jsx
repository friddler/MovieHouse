import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
