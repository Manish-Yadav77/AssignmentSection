import React, { useState } from 'react';
import { mockData } from './data';
import Filter from './components/Filter';
import Table from './components/Table';
import PreviewModal from './components/PreviewModel';
import segviseLogo from './assets/segvisePng.png';

function App() {
  const [filters, setFilters] = useState([]);
  const [previewData, setPreviewData] = useState(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(mockData);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const handleRowClick = (row) => {
    setPreviewData(row);
  };

  const handleCloseModal = () => {
    setPreviewData(null);
  };

  const handleFilterClick = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleFilterModalClose = () => {
    setIsFilterModalOpen(false);
  };

  const applyFilters = (selectedFilters) => {
    let filtered = mockData;
    selectedFilters.forEach((filter) => {
      filtered = filtered.filter((item) => {
        if (filter.category === "Dimensions") {
          return item[filter.subCategory.toLowerCase()].toString().toLowerCase().includes(filter.value.toLowerCase());
        } else if (filter.category === "Tags") {
          return item.tags.map(tag => tag.toLowerCase()).includes(filter.value.toLowerCase());
        } else if (filter.category === "Metrics") {
          const itemValue = parseFloat(item[filter.subCategory.toLowerCase()]);
          const filterValue = parseFloat(filter.value);
          if (filter.operator === "equals") {
            return itemValue === filterValue;
          } else if (filter.operator === "lesser than") {
            return itemValue < filterValue;
          } else if (filter.operator === "greater than") {
            return itemValue > filterValue;
          }
        }
        return true;
      });
    });
    setFilteredData(filtered);
    setFiltersApplied(selectedFilters.length > 0);
  };

  return (
    <div className="p-4">
      <div className='navbar flex gap-2 '>
        <img src={segviseLogo} alt="Segvise Logo" height={60} width={60}/>
        <div>
          <h1 className='text-2xl font-bold'>Segvise</h1>
          <p className='text-sm font-bold'>Front End Test</p>
        </div>
      </div>

      <div className='flex border-2 border-gray-800 border-dotted h-52 mt-20 w-1/2 mx-auto p-4 justify-center items-center'>
        <div className='bg-gray-200 w-full h-full rounded-2xl flex'>
          <button
            className="border-2 h-10 w-24 rounded-2xl text-xl bg-gray-400 mt-2 ml-2"
            onClick={handleFilterClick}
          >
            Filter ^
          </button>
          {isFilterModalOpen && (
            <div className="modal mb-52">
              <div className="modal-content">
                <span className="close cursor-pointer" onClick={handleFilterModalClose}>&times;</span>
                <Filter filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {!filtersApplied && (
          <>
            <h3 className="text-lg font-bold mb-4 mt-52">All Data</h3>
            <Table data={mockData} onRowClick={handleRowClick} />
          </>
        )}
        {filtersApplied && (
          <>
            <h3 className="text-lg font-bold mb-4 mt-52">Filtered Data</h3>
            <Table data={filteredData} onRowClick={handleRowClick} />
          </>
        )}
      </div>

      {previewData && (
        <PreviewModal data={previewData} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;