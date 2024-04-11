const getPosts = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(response)
        if(response.status === 200){
            let data = await response.json()
            console.log(data)
            renderPosts(data)
        }else {
            console.log('Error:', response.status)
        }
    } catch (error) {
        console.log('error getPosts: ', error)
    }
}

const renderPosts = (data) => {
    try{
        let postsSave= '';
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
        document.getElementById('post-data').innerHTML = postsSave;
    } catch (error) {
        console.log(error);
    }
}