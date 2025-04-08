import AuthImg from "@/assets/images/auth-img.png";
import AuthImgv2 from "@/assets/images/authimg.png";
import Light from "@/assets/images/light.png";
import "@/assets/vendor/css/pages/page-auth.css";
import useToggle from "@/hooks/useToggle";
import Login from "@/pages/Auth/components/Login";
import Register from "@/pages/Auth/components/Register";
import useFetch from "@/hooks/useFetch";
import { getLocalStorage } from "@/libs/utils";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [tab, toggleTab] = useToggle(false);
  const { data: positions } = useFetch("/position/all", {});
  const navigate = useNavigate();
  const authToken = getLocalStorage("auth-token");

  if (authToken) {
    navigate("/home");
    return;
  }

  return (
    <div className="authentication-wrapper authentication-cover authentication-bg">
      <div className="authentication-inner row">
        <div className="d-none d-lg-flex col-lg-7 p-0">
          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
            <img
              src={AuthImgv2}
              alt="auth-register-cover"
              className="img-fluid my-5 auth-illustration"
              data-app-light-img="illustrations/auth-login-illustration-light.png"
              data-app-dark-img="illustrations/auth-login-illustration-dark.png"
            />

            <img
              src={Light}
              alt="auth-register-cover"
              className="platform-bg"
              data-app-light-img="illustrations/bg-shape-image-light.png"
              data-app-dark-img="illustrations/bg-shape-image-dark.png"
            />
          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4 bg-white">
          <div className="w-px-400 mx-auto">
            <div className="app-brand mb-4">
              <a href="index.html" className="app-brand-link gap-2">
                {/* <span className="app-brand-logo demo">
                  <svg
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="#7367F0"
                    ></path>
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616"
                    ></path>
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="#7367F0"
                    ></path>
                  </svg>
                </span> */}
              </a>
            </div>

            <div className="nav-align-top mb-4">
              <ul className="nav nav-pills mb-3 nav-fill" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    role="tab"
                    className={!tab ? `nav-link active` : `nav-link`}
                    onClick={() => toggleTab()}
                  >
                    Sign In
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className={tab ? `nav-link active` : `nav-link`}
                    onClick={() => toggleTab()}
                    role="tab"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                {!tab ? (
                  <Login onToggle={toggleTab} />
                ) : (
                  <Register onToggle={toggleTab} positions={positions} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
