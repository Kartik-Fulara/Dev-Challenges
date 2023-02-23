import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div className="App">
      <header className="container App-header">
        <div className="row">
          <div className="col-12">
            <div>
              <img src="my_unsplash_logo.svg" alt="" />
              <div className="search-box">
                <i
                  onClick={() => {
                    if (searchInputRef.current) {
                      searchInputRef.current.focus();
                    }
                  }}
                  className="bi search bi-search"
                ></i>
                <input ref={searchInputRef} type="text" placeholder="Search" />
              </div>
            </div>
            <button className="add-people">Add People</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
