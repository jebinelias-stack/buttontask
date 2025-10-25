import React, { useState } from 'react'
import './App.css'

function App() {
  const [colors, setColors] = useState(['gray', 'gray', 'gray', 'gray'])

  function handleClick(index) {
    const newColors = colors.map(function (_, i) {
      if (i === index) {
        return 'red'
      } else {
        return 'green'
      }
    })
    setColors(newColors)
  }

  function renderButtons() {
    return colors.map(function (color, index) {
      return (
        <button
          key={index}
          onClick={function () {
            handleClick(index)
          }}
          className="color-button"
          style={{ backgroundColor: color }}
        >
          Button {index + 1}
        </button>
      )
    })
  }

  return (
    <div className="app">
      {renderButtons()}
    </div>
  )
}

export default App


