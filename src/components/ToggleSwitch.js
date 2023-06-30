import React, { useState } from 'react'
import './ToggleSwitch.css'

function ToggleSwitch() {
  const [mode, setMode] = useState();

  return (
    <div>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  )
}

export default ToggleSwitch
