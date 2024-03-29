import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { BaseHTML } from '~/web/base'
import { HomePage, ArenaPage, LeadersPage } from '~/web/pages'
import Food from '~/domain/food'
import EloRatingSystem from '~/domain/elo'
import { InMemoryFoodRepo } from '~/infra/in-memory-food-repo'

const foodRepo = new InMemoryFoodRepo()
const elo = new EloRatingSystem()

const app = new Elysia().use(html())

app.get('/', ({ html }) => {
  return html(
    <BaseHTML>
      <HomePage />
    </BaseHTML>
  )
})

app.get('/arena', ({ html }) => {
  const foodA = new Food()
  const foodB = new Food()
  return html(
    <BaseHTML>
      <ArenaPage foodA={foodA} foodB={foodB} />
    </BaseHTML>
  )
})

app.post('/battle', ({ body, set }) => {
  const { winner: winnerName, loser: loserName } = body as {
    winner: string
    loser: string
  }

  const winner = foodRepo.findByName(winnerName)
  const loser = foodRepo.findByName(loserName)

  if (winner == null || loser == null) {
    throw new Error('Food not found')
  }

  const [updatedFoodA, updatedFoodB] = elo.compareFoods(winner, loser)
  foodRepo.persist(updatedFoodA)
  foodRepo.persist(updatedFoodB)

  set.headers['HX-Refresh'] = 'true' // triggers refresh on client side
})

app.get('/leaders', ({ html }) => {
  const leaderboard = foodRepo.findLeaderboard(10)
  return html(
    <BaseHTML>
      <LeadersPage ranking={leaderboard} />
    </BaseHTML>
  )
})

app.get('/img/:name', ({ params: { name } }) => Bun.file(`src/web/img/${name}`))

app.listen(3000)

console.info(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`
)
