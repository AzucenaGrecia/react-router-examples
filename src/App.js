import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const Login = () => <h1>Login Page</h1>;
const SignUp = () => <h1>SignUp Page</h1>;
const Profile = ({ name }) => {
  if (name === "deyvi") {
    return <Redirect to="/login" />;
  }
  return <h1>Profile Page for {name}</h1>;
};

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">SignUp</Link>
      <Link to="/profile/diego">Profile Diego</Link>
      <Link to="/profile/wences">Profile Wences</Link>
      <Link to="/non-existing-page">No existing page</Link>
    </nav>
  );
};

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route
            path="/profile/:name"
            render={({ match }) => <Profile name={match.params.name} />}
          />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
        < HomeButton />
      </div>
    </Router>
  );
}

export default App;
