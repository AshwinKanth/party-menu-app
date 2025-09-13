import React, { useMemo } from 'react';
import DishCard from './DishCard.js';
import { FaChevronDown } from "react-icons/fa";
import './DishList.css';

const DishList = ({ dishes, selectedDishes, onAddDish, onRemoveDish, onViewIngredients }) => {
  // Group dishes by category
  const groupedDishes = useMemo(() => {
    const groups = {};
    dishes.forEach((dish) => {
      const categoryName = dish.category.name;
      if (!groups[categoryName]) {
        groups[categoryName] = [];
      }
      groups[categoryName].push(dish);
    });
    return groups;
  }, [dishes]);

  return (
    <div className="dish-list-container">
      {Object.entries(groupedDishes).map(([categoryName, categoryDishes]) => (
        <div key={categoryName} className="category-section">
          <div className="category-header">
            <h2 className="category-title">{categoryName}</h2>
            <FaChevronDown className='chevron-icon' />
          </div>
          
          <div className="dishes-grid">
            {categoryDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                isSelected={selectedDishes.includes(dish.id)}
                onAddDish={onAddDish}
                onRemoveDish={onRemoveDish}
                onViewIngredients={onViewIngredients}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishList;