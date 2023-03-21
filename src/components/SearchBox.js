import React from 'react'

function SearchBox(props) {
  return (
    <>
      <input
      onChange={props.handleInputChange}
        className=""
        name="search"
        type="text"
        placeholder="Search Images"
        value={props.search}
        id="search"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn"
        >🔍
      </button>
    </>
  )
}

export default SearchBox;
