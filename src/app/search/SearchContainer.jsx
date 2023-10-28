import React from 'react'
import SearchBar from './SearchBar'
import "./search.css"

//this is just for visualization purposes, once SearchBar is properly positioned, this won't be needed

function SearchContainer() {
  return (
    <div className='container'>
        <div className="sth">bla</div>
        <div className="sth">blobla</div>
        <SearchBar></SearchBar>
    </div>
  )
}

export default SearchContainer