import type Food from '~/domain/food'

class EloRatingSystem {
  kFactor: number

  constructor(kFactor: number = 32) {
    this.kFactor = kFactor
  }

  expectedScore(ratingA: number, ratingB: number): number {
    return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400))
  }

  updateRating(currentRating: number, expectedScore: number, actualScore: number): number {
    return currentRating + this.kFactor * (actualScore - expectedScore)
  }

  compareFoods(winner: Food, loser: Food): Food[] {
    const expectedWinnerScore = this.expectedScore(winner.elo, loser.elo)
    const expectedLoserScore = this.expectedScore(loser.elo, winner.elo)

    const actualWinnerScore = 1
    const actualLoserScore = 0

    winner.elo = this.updateRating(winner.elo, expectedWinnerScore, actualWinnerScore)
    loser.elo = this.updateRating(loser.elo, expectedLoserScore, actualLoserScore)
    return [winner, loser]
  }
}

export default EloRatingSystem
