import React, { Component } from "react";
import { Movie } from "./movie";

export default class moviesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.oredr = sortColumn.oredr === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.oredr = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, handleDelete, handleLike } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <Movie
              key={movie._id}
              movie={movie}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
