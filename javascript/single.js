const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id)
const singlePost = 'https://cors.noroff.dev/www.sweet-treats.no/wp-json/wp/v2/posts/' + id + '?_embed';



export async function getPost() {
    try {
        const answer = await fetch(singlePost);
        const result = await answer.json();
        return result;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }

}
getPost();



async function createHtml() {
    const post = await getPost();
    const singlePost = document.querySelector(".single-wrapper");
  
    document.title = post.title.rendered;

    console.log(post);
        singlePost.innerHTML = '';
        singlePost.innerHTML +=
            `<h1>${post.title.rendered}</h1>
            <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="Image of dessert" id="singleimg">
            <p id="singletext">${post.content.rendered}</p>`;

}
createHtml();
