const CrewmateForm = ({
  formData,
  errorMessage,
  handleChange,
  handleSubmit,
  buttonText,
  onDelete,
}) => {
  return (
    <form className="crewmate-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-card">
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

        <div className="form-card">
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

        <div className="form-card form-card-colors">
          <p>Color:</p>

          <label htmlFor="red">
            <input
              id="red"
              name="color"
              type="radio"
              value="Red"
              checked={formData.color === "Red"}
              onChange={handleChange}
            />
            Red:
          </label>

          <label htmlFor="green">
            <input
              id="green"
              name="color"
              type="radio"
              value="Green"
              checked={formData.color === "Green"}
              onChange={handleChange}
            />
            Green:
          </label>

          <label htmlFor="blue">
            <input
              id="blue"
              name="color"
              type="radio"
              value="Blue"
              checked={formData.color === "Blue"}
              onChange={handleChange}
            />
            Blue:
          </label>

          <label htmlFor="purple">
            <input
              id="purple"
              name="color"
              type="radio"
              value="Purple"
              checked={formData.color === "Purple"}
              onChange={handleChange}
            />
            Purple:
          </label>

          <label htmlFor="yellow">
            <input
              id="yellow"
              name="color"
              type="radio"
              value="Yellow"
              checked={formData.color === "Yellow"}
              onChange={handleChange}
            />
            Yellow:
          </label>

          <label htmlFor="orange">
            <input
              id="orange"
              name="color"
              type="radio"
              value="Orange"
              checked={formData.color === "Orange"}
              onChange={handleChange}
            />
            Orange:
          </label>

          <label htmlFor="pink">
            <input
              id="pink"
              name="color"
              type="radio"
              value="Pink"
              checked={formData.color === "Pink"}
              onChange={handleChange}
            />
            Pink:
          </label>

          <label htmlFor="rainbow">
            <input
              id="rainbow"
              name="color"
              type="radio"
              value="Rainbow"
              checked={formData.color === "Rainbow"}
              onChange={handleChange}
            />
            Rainbow:
          </label>
        </div>
      </div>

      {errorMessage && <p className="error-text">{errorMessage}</p>}
      <div className="button-row">
        <button className="primary-button" type="submit">
          {buttonText}
        </button>

        {onDelete && (
          <button className="delete-button" type="button" onClick={onDelete}>
            Delete Crewmate
          </button>
        )}
      </div>
    </form>
  );
};

export default CrewmateForm;
