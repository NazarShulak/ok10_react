import {useEffect, useState} from 'react';
import Post from '../post/Post';
import './Posts.css';
import axiosInstance from '../services/Api';

export default function Users() {

    let [posts, setPosts] = useState([]);
    let [onePost, setOnePost] = useState(null);


    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]));
    }, []);

    const search = (id) => {
        let foundPost = posts.find(value => value.id === id);
        setOnePost(foundPost);
    };

    return (
        <div className={'wrap'}>
            <div className={'posts-box'}>
                {
                    posts.map((value) => <Post
                        key={value.id}
                        item={value}
                        search={search}/>)
                }

            </div>
            <div className={'single-post-box'}>
                {
                    onePost ? (<p>{onePost.body}</p>) : (<div>Please choose any post!</div>)
                }

            </div>

        </div>
    );
}