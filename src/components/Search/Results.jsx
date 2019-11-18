import React from 'react'
import './Results.css'

const Results = ({ result }) => {
  const { full_name, forks, description, stargazers_count, license } = result
  const descriptionPartOne = firstHalfDescription(description)
  const descriptionPartTwo = description.slice(descriptionPartOne.length + 1)
  return (
    <div className='results-list'>
      <p>{full_name}</p>
      {/* {forks && <p style={{ backgroundColor: 'gray' }}>forked</p>} */}
      {description.length > 46 ? (
        <>
          <p>{descriptionPartOne}</p>
          <p>{descriptionPartTwo}</p>
        </>
      ) : (
        <p>{description}</p>
      )}
      <p>Stars: {stargazers_count}</p>
      {license && <p>{license.name}</p>}
    </div>
  )
}

function firstHalfDescription (string) {
  let lastSpaceIndex = string.slice(0, 46).lastIndexOf(' ')
  return string.slice(0, lastSpaceIndex)
}

export default Results
