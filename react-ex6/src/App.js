import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/detail" component={Detail}/>
    </BrowserRouter>
  );
}

export default App;
