class Book {
    constructor(isbn, title, author, publicationYear) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.isAvailable = true; // Initially, the book is available
    }
  
    toString() {
      return `${this.title} by ${this.author} (${this.publicationYear}) - ISBN: ${this.isbn}`;
    }
  }
  
  class Library {
    constructor() {
      this.books = {}; // Object to store books with ISBN as key
    }
  
    addBook(book) {
      if (this.books[book.isbn]) {
        console.log(`Book with ISBN ${book.isbn} already exists in the library.`);
      } else {
        this.books[book.isbn] = book;
        console.log(`Book '${book.title}' added to the library.`);
      }
    }
  
    borrowBook(isbn) {
      const book = this.books[isbn];
      if (book) {
        if (book.isAvailable) {
          book.isAvailable = false;
          console.log(`You have borrowed '${book.title}'.`);
        } else {
          console.log(`Sorry, the book '${book.title}' is currently not available.`);
        }
      } else {
        console.log(`Book with ISBN ${isbn} does not exist in the library.`);
      }
    }
  
    returnBook(isbn) {
      const book = this.books[isbn];
      if (book) {
        if (!book.isAvailable) {
          book.isAvailable = true;
          console.log(`Thank you for returning '${book.title}'.`);
        } else {
          console.log(`The book '${book.title}' was not borrowed.`);
        }
      } else {
        console.log(`Book with ISBN ${isbn} does not exist in the library.`);
      }
    }
  
    viewAvailableBooks() {
      const availableBooks = Object.values(this.books).filter(book => book.isAvailable);
      if (availableBooks.length > 0) {
        console.log("Available books in the library:");
        availableBooks.forEach(book => console.log(`  - ${book.toString()}`));
      } else {
        console.log("No books are currently available in the library.");
      }
    }
  }
  
  // Example usage
  const library = new Library();
  
  // Adding books
  library.addBook(new Book("978-0132350884", "Clean Code", "Robert C. Martin", 2008));
  library.addBook(new Book("978-0201616224", "The Pragmatic Programmer", "Andrew Hunt", 1999));
  
  // Viewing available books
  library.viewAvailableBooks();
  
  // Borrowing a book
  library.borrowBook("978-0132350884");
  
  // Trying to borrow the same book again
  library.borrowBook("978-0132350884");
  
  // Viewing available books after borrowing
  library.viewAvailableBooks();
  
  // Returning the book
  library.returnBook("978-0132350884");
  
  // Viewing available books after returning
  library.viewAvailableBooks();
  