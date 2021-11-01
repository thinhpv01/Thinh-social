import { Route, Switch } from 'react-router';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </div>
    );
}

export default App;
