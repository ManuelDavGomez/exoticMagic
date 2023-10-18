import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Inicio/Home.jsx";
import Perfil from "./pages/profile/profile.jsx";
import Side_left from "./components/side_left/Side_left";
import Side_right from "./components/side_right/Side_right";

function App() {
  return (
    <>
      <Side_left />

      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Perfil />} />
        </Routes>
      </main>
      <Side_right />
    </>
  );
}

export default App;
