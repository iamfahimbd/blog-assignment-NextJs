import React from 'react';
import blogPosts from '../apiReq/fetchBlogData';
import Link from 'next/link';

const BlogPage = async() => {

    
    const posts = await blogPosts()

    return (
        <div>
            
            {
                posts.map((item)=>{
                    return(
                        <div key={item.id} className='text-center mt-6'>
                            <h1 className='text-xl'> <Link href={`/blogpage/${item.id}`}>{item.title}</Link> </h1>
                            <p className='text-sm'>{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BlogPage;