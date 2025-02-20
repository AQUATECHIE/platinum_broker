import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import "../style/Landing.css";

export default function TradingPage() {
  const [prices, setPrices] = useState([100, 102, 98, 105, 107]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("deriv_token");
    if (!token) {
      navigate("/");
      return;
    }

    // Fetch user details from Deriv API
    fetch("https://api.deriv.com/v2/authorize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ authorize: token }),
    })
      .then((res) => res.json())
      .then((data) => setUser(data?.authorize))
      .catch((err) => console.error("Error fetching user data", err));
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => [...prev.slice(1), Math.floor(Math.random() * 10) + 100]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("deriv_token");
    navigate("/");
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="nav">
        <div className="logo">TradingApp</div>
        <div className="user-info">
          <span className="username">{user?.email || "Trader"}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="hero-section fade-in">
        <h1 className="title">Welcome, {user?.email || "Trader"}</h1>
        <p className="subtitle">Your trading journey starts here 🚀</p>
      </div>

      {/* User Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Balance</h3>
          <p>$5,000</p>
        </div>
        <div className="stat-card">
          <h3>Open Trades</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>Payout</h3>
          <p>$250</p>
        </div>
      </div>

      {/* Live Market Chart */}
      <div className="custom-box">
        <h2 className="text">Live Market Prices</h2>
        <Line 
          data={{ labels: ["1m", "2m", "3m", "4m", "5m"], datasets: [{ label: "Market Price", data: prices, borderColor: "#4CAF50" }] }} 
          options={{ animation: { duration: 2000, easing: "easeInOutQuart" } }} 
        />
      </div>
    </div>
  );
}
