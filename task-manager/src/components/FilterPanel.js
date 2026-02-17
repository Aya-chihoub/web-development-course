import React from "react";

function FilterPanel({ currentFilter, onFilterChange }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="filter-panel">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`btn-filter ${currentFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterPanel;
