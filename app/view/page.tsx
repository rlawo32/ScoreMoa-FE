'use client'

import { useState } from "react";
import client from "@/axios";

const Page = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const activeMovieSearch = async(type:string) => {
        await client.post(`/api/${type}`, {
            movieTitle: title,
            movieYear: year,
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="max-w-md mx-auto my-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm mt-30">
            <div className="flex items-center gap-2 w-full mb-4">
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="영화 제목을 입력하세요"
                    className="w-3/4 px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input 
                    type="text" 
                    onChange={(e) => setYear(e.target.value)} 
                    placeholder="개봉연도"
                    className="w-1/4 px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
            </div>

            <div className="grid grid-cols-3 gap-2 w-full">
                <button onClick={() => activeMovieSearch('searchTmdb')}
                    className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-300 active:scale-98 whitespace-nowrap cursor-pointer text-center">
                    TMDB 검색
                </button>
                <button onClick={() => activeMovieSearch('searchOmdb')}
                    className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-300 active:scale-98 whitespace-nowrap cursor-pointer text-center">
                    OMDB 검색
                </button>
                <button onClick={() => activeMovieSearch('searchWatcha')}
                    className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-300 active:scale-98 whitespace-nowrap cursor-pointer text-center">
                    Watcha 검색
                </button>
                <button onClick={() => activeMovieSearch('searchCGV')}
                    className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-300 active:scale-98 whitespace-nowrap cursor-pointer text-center">
                    CGV 검색
                </button>
                <button onClick={() => activeMovieSearch('searchTomato')}
                    className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-300 active:scale-98 whitespace-nowrap cursor-pointer text-center">
                    Tomato 검색
                </button>
                <button onClick={() => activeMovieSearch('searchLetterBox')}
                    className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-300 active:scale-98 whitespace-nowrap cursor-pointer text-center">
                    Letterboxd 검색
                </button>
            </div>
        </div>
    )
}

export default Page;