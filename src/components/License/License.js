import React from "react";

const License = ({ onHandleChange, licenses, searchSubmitted, isLoading }) => {
  return (
    <div id="repo-license" className="fields">
      <label className="fields-label">License</label>
      <select
        name="license"
        onChange={onHandleChange}
        disabled={searchSubmitted && isLoading}
      >
        {licenses.map(license => (
          <option key={license.keyword} value={license.keyword}>
            {license.license}
          </option>
        ))}
      </select>
    </div>
  );
};

export default License;
