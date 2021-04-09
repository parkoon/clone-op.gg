import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Compose from './components/Compose'
import { MatchInfoProvider } from './hooks/fetch/useMatchInfo'
import { MostChampionInfoProvider } from './hooks/fetch/useMostChampionInfo'
import { SummonerInfoProvider } from './hooks/fetch/useSummonerInfo'
import Header from './layout/Header'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'

function App() {
  return (
    <Router>
      <Compose providers={[SummonerInfoProvider, MostChampionInfoProvider, MatchInfoProvider]}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchResult} />
        </Switch>
      </Compose>
    </Router>
  )
}

export default App
