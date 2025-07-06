import './Home.css';
import '../index.css'
import { useState } from "react";

export default function Home() {
const [stake, setStake] = useState<string>("");
const [yourOdds, setYourOdds] = useState<string>("");
const [oppositeOdds, setOppositeOdds] = useState<string>("");

  // Compute dynamically based on inputs
  let expectedValue = 0;
  let yourProfit = 0;

  const allInputsFilled = stake && yourOdds && oppositeOdds;

  if (allInputsFilled) {
    const stakeNum = parseFloat(stake);
    const yourOddsNum = parseFloat(yourOdds);
    const oppositeOddsNum = parseFloat(oppositeOdds);

    // Perform calculations
    let totalWin = stakeNum * yourOddsNum;
    let yourProbability = 1.0 / yourOddsNum;
    let oppositeProbability = 1.0 / oppositeOddsNum;
    let totalProbability = yourProbability + oppositeProbability;

    // Calculate expected value
    // EV = Total Win * (Your Probability / Total Probability)
    expectedValue = totalWin * (yourProbability / totalProbability);

    // Calculate profits
    // Your Profit = Expected Value - Stake
    yourProfit = expectedValue - stakeNum;
  }

  return (
    <div id="home">
        <div className="column">
            <h3>Calculate</h3>
            <p className="label">Stake</p>
            <input type="number" placeholder="100" step="0.01" className="small-text" value={stake} onChange={(e) => setStake(e.target.value)}/>
            <p className="label">Your Odds</p>
            <input type="number" placeholder="1.75" step="0.01" className="small-text" value={yourOdds} onChange={(e) => setYourOdds(e.target.value)}/>
            <p className="label">Opposite Odds</p>
            <input type="number" placeholder="2.0" step="0.01" className="small-text" value={oppositeOdds} onChange={(e) => setOppositeOdds(e.target.value)}/>
        </div>

        <div className="divider"></div>

        <div className="column">
            <h3>Summary</h3>
            <p className="label">Expected Value</p>
            <p className="small">
                {allInputsFilled && expectedValue != 0 ? expectedValue.toFixed(2) : "0.00"} $
            </p>
            <p className="label">Your profit</p>
            <p className="small">
                {allInputsFilled && yourProfit != 0 ? yourProfit.toFixed(2) : "0.00"} $
            </p>
        </div>
    </div>
  );
}