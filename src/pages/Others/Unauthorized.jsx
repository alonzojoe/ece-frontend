import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page d-flex flex-column align-items-center justify-content-center">
      <h1>401 Unauthorized</h1>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default Unauthorized;
