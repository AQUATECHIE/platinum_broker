import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../style/Landing.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TradingLandingPage() {
  const [prices, setPrices] = useState([100, 102, 98, 105, 107]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => [
        ...prev.slice(1),
        Math.floor(Math.random() * 10) + 100,
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ["1m", "2m", "3m", "4m", "5m"],
    datasets: [
      {
        label: "Live Market Price",
        data: prices,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(83, 37, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">TradingApp</div>
        <ul className="nav-link">
          <li>
            <a href="#about" className="custom-hover-text">
              About
            </a>
          </li>
          <li>
            <a href="#analysis" className="custom-hover-text">
              Analysis
            </a>
          </li>
          <li>
            <a href="#app" className="custom-hover-text">
              App
            </a>
          </li>
          <li>
            <a
              href="https://oauth.deriv.com/oauth2/authorize?app_id=68593&scope=read+trade"
              className="custom-button"
            >
              Sign Up with Deriv
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div class="fade-in text-center py-20">
        <h1 class="text-4xl font-bold">Trade Smarter with Our Platform</h1>
        <p class="mt-4 text-lg">
          Real-time data, seamless trading, and expert insights
        </p>
      </div>

      {/* Live Market Ticker */}
      <div className="custom-box">
        <h2 className="text">Live Market Prices</h2>
        <Line data={data} />
      </div>

      {/* Signup Form */}
      <div className="custom-container">
        <h2 className="custom-text">Sign Up for Free</h2>
        <input
          type="text"
          placeholder="Enter your email"
          className="custom-input"
        />
        <button className="custom-button">Get Started</button>
      </div>
    </div>
  );
}
