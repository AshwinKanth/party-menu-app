import React from 'react';
import { mockIngredients } from '../data/mockDishes.js';
import { imageMap } from '../data/imageMap.js';
import './IngredientModal.css';
import { FaAngleLeft } from "react-icons/fa";
import { LuSquareDot } from "react-icons/lu";

const IngredientModal = ({ dish, isOpen, onClose }) => {
  if (!isOpen || !dish) return null;

  const ingredients = mockIngredients[dish.id] || [];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <button className="back-button" onClick={onClose}>
            <FaAngleLeft className='back-icon' />
          </button>
          <h1 className="modal-title">Ingredient</h1>
        </div>

        {/* Dish Info */}
        <div className="dish-info-section">
          {/* Dish Image */}
          <div className="dish-modal-image-wrapper">
            <img
              src={imageMap[dish.id]}
              alt={dish.name}
              className="dish-modal-image"
            />
          </div>

          {/* Name + Diet type */}
          <div className="dish-name-container">
            <h2 className="dish-modal-name">{dish.name}</h2>
            <LuSquareDot
              className="diet-indicator"
              color={dish.type === "VEG" ? "green" : "red"}
            />
          </div>
          <p className="dish-modal-description">{dish.description}</p>
        </div>

        {/* Ingredients List */}
        <div className="ingredients-section">
          <h3 className="ingredients-title">Ingredients</h3>
          <div className="ingredients-list">
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">
                    {ingredient.quantity} {ingredient.unit || ''}
                  </span>
                </div>
              ))
            ) : (
              <p className="no-ingredients">No ingredients available for this dish.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;
