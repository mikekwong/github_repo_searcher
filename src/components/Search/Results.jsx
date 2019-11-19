import React from 'react'
import './Results.css'

const Results = ({ result }) => {
  const { full_name, fork, description, stargazers_count, license } = result
  return (
    <div className='results-list'>
      <div id='name-description-fork'>
        <p>{full_name}</p>
        {/* {fork && <p id='forked'>forked</p>} */}
        <p id='forked'>forked</p>
        <p id='description'>{description || 'No description.'}</p>
      </div>

      <p id='stars'>
        Stars: <span>{stargazers_count}</span>
      </p>
      <p id='license'>
        License: <span>{license.name || 'No License.'}</span>
      </p>
    </div>
  )
}

export default Results
