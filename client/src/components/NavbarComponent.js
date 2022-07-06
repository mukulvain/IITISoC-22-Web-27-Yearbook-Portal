import { Navbar, Container } from "react-bootstrap";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../redux/UserState/userSlice";
import { useSelector, useDispatch } from "react-redux";

const NavbarComponent = () => {
  const navigator = useNavigate();
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLoginSuccess = (data) => {
    dispatch(login(data.profileObj));
    navigator("/dashboard");
  };

  const handleLogoutSuccess = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Yearbook</Navbar.Brand>
        {user.loggedIn ? (
          <GoogleLogout
            clientId="516947581284-juefirofvp9jc54fphtml4bo22ldsdqb.apps.googleusercontent.com"
            onLogoutSuccess={handleLogoutSuccess}
            buttonText="Logout"
          />
        ) : (
          <GoogleLogin
            clientId="516947581284-juefirofvp9jc54fphtml4bo22ldsdqb.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={handleLoginSuccess}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
