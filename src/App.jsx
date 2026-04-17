import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCrewmate from "./pages/CreateCrewmate";
import Gallery from "./pages/Gallery";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
