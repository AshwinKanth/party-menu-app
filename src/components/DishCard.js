import React from "react";
import "./DishCard.css";
import { FaPlus } from "react-icons/fa";
import { LuSquareDot } from "react-icons/lu";
import { imageMap } from "../data/imageMap";
import notFoundImage from "../assets/not-found.png";


const DishCard = ({ dish, isSelected, onAddDish, onRemoveDish, onViewIngredients }) => {
  const getImage = (id) => imageMap[id] || notFoundImage;

  return (
    <div className="dish-card">
      {/* LEFT: details */}
      <div className="dish-left">
        <div className="dish-name-row">
          <h3 className="dish-name" title={dish.name}>{dish.name}</h3>
          <LuSquareDot
            className="diet-indicator"
            size={14}
            color={dish.type === "VEG" ? "#16a34a" : "#ef4444"}
            aria-label={dish.type === "VEG" ? "veg" : "non-veg"}
          />
        </div>

        <p className="dish-description">
          {dish.description}
        </p>

        <button className="ingredient-button" onClick={() => onViewIngredients(dish)}>
          🍲 Ingredient
        </button>
      </div>

      {/* RIGHT: image + overlay button */}
      <div className="dish-right">
        <div className="dish-image-wrapper">
          <img
            // src={imageSrc}
            src={dish.image || getImage(dish.id)}
            alt={dish.name}
            className="dish-image"
            onError={(e) => (e.target.src = notFoundImage)}
          />

          <button
            className={`image-action-pill ${isSelected ? "remove" : "add"}`}
            onClick={() => (isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id))}
            aria-pressed={isSelected}
          >
            {isSelected ? "Remove" : (<>Add <FaPlus className="pill-plus" /> </>)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
