const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id)
const singlePost = 'https://cors.noroff.dev/www.sweet-treats.no/wp-json/wp/v2/posts/' + id + '?_embed';

// const api = `https://www.sweet-treats.no/wp-json/wp/v2`;
// const media = api + `/media?parent=` + id;
// const singleApi = api + "/posts/?p=" +id;


// console.log(media);




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
console.log([getPost()])


// async function createHtml() {
//     const post = await getPost();
//     const singlePost = document.querySelector(".single-wrapper");
  

//     // console.log(post);
//         singlePost.innerHTML = '';
//         singlePost.innerHTML +=
//             `<div class="single-wrapper">
//                 <h1></h1>
//                 <img src="${post.image}" alt="Image of dessert" id="singleimg">
//                 <p id="singletext">${post.content}</p>
//             </div>`;

// }
// createHtml();



// async function renderSinglePost() {
//     const post = await getPosts();
//     const image = await getMedia();

//     const singlePost = document.querySelector(".single-wrapper");
//     console.log(post);

//     for (let i=0; i<post.length; i++) {
//         let  blogpost = post[i];
//         blogpost = post.content;
//         console.log(blogpost)
//     }

//         // singlePost.innerHTML = '';
//         // post.forEach(post => {
//         //     singlePost.innerHTML += 
            //     `<div class="single-wrapper">
            //         <h1>${post.title}</h1>
            //     <img src="images/birthday-cake.jpg" alt="Image of dessert" id="singleimg">
            //     <p id="singletext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id illum eius consequatur? Optio voluptate cum rerum inventore molestias excepturi alias reprehenderit. Ad, officiis! Nemo eligendi officiis fugit quam eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id illum eius consequatur? Optio voluptate cum rerum inventore molestias excepturi alias reprehenderit. Ad, officiis! Nemo eligendi officiis fugit quam eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id illum eius consequatur? Optio voluptate cum rerum inventore molestias excepturi alias reprehenderit. Ad, officiis! Nemo eligendi officiis fugit quam eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id illum eius consequatur? Optio voluptate cum rerum inventore molestias excepturi alias reprehenderit. Ad, officiis! Nemo eligendi officiis fugit quam eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id illum eius consequatur? Optio voluptate cum rerum inventore molestias excepturi alias reprehenderit. Ad, officiis! Nemo eligendi officiis fugit quam eaque!</p>
            // </div>`;

//         // });
            
//     // }
   
// };
// renderSinglePost();