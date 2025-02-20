import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("deriv_token", token); // Store token for future API calls
      navigate("/trading"); // Redirect to trading page
    } else {
      navigate("/"); // Redirect to login if no token found
    }
  }, [navigate]);

  return <h2>Processing login...</h2>;
}
