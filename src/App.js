import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => { 
    const createdBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 999),
        title
      }
    ];
    setBooks(createdBooks)
  };

  const deleteBookById = (id) => { 
    const deleteBook = books.filter((book) => { 
      return book.id !== id;
    });

    setBooks(deleteBook);
  };

  const editBookById = (id, newTitle) => { 
    const updatedBooks = books.map((book) => { 
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
