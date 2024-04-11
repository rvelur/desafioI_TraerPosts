class Get {
    constructor(url) {
        this.url = url;
    }

    getPosts = async () => {
        try {
            let response = await fetch(`${this.url}`)
            if (response.status === 200) {
                let data = await response.json()
                this.#renderPosts(data)
            } else {
                console.log('Error:', response.status)
            }
        } catch (error) {
            console.log('error getPosts: ', error)
        }
    }

    #renderPosts = (data) => {
        try {
            let postsSave = '';
            data.forEach(post => {
                console.log(post)
                postsSave += `
                <li>
                <h3>Usuario con id ${post.userId}</h3>
                <h4>Post numero: ${post.id}</h4>
                <p><strong>Titulo ${post.title}</strong></p>
                <p>${post.body}</p>
                <li>
                `
            });
            console.log('completo')
            document.getElementById('post-data').innerHTML = postsSave;
        } catch (error) {
            console.log(error);
        }
    }
}

let classCreator = () => {
    let posts = new Get('https://jsonplaceholder.typicode.com/posts')
    posts.getPosts()
}