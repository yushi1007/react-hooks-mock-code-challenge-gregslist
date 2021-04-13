import React, { useState } from "react";

function ListingCard({ list, onDelete }) {
  const { id, description, image, location } = list

  const [favorite, setFavorite] = useState(false)

  const handleClick = () => {
    setFavorite(favorite => !favorite)
  }

  const handleDelete = () => {
      fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          onDelete(list);
        });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
