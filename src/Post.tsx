import React from 'react';
import Snoowrap from 'snoowrap';

import './Feed.scss';

interface FeedProps {
    post: Snoowrap.Submission;
}

const Post: React.FC<FeedProps> = props => {
    const renderPost = () => {
        return (
            <div>
                <img src={props.post.thumbnail} alt={props.post.title} />
                <h1>{props.post.title}</h1>
                <p>{props.post.author.name}</p>
            </div>
        );
    };

    return <React.Fragment>{props.post !== undefined ? renderPost() : null}</React.Fragment>;
};

export default Post;
