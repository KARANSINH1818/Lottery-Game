import { useState, useEffect } from "react";
import "./LotteryGame.css";
import Button from "@mui/material/Button";

// Function to generate a random ticket (5 digits from 0–9)
function generateTicket() {
  return Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 10)
  );
}

export default function App() {

  // Stores the current lottery ticket (default starts with 00000)
  const [ticket, setTicket] = useState([0, 0, 0, 0, 0]);

  // Stores how many attempts the user has made
  const [attempts, setAttempts] = useState(0);

  // Stores the best score (minimum attempts to win)
  // Loads saved value from localStorage when component mounts
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem("bestScore");
    return saved ? Number(saved) : null;
  });


  // Reset game function
function resetGame() {
  setTicket([0, 0, 0, 0, 0]);   // Reset numbers to 00000
  setAttempts(0);              // Reset attempts to 0
}

  // Function called when user clicks "Buy a New Ticket"
  function buyTicket() {
    const newTicket = generateTicket(); // Generate new random numbers
    setTicket(newTicket);               // Update ticket state
    setAttempts(prev => prev + 1);      // Increase attempt counter
  }

  // Calculate sum of ticket digits
  const sum = ticket.reduce((acc, num) => acc + num, 0);

  // Winning condition (sum must be 15)
  const isWinner = sum === 15;

  // useEffect runs when isWinner or attempts change
  // It updates best score if current attempt is better
  useEffect(() => {
    if (isWinner && attempts > 0) {

      // Get existing best score from localStorage
      const saved = localStorage.getItem("bestScore");
      const currentBest = saved ? Number(saved) : null;

      // If no best score exists OR current attempts are lower
      if (currentBest === null || attempts < currentBest) {
        localStorage.setItem("bestScore", attempts); // Save new best score
        setBestScore(attempts);                      // Update state
      }
    }
  }, [isWinner, attempts]);

  return (
    <div className="app">
      <h1>Lottery Game!</h1>

      {/* Show winner badge if user wins */}
      {isWinner && (
        <div className="winner-badge">
          🏆 You Won the Lottery 🏆
        </div>
      )}

      {/* Ticket display box */}
      <div className={`ticket-box ${isWinner ? "winner-box" : ""}`}>
        <h2>Your Ticket is</h2>

        {/* Display each digit */}
        <div className="numbers">
          {ticket.map((num, index) => (
            <span key={index} className="number">
              {num}
            </span>
          ))}
        </div>

        {/* Display sum of digits */}
        <p className="sum">Sum: {sum}</p>
      </div>

      {/* Show attempt count */}
      <p className="attempts">Attempts: {attempts}</p>

      {/* Show best score if available */}
      {bestScore !== null && (
        <p className="best-score">
          🏆 Best Score: {bestScore}
        </p>
      )}

      {/* Button to generate new ticket */}
      <Button
        onClick={buyTicket}
        variant="outlined"
        className="buy-btn"
      >
        Buy a New Ticket
      </Button>

    {/* Button Rest Button */}
      <Button
        onClick={resetGame}
        style={{ marginLeft: "20px" }}
        variant="outlined"
        color="error"
        className="reset-btn"
     >
       Reset Game !
     </Button>
    </div>
  );
}