const CrewmateForm = ({
  formData,
  errorMessage,
  handleChange,
  handleSubmit,
  buttonText,
  onDelete,
}) => {
  return (
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

      <button type="submit">{buttonText}</button>

      {onDelete && (
        <button type="button" onClick={onDelete}>
          Delete Crewmate
        </button>
      )}
    </form>
  );
};

export default CrewmateForm;
