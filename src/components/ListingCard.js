import React, {useState} from "react";

function ListingCard({id, description, image, location, handleDelete}) {

 let [fave, setFave] = useState(false)


 function switchFave() {
   setFave(fave => !fave)
 }

function deleteIt(){
  handleDelete(id, description)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fave ? (
          <button onClick={switchFave} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={switchFave} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteIt} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
