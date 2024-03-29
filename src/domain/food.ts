interface FoodSnapshot {
  name: string
  imageUrl: string
  elo: number
}

class Food {
  private readonly availableFoods: string[]
  name: string
  imageUrl: string
  elo: number = 0

  constructor() {
    this.availableFoods = [
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
    ]

    this.name = this.availableFoods[Math.floor(Math.random() * this.availableFoods.length)]
    this.imageUrl = `/img/${this.name}.jpg`
  }

  static fromSnapshot(data: FoodSnapshot) {
    const food = new Food()
    food.name = data.name
    food.imageUrl = data.imageUrl
    food.elo = data.elo
    return food
  }

  toSnapshot(): FoodSnapshot {
    return {
      name: this.name,
      imageUrl: this.imageUrl,
      elo: this.elo
    }
  }
}

export default Food
