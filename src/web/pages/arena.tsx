import * as elements from 'typed-html'
import type Food from '~/domain/food'

export const ArenaPage = ({ foodA, foodB }: { foodA: Food, foodB: Food }) => (
  <div>
    <div class="row">
      <div class="col center-block text-center">
        <h1><a href="/">Food Arena</a></h1>
      </div>
    </div>

    <div class="row">
      <div class="col-5">
        <img class="glow img-fluid" height='400px' src={foodA.imageUrl}
          hx-post="/battle"
          hx-trigger="click"
          hx-vals={JSON.stringify({ winner: foodA.name, loser: foodB.name })}
          hx-headers='{"Content-Type": "application/json"}'
        />
      </div>

      <div class="col d-flex justify-content-center align-items-center">
        <h2>V.S.</h2>
      </div>

      <div class="col-5">
        <img class="glow img-fluid" height='400px' src={foodB.imageUrl}
          hx-post="/battle"
          hx-trigger="click"
          hx-vals={JSON.stringify({ winner: foodB.name, loser: foodA.name })}
          hx-headers='{"Content-Type": "application/json"}'
        />
      </div>
    </div>

    <div class="row my-5">
      <div class="col-5">
        <h2>{foodA.name.replace('_', '')}</h2>
      </div>
      <div class="col" />
      <div class="col-5">
        <h2>{foodB.name.replace('_', '')}</h2>
      </div>
    </div>

    <div class="row my-3">
      <div class="col center-block text-center">
        <h1>YOU MUST CHOOSE</h1>
      </div>
    </div>
  </div>
)
