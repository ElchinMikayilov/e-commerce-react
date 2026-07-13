import React from 'react'

const Category = ({ category, setCategory, data }) => {
  const categories = [...new Set(data.map(item => item.category))]

  return (
    <div className="w-full md:w-auto">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-48 border rounded-lg px-4 py-2"
      >
        <option value="">All Category</option>

        {categories.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Category
