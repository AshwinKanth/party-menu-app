// Ingredients for each dish
export const mockIngredients = {
  //  Starters
  101: [
    { name: "Paneer", quantity: "250", unit: "grams" },
    { name: "Yogurt", quantity: "1/2", unit: "cup" },
    { name: "Red chili powder", quantity: "1", unit: "tsp" },
    { name: "Turmeric", quantity: "1/4", unit: "tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  102: [
    { name: "Chicken", quantity: "300", unit: "grams" },
    { name: "Yogurt", quantity: "1/2", unit: "cup" },
    { name: "Ginger-garlic paste", quantity: "1", unit: "tbsp" },
    { name: "Spices", quantity: "2", unit: "tsp" }
  ],
  103: [
    { name: "Spring roll sheets", quantity: "10", unit: "pcs" },
    { name: "Cabbage", quantity: "1", unit: "cup shredded" },
    { name: "Carrot", quantity: "1/2", unit: "cup grated" },
    { name: "Oil", quantity: "for deep frying" }
  ],
  104: [
    { name: "Fish fillets", quantity: "250", unit: "grams" },
    { name: "Yogurt", quantity: "1/4", unit: "cup" },
    { name: "Red chili powder", quantity: "1", unit: "tsp" },
    { name: "Lemon juice", quantity: "1", unit: "tbsp" }
  ],

  //  Main Courses
  1: [
    { name: "Chicken", quantity: "500", unit: "grams" },
    { name: "Yogurt", quantity: "1/2", unit: "cup" },
    { name: "Tandoori masala", quantity: "2", unit: "tbsp" },
    { name: "Lemon juice", quantity: "1", unit: "tbsp" }
  ],
  2: [
    { name: "Black lentils", quantity: "1", unit: "cup" },
    { name: "Kidney beans", quantity: "1/4", unit: "cup" },
    { name: "Cream", quantity: "2", unit: "tbsp" },
    { name: "Butter", quantity: "1", unit: "tbsp" }
  ],
  3: [
    { name: "Paneer", quantity: "300", unit: "grams" },
    { name: "Capsicum", quantity: "2", unit: "medium" },
    { name: "Onion", quantity: "2", unit: "medium" },
    { name: "Tomato puree", quantity: "1/2", unit: "cup" }
  ],
  4: [
    { name: "Chicken", quantity: "400", unit: "grams" },
    { name: "Tomato puree", quantity: "1", unit: "cup" },
    { name: "Butter", quantity: "2", unit: "tbsp" },
    { name: "Cream", quantity: "2", unit: "tbsp" }
  ],
  5: [
    { name: "Spinach", quantity: "2", unit: "cups" },
    { name: "Paneer", quantity: "200", unit: "grams" },
    { name: "Green chili", quantity: "1", unit: "pc" },
    { name: "Garlic", quantity: "2", unit: "cloves" }
  ],
  6: [
    { name: "Basmati rice", quantity: "2", unit: "cups" },
    { name: "Chicken", quantity: "500", unit: "grams" },
    { name: "Biryani masala", quantity: "2", unit: "tbsp" },
    { name: "Yogurt", quantity: "1/2", unit: "cup" }
  ],

  //  Desserts
  201: [
    { name: "Milk solids (khoya)", quantity: "1", unit: "cup" },
    { name: "Flour", quantity: "2", unit: "tbsp" },
    { name: "Sugar syrup", quantity: "1", unit: "cup" },
    { name: "Cardamom", quantity: "1/2", unit: "tsp" }
  ],
  202: [
    { name: "Milk", quantity: "500", unit: "ml" },
    { name: "Sugar", quantity: "3", unit: "tbsp" },
    { name: "Pistachios", quantity: "2", unit: "tbsp chopped" },
    { name: "Cardamom powder", quantity: "1/2", unit: "tsp" }
  ],
  203: [
    { name: "All-purpose flour", quantity: "1", unit: "cup" },
    { name: "Cocoa powder", quantity: "1/2", unit: "cup" },
    { name: "Butter", quantity: "1/2", unit: "cup" },
    { name: "Sugar", quantity: "1", unit: "cup" }
  ],

  //  Sides
  301: [
    { name: "Flour", quantity: "2", unit: "cups" },
    { name: "Yeast", quantity: "1", unit: "tsp" },
    { name: "Milk", quantity: "1/2", unit: "cup" },
    { name: "Salt", quantity: "1/2", unit: "tsp" }
  ],
  302: [
    { name: "Basmati rice", quantity: "2", unit: "cups" },
    { name: "Cumin seeds", quantity: "1", unit: "tsp" },
    { name: "Oil", quantity: "1", unit: "tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  303: [
    { name: "Yogurt", quantity: "1", unit: "cup" },
    { name: "Cucumber", quantity: "1/2", unit: "cup chopped" },
    { name: "Tomato", quantity: "1/2", unit: "cup chopped" },
    { name: "Mint", quantity: "1", unit: "tbsp chopped" }
  ],
  304: [
    { name: "Potatoes", quantity: "3", unit: "medium" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ]
};

//  Dishes
export const mockDishes = [
  //  Starters
  {
    id: 101,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes marinated in spices and yogurt",
    image: null,
    mealType: "STARTER",
    type: "VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "GRILLED"
  },
  {
    id: 102,
    name: "Chicken Tikka",
    description: "Succulent chicken pieces marinated and grilled to perfection",
    image: null,
    mealType: "STARTER",
    type: "NON_VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "GRILLED"
  },
  {
    id: 103,
    name: "Vegetable Spring Rolls",
    description: "Crispy rolls filled with fresh vegetables",
    image: null,
    mealType: "STARTER",
    type: "VEG",
    categoryId: 2,
    category: { id: 2, name: "Chinese" },
    dishType: "FRIED"
  },
  {
    id: 104,
    name: "Fish Tikka",
    description: "Fresh fish marinated with Indian spices and grilled",
    image: null,
    mealType: "STARTER",
    type: "NON_VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "GRILLED"
  },

  //  Main Courses
  {
    id: 1,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a clay oven",
    image: null,
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY"
  },
  {
    id: 2,
    name: "Dal Makhani",
    description: "Creamy lentil curry cooked with butter and cream",
    image: null,
    mealType: "MAIN COURSE",
    type: "VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY"
  },
  {
    id: 3,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy",
    image: null,
    mealType: "MAIN COURSE",
    type: "VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY"
  },
  {
    id: 4,
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato and butter curry",
    image: null,
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY"
  },
  {
    id: 5,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in creamy spinach curry",
    image: null,
    mealType: "MAIN COURSE",
    type: "VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY"
  },
  {
    id: 6,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and spices",
    image: null,
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "RICE"
  },

  //  Desserts
  {
    id: 201,
    name: "Gulab Jamun",
    description: "Deep-fried milk dumplings soaked in sugar syrup",
    image: null,
    mealType: "DESSERT",
    type: "VEG",
    categoryId: 3,
    category: { id: 3, name: "Indian Sweets" },
    dishType: "SWEET"
  },
  {
    id: 202,
    name: "Kulfi",
    description: "Traditional Indian ice cream flavored with cardamom and pistachios",
    image: null,
    mealType: "DESSERT",
    type: "VEG",
    categoryId: 3,
    category: { id: 3, name: "Indian Sweets" },
    dishType: "FROZEN"
  },
  {
    id: 203,
    name: "Chocolate Brownie",
    description: "Rich and fudgy chocolate brownie served warm",
    image: null,
    mealType: "DESSERT",
    type: "VEG",
    categoryId: 4,
    category: { id: 4, name: "Continental" },
    dishType: "BAKED"
  },

  //  Sides
  {
    id: 301,
    name: "Naan",
    description: "Traditional Indian bread baked in tandoor",
    image: null,
    mealType: "SIDES",
    type: "VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "BREAD"
  },
  {
    id: 302,
    name: "Jeera Rice",
    description: "Fragrant basmati rice cooked with cumin seeds",
    image: null,
    mealType: "SIDES",
    type: "VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "RICE"
  },
  {
    id: 303,
    name: "Mixed Raita",
    description: "Yogurt mixed with cucumber, tomato and mint",
    image: null,
    mealType: "SIDES",
    type: "VEG",
    categoryId: 1,
    category: { id: 1, name: "North Indian" },
    dishType: "ACCOMPANIMENT"
  },
  {
    id: 304,
    name: "French Fries",
    description: "Crispy golden potato fries",
    image: null,
    mealType: "SIDES",
    type: "VEG",
    categoryId: 4,
    category: { id: 4, name: "Continental" },
    dishType: "FRIED"
  }
];
