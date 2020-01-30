import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import Snoowrap from 'snoowrap';

import './Feed.scss';

interface FeedProps {
    posts: Snoowrap.Listing<Snoowrap.Submission>;
}

const Feed: React.FC<FeedProps> = props => {
    const getThumbnail = (post: any) => {
        if (post.thumbnail && post.thumbnail.substring(0, 4) === 'http') {
            return <img src={post.thumbnail} alt={post.title} />;
        }
    };

    const renderPosts = () => {
        return props.posts.map(post => {
            return (
                <div key={post.id} className="feedPost">
                    {getThumbnail(post)}
                    <h3>{post.title}</h3>
                    <h4>by: {post.author.name}</h4>
                    <h5>Score: {post.score}</h5>
                    <FontAwesomeIcon icon={faChevronCircleUp} style={{ fontSize: '25px', color: 'orange' }} />
                    <FontAwesomeIcon icon={faChevronCircleDown} style={{ fontSize: '25px', color: 'mediumpurple' }} />
                    <hr />
                </div>
            );
        });
    };

    return <main className="feed">{props.posts !== undefined ? renderPosts() : null}</main>;
};

export default Feed;
