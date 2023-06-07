import {AppContainer} from './styles'
import { Search } from './components/Search/Search';
import { LastRealeases } from './components/LastReleases/LastRealeases';


export function App() {

  return (
    <AppContainer>
      <Search />
      <LastRealeases/>
    </AppContainer>
  
  )
}

