import { SQUARE } from './Square'

export function WinnerModal({winner, resetGame}) {
  if (winner === null) return null
  const winnerText = winner ===false? 'Empate': 'Ganó'
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <SQUARE>{winner}</SQUARE>}</header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
