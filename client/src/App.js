import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import { initialize } from "./redux/UserState/userSlice";
import { useSelector, useDispatch } from "react-redux";
import ProfilePage from "./pages/Profile/ProfilePage";
import Search from "./pages/Search/Search";

const App = () => {
  const user = useSelector((state) => state.user.value);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (user.loggedIn) {
      navigator('/dashboard');
    } else {
      navigator('/');
    }
  }, [user.loggedIn])

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {
          user.loggedIn ?
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile/:ownerId" element={<ProfilePage />} />
              <Route path="/search" element={<Search />} />
            </>
            : <></>
        }
      </Routes>
    </>
  );
};

export default App;
