import React from 'react';

function App() {
  const [search, setSearch] = React.useState('');

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
      <button>555<button>123</button></button>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="popa">{children}</label>
      <input
        id="popa"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
