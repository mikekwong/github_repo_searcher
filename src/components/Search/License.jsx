import React from 'react'

const License = ({ onHandleChange, licenses }) => {
  return (
    <div id='repo-license' className='fields-input'>
      <label className='fields-label'>License</label>
      <select name='license' onChange={onHandleChange}>
        {licenses.map(license => (
          <option value={license.keyword}>{license.license}</option>
        ))}
      </select>
    </div>
  )
}

export default License
