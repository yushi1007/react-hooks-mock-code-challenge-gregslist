import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ lists, onDelete }) {
  const listItem = lists.map((list) => {
    return (
      <ListingCard 
      key={list.id}
      list={list}
      onDelete={onDelete}
      />
    )
  })
  return (
    <main>
      <ul className="cards">
        {listItem}
      </ul>
    </main>
  );
}

export default ListingsContainer;
