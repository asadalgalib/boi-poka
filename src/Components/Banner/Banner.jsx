import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col flex-grow lg:flex-row-reverse">
            <img
                src={bannerImg}
                className="max-w-sm rounded-lg shadow-2xl" />
            <div className='flex  flex-col items-center gap-5'>
                <h1 className="text-5xl text-center font-bold">Box Office News!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-[#59C6D2]">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;