import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const Login = () => <h1>Login Page</h1>;
const SignUp = () => <h1>SignUp Page</h1>;
const Profile = () => <h1>Profile Page</h1>;

const Header = () => {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">SignUp</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
