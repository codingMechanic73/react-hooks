import { useState } from 'react'
import { Offer } from './Pages/Offer';

function App() {
  const [page, setPage] = useState('');

  return (
    <div className="App">
      <ul>
        <li onClick={() => setPage('offer')}>Offer</li>
      </ul>
      <div>
        {page === 'offer'? <Offer/>: null}
      </div>
    </div>
  )
}

export default App
