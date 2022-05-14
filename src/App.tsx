import { useState } from 'react'
import { Offer } from './Pages/Offer';
import { OnlineStatus } from './Pages/OnlineStatus';
import { Search } from './Pages/Search';

function App() {
  const [page, setPage] = useState('');

  return (
    <div className="App">
      <ul>
        <li onClick={() => setPage('offer')}>Offer</li>
        <li onClick={() => setPage('search')}>Search</li>
        <li onClick={() => setPage('online-status')}>OnlineStatus</li>
      </ul>
      <div>
        {page === 'offer'? <Offer/>: null}
        {page === 'search'? <Search/>: null}
        {page === 'online-status'? <OnlineStatus/>: null}
      </div>
    </div>
  )
}

export default App
