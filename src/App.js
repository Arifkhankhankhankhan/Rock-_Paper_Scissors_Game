import React, { useState } from 'react';
import './App.css';

function App() {
  const [yourScore, setYourScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [outputMessage, setOutputMessage] = useState('');
  const choices = ['✊', '✋', '✌'];

  const computerChoice = () => {
      const randomChoice = Math.floor(Math.random() * 3);
      return choices[randomChoice];
  }

  const handleButtonClick = (choice) => {
      const computerChoiceValue = computerChoice();
      let result = '';

      if (choice === computerChoiceValue) {
          result = "It's Tie!!!";
      } else if ((choice === '✊' && computerChoiceValue === '✌') ||
                 (choice === '✋' && computerChoiceValue === '✊') ||
                 (choice === '✌' && computerChoiceValue === '✋')) {
          result = 'You Win!!!';
          setYourScore(prevScore => prevScore + 1);
      } else {
          result = 'You Lose!!!';
          setComputerScore(prevScore => prevScore + 1);
      }

      setOutputMessage(result);
  }

  return (
      <div className="container">
          <div className="header">
              <h1>Rock Paper Scissor</h1>
          </div>
          <div className="score">
              <p>Your Score: <span>{yourScore}</span></p>
              <p>Computer Score: <span>{computerScore}</span></p>
          </div>
          <div className="game">
              {choices.map(choice => (
                  <button key={choice} onClick={() => handleButtonClick(choice)}>
                      {choice}
                  </button>
              ))}
          </div>
          <div className="output">
              {outputMessage && <p>{outputMessage}</p>}
          </div>
      </div>
  );
}

export default App;
