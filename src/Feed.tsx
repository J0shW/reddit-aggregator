import React from 'react';
import Snoowrap from 'snoowrap';
import { Item, Icon } from 'semantic-ui-react';

import './Feed.scss';

interface FeedProps {
    posts: Snoowrap.Listing<Snoowrap.Submission>;
}

const Feed: React.FC<FeedProps> = props => {
    const getThumbnail = (post: any) => {
        if (post.thumbnail && post.thumbnail.substring(0, 4) === 'http') {
            return <Item.Image size="small" src={post.thumbnail} />;
        }
    };

    const renderPosts = () => {
        return props.posts.map(post => {
            return (
                <Item>
                    {getThumbnail(post)}
                    <Item.Content>
                        <Item.Header as="a">{post.title}</Item.Header>
                        <Item.Description>by: {post.author.name}</Item.Description>
                        <Item.Extra>
                            <Icon color="orange" name="arrow up" />
                            {post.ups}
                            <Icon color="purple" name="arrow down" />
                            {post.downs}
                        </Item.Extra>
                    </Item.Content>
                </Item>
            );
        });
    };

    return <Item.Group>{props.posts !== undefined ? renderPosts() : null}</Item.Group>;
};

export default Feed;
