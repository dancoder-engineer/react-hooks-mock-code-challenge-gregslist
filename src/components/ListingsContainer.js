import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  let cards = listings.map(i => <ListingCard key={i.id} id={i.id} description={i.description} image={i.image} location={i.location} handleDelete={handleDelete}/>)

  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
