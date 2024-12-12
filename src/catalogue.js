import images from "./assets/images/food.jpg";

const catalogue = {
  lastUpdate: "11-12-2024 00:50",
  items: [
    {
      id: "fried-chicken",
      name: "Fried Chicken",
      description: "Enjoy our mouth-watering crispy fried chicken. It's to die for!",
      price: 2500,
      images: [images],
    },
    {
      id: "fried-rice",
      name: "Fried Rice",
      description: "Enjoy our mouth-watering crispy fried chicken. It's to die for!",
      price: 2500,
      images: [images],
    },
    {
      id: "fried-egg",
      name: "Fried Egg",
      description: "Enjoy our mouth-watering crispy fried chicken. It's to die for!",
      price: 2500,
      images: [images],
    },
  ],
};
catalogue.items = new Array(13).fill(null).map((_, i) => catalogue.items[i % 3]);
export default catalogue;
