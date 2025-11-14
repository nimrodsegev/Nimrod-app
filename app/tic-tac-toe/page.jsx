'use client';
import { useState } from 'react';
import styles from './page.module.css';

function Square({ value, onSquareClick }) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isTie(squares) {
    return squares.every(Boolean) && !calculateWinner(squares);
  }
  
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
  status = '🏆 Winner: ' + winner;
  } else if (isTie(squares)) {
  status = "🤝 It's a tie!";
  } else {
  status = '🕹️ Next player: ' + (xIsNext ? 'X' : 'O');
  }


  function handleRestart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function handleClick(i) {
    if (squares[i] || winner || isTie(squares)) {
        return;
      }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button onClick={handleRestart} className={styles.restartButton}>
        🔄 Restart Game
        </button>
      <div className={styles.footer}>Made with by Nimrod</div>
    </main>
  );
}

