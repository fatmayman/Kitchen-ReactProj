import React, { useState } from 'react'
import Header from '../components/Header/Header.jsx'
import RecipesGrid from '../components/RecipesGrid/RecipesGrid.jsx'
import './Home.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="home-page">
      <Header onCategoryChange={handleCategoryChange} />
      <RecipesGrid selectedCategory={selectedCategory} />
    </div>
  )
}

export default Home