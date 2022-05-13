import { useState } from 'react'
import { Offer } from './Pages/Offer';
import { Search } from './Pages/Search';

function App() {
  const [page, setPage] = useState('');

  return (
    <div className="App">
      <ul>
        <li onClick={() => setPage('offer')}>Offer</li>
        <li onClick={() => setPage('search')}>Search</li>
      </ul>
      <div>
        {page === 'offer'? <Offer/>: null}
        {page === 'search'? <Search/>: null}
      </div>
    </div>
  )
}

export default App
