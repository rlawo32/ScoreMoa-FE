'use client'

import { useState } from "react";
import client from "../axios";

const Page = () => {

    const [search, setSearch] = useState('');

    const activeMovieSearch = async() => {
        await client.post(`/api/search`, {
            movieTitle: search
        })
    }

    return (
        <div className="flex items-center gap-2 max-w-md mx-auto my-6">
            <input type="text" onChange={(e) => setSearch(e.target.value)} 
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <button onClick={() => activeMovieSearch()}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-300 active:scale-98 whitespace-nowrap">검색</button>
        </div>
    )
}

export default Page;