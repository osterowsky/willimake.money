import './Home.css';
import '../index.css'
import { useState } from "react";

export default function Home() {
  const [stake, setStake] = useState(0);
  const [yourOdds, setYourOdds] = useState(0);
  const [oppositeOdds, setOppositeOdds] = useState(0);

  // Compute dynamically based on inputs
  let expectedValue = 0;
  let yourProfit = 0;
  let bookmakerProfit = 0;

  const allInputsFilled = stake && yourOdds && oppositeOdds;

  if (allInputsFilled) {
    // Perform calculations
    let totalWin = stake * yourOdds;
    let yourProbability = 1.0 / yourOdds;
    let oppositeProbability = 1.0 / oppositeOdds;
    let totalProbability = yourProbability + oppositeProbability;

    // Calculate expected value
    // EV = Total Win * (Your Probability / Total Probability)
    expectedValue = totalWin * (yourProbability/totalProbability)

    // Calculate profits
    // Your Profit = Expected Value - Stake
    yourProfit = expectedValue - stake;
  }

  return (
    <div id="home">
        <div className="column">
            <h3>Calculate</h3>
            <p className="label">Stake</p>
            <input type="number" placeholder="100" step="0.01" className="small-text" value={stake} onChange={(e) => setStake(parseFloat(e.target.value) || 0)}/>
            <p className="label">Your Odds</p>
            <input type="number" placeholder="1.75" step="0.01" className="small-text" value={yourOdds} onChange={(e) => setYourOdds(parseFloat(e.target.value) || 0)}/>
            <p className="label">Opposite Odds</p>
            <input type="number" placeholder="2.0" step="0.01" className="small-text" value={oppositeOdds} onChange={(e) => setOppositeOdds(parseFloat(e.target.value) || 0)}/>
        </div>

        <div className="divider"></div>

        <div className="column">
            <h3>Summary</h3>
            <p className="label">Expected Value</p>
            <p className="small">
                {allInputsFilled && expectedValue != 0 ? expectedValue.toFixed(2) : "0.00 $"}
            </p>
            <p className="label">Your profit</p>
            <p className="small">
                {allInputsFilled && yourProfit != 0 ? yourProfit.toFixed(2) : "0.00 $"}
            </p>
        </div>
    </div>
  );
}