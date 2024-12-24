import friedChicken from "./assets/images/fried-chicken.webp";
import friedEgg from "./assets/images/fried-egg.jpg";
import friedRice from "./assets/images/chicken-fried-rice.jpg";
import boiledEgg from "./assets/images/boiled-egg.jpg";
import omelette from "./assets/images/omelette.jpg";
import scrambledEgg from "./assets/images/scrambled-egg.jpg";
import bakedChicken from "./assets/images/baked-chicken.jpeg";
import bakedFish from "./assets/images/baked-fish.jpg";

const catalogue = {
  lastUpdate: "11-12-2024 00:50",
  items: {
    "fried-chicken": {
      id: "fried-chicken",
      name: "Fried Chicken",
      description:
        "Our mouth-watering crispy fried chicken is a must try! Cooked to perfection, this dish is sure to satisfy your cravings.",
      price: 10000,
      images: [friedChicken],
    },
    "fried-rice": {
      id: "fried-rice",
      name: "Fried Rice",
      description: "Savor the flavors of our mouth-watering crispy fried rice, cooked with love and care.",
      price: 8000,
      images: [friedRice],
    },
    "fried-egg": {
      id: "fried-egg",
      name: "Fried Egg",
      description: "Our fried egg is a breakfast staple, cooked to perfection and served with a side of love.",
      price: 5000,
      images: [friedEgg],
    },
    "boiled-egg": {
      id: "boiled-egg",
      name: "Boiled Egg",
      description: "A simple yet satisfying snack, our boiled egg is a classic.",
      price: 500,
      images: [boiledEgg],
    },
    omelette: {
      id: "omelette",
      name: "Omelette",
      description: "A fluffy and flavorful omelette, filled with your choice of ingredients.",
      price: 2000,
      images: [omelette],
    },
    "scrambled-egg": {
      id: "scrambled-egg",
      name: "Scrambled Egg",
      description: "Our scrambled egg is a breakfast favorite, cooked to perfection.",
      price: 1500,
      images: [scrambledEgg],
    },
    "baked-chicken": {
      id: "baked-chicken",
      name: "Baked Chicken",
      description: "Our baked chicken is a healthier alternative to fried chicken, cooked to perfection.",
      price: 3000,
      images: [bakedChicken],
    },
    "baked-fish": {
      id: "baked-fish",
      name: "Baked Fish",
      description: "A delicious and healthy meal, our baked fish is cooked to perfection.",
      price: 3000,
      images: [bakedFish],
    },
  },
};
export default catalogue;
