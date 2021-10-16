import React, {useState, useEffect} from "react";

function Search({searchATerm}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  let [term, setTerm] = useState("")

  function changeIt(e){
    setTerm(e.target.value)
    
  }

  useEffect(() => { 
    searchATerm(term)
   }, [term])


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => changeIt(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
