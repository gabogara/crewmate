import { Link } from "react-router-dom";

const CrewmateCard = ({ crewmate }) => {
  return (
    <article>
      <Link to={`/crewmate/${crewmate.id}`}>
        <h2>{crewmate.name}</h2>
      </Link>

      <p>Speed: {crewmate.speed} mph</p>
      <p>Color: {crewmate.color}</p>
      <p>Created at: {new Date(crewmate.created_at).toLocaleString()}</p>
      <Link to={`/edit/${crewmate.id}`}>Edit Crewmate</Link>
    </article>
  );
};

export default CrewmateCard;
