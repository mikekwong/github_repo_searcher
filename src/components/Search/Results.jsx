import React from 'react'

const Results = ({ result }) => {
  const { id, full_name, description, stargazers_count, license } = result
  return (
    <div key={id} id='results'>
      <p>{full_name}</p>
      <p>{description}</p>
      <p>Stars: {stargazers_count}</p>
      {license && <p>{license.name}</p>}
    </div>
  )
}

export default Results
