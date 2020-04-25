import React from "react";
import { Like } from "./common/like";
export const Movie = ({ movie, onLike, onDelete }) => {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <Like
          key={movie.id}
          liked={movie.liked}
          onClick={() => {
            onLike(movie);
          }}
        />
      </td>
      <td>
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
