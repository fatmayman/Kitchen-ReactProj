import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MealDetail.css'

const MealDetail = () => {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])
  const loadMealDetail = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      const data = await response.json()
      const mealData = data.meals[0]
      if (mealData) {
        setMeal(mealData)
        
        const ingredientsList = []
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealData[`strIngredient${i}`]
          const measure = mealData[`strMeasure${i}`]
          if (ingredient && ingredient.trim()) {
            ingredientsList.push(`${measure ? measure.trim() + ' ' : ''}${ingredient.trim()}`)}}
        setIngredients(ingredientsList)
      }
    } catch (error) {
      console.error('Error loading recipe details:', error)
    } finally {
      setLoading(false)}}
  useEffect(() => {
    if (id) {
      loadMealDetail(id)
    }
  }, [id])
  const closeDetail = () => {
    window.close()
  }
  if (loading) {
    return (
      <div className="recipe-detail active">
        <div className="recipe-popup">
          <div className="loading">Loading recipe details...</div>
        </div>
      </div>
    )
  }
  if (!meal) {
    return (
      <div className="recipe-detail active">
        <div className="recipe-popup">
          <div className="loading">Recipe not found.</div>
        </div>
      </div>
    )
  }
  return (
    <div className="recipe-detail active">
      <div className="recipe-popup">
        <button className="close-btn" onClick={closeDetail}>&times;</button>
        <div className="recipe-detail-content">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="recipe-info">
            <h2>{meal.strMeal}</h2>
            <div className="ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
              {meal.strYoutube && (
  <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="youtube-btn">Watch Recipe Video</a>
)}
  </div>
  </div>
  </div>
    </div>)
}
export default MealDetail