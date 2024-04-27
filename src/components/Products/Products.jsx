import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductCard from "../ProducCard/ProducTCard"; // Corrected import path
import "./Products.css";
import allData from "../../data/data";

const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(""); // State for selected filter

  useEffect(() => {
    setData(allData);
    setFilteredData(allData);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const applyFilters = (filters) => {
    const filtered = data.filter((item) => {
      for (const filterType in filters) {
        if (
          filters[filterType].length > 0 &&
          !filters[filterType].includes(item[filterType])
        ) {
          return false;
        }
      }
      return true;
    });
    setFilteredData(filtered);
  };
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    if (value === "") {
      setFilteredData(data); // Reset to all data
    } else {
      // Apply the selected filter
      let filtered = [...data];
      switch (value) {
        case "low_to_high":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "high_to_low":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "popular":
          filtered.sort((a, b) => b.popularity - a.popularity);
          break;
        case "newer":
          filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        default:
          // Do nothing
          break;
      }
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <section className="filter">
        <span className="showfilter">
          <span className="qty">{filteredData.length} ITEMS</span>
          <span className="hidefilter" onClick={toggleSidebar}>
            <span className="ico">
             {showSidebar ? "Hide Filter" : "Show Filter"}
            </span>
          </span>
        </span>
        <select value={selectedFilter} className="side-filters" onChange={handleFilterChange}>
              <option value="">Recommended</option>
              <option value="low_to_high">Price Low to High</option>
              <option value="high_to_low">Price High to Low</option>
              <option value="popular">Popular</option>
              <option value="newer">Newer</option>
            </select> 
        {/* Other filter elements */}
      </section>
      <section className="body-content">
        {showSidebar && (
          <Sidebar applyFilters={applyFilters} toggleSidebar={toggleSidebar} />
        )}{" "}
        {/* Pass toggleSidebar function down to Sidebar */}
        <div className={!showSidebar ? "card_grid" : "card_grid-3items"}>
          {filteredData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
