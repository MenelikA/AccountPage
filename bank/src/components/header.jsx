import { useNavigate } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light bg-light">
      {/* title of the app */}
      <a className="navbar-brand" href="/">MyBank</a>

      {/* if there is a user then, display his name */}
      {user && <span className="navbar-text">Hello, {user.name}.<button className="btn btn-danger ml-5" onClick={() => {
        // remove the user from the local storage
        localStorage.removeItem('user');
        // set the user state to null
        setUser(null);
        // navigate to the login page
        navigate('/');
      }}>Logout</button></span>}
    </nav>
  );
};

export default Header;
