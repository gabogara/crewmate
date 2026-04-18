import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { getCrewmateById } from "../services/crewmateService";

const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/gallery";

  useEffect(() => {
    const fetchCrewmate = async () => {
      try {
        const data = await getCrewmateById(id);
        setCrewmate(data);
      } catch (error) {
        console.error("Error fetching crewmate:", error);
        setErrorMessage("Failed to load crewmate.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCrewmate();
  }, [id]);

  if (isLoading) {
    return (
      <section>
        <h1>Crewmate Detail</h1>
        <p>Loading crewmate...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section>
        <h1>Crewmate Detail</h1>
        <p>{errorMessage}</p>
      </section>
    );
  }

  if (!crewmate) {
    return (
      <section>
        <h1>Crewmate Detail</h1>
        <p>Crewmate not found.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>{crewmate.name}</h1>
      <p>Speed: {crewmate.speed} mph</p>
      <p>Color: {crewmate.color}</p>
      <p>Crewmate ID: {crewmate.id}</p>
      <p>Created at: {new Date(crewmate.created_at).toLocaleString()}</p>
      <p>
        {crewmate.name} is a {crewmate.color} crewmate with a speed of{" "}
        {crewmate.speed} mph.
      </p>

      <Link to={`/edit/${crewmate.id}`}>Edit this Crewmate</Link>
      <button type="button" onClick={() => navigate(from)}>
        Go Back
      </button>
    </section>
  );
};

export default CrewmateDetail;
