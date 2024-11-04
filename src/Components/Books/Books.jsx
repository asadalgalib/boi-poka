import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center mb-10'>Books</h1>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book> )
                }
            </div>
        </div>
    );
};

export default Books;