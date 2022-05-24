import { useNavigate } from "react-router-dom";

function CV() {
  let navigate = useNavigate();

  return (
    <form className="form-stack cv-form">
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" name="firstName" type="text" required />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required />

      <label htmlFor="street">Email:</label>
      <input id="street" name="street" type="text" required />

      <label htmlFor="cv">CV:</label>
      <input id="cv" name="cv" type="file" required />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default CV;
