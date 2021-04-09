import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Compose from './components/Compose'
import { MatchInfoProvider } from './hooks/fetch/useMatchInfo'
import { MostChampionInfoProvider } from './hooks/fetch/useMostChampionInfo'
import { SummonerInfoProvider } from './hooks/fetch/useSummonerInfo'
import Header from './layout/Header'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Compose providers={[SummonerInfoProvider, MostChampionInfoProvider, MatchInfoProvider]}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Compose>
    </Router>
  )
}

export default App
