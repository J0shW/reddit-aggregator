import React from 'react';
import './App.css';
import Feed from './Feed';
import Post from './Post';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header" style={{ backgroundColor: 'cadetblue', width: '100%' }}>
                    <p>
                        Welcome to the <b>D&D</b> roundup!
                    </p>
                </header>

                <Switch>
                    <Route path="/" exact component={Feed} />
                    <Route path="/posts/:id" component={Post} />
                    <Route path="/" render={() => <div>404</div>} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
