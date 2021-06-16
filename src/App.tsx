import { Switch, Route, Redirect } from 'react-router-dom';
import Search from './Pages/Search/Search.Page';
import Details from './Pages/Details/Details.Page';

import './App.css';

const App:React.FC = () => (
  <>
    <Switch>
      <Route
        exact
        path='/'
        render={() => <Redirect to='/search' />}
      />
      <Route path='/search' component={Search} />
      <Route path='/details/:id' component={Details} />
    </Switch>
  </>
);

export default App;
