import sniglePost from '@/app/apiReq/fetchPostData';
import React from 'react';

const SignlePost = async({params}) => {
    const postID = params.id
    const post = await sniglePost(postID)
    return (
        <div>
            <h1 className="bg-green-400 p-5 mt-9 mb-10" > Single post page....</h1>
            <h1>{post.title}</h1>
        </div>
    );
};

export default SignlePost;