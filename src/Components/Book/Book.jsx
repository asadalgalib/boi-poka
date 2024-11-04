import React from 'react';
import { MdStarRate } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

  const { image, bookName, tags, author, category, rating, bookId } = book;
  
  return (

    <Link to={`/books/${bookId}`}><div className="card bg-base-100 h-full border p-6">
      <figure className='border rounded-lg bg-slate-100 p-6 min-h-96'>
        <img className='w-40 '
          src={image}
          alt="Shoes" />
      </figure>
      <div className="mt-5">
        <p className='mb-3 text-green-600 font-semibold'><span className='py-1 px-2 bg-green-100 rounded-xl'>{tags[0]}</span> <span className='ml-5 py-1 px-2 bg-green-100 rounded-xl'>{tags[1]}</span></p>
        <h2 className="text-2xl font-semibold">{bookName}</h2>
        <p className='mt-2 text-xl'>By:  {author}</p>
        <hr className='my-4' />
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-xl'>{category}</p>
        <div className='flex items-center text-2xl text-[#23BE0A]'>
          <p className='mr-2'>{rating}</p>
          <MdStarRate></MdStarRate>
          <MdStarRate></MdStarRate>
          <MdStarRate></MdStarRate>
          <MdStarRate></MdStarRate>
          <MdStarHalf></MdStarHalf>
        </div>
      </div>
    </div></Link>
  );
};

export default Book;