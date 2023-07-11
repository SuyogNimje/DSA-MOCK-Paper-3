const loader = document.getElementById('loader');
const dataContainer = document.getElementById('dataContainer');

function showLoader() {
  loader.classList.remove('hidden');
  dataContainer.classList.add('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
  dataContainer.classList.remove('hidden');
}

function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;
  return postElement;
}

function fetchData() {
  showLoader();

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      hideLoader();
      posts.forEach(post => {
        const postElement = createPostElement(post);
        dataContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      hideLoader();
      console.error('Error:', error);
    });
}

fetchData();
