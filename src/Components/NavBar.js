import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserToken, logoutUser } from "../Auth";

const NavBar = (props) => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const userToken = getUserToken();
    setUserToken(userToken || null);
  }, [props.isAuthLoading]);
  return (
    <div>
      <nav>
        <h3>NavBar</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!userToken && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </>
          )}
        </ul>
        {userToken && (
          <>
            <span>
              <strong>You Are Logged In</strong>
            </span>
            <button
              onClick={async() => {
                props.setIsAuthLoading(true)
                const logoutSuccess = await logoutUser();
                if (logoutSuccess) {
                  props.setIsAuthLoading(false)
                }
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
