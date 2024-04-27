/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Sidebar.css';
import arrow from '../../images/arrow-left.png';

const Sidebar = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });

  const toggleFilter = (filter) => {
    const updatedFilters = { ...filters, [filter]: !filters[filter] };
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = { ...filters };
    if (updatedFilters[filterType].includes(value)) {
      updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value);
    } else {
      updatedFilters[filterType] = [...updatedFilters[filterType], value];
    }
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  return (
    <aside id="filter">
      <span className="customize">
        <input type="checkbox" />
        <span >CUSTOMIZABLE</span>
        
      </span>
      
      {Object.keys(filters).map((filter) => (
        <div key={filter} className={filter}>
          <section className="filter-headings">
            <span>{filter.toUpperCase()}</span>

            <img
              src={arrow}
              alt=""
              onClick={() => toggleFilter(filter)}
              className={filters[filter] ? "rotate" : ""}
            />
          </section>
          {filters[filter] && (
            <div className="category-type">
              {filter === "idealFor" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Men"
                      onChange={() => handleCheckboxChange("idealFor", "Men")}
                      checked={filters.idealFor.includes("Men")}
                    />
                    Men
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Women"
                      onChange={() => handleCheckboxChange("idealFor", "Women")}
                      checked={filters.idealFor.includes("Women")}
                    />
                    Women
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Baby & Kids"
                      onChange={() =>
                        handleCheckboxChange("idealFor", "Baby & Kids")
                      }
                      checked={filters.idealFor.includes("Baby & Kids")}
                    />
                    Baby & Kids
                  </label>
                </div>
              )}
              {filter === "occasion" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Casual"
                      onChange={() =>
                        handleCheckboxChange("occasion", "Casual")
                      }
                      checked={filters.occasion.includes("Casual")}
                    />
                    Casual
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Business"
                      onChange={() =>
                        handleCheckboxChange("occasion", "Business")
                      }
                      checked={filters.occasion.includes("Business")}
                    />
                    Business
                  </label>
                </div>
              )}
              {filter === "work" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Office"
                      onChange={() => handleCheckboxChange("work", "Office")}
                      checked={filters.work.includes("Office")}
                    />
                    Office
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Travel"
                      onChange={() => handleCheckboxChange("work", "Travel")}
                      checked={filters.work.includes("Travel")}
                    />
                    Travel
                  </label>
                  {/* Add more work options as needed */}
                </div>
              )}
              {filter === "fabric" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Cotton"
                      onChange={() => handleCheckboxChange("fabric", "Cotton")}
                      checked={filters.fabric.includes("Cotton")}
                    />
                    Cotton
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Polyester"
                      onChange={() =>
                        handleCheckboxChange("fabric", "Polyester")
                      }
                      checked={filters.fabric.includes("Polyester")}
                    />
                    Polyester
                  </label>
                  {/* Add more fabric options as needed */}
                </div>
              )}
              {filter === "segment" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Premium"
                      onChange={() =>
                        handleCheckboxChange("segment", "Premium")
                      }
                      checked={filters.segment.includes("Premium")}
                    />
                    Premium
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Economy"
                      onChange={() =>
                        handleCheckboxChange("segment", "Economy")
                      }
                      checked={filters.segment.includes("Economy")}
                    />
                    Economy
                  </label>
                  {/* Add more segment options as needed */}
                </div>
              )}
              {filter === "suitableFor" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Adults"
                      onChange={() =>
                        handleCheckboxChange("suitableFor", "Adults")
                      }
                      checked={filters.suitableFor.includes("Adults")}
                    />
                    Adults
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Teenagers"
                      onChange={() =>
                        handleCheckboxChange("suitableFor", "Teenagers")
                      }
                      checked={filters.suitableFor.includes("Teenagers")}
                    />
                    Teenagers
                  </label>
                  {/* Add more suitableFor options as needed */}
                </div>
              )}
              {filter === "rawMaterials" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Organic Cotton"
                      onChange={() =>
                        handleCheckboxChange("rawMaterials", "Organic Cotton")
                      }
                      checked={filters.rawMaterials.includes("Organic Cotton")}
                    />
                    Organic Cotton
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Synthetic"
                      onChange={() =>
                        handleCheckboxChange("rawMaterials", "Synthetic")
                      }
                      checked={filters.rawMaterials.includes("Synthetic")}
                    />
                    Synthetic
                  </label>
                  {/* Add more rawMaterials options as needed */}
                </div>
              )}
              {filter === "pattern" && (
                <div className="filter_list">
                  <label>
                    <input
                      type="checkbox"
                      value="Plain"
                      onChange={() => handleCheckboxChange("pattern", "Plain")}
                      checked={filters.pattern.includes("Plain")}
                    />
                    Plain
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Printed"
                      onChange={() =>
                        handleCheckboxChange("pattern", "Printed")
                      }
                      checked={filters.pattern.includes("Printed")}
                    />
                    Printed
                  </label>
                  {/* Add more pattern options as needed */}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
