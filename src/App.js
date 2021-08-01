import './App.css';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Switch>
         <Route path="/" exact component={ProductListing} />
         <Route path="product/:productID" component={ProductDetails} />
         <Route>404 Not Found</Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
