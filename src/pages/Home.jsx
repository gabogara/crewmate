import { Link } from "react-router-dom";
import crewImage from "../assets/crew-home.png";

const Home = () => {
  return (
    <section className="page-section">
      <div className="page-header home-header">
        <h1>Build and manage your crew!</h1>
        <p>
          Create new crewmates, adjust their traits, and keep your team ready
          for any mission.
        </p>
      </div>

      <img
        className="home-crew-image"
        src={crewImage}
        alt="Colorful crewmates"
      />

      <div className="button-row">
        <Link className="primary-link-button home-primary-button" to="/create">
          Create a Crewmate
        </Link>

        <Link className="secondary-button home-secondary-button" to="/gallery">
          View Crewmate Gallery
        </Link>
      </div>
    </section>
  );
};

export default Home;
