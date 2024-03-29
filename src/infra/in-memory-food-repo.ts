import Food from '~/domain/food'
import { type FoodRepo } from '~/domain/food-repo.interface'

export class InMemoryFoodRepo implements FoodRepo {
  private foods: Food[] = [
    'apple_pie', 'guacamole', 'baby_back_ribs', 'gyoza', 'baklava',
    'hamburger', 'beef_carpaccio', 'hot_and_sour_soup', 'beef_tartare',
    'hot_dog', 'beet_salad', 'huevos_rancheros', 'beignets', 'hummus',
    'bibimbap', 'ice_cream', 'bread_pudding', 'lasagna', 'breakfast_burrito',
    'lobster_bisque', 'bruschetta', 'lobster_roll_sandwich', 'caesar_salad',
    'macaroni_and_cheese', 'cannoli', 'macarons', 'caprese_salad',
    'miso_soup', 'carrot_cake', 'mussels', 'ceviche', 'nachos',
    'cheese_plate', 'omelette', 'cheesecake', 'onion_rings', 'chicken_curry',
    'oysters', 'chicken_quesadilla', 'pad_thai', 'chicken_wings', 'paella',
    'chocolate_cake', 'pancakes', 'chocolate_mousse', 'panna_cotta',
    'churros', 'peking_duck', 'clam_chowder', 'pho', 'club_sandwich',
    'pizza', 'crab_cakes', 'pork_chop', 'creme_brulee', 'poutine',
    'croque_madame', 'prime_rib', 'cup_cakes', 'pulled_pork_sandwich',
    'deviled_eggs', 'ramen', 'donuts', 'ravioli', 'dumplings',
    'red_velvet_cake', 'edamame', 'risotto', 'eggs_benedict',
    'samosa', 'escargots', 'sashimi', 'falafel', 'scallops',
    'filet_mignon', 'seaweed_salad', 'fish_and_chips', 'shrimp_and_grits',
    'foie_gras', 'spaghetti_bolognese', 'french_fries',
    'spaghetti_carbonara', 'french_onion_soup', 'spring_rolls',
    'french_toast', 'steak', 'fried_calamari', 'strawberry_shortcake',
    'fried_rice', 'sushi', 'frozen_yogurt', 'tacos', 'garlic_bread',
    'takoyaki', 'gnocchi', 'tiramisu', 'greek_salad', 'tuna_tartare',
    'grilled_cheese_sandwich', 'waffles', 'grilled_salmon'
  ].map(name => Food.fromSnapshot({
    name,
    imageUrl: `img/${name}.jpg`,
    elo: 1000 // 初期値
  }))

  findAll(): Food[] {
    return this.foods
  }

  findByName(name: string): Food | undefined {
    return this.foods.find(food => food.name === name)
  }

  findLeaderboard(topN: number): Food[] {
    return this.foods.sort((a, b) => b.elo - a.elo).slice(0, topN)
  }

  persist(food: Food): void {
    const replacement = this.foods.filter(item => item.name !== food.name)
    this.foods = replacement
    this.foods.push(food)
  }
}
