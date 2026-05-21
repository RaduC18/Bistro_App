import foodPhoto from "../assets/FOOD.png";
import bucatari from "../assets/chiefs.png";
import location from "../assets/location.png";
import startingMenu from "../assets/startingMenu.png";
import endingMenu from "../assets/endingMenu.png";

export const FOOD = [
  { name: "Fish Dishes", img: foodPhoto },
  { name: "Royal Grill", img: foodPhoto },
  { name: "Side Dishes", img: foodPhoto },
  { name: "Salads", img: foodPhoto },
  { name: "Desserts", img: foodPhoto },
  { name: "Drinks", img: foodPhoto },
  { name: "Specialties", img: foodPhoto },
  { name: "Pasta", img: foodPhoto },
  { name: "Soups", img: foodPhoto },
];
export const TEAM = [{ name: "Team", img: bucatari }];

export const LOCATION = [{ name: "Location", img: location}];

export const MENU = [
  { id: 1, name: "Preparate de pește", img: startingMenu },
  { id: 2, name: "Preparate de pește", img: endingMenu },
];

export const CATEGORIES = [
  { id: 1, name: "Breakfast", time: "08:15-11:30" },
  { id: 2, name: "Starters" },
  { id: 3, name: "Appetizer Salads" },
  { id: 4, name: "Pasta" },
];

export const INITIAL_PRODUCTS = [
  {
    id: 1,
    categoryId: 1,
    name: "Fried Eggs",
    description: "2 eggs, salt, oil",
    price: "12.00",
    cartQuantity: 1,
    img: foodPhoto,
  },
  {
    id: 2,
    categoryId: 1,
    name: "Boiled Eggs",
    description: "2 eggs, 100g",
    price: "12.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
  {
    id: 3,
    categoryId: 1,
    name: "Ham and Cheese Omelette",
    description: "3 eggs 150g, Prague ham 50g...",
    price: "22.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
  {
    id: 4,
    categoryId: 2,
    name: "Tomato Bruschetta",
    description: "Toasted bread, tomatoes, garlic, basil",
    price: "18.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
  {
    id: 5,
    categoryId: 1,
    name: "Fluffy Pancakes",
    description: "3 homemade pancakes served with maple syrup and fresh berries",
    price: "24.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
  {
    id: 6,
    categoryId: 3,
    name: "Caesar Salad",
    description: "Grilled chicken breast, romaine lettuce, crunchy croutons, parmesan, Caesar dressing",
    price: "32.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
  {
    id: 7,
    categoryId: 3,
    name: "Greek Salad",
    description: "Fresh tomatoes, cucumbers, red onions, feta cheese, Kalamata olives, oregano and olive oil",
    price: "28.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
  {
    id: 8,
    categoryId: 4,
    name: "Pasta Carbonara",
    description: "Spaghetti, crispy pancetta, creamy egg yolk, pecorino romano and fresh black pepper",
    price: "35.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
  {
    id: 9,
    categoryId: 4,
    name: "Penne Arrabiata",
    description: "Penne pasta tossed in a spicy tomato sauce with garlic, chili flakes and fresh parsley",
    price: "29.00",
    cartQuantity: 0,
    img: foodPhoto,
  },
];