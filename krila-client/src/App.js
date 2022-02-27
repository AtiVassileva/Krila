import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NavMenu from './components/NavMenu';
import Contact from './components/Contact';
import Men from './components/Men/Men';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <NavMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" component={Contact}/>
        <Route path='/men' component={Men}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;