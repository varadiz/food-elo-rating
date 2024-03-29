import type Food from '~/domain/food'

export interface FoodRepo {
  findAll: () => Food[]
  findByName: (name: string) => Food | undefined
  findLeaderboard: (topN: number) => Food[]
  persist: (food: Food) => void
}
