const { Post } = require('../models');

const postData = [
    {
        title: "What is a blog post?",
        post_content: "A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.",
        user_id: 3
    },
    {
        title: "What makes a good blog post?",
        post_content: "A good blog post is interesting to read and provides educational content to audience members.",
        user_id: 1
    },
    {
        title: "Test",
        post_content: "test",
        user_id: 2

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;