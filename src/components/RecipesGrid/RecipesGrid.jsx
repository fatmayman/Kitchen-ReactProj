import React, { useState, useEffect } from 'react'
import MealCard from '../MealCard/MealCard.jsx'
import './RecipesGrid.css'

const RecipesGrid = React.memo(({ selectedCategory }) => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  const loadRecipes = async (category) => {
    if (!category) {
      setRecipes([])
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      const data = await response.json()
      const recipesToShow = (data.meals || []).slice(0, 32)
      setRecipes(recipesToShow)
    } catch (error) {
      console.error('Error loading recipes:', error)
      setRecipes([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    loadRecipes(selectedCategory)
  }, [selectedCategory])

  if (!selectedCategory) {
    return null
  }

  if (loading) {
    return (
      <main className="main-content">
        <div className="recipes-grid">
          <div className="loading">Loading recipes...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="main-content">
      <div className="recipes-grid">
        {recipes.length === 0 ? (
          <div className="loading">No recipes found. Please try again.</div>
        ) : (
          recipes.map((recipe) => (
            <MealCard key={recipe.idMeal} meal={recipe} />
          ))
        )}
      </div>
    </main>
  )
})

RecipesGrid.displayName = 'RecipesGrid'

export default RecipesGrid