import { useState } from 'react';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="row-search">
        <div className="input-field col s12">
          <input
            type="search"
            id="search-field"
            placeholder="search"
            onKeyDown={handleKey}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-search">
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };
