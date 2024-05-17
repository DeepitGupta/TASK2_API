// Function to fetch data for each blog post
async function fetchBlogPost(postId) {
    const apiUrl = `https://example.com/api/blog/posts/${postId}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

// Function to fetch data for all blog posts
async function fetchAllBlogPosts() {
    const postIds = ['cultural', 'historical', 'lifestyle', 'food', 'science']; // Replace with actual post IDs or fetch dynamically
    
    const blogPosts = [];
    for (const postId of postIds) {
        const postData = await fetchBlogPost(postId);
        if (postData) {
            blogPosts.push(postData);
        }
    }
    
    return blogPosts;
}

// Function to display blog posts on the webpage
function displayBlogPosts(blogPosts) {
    const blogPostContainer = document.getElementById('blog-posts');
    
    blogPosts.forEach(blogPost => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
                    <h2>${blog.title}</h2>
                    <p>${blog.content}</p>
                    <a href="#post-${blog.id}">Read more</a>
                    <hr>
                    <div id="post-${blog.id}">
                        <h2>${blog.title}</h2>
                        <p>${blog.content}</p>
                        <a href="#blog-container">Back to top</a>
                    </div>
                `;
}

// Fetch data for all blog posts and display them
fetchAllBlogPosts()
    .then(blogPosts => {
        displayBlogPosts(blogPosts);
    })
    .catch(error => {
        console.error('Error fetching blog posts:', error);
    });