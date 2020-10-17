import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultsList/ResultList";
import API from "../../utils/API";

console.log("hello");

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
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
          filteredResults: res.data.map((e, i) => ({
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
    const search = this.handleInputChange.name;
    console.log(search);
    this.setState({
      [name]: value,
    });
    this.filteredCharacters();
    // console.log(search);
  };
  filteredCharacters() {
    const filteredResults = this.state.results.filter((character) => {
      console.log(this.state.search);
      return (
        character.name.toLowerCase().includes(this.state.search) ||
        character.house.toLowerCase().includes(this.state.search)
      );
    });
    this.setState({
      filteredResults: filteredResults,
    });
  }

  // When the form is submitted, search the HP-API for `this.state.search`
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { filteredResults } = this.state;
    let sorted = filteredResults.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      filteredResults: sorted,
    });
    console.log(this.state);
  };
  sortBeta = (e) => {
    e.preventDefault();
    console.log(this.state.filteredResults);
    const { filteredResults } = this.state;
    let newfilteredResults = filteredResults.reverse();

    this.setState({
      filteredResults: newfilteredResults,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          sortBeta={this.sortBeta}
        />
        <ResultList results={this.state.filteredResults} />
        {/* </div> */}
      </div>
    );
  }
}

export default SearchResultContainer;
