import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <CrewmateCard key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
