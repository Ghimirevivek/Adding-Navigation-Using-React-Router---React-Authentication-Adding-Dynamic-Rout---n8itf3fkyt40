import React from 'react'
import { useLocation } from 'react-router-dom'
function LocationDisplay() {
  const location = useLocation()

  return (
    <div>
      <h2>No match for {location.pathname}</h2>
    </div>
  )
}
export default LocationDisplay
