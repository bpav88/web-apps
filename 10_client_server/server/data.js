const Post = require("./entities/Post");
const loremIpsum = require('lorem-ipsum');




const posts = () => {
    const listOfPosts = [];
    for (let i = 0; i < 10; i++) {
        const post = new Post(Math.floor(Math.random() * 100)
            , loremIpsum({ count: 3, units: 'words', random: Math.random })
            , loremIpsum({ count: 2, units: 'sentences', random: Math.random }))
        listOfPosts.push(post);
    }
    return listOfPosts;
}


module.exports = posts;