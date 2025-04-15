import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page d-flex flex-column align-items-center justify-content-center">
      <h1>404 Page not found</h1>
      <button className="btn btn-primary" onClick={() => navigate("/home")}>
        Go back
      </button>
    </div>
  );
};

export default NotFound;
