import Post from './entities/Post.js';

const POST_API = 'http://127.0.0.1:3000';

const fetchPost = () => {
    return fetch(POST_API)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            response.map((post) => {
                new Post(post.id, post.title, post.intro);
            })
            return response;
        });
}

export {
    fetchPost
}