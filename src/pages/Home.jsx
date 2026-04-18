import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Build and manage your crew!</h1>
        <p>
          Create new crewmates, adjust their traits, and keep your team ready
          for any mission.
        </p>
      </div>

      <div className="button-row">
        <Link className="primary-link-button" to="/create">
          Create a Crewmate
        </Link>

        <Link className="secondary-button" to="/gallery">
          View Crewmate Gallery
        </Link>
      </div>
    </section>
  );
};

export default Home;
