import React from 'react';
import Snoowrap from 'snoowrap';
import { Card, Image, Icon } from 'semantic-ui-react';

import './Feed.scss';
import { RouteComponentProps } from 'react-router-dom';

interface FeedProps extends RouteComponentProps<{ id: string }> {}

const Post: React.FC<FeedProps> = props => {
    const [post, setPost] = React.useState<Snoowrap.Submission>();

    React.useEffect(() => {
        const reddit = new Snoowrap({
            clientId: 'o4GxPeMIHdlxdg',
            clientSecret: 'jK-vd2bFZT3UMNHPqAJyCo-B56Q',
            userAgent: 'testing',
            refreshToken: '31812939-DRfMXFUkv-Dz-gxkijgl--CL7sU',
        });

        reddit
            .getSubmission(props.match.params.id)
            .fetch()
            .then((post: Snoowrap.Submission) => {
                setPost(post);
                console.log(post);
            });
    }, [props.match.params.id]);

    const getThumbnail = () => {
        if (post !== undefined) {
            if (post.thumbnail && post.thumbnail.substring(0, 4) === 'http') {
                return <Image src={post.thumbnail} wrapped ui={false} />;
            }
        }
    };

    const renderPost = (post: Snoowrap.Submission) => {
        return (
            <Card /*fluid*/>
                {getThumbnail()}
                <Card.Content>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Meta>
                        by: <em>{post.author.name}</em>
                    </Card.Meta>
                    <Card.Description>{post.selftext}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name="arrow up" />
                    {post.ups}
                </Card.Content>
            </Card>
        );
    };

    return <React.Fragment>{post !== undefined ? renderPost(post) : null}</React.Fragment>;
};

export default Post;
