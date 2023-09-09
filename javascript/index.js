const allPosts = 'https://cors.noroff.dev/www.sweet-treats.no/wp-json/wp/v2/posts';
const apiMedia = 'https://cors.noroff.dev/www.sweet-treats.no/wp-json/wp/v2/media';
// const singlePost = 'https://cors.noroff.dev/www.sweet-treats.no/wp-json/wp/v2/posts/${id}?_embed';

export async function getPosts() {
    try {
        const response = await fetch(allPosts + "?_embed&?per_page=13");
        const blogposts = await response.json();
        return blogposts;
    }
    catch(error) {
        console.error({error:'An error has occured in the fetch api'})
    }
}
getPosts();



async function renderPostsList() {
    const posts = await getPosts();
    const postsList = document.querySelector(".carousel-wrapper");

        postsList.innerHTML = '';
        posts.forEach(post => {
            postsList.innerHTML += 
                `<div class="post">
                    <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="Image of dessert" id="carousel-image">
                    <h2>${post.title.rendered}</h2>
                </div>`;

        });
            
    }
renderPostsList();



    
    

