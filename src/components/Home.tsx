import './Home.css';
import '../index.css'

export default function Home() {
  return (
    <div id="home">
        <div className="column">
            <h3>Calculate</h3>
            <p>Stake</p>
            <input type="number" placeholder="100" className="small-text"/>
            <p>Your Odds</p>
            <input type="number" placeholder="1.75" className="small-text"/>
            <p>Opposite Odds</p>
            <input type="number" placeholder="2.0" className="small-text"/>
        </div>
        <div className="column">
            <h3>Summary</h3>
            <p className="label">Expected Value</p>
            <p className="small">95</p>
            <p className="label">Your profit</p>
            <p className="small">1.75</p>
            <p className="label">Bookmaker profit</p>
            <p className="small">2.0</p>
        </div>
    </div>
  );
}