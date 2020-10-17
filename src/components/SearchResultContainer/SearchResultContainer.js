import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultsList/ResultList";
import API from "../../utils/API";
// const characterList = document.getElementById("charactersList");
// const searchBar = document.getElementById("searchBar");
console.log("hello");
// console.log(searchBar);
// searchBar.addEventListener('keyup', (e)=>{
  //   console.log(e);
  // })
  
  class SearchResultContainer extends Component {
    hpCharacters = [];
    state = {
    search: "",
    results: [],
  };
  componentDidMount() {
    this.searchHP("Gryffindor");
  }
  
  // When this component mounts setState from HP-API results
  searchHP = (query) => {
    API.search(query)
      .then((res) => {
        this.setState({
          results: res.data.map((e, i) => ({
            name: e.name,
            house: e.house,
            picture: e.image,
            blood: e.ancestry,
            year: e.yearOfBirth,
            eyes: e.eyeColour,
            hair: e.hairColour,
            wand: e.wand.wood,
            core: e.wand.core,
            patronus: e.patronus,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  };
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
    console.log(e.target.value);
  };

  // When the form is submitted, search the HP-API for `this.state.search`
  handleFormSubmit =
    ("keyup",
    (e) => {
      e.preventDefault();
    });

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {/* <div className="card-columns justify-content-center"> */}
        <ResultList results={this.state.results} />
        {/* </div> */}
      </div>
    );
  }
}

export default SearchResultContainer;
