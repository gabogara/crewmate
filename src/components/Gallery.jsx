import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCrewmates } from "../services/crewmateService";

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCrewmates = async () => {
      try {
        const data = await getAllCrewmates();
        setCrewmates(data);
      } catch (error) {
        console.error("Error fetching crewmates:", error);
        setErrorMessage("Failed to load crewmates.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCrewmates();
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Your Crewmate Gallery</h1>
        <p>Loading crewmates...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section>
        <h1>Your Crewmate Gallery</h1>
        <p>{errorMessage}</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Crewmate Gallery</h1>
      {crewmates.length === 0 ? (
        <p>No crewmates yet. Create one first.</p>
      ) : (
        <div>
          {crewmates.map((crewmate) => (
            <article key={crewmate.id}>
              <Link to={`/crewmate/${crewmate.id}`}>
                <h2>{crewmate.name}</h2>
              </Link>
              <p>Speed: {crewmate.speed} mph</p>
              <p>Color: {crewmate.color}</p>
              <p>
                Created at: {new Date(crewmate.created_at).toLocaleString()}
              </p>
              <Link to={`/edit/${crewmate.id}`}>Edit Crewmate</Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
