import React from 'react'
import './Results.css'

const Results = ({ result }) => {
  const { full_name, forks, description, stargazers_count, license } = result
  return (
    <div className='results-list'>
      <p>{full_name}</p>
      {/* {forks && <p style={{ backgroundColor: 'gray' }}>forked</p>} */}
      <p>{description}</p>
      <p>Stars: {stargazers_count}</p>
      {license && <p>{license.name}</p>}
    </div>
  )
}

export default Results
