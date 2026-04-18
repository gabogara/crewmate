import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createCrewmate } from "../services/crewmateService";
import CrewmateForm from "./CrewmateForm";

const CreateCrewmate = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    speed: "",
    color: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/gallery";

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    setErrorMessage("");

    if (!formData.name || !formData.speed || !formData.color) {
      setErrorMessage("Please complete all fields.");
      return;
    }

    try {
      await createCrewmate({
        ...formData,
        speed: Number(formData.speed),
      });

      navigate("/gallery");
    } catch (error) {
      console.error("Error creating crewmate:", error);
      setErrorMessage("Failed to create crewmate.");
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Create a New Crewmate</h1>
        <p>Fill out the form below to add a new crewmate.</p>
      </div>
      <CrewmateForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Create Crewmate"
      />
      <button
        className="secondary-button"
        type="button"
        onClick={() => navigate(from)}
      >
        Cancel
      </button>
    </section>
  );
};

export default CreateCrewmate;
