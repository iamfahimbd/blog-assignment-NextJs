import React from 'react';

const loading = () => {
    return (
        <div className="flex items-center justify-center h-screen" >
            <p className="text-center">Loading </p> <br/>
            <span className="loading loading-spinner text-accent"></span>
        </div>
    );
};

export default loading;