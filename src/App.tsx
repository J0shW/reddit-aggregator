import React from 'react';
import './App.css';
import Feed from './Feed';
import Post from './Post';
import Snoowrap from 'snoowrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
    const [posts, setPosts] = React.useState<Snoowrap.Listing<Snoowrap.Submission>>();

    React.useEffect(() => {
        const reddit = new Snoowrap({
            clientId: 'o4GxPeMIHdlxdg',
            clientSecret: 'jK-vd2bFZT3UMNHPqAJyCo-B56Q',
            userAgent: 'testing',
            refreshToken: '31812939-DRfMXFUkv-Dz-gxkijgl--CL7sU',
        });

        reddit
            .getSubreddit('DnDIY')
            .getHot()
            .then((posts: Snoowrap.Listing<Snoowrap.Submission>) => {
                // do something with posts
                setPosts(posts);
                console.log(posts);
            });
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header" style={{ backgroundColor: 'cadetblue', width: '100%' }}>
                    <p>
                        Welcome to the <b>D&D</b> roundup!
                    </p>
                    <Link to="/post">Post</Link>
                </header>

                <Switch>
                    <Route path="/post">{posts !== undefined ? <Post post={posts![0]} /> : null}</Route>
                    {/* <Route path="/post/:id" component={Post} /> */}
                    <Route path="/">
                        <Feed posts={posts!} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
