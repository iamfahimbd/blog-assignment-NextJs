import React from 'react';
import blogPosts from '../apiReq/fetchBlogData';
import Link from 'next/link';

const BlogPage = async() => {

    
    const posts = await blogPosts()

    return (
        <div>
            
            {
               
            }
            <div className="grid grid-cols-3 gap-4  mt-5 mx-5 ">
                {
                     posts.map((item)=>{
                        return(
                            <div key={item.id} className="border border-gray-300 p-5" >
                                <h1 className='text-xl text-center font-bold'> <Link href={`/blogpage/${item.id}`}>{item.title}</Link> </h1>
                                <p className='text-sm my-2 text-justify'>{item.content}</p>
                                <button className='btn border border-black-400' > <Link href={`/blogpage/${item.id}`} > Read More</Link> </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BlogPage;