const posts = [];
let lastActivityTime = null;

// Function to simulate updating user's last activity time
function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function createPost(postTitle) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newPost = { title: postTitle };
            posts.push(newPost);
            resolve(newPost);
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

// Simulate user actions using Promise.all
Promise.all([
    createPost('POST1'),
    updateLastUserActivityTime(),
    createPost('POST2'),
    updateLastUserActivityTime(),
    createPost('POST3'),
    updateLastUserActivityTime()
])
    .then(([post1, activityTime1, post2, activityTime2, post3, activityTime3]) => {
        console.log( posts);
        console.log(lastActivityTime);
        return deleteLastPost();
    })
    .then((deletedPost) => {
        console.log(deletedPost);
        console.log(posts);
    })
    .catch((error) => {
        console.error(error);
    });
