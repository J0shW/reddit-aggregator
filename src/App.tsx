import React from 'react';
import './App.css';
import Feed from './Feed';
import Snoowrap from 'snoowrap';

const App: React.FC = () => {
    const [posts, setPosts] = React.useState<Snoowrap.Listing<Snoowrap.Submission>>();

    React.useEffect(() => {
        const reddit = new Snoowrap({
            clientId: 'o4GxPeMIHdlxdg',
            clientSecret: 'jK-vd2bFZT3UMNHPqAJyCo-B56Q',
            userAgent: 'testing',
            refreshToken: '31812939-MbNY90Or6q4M554sVPZe1BIT6aM',
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
        <div className="App">
            <header className="App-header" style={{ backgroundColor: 'cadetblue', width: '100%' }}>
                <p>
                    Welcome to the <b>D&D</b> roundup!
                </p>
            </header>
            <Feed posts={posts!} />
        </div>
    );
};

export default App;
