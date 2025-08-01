import React from 'react'
import './MealCard.css'

const MealCard = React.memo(({ meal }) => {
  const handleClick = () => {
  const url = `/meal/${meal.idMeal}`
    window.open(url, '_blank')
  }

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
    </div>
  )
})

MealCard.displayName = 'MealCard'

export default MealCard