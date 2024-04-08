function fetchBooks() {
    // Fetch data from the Game of Thrones API
    return fetch('https://anapioficeandfire.com/api/books')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convert the response to JSON
            return response.json();
        })
        .then(books => {
            // Render the books
            renderBooks(books);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
} 
