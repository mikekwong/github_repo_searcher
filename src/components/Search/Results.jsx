import React from 'react'
import './Results.css'

const Results = ({ result }) => {
  const { full_name, fork, description, stargazers_count, license } = result

  return (
    <div className='results-list'>
      <p>{full_name}</p>
      {fork && <p id='test'>forked</p>}
      <p>{description}</p>
      <p id='stars'>
        Stars: <span>{stargazers_count}</span>
      </p>
      {license && (
        <p className={description.length > 46 ? 'bottom-margin' : null}>
          License: <span>{license.name}</span>
        </p>
      )}
    </div>
  )
}

export default Results
