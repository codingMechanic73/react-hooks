import { useState, Context, createContext } from 'react'
import { ThemeProvider } from './hooks/useTheme';
import { AsyncComponent } from './Pages/AsyncComponent';
import { LastWords } from './Pages/LastWords';
import { Offer } from './Pages/Offer';
import { OnlineStatus } from './Pages/OnlineStatus';
import { Search } from './Pages/Search';
import { Themes } from './Pages/Themes';

function App() {
  const [page, setPage] = useState('');

  return (
    <div className="App">
      <ThemeProvider>
        <ul>
          <li onClick={() => setPage('offer')}>Offer</li>
          <li onClick={() => setPage('search')}>Search</li>
          <li onClick={() => setPage('online-status')}>OnlineStatus</li>
          <li onClick={() => setPage('lastWords')}>lastWords</li>
          <li onClick={() => setPage('theme')}>Theme</li>
          <li onClick={() => setPage('async')}>Async</li>
        </ul>
        <div>
          {page === 'offer'? <Offer/>: null}
          {page === 'search'? <Search/>: null}
          {page === 'online-status'? <OnlineStatus/>: null}
          {page === 'lastWords'? <LastWords/>: null}
          {page === 'theme'? <Themes/>: null}
          {page === 'async'? <AsyncComponent/>: null}
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
