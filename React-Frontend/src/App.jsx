import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom"
import Favourites from "./Pages/Favourites";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { MovieProvider } from "./contexts/MovieContext";

  function App() {

    return (
      <MovieProvider>
        <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      </main>
      <Footer />
      </MovieProvider>
    );
  }

export default App
