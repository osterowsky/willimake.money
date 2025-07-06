import './Home.css';
import '../index.css'

export default function Home() {
  return (
    <div id="home">
        <div className="column">
            <h3>Calculate</h3>
            <p className="label">Stake</p>
            <input type="number" placeholder="100" step="0.01" className="small-text"/>
            <p className="label">Your Odds</p>
            <input type="number" placeholder="1.75" step="0.01" className="small-text"/>
            <p className="label">Opposite Odds</p>
            <input type="number" placeholder="2.0" step="0.01" className="small-text"/>
        </div>

        <div className="divider"></div>

        <div className="column">
            <h3>Summary</h3>
            <p className="label">Expected Value</p>
            <p className="small">95.45 $</p>
            <p className="label">Your profit</p>
            <p className="small">-4.50 $</p>
            <p className="label">Bookmaker profit</p>
            <p className="small">2.50 $</p>
        </div>
    </div>
  );
}