import React from 'react'
import { SQUARE } from './Square'
import { TURNS } from '../Constants'
import { WinnerModal } from './WinnerModal'
export default function Board({board, resetGame, updateBoard, turn, winner}) {
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <SQUARE key={index} index={index} updateBoard={updateBoard}>
              {square}
            </SQUARE>
          )
        })}
      </section>
      <section className="turn">
        <SQUARE isSelected={turn === TURNS.X}>{TURNS.X}</SQUARE>
        <SQUARE isSelected={turn === TURNS.O}>{TURNS.O}</SQUARE>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}
