import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
  getCrewmateById,
  updateCrewmate,
  deleteCrewmate,
} from "../services/crewmateService";

const EditCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/gallery";

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    speed: "",
    color: "",
  });

  useEffect(() => {
    const fetchCrewmate = async () => {
      try {
        const data = await getCrewmateById(id);
        setFormData({
          name: data.name || "",
          speed: data.speed || "",
          color: data.color || "",
        });
      } catch (error) {
        console.error("Error fetching crewmate:", error);
        setErrorMessage("Failed to load crewmate.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCrewmate();
  }, [id]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.speed || !formData.color) {
      setErrorMessage("Please complete all fields.");
      return;
    }

    try {
      await updateCrewmate(id, {
        ...formData,
        speed: Number(formData.speed),
      });

      navigate("/gallery");
    } catch (error) {
      console.error("Error updating crewmate:", error);
      setErrorMessage("Failed to update crewmate.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCrewmate(id);
      navigate("/gallery");
    } catch (error) {
      console.error("Error deleting crewmate:", error);
      setErrorMessage("Failed to delete crewmate.");
    }
  };

  if (isLoading) {
    return (
      <section>
        <h1>Edit Crewmate</h1>
        <p>Loading crewmate...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Update Your Crewmate</h1>
      <p>Edit the fields below and save your changes.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            placeholder="Enter crewmate's name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="speed">Speed (mph):</label>
          <input
            id="speed"
            name="speed"
            type="number"
            min="0"
            step="0.1"
            value={formData.speed}
            placeholder="Enter speed in mph"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Color:</p>

          <label htmlFor="red">Red:</label>
          <input
            id="red"
            name="color"
            type="radio"
            value="Red"
            checked={formData.color === "Red"}
            onChange={handleChange}
          />

          <label htmlFor="green">Green:</label>
          <input
            id="green"
            name="color"
            type="radio"
            value="Green"
            checked={formData.color === "Green"}
            onChange={handleChange}
          />

          <label htmlFor="blue">Blue:</label>
          <input
            id="blue"
            name="color"
            type="radio"
            value="Blue"
            checked={formData.color === "Blue"}
            onChange={handleChange}
          />

          <label htmlFor="purple">Purple:</label>
          <input
            id="purple"
            name="color"
            type="radio"
            value="Purple"
            checked={formData.color === "Purple"}
            onChange={handleChange}
          />

          <label htmlFor="yellow">Yellow:</label>
          <input
            id="yellow"
            name="color"
            type="radio"
            value="Yellow"
            checked={formData.color === "Yellow"}
            onChange={handleChange}
          />

          <label htmlFor="orange">Orange:</label>
          <input
            id="orange"
            name="color"
            type="radio"
            value="Orange"
            checked={formData.color === "Orange"}
            onChange={handleChange}
          />

          <label htmlFor="pink">Pink:</label>
          <input
            id="pink"
            name="color"
            type="radio"
            value="Pink"
            checked={formData.color === "Pink"}
            onChange={handleChange}
          />

          <label htmlFor="rainbow">Rainbow:</label>
          <input
            id="rainbow"
            name="color"
            type="radio"
            value="Rainbow"
            checked={formData.color === "Rainbow"}
            onChange={handleChange}
          />
        </div>

        {errorMessage && <p>{errorMessage}</p>}

        <button type="submit">Update Crewmate</button>
        <button type="button" onClick={handleDelete}>
          Delete Crewmate
        </button>
        <button type="button" onClick={() => navigate(from, { replace: true })}>
          Cancel
        </button>
      </form>
    </section>
  );
};

export default EditCrewmate;
