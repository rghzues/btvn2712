import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <Link to="/user">Users</Link> 
        <Link to="/products">Products</Link>
      </nav>

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
