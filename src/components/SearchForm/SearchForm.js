import React from "react";


function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label className="m-3" htmlFor="search">Search for Harry Potter Characters</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by Name or House Name"
          id="searchBar"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3 mr-3">
          Sort By Name A - Z
        </button>
        <button onClick={props.sortBeta} className="btn btn-primary mt-3">
          Sort By Name Z - A
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
// hpCharacters.filter(value => value.includes(this.handleInputChange)),