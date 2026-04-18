import { Link } from "react-router-dom";

const CrewmateCard = ({ crewmate }) => {
  return (
    <article className="crewmate-card">
      <Link
        className="card-title-link"
        to={`/crewmate/${crewmate.id}`}
        state={{ from: "/gallery" }}
      >
        <h2>{crewmate.name}</h2>
      </Link>

      <p>Speed: {crewmate.speed} mph</p>
      <p>Color: {crewmate.color}</p>
      <p>Created at: {new Date(crewmate.created_at).toLocaleString()}</p>
      <Link
        className="card-edit-link"
        to={`/edit/${crewmate.id}`}
        state={{ from: "/gallery" }}
      >
        Edit Crewmate
      </Link>
    </article>
  );
};

export default CrewmateCard;
