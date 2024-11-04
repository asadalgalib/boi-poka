import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utiliti/addToDb';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readedBooks,setReadedBooks] = useState([]);
    
    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        
        const readedList = allBooks.filter( book => storedReadListInt.includes(book.bookId));
        setReadedBooks(readedList);
    },[])

    return (
        <div>
            <h3 className="text-3xl mb-10">Selected Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Marked As Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center my-14'>
                {
                    readedBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                }
                </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default ListedBooks;