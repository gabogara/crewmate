import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
  getCrewmateById,
  updateCrewmate,
  deleteCrewmate,
} from "../services/crewmateService";
import CrewmateForm from "./CrewmateForm";

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
      <section className="page-section">
        <h1>Edit Crewmate</h1>
        <p>Loading crewmate...</p>
      </section>
    );
  }

  if (errorMessage && !formData.name && !formData.speed && !formData.color) {
    return (
      <section className="page-section">
        <h1>Edit Crewmate</h1>
        <p>{errorMessage}</p>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Update Your Crewmate</h1>
        <p>Edit the fields below and save your changes.</p>
      </div>
      <CrewmateForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Update Crewmate"
        onDelete={handleDelete}
      />
      <button
        className="secondary-button"
        type="button"
        onClick={() => navigate(from, { replace: true })}
      >
        Cancel
      </button>
    </section>
  );
};

export default EditCrewmate;
