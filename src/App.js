import React, { useState, useMemo } from 'react';
import Filters from './components/Filters.js';
import DishList from './components/DishList.js';
import IngredientModal from './components/IngredientModal.js';
import { mockDishes } from './data/mockDishes.js';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Filter dishes based on current filters
  const filteredDishes = useMemo(() => {
    return mockDishes.filter((dish) => {
      // Search filter (apply first, across ALL categories)
      if (searchTerm && !dish.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Category filter (only if search is empty)
      if (!searchTerm && dish.mealType !== selectedCategory) {
        return false;
      }

      // Veg/Non-veg filter
      if (vegOnly && nonVegOnly) {
        return true; // Show all if both checked
      } else if (vegOnly) {
        return dish.type === "VEG";
      } else if (nonVegOnly) {
        return dish.type === "NON_VEG";
      }

      return true;
    });
  }, [selectedCategory, searchTerm, vegOnly, nonVegOnly]);



  // Calculate category counts for selected dishes
  const categoryCounts = useMemo(() => {
    const counts = {
      "STARTER": 0,
      "MAIN COURSE": 0,
      "DESSERT": 0,
      "SIDES": 0
    };

    selectedDishes.forEach((dishId) => {
      const dish = mockDishes.find(d => d.id === dishId);
      if (dish) {
        counts[dish.mealType] = (counts[dish.mealType] || 0) + 1;
      }
    });

    return counts;
  }, [selectedDishes]);

  const handleAddDish = (dishId) => {
    setSelectedDishes(prev => [...prev, dishId]);
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes(prev => prev.filter(id => id !== dishId));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  const totalSelectedDishes = selectedDishes.length;

  return (
    <div className="app-container">
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        onVegOnlyChange={setVegOnly}
        onNonVegOnlyChange={setNonVegOnly}
        categoryCounts={categoryCounts}
      />

      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        onViewIngredients={handleViewIngredients}
      />

      <div className="bottom-section">
        <div className="total-count">
          <span className="total-label">Total Dish Selected</span>
          <div className="count-display">
            <span className="count-number">{totalSelectedDishes}</span>
          </div>
        </div>

        <button
          className={`continue-button ${totalSelectedDishes === 0 ? 'disabled' : ''}`}
          disabled={totalSelectedDishes === 0}
          onClick={() => {
            alert("✅ Order placed successfully!");
            setSelectedDishes([]);
          }}
        >
          Continue
        </button>
      </div>

      <IngredientModal
        dish={currentDish}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;

