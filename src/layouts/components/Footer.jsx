import { useLocation } from "react-router-dom";
import { getLocalStorage } from "@/libs/utils";
import { Link } from "react-router-dom";
const Footer = ({ menus, selectedId }) => {
  const { pathname } = useLocation();
  const user = getLocalStorage("auth-user");
  if (user.position_id != 1) {
    menus.splice(1);
  }

  console.log("footer menus", menus);

  return (
    <div className="nav-menu-x position-fixed w-100 bottom-0">
      <div
        className={`nav-menu-x-child  rounded-4 px-5 py-2 d-flex ${
          menus.length == 1
            ? "justify-content-center"
            : "justify-content-between"
        } align-items-center`}
      >
        {menus.map((menu) => (
          <Link to={`/home${menu.path}`} key={menu.id}>
            <span
              className={`nav-x-container ${
                pathname === `/home${menu.path}` ? "active" : ""
              }`}
            >
              <i className={`${menu.icon} fs-2`} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
