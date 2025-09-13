import React, { useMemo } from "react";
import DishCard from "./DishCard.js";
import { FaChevronDown } from "react-icons/fa";
import emptyImage from "../assets/not-found.png";
import "./DishList.css";

const DishList = ({ dishes, selectedDishes, onAddDish, onRemoveDish, onViewIngredients }) => {
  const isEmpty = !dishes || dishes.length === 0;

  const groupedDishes = useMemo(() => {
    if (isEmpty) return {};
    const groups = {};
    dishes.forEach((dish) => {
      const categoryName = dish.category?.name || "Others";
      if (!groups[categoryName]) {
        groups[categoryName] = [];
      }
      groups[categoryName].push(dish);
    });
    return groups;
  }, [dishes, isEmpty]);

  return (
    <div className="dish-list-container">
      {isEmpty ? (
        <div className="no-results">
          <img
            src={emptyImage}
            alt="No results"
            className="no-results-image"
          />
          <p className="no-results-text">No dishes found. Try adjusting filters!</p>
        </div>
      ) : (
        Object.entries(groupedDishes).map(([categoryName, categoryDishes]) => (
          <div key={categoryName} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{categoryName}</h2>
              <FaChevronDown className="chevron-icon" />
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
        ))
      )}
    </div>
  );
};

export default DishList;
