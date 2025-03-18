import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/sponsorship">Sponsorship</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/shows">Shows</Link>
      </nav>
    );
  };
  
  
export default Navbar;
