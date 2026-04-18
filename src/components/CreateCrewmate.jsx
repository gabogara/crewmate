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
    <section>
      <h1>Create a New Crewmate</h1>
      <p>This is where the create form will go.</p>
      <CrewmateForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Create Crewmate"
      />
      <button type="button" onClick={() => navigate(from)}>
        Cancel
      </button>
    </section>
  );
};

export default CreateCrewmate;
