import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = "http://localhost:6001/listings"

function App() {

  const [lists, setList] = useState([])
  const [searchName, setSearchName] = useState("")

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(lists => {
        // console.log(list)
        setList(lists)
      })
  },[])

  function handleDeleteList(listToDelete) {
    const updatedList = lists.filter((list) => list.id !== listToDelete.id);
    setList(updatedList);
  }

  const filteredName = lists.filter((l) => {
    return l.description.toLowerCase().includes(searchName.toLowerCase());
});

  return (
    <div className="app">
      <Header onSearch={setSearchName} />
      <ListingsContainer searchName={searchName} lists={filteredName} onDelete={handleDeleteList}/>
    </div>
  );
}

export default App;
