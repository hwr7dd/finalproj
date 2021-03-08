import React, { Fragment, useState } from 'react';
import './App.css'
import useDataApi from 'use-data-api';

function App() {
  //This part fetches the data from the API provided by coingecko
  const [query, setQuery] = useState('bitcoin');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
    { hits: [] },
  );

  return (
    <div>
      <div className='header'>
        <h2>
          Cryptocurrency Price Check
          </h2> <div className></div><span role="img" className='emoji'aria-label="money">💵</span>

          <h6>Enter your crypto below (ex: bitcoin, ethereum, cardano):</h6>     
          </div>
    <Fragment>
      <div className='form'>
        {/*This form changes the parameter of the api query dynamically*/}
      <form
        onSubmit={event => {
      {/*When user submits, the portion ${query} is changed to their term*/}

          doFetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${query}&vs_currencies=usd`,
          );

          event.preventDefault();
          console.log(data)
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button className= 'buttn'type="submit">Search</button>
      </form>
      </div>
      {/*error handling*/}
      {isError && <div>Something went wrong ...</div>}
<div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className='response'> <h1>{query}</h1>
{JSON.stringify(data)}
        </div>
      )}
      </div>
    </Fragment>
    </div>
  );
}

export default App;