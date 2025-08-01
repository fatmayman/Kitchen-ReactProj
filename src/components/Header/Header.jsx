import React from 'react'
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown.jsx'
import './Header.css'

const Header = React.memo(({ onCategoryChange }) => {
  return (
    <header className="header">
      <h1>Fatma's Kitchen</h1>
      <p>Discover delicious meals from around the world</p>
      <div className="category-selector">
        <CategoryDropdown onCategoryChange={onCategoryChange} />
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header