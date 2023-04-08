import { WINNER_COMBOS } from '../Constants'

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] && // -> x || o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}
export function checkEndGame(newBoard) {
  return newBoard.every((square) => square !== null)
}
