import {
  DivaAdminHeader,
  DivaCard,
  Typography,
} from "@diva_changi/changi-diva-dls";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <DivaAdminHeader
        avatarUrl="/static/profile.jpg"
        email="pbe_admin1@changiairport.com"
        navButtonList={[
          {
            label: "Home",
            onClick: () => {
              navigate("/");
            },
            isActive: location.pathname === "/",
          },
          {
            label: "About",
            onClick: () => {
              navigate("/about");
            },
            isActive: location.pathname === "/about",
          },
        ]}
        navDropdownList={[
          {
            isActive: true,
            label: "PBE Admin",
            onClick: () => {},
          },
          {
            label: "BDOP Admin",
            onClick: () => {},
          },
        ]}
        username="pbe_admin1"
      />
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <main className="homepage">
      <Grid container spacing={2}>
        <Grid xs={6} xsOffset={3} md={4}>
          <DivaCard>
            <Typography>Home Page</Typography>
          </DivaCard>
        </Grid>
      </Grid>
    </main>
  );
}

function About() {
  return (
    <main className="aboutpage">
      <Grid container spacing={2}>
        <Grid xs={6} xsOffset={3} md={4}>
          <DivaCard>
            <Typography>About Page</Typography>
          </DivaCard>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
