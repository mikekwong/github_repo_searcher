import React from 'react'
import './Results.css'

const Results = ({ result }) => {
  const { id, full_name, description, stargazers_count, license } = result
  return (
    <div key={id} className='results-list'>
      <p>{full_name}</p>
      <p>{description}</p>
      <p>Stars: {stargazers_count}</p>
      {license && <p>{license.name}</p>}
    </div>
  )
}

export default Results
