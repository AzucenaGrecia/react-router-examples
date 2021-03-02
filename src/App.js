import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route
          path="/:page"
          render={({ match }) => <h1>Param: {match.params.page}</h1>}
        />
      </div>
    </Router>
  );
}

export default App;
