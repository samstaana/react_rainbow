import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';

function App() {
  let [ colors, setColors ] = useState(['red', 'orange', 'yellow', 'green', 'blue', 'purple'])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color = { color } />
    )
  })

  return (
    <div className="App">
      {colors.map((color, i)=>
        <ColorBlock key={i} color={color} />
        )}
    </div>
  )

}

export default App;
