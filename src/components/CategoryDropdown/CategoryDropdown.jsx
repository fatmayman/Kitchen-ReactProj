import React, { useState, useEffect } from 'react'
import './CategoryDropdown.css'

const CategoryDropdown = React.memo(({ onCategoryChange }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const loadCategories = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json()
      setCategories(data.categories || [])
    } catch (error) {
      console.error('Error loading categories:', error)
    }}
  useEffect(() => {
    loadCategories()
  }, [])
  const handleCategoryChange = (event) => {
    const category = event.target.value
    setSelectedCategory(category)
    onCategoryChange(category)}
  return (
    <select 
      className="category-dropdown"
      value={selectedCategory}
      onChange={handleCategoryChange}>
      <option value="">Select a meal category...</option>
      {categories.map(category => (
        <option key={category.strCategory} value={category.strCategory}>
          {category.strCategory}
        </option>
      ))}
    </select>)
})

CategoryDropdown.displayName = 'CategoryDropdown'

export default CategoryDropdown