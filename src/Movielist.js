import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './movieCard.js';
import axios from "axios";
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
import './movie.css'
class MoviesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moviesList: [""],
            searchTerm: ''
        };
    }
    search = event => {
        event.preventDefault();
        console.log(event.preventDefault)
        axios
            .get(
                `https://www.omdbapi.com/?apikey=ab4b261a&s=${
                    this.state.searchTerm
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>
                <form onSubmit={this.search}>
                    <input
                        placeholder="Search for a movie"
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                    Search
                    </button>
                </form>
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <MovieCard movieID={movie} key={movie} />
                    ))
                ) : (
                    <p>
                        Couldn't find any movie. Please search again using
                        another search criteria.
                    </p>
                )}
            </div>
        );
    }
}
export default MoviesList;