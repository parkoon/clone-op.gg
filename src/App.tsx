import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import SampleComponent from './pages/SampleComponent'
import SearchSummoner from './pages/SearchSummoner'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={SearchSummoner} />
        <Route path="/component" component={SampleComponent} />
      </Switch>
    </Router>
  )
}

export default App
