import { getPosts } from "./index.js";


async function renderList() {
    const list = await getPosts();
    const listAll = document.querySelector(".posts");

        listAll.innerHTML = ``;
        list.forEach(post => {
            listAll.innerHTML += 
                `<a href="../singlepost.html?id=${post.id}">
                    <div class="post-wrapper">
                        <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="Image of dessert" id="postimg">
                        <div id="post-text">
                            <h2>${post.title.rendered}</h2>
                            <p>${post.excerpt.rendered}</p>
                        </div>
                    </div>
                </a>`;

        });

    }
renderList();


// const loadMoreButton = document.querySelector('#load-more');
// const posts = list.slice(0,10);
// const chunkSize = 10;


// loadMoreButton.addEventListener('click', () => {
//     renderList();

//     for(let i = 0; i < posts.length; i+= chunkSize) {
//     const chunk = posts.slice(i, i + chunkSize);
//     console.log(chunk)

//     }

// posts.appendChild(posts);

// })
