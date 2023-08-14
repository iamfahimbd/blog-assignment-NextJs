import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">Home</Link>
            </div>
            <div className="navbar bg-base-300">
            <Link href={"/blogpage"} className="btn btn-ghost normal-case text-xl">Blog</Link>
            </div>
            
        </div>
    );
};

export default Navbar;