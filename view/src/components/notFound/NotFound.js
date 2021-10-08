import React from 'react';

import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <p className="text-center text-2xl max-w-2xl text-red-700 bg-gray-800 rounded px-2 py-1 mt-20">You've wondered a little bit to far... Better head back before it's too late.</p>
            <Link to='/' className="focus:outline-none flex-wrap m-3 border-solid border-2 px-4 py-2 rounded border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900" >Back Home</Link>
        </>
    );
}