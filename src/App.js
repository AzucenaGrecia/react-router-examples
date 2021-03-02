import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
// const Login = () => <h1>Login Page</h1>;
const SignUp = () => <h1>SignUp Page</h1>;
// const Profile = () => <h1>Profile Page</h1>;
function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" render={() => <h1>Login Page</h1>} />
      <Route path="/sign-up" component={SignUp} />
      <Route
        path="/profile"
        children={() => <h1>Profile Page Always Render</h1>}
      />
    </div>
  </Router>
  );
}

export default App;
