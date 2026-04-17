import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCrewmate from "./components/CreateCrewmate";
import Gallery from "./components/Gallery";
import { Sidebar } from "./components/Sidebar";
import CrewmateDetail from "./components/CrewmateDetail";
import EditCrewmate from "./components/EditCrewmate";

const App = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/crewmate/:id" element={<CrewmateDetail />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
