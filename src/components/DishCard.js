import React from "react";
import "./DishCard.css";
import { imageMap } from "../data/imageMap";
import { FaPlus } from "react-icons/fa";
import { LuSquareDot } from "react-icons/lu";


const fallbackImage =
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop&crop=center";

const DishCard = ({ dish, isSelected, onAddDish, onRemoveDish, onViewIngredients }) => {
  const getImage = (id) => imageMap[id] || fallbackImage;

  return (
    <div className="dish-card">
      <div className="dish-content">
        {/* Dish Image */}
        <div className="dish-image-container">
          <div className="dish-image-wrapper">
            <img
              src={dish.image || getImage(dish.id)}
              alt={dish.name}
              className="dish-image"
              onError={(e) => (e.target.src = fallbackImage)}
            />
          </div>
        </div>

        {/* Dish Details */}
        <div className="dish-details">
          <div className="dish-header">
            <div className="dish-info">
              <div className="dish-name-row">
                <h3 className="dish-name">{dish.name}</h3>
                <LuSquareDot
                  className="diet-indicator"
                  color={dish.type === "VEG" ? "green" : "red"}
                />
              </div>
              <p className="dish-description">{dish.description}</p>
              <button className="ingredient-button" onClick={() => onViewIngredients(dish)}>
                🥘 Ingredient
              </button>
            </div>

            {/* Add/Remove Button */}
            <div className="action-button-container">
              {isSelected ? (
                <button className="remove-button" onClick={() => onRemoveDish(dish.id)}>
                  Remove
                </button>
              ) : (
                <button className="add-button" onClick={() => onAddDish(dish.id)}>
                  <FaPlus className="plus-icon" />
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
