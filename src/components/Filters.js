import React from 'react';
import { FiSearch } from "react-icons/fi";
import './Filters.css';

const Filters = ({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  nonVegOnly,
  onVegOnlyChange,
  onNonVegOnlyChange,
  categoryCounts
}) => {
  const categories = [
    { id: "STARTER", label: "Starter" },
    { id: "MAIN COURSE", label: "Main Course" },
    { id: "DESSERT", label: "Dessert" },
    { id: "SIDES", label: "Sides" }
  ];

  return (
    <div className="filters-container">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <FiSearch className='search-icon' />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Veg/Non-Veg Filters */}
      <div className="diet-filters">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => onVegOnlyChange(e.target.checked)}
          />
          <span className="checkmark veg"></span>
          <span className="filter-label">Veg Only</span>
        </label>

        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={nonVegOnly}
            onChange={(e) => onNonVegOnlyChange(e.target.checked)}
          />
          <span className="checkmark non-veg"></span>
          <span className="filter-label">Non-Veg Only</span>
        </label>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span className="tab-label">{category.label}</span>
            {categoryCounts[category.id] > 0 && (
              <span className="tab-count">{categoryCounts[category.id]}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;