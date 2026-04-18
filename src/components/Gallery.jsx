import { useEffect, useState } from "react";
import { getAllCrewmates } from "../services/crewmateService";
import CrewmateCard from "./CrewmateCard";

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCrewmates = async () => {
      try {
        const data = await getAllCrewmates();
        const sorted = [...data].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setCrewmates(sorted);
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
      <section className="page-section">
        <h1>Your Crewmate Gallery</h1>
        <p>Loading crewmates...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="page-section">
        <h1>Your Crewmate Gallery</h1>
        <p>{errorMessage}</p>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Your Crewmate Gallery</h1>
      </div>

      {crewmates.length === 0 ? (
        <p>No crewmates yet. Create one first.</p>
      ) : (
        <div className="gallery-grid">
          {crewmates.map((crewmate) => (
            <CrewmateCard key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
