import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NavMenu from './components/NavMenu';
import Contact from './components/Contact';
import Men from './components/Men/Men';
import Footer from './components/Footer';
import CreateProduct from './components/Products/CreateProduct';

function App() {

  return (
    <div>
      <NavMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" component={Contact}/>
        <Route path='/products/create' component={CreateProduct}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;