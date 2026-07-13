import React from 'react'

const Sort = ({ sort, setSort }) => {
  return (
    <div className="w-full md:w-auto">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full md:w-48 border rounded-lg px-4 py-2"
      >
        <option value="">Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  )
}

export default Sort
