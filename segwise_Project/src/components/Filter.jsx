import React, { useState, useEffect } from "react";
import PreviewModal from "./PreviewModel";
import Table from "./Table";
import { mockData } from "../data";

function Filter({ filters, setFilters, applyFilters }) {
  const [activeButton, setActiveButton] = useState("Dimensions");
  const [subBtn, setsubBtn] = useState("");
  const [comparisonOperator, setComparisonOperator] = useState("equals");
  const [tagOperator, setTagOperator] = useState("is");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [currency, setCurrency] = useState("$");
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);
  const [previewData, setPreviewData] = useState(null);
  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    const storedFilters = JSON.parse(localStorage.getItem("selectedFilters"));
    if (storedFilters) {
      setSelectedFilters(storedFilters);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    applyFilters(selectedFilters);
  }, [selectedFilters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    setInputValue(value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCheckboxes((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((item) => item !== value)
    );
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setsubBtn(""); // Reset sub button when main button is clicked
  };

  const handleOperatorChange = (operator) => {
    setComparisonOperator(operator);
  };

  const handleTagOperatorChange = (operator) => {
    setTagOperator(operator);
  };

  const handleApplyFilter = (e) => {
    e.preventDefault();
    const newFilter = {
      category: activeButton,
      subCategory: subBtn,
      operator: activeButton === "Metrics" ? comparisonOperator : tagOperator,
      value: inputValue || "",
      checkboxes: selectedCheckboxes,
      currency: activeButton === "Metrics" ? currency : "",
    };
    setSelectedFilters((prevFilters) => [...prevFilters, newFilter]);
    setsubBtn("");
    setSelectedCheckboxes([]);
    setInputValue("");
    setFiltersApplied(true);
  };

  const handleDeleteFilter = (index) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((_, i) => i !== index)
    );
    if (selectedFilters.length === 1) {
      setFiltersApplied(false);
    }
  };

  const handleRowClick = (row) => {
    setPreviewData(row);
  };

  const handleClosePreview = () => {
    setPreviewData(null);
  };

  return (
    <>
      {/* Display all data initially and filtered data after applying filters */}
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-white h-full border border-gray-200 rounded-xl p-4 shadow-md">
          <div className="bg-white w-full h-10 rounded-2xl flex items-center pl-2 mb-4">
            <p className="bg-yellow-200 items-center flex rounded-lg w-full pl-3">
              Add Filter
            </p>
          </div>

          <div className="bg-white h-full border border-gray-200 rounded-xl p-4 shadow-md mb-4 mt-4">
            <h3 className="text-lg font-bold mb-4">Selected Filters</h3>
            <ul>
              {selectedFilters.map((filter, index) => (
                <React.Fragment key={index}>
                  <li className="mb-2 flex items-center">
                    {filter.category} ^ {filter.subCategory} {filter.operator}{" "}
                    {filter.currency && `${filter.currency}`}
                    {filter.value}
                    {filter.checkboxes.length > 0 && (
                      <ul className="ml-4">
                        {filter.checkboxes.map((checkbox, idx) => (
                          <li key={idx}>{checkbox}</li>
                        ))}
                      </ul>
                    )}
                    <button
                      className="ml-auto text-red-500"
                      onClick={() => handleDeleteFilter(index)}
                    >
                      ✖
                    </button>
                  </li>
                  {index < selectedFilters.length - 1 && (
                    <div className="flex items-center justify-center my-2">
                      <button className="bg-white border border-gray-200 rounded-xl p-2 mx-2 hover:bg-gray-300">
                        AND
                      </button>
                      <button className="bg-white border border-gray-200 rounded-xl p-2 mx-2 hover:bg-gray-300">
                        OR
                      </button>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>

          <div
            className={`bg-white w-full rounded-2xl flex flex-col ${
              subBtn ? "" : ""
            }`}
          >
            <div className="mb-5">
              {subBtn && (
                <>
                  <div className="flex items-center mb-2">
                    <span>
                      {activeButton} {">"} {subBtn}
                    </span>
                    <button className="ml-auto" onClick={() => setsubBtn("")}>
                      ^
                    </button>
                  </div>
                  <div className="flex gap-3">
                    {activeButton === "Metrics" ? (
                      <>
                        <button
                          className="mb-2 relative"
                          onClick={() => setComparisonOperator("equals")}
                        >
                          {comparisonOperator}
                        </button>
                        <input
                          type="number"
                          placeholder={currency}
                          className="border border-gray-200 rounded-xl pl-2 mb-2"
                          onChange={handleChange}
                        />
                        <select
                          className="border border-gray-200 rounded-xl pl-2 mb-2"
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          <option value="$">$</option>
                          <option value="₹">₹</option>
                        </select>
                      </>
                    ) : (
                      <>
                        <button
                          className="mb-2 relative"
                          onClick={() => setTagOperator("is")}
                        >
                          {tagOperator}
                        </button>
                        <input
                          type="text"
                          placeholder="Enter value"
                          className="border border-gray-200 rounded-xl pl-2 mb-2"
                          onChange={handleChange}
                        />
                      </>
                    )}
                  </div>
                  <input
                    type="search"
                    placeholder="Search"
                    className="border border-gray-200 rounded-xl pl-2 "
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            {!subBtn && (
              <input
                type="search"
                placeholder="Search"
                className="border border-gray-200 rounded-xl pl-2 mb-3"
                onChange={handleChange}
              />
            )}
            {!subBtn && (
              <div className="flex gap-2 mb-4">
                <button
                  className={`hover:font-bold ${
                    activeButton === "Dimensions" ? "text-black font-bold" : ""
                  }`}
                  onClick={() => handleButtonClick("Dimensions")}
                >
                  Dimensions
                </button>
                <button
                  className={`hover:font-bold ${
                    activeButton === "Tags" ? "text-black font-bold" : ""
                  }`}
                  onClick={() => handleButtonClick("Tags")}
                >
                  Tags
                </button>
                <button
                  className={`hover:font-bold ${
                    activeButton === "Metrics" ? "text-black font-bold" : ""
                  }`}
                  onClick={() => handleButtonClick("Metrics")}
                >
                  Metrics
                </button>
              </div>
            )}
          </div>

          {subBtn ? (
            subBtn === "Character" ? (
              <div className="flex flex-col items-start ml-3 mt-1">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value="Select All"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Select All</p>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value="Pumpkin"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Pumpkin</p>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value="Cat"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Cat</p>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value="Ghost"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Ghost</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="Egg"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Egg</p>
                </div>
              </div>
            ) : subBtn === "Background" ? (
              <div className="flex flex-col items-start ml-3 mt-1">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value="Color"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Color</p>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value="Font"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Font</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="Other"
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Other</p>
                </div>
              </div>
            ) : (
              <div></div>
            )
          ) : (
            <div>
              {activeButton === "Dimensions" && (
                <div className="flex flex-col items-start ml-3 mt-1">
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("Country")}
                  >
                    Country
                  </button>
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("State")}
                  >
                    State
                  </button>
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("Area")}
                  >
                    Area
                  </button>
                  <button
                    className="hover:font-bold"
                    onClick={() => setsubBtn("Place")}
                  >
                    Place
                  </button>
                </div>
              )}
              {activeButton === "Tags" && (
                <div className="flex flex-col items-start ml-3 mt-1">
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("Character")}
                  >
                    Character
                  </button>
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("Background")}
                  >
                    Background
                  </button>
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("Elements")}
                  >
                    Elements
                  </button>
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("CTA Position")}
                  >
                    CTA Position
                  </button>
                  <button
                    className="hover:font-bold"
                    onClick={() => setsubBtn("CTA Test")}
                  >
                    CTA Test
                  </button>
                </div>
              )}
              {activeButton === "Metrics" && (
                <div className="flex flex-col items-start ml-3 mt-1">
                  <button
                    className="hover:font-bold mb-2"
                    onClick={() => setsubBtn("Spends")}
                  >
                    Spends
                  </button>
                  <button
                    className="hover:font-bold"
                    onClick={() => setsubBtn("Other")}
                  >
                    Other
                  </button>
                </div>
              )}
            </div>
          )}

          {subBtn && (
            <div className="flex items-center justify-center mt-4">
              <button
                className="bg-black text-white text-lg w-50 rounded-2xl"
                onClick={handleApplyFilter}
              >
                Apply
              </button>
            </div>
          )}
        </div>
        {previewData && <PreviewModal data={previewData} onClose={handleClosePreview} />}
      </div>
    </>
  );
}

export default Filter;