import React from 'react'

function SearchBox(props) {
  return (
    <>
      <input
      onChange={props.handleInputChange}
        className=""
        type="text"
        placeholder="Search Images"
        value={props.img}
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
