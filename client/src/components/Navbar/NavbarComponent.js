import { Navbar, Nav, Container } from "react-bootstrap";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { login, logout } from "../../redux/UserState/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLoginSuccess = (data) => {
    dispatch(login(data.profileObj));
  };

  const handleLogoutSuccess = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Yearbook</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user.loggedIn ?
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to={`/profile/${user.googleId}`}>My Profile</Nav.Link>
                <Nav.Link as={Link} to={'/search'}>Search</Nav.Link>
              </>
              : <></>}
          </Nav>
        </Navbar.Collapse>
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
