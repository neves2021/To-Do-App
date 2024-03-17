/* eslint-disable react/prop-types */
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filter:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
        <div>
          <p>From A to Z:</p>
          <button onClick={() => setSort("Asc")}>A-Z</button>
          <button onClick={() => setSort("Desc")}>Z-A</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
