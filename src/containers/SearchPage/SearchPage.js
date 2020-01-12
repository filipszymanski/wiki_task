import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import axios from 'axios';
import InputControls from '../../components/InputControls/InputControls';
import SearchResults from '../../components/SearchResults/SearchResults';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Footer from '../../components/Footer/Footer';

class SearchPage extends Component {
    state = {
        searchResults: [],
        searchQuery: '',
        replaceQuery: '',
        error: false,
        loaderVisible: false,
        initialInfo: true
    }

    handleSearchInputChange = event => {
        this.setState({ searchQuery: event.target.value });
    }

    handleReplaceInputChange = event => {
        this.setState({ replaceQuery: event.target.value });
    }

    handleSearchButtonClick = event => {
        event.preventDefault();
        const { searchQuery } = this.state;
        this.setState({ searchResults: [], loaderVisible: true, initialInfo: false })

        axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${searchQuery}&srlimit=10`)
            .then(response => {
                let searchResults = response.data.query.search;
                searchResults = searchResults.map(result => (
                    result = {
                        id: result.pageid,
                        excerpt: result.snippet,
                        title: result.title
                    }
                ));
                this.setState({ searchResults: searchResults, loaderVisible: false });
            })
            .catch(error => {
                this.setState({ error: true });
            });

    }

    handleReplaceButtonClick = event => {
        event.preventDefault();
        const { replaceQuery } = this.state;
        const firstMatch = document.getElementsByClassName('searchmatch')[0];
        firstMatch.innerHTML = replaceQuery;

    }

    handleReplaceAllButtonClick = event => {
        event.preventDefault();
        const { replaceQuery } = this.state;
        const allMatches = document.getElementsByClassName('searchmatch');
        let allMAtcherArray = Object.keys(allMatches).map((k) => allMatches[k])

        for (let i = 0; i < allMAtcherArray.length; i++) {
            allMAtcherArray[i].innerHTML = replaceQuery
        }

    }

    render() {

        const { searchResults, searchQuery, loaderVisible, initialInfo, error } = this.state;

        return (
            <Aux>
                <h1 className='mainTitle'>10 results from Wikipedia API</h1>
                <ScrollTop scrollStepInPx='50' delayInMs='0' />
                <InputControls
                    clickedsearch={ this.handleSearchButtonClick }
                    clickedreplace={ this.handleReplaceButtonClick }
                    clickedreplaceall={ this.handleReplaceAllButtonClick }
                    searchInputChange={ this.handleSearchInputChange }
                    replaceInputChange={ this.handleReplaceInputChange }
                    searchQuery={ searchQuery }
                    searchResults={ searchResults }
                />
                <SearchResults searchresults={ searchResults } searchQuery={ searchQuery } isError={ error } loaderVisible={ loaderVisible } initialInfo={ initialInfo } />
                <Footer />
            </Aux>
        )
    }
}

export default SearchPage;