import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
let [listings, setListings] = useState([])
let [fullList, setFullList] = useState([])

const url="http://localhost:6001/listings"


useEffect(
  () => {
fetch(url)
.then(res => res.json())
.then(data => {
  setListings([...data])
  setFullList([...data])
})

},[])

function handleDelete(id, description){
  let idNo = listings.find(i => i.description === description)
  idNo = idNo.id
  let dat = listings.filter(i => i.description !== description)
  let fullDat = fullList.filter(i => i.description !== description)
  fetch(`${url}/${idNo}`, {method:'DELETE'})
  .then(() =>  {
    setListings([...dat])
    setFullList([...fullDat])
   } )
}

function searchATerm(term) {
  console.log(term)
  if (term === "") { setListings([...fullList]) }
  else { setListings(
    fullList.filter(i => i.description.startsWith(term))

  )}
}

  return (
    <div className="app">
      <Header searchATerm={searchATerm}/>
      <ListingsContainer listings={listings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
