import React from 'react';
import Snoowrap from 'snoowrap';
import { Item, Icon } from 'semantic-ui-react';

import './Feed.scss';
import { Link } from 'react-router-dom';

interface FeedProps {}

const Feed: React.FC<FeedProps> = props => {
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

    const getThumbnail = (post: any) => {
        if (post.thumbnail && post.thumbnail.substring(0, 4) === 'http') {
            return <Item.Image size="small" src={post.thumbnail} />;
        }
    };

    const renderPosts = () => {
        return posts!.map(post => {
            return (
                <Item>
                    {getThumbnail(post)}
                    <Item.Content>
                        <Item.Header>
                            <Link to={`posts/${post.id}`}>{post.title}</Link>
                        </Item.Header>
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

    return <Item.Group>{posts !== undefined ? renderPosts() : null}</Item.Group>;
};

export default Feed;
