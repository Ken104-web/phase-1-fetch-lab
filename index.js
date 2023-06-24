function fetchBooks() {
  // Return the fetch promise to allow chaining and handling in the calling code
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json)); // Call renderBooks with the JSON data
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
    .catch(error => console.error(error)); // Add error handling if needed
});
