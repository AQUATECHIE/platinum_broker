import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TradingLandingPage from "./Components/LandingPage.jsx"
import TradingPage from "./Components/TradingDash.jsx";
import Callback from "./Components/Callback.jsx"; // Handles OAuth response

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TradingLandingPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/trading" element={<TradingPage />} />
      </Routes>
    </Router>
  );
}

export default App
