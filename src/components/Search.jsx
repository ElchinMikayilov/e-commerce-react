import React from 'react'

const Search = ({ search, setSearch }) => {
  return (
    <div className="w-full md:flex-1">
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-4 py-2"
      />
    </div>
  )
}

export default Search
