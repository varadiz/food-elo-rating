import * as elements from 'typed-html'
import type Food from '~/domain/food'

export const LeadersPage = ({ ranking }: { ranking: Food[] }) => (
  <div>
    <div class="row">
      <div class="col center-block text-center">
        <h1><a href="/">Leaders' Board</a></h1>
        <div>
          {
            ranking.map((food, index) => (
              <div>
                <h2>{index + 1}. {food.name} ELO: {Math.round(food.elo)}</h2>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
)
