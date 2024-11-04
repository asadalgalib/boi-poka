import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../Utiliti/addToDb';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData()

    const books = data.find((book) => book.bookId === id);
    const { image, bookName, tags, author, category, rating, review, totalPages, publisher, yearOfPublishing, bookId:currentBookId } = books;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    };

    const handleWishList = (id) =>{
        addToStoredWishList(id)
    }

    return (
        <div className='grid lg:grid-cols-2 gap-12 mt-8 mb-14'>
            <div>
                <figure className='border rounded-lg bg-slate-100 p-16'>
                    <img className='w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
            <div className='flex flex-col'>
                <div className='flex-grow space-y-5'>
                    <h1 className='text-5xl font-semibold'>{bookName}</h1>
                    <p className='text-xl'>By:  {author}</p>
                    <hr />
                    <p className='text-xl'>{category}</p>
                    <hr />
                    <p><span className='font-bold'>Review : </span>{review}</p>
                    <p><span className='font-bold'>Tag :</span>
                        {
                            tags.map((tag,index) => <span key={index} className='py-1 px-2 bg-green-100 rounded-xl mx-2 text-green-600 font-semibold'>#{tag}</span>)
                        }
                    </p>
                    <hr />
                    <div className='flex items-center gap-28'>
                        <div className='w-1/4'><p>Number of Pages :</p></div>
                        <div><p className='font-semibold'>{totalPages}</p></div>
                    </div>
                    <div className='flex items-center gap-28'>
                        <div className='w-1/4'><p>Publisher :</p></div>
                        <div><p className='font-semibold'>{publisher}</p></div>
                    </div>
                    <div className='flex items-center gap-28'>
                        <div className='w-1/4'><p>Year of Publishing :</p></div>
                        <div><p className='font-semibold'>{yearOfPublishing}</p></div>
                    </div>
                    <div className='flex items-center gap-28'>
                        <div className='w-1/4'><p>Rating :</p></div>
                        <div><p className='font-semibold'>{rating}</p></div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='btn btn-outline bg-white border-black' onClick={()=> handleMarkAsRead(currentBookId)}>Mark As Read</button>
                    <button className='btn btn-outline bg-[#50B1C9] text-white' onClick={()=> handleWishList(currentBookId)}>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;