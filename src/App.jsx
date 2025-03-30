import '../css/reset.css';
import '../css/main.css';
import '../css/index.css';

import Choice from './components/Choice';


import rockSVG from './assets/hand-rock.svg';
console.log('First SVG imported');
import paperSVG from './assets/hand-paper.svg';
import scissorsSVG from './assets/hand-scissors.svg';
import startGameSVG from './assets/rectangle-1.svg';

function App() {
    return (
        // <div className="wrapper-main">
        <div className="app-container">
            <h1 className="game-title">Rochambeau</h1>

            <div className="game-messages">
                Rock, Paper, Scissors
            </div>

            <div className="player-choice">
                <Choice img={rockSVG} label="Rock" onClick={() => console.log('Rock')} />
                <Choice img={paperSVG} label="Paper" onClick={() => console.log('Paper')} />
                <Choice img={scissorsSVG} label="Scissors" onClick={() => console.log('Scissors')} />
            </div>

            <div className="start-game-button">
                <button className="start-button">
                    <img src={startGameSVG} alt="" aria-hidden="true" />
                    <span className="start-button-text">Play Game!</span>
                </button>
            </div>

        </div>
        // </div>
    );
}

export default App;
