import React from 'react'
import './Results.css'

const Results = ({ result }) => {
  const { full_name, fork, description, stargazers_count, license } = result
  return (
    <div className='results-list'>
      <p>{full_name}</p>
      {fork && <p id='forked'>forked</p>}
      {/* <p id='forked'>forked</p> */}
      <p>{description || 'No description.'}</p>
      <p id='stars'>
        Stars: <span>{stargazers_count}</span>
      </p>
      <p>
        License: <span>{license.name || 'No License.'}</span>
      </p>
    </div>
  )
}

export default Results
