import React from 'react';
import './SearchComponent.css';

const SearchComponent = (props) => {
  const { searchTitle, inputPlaceholder, popularDomainsTitle, domains } = props.data.searchComponent; // Destructure data from props

  return (
    <div className="container mt-5">
      <div className="ais-InstantSearch__root">
        <div className="row">
          <div className="col">
            <div className="search-section">
              <h2 id="courseraplus-search-title">{searchTitle}</h2>
              <form className="search-form d-flex mt-3">
                <input 
                  id="search-input" 
                  type="text" 
                  placeholder={inputPlaceholder} 
                  aria-labelledby="courseraplus-search-title" 
                  className="form-control"
                />
                <button type="submit" className="btn btn-outline-secondary ml-2" aria-label="Enter Search">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="popular-domains mt-4 d-flex ms-5">
              <h3 className="body-2-text popular-domains-title rounded ms-4">{popularDomainsTitle}</h3>
              <ul className="list-inline ms-4 rounded w-70">
                {domains.map(domain => (
                  <li className="list-inline-item" key={domain}>
                    <button 
                      className="btn btn-outline-primary domain-button"
                      type="button"
                    >
                      {domain}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
