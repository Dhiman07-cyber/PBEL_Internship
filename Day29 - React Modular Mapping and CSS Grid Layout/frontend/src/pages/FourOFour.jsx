import React from 'react'

const FourOFour = () => {
  return (
    <div>
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <p>Please check the URL or navigate back to the homepage.</p>
        <p>Button to go back to home page</p>
        <button onClick={()=>window.location.href='/'}>Go to Home</button>
    </div>
  )
}

export default FourOFour