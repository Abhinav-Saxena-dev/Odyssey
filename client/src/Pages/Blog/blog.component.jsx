import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../Components/BlogCard/blogcard.component";
import DropDown from "../../Components/Dropdown-men/dropdown.component";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {

  const {userInfo} = useSelector(state => state.auth)

  const navigate = useNavigate()

  const handleClick = () => {
    if(!userInfo){
      navigate('/create-blog')
    }
  }

  return (
    <div className="w-screen h-screen">
      <div className="h-[12%] w-screen flex justify-center items-center">
        <h1 className="text-sessionText text-center text-5xl font-nanum">
          BLOGS
        </h1>
      </div>
      <div className="w-full h-[88%] flex justify-center">
      <div className="w-1/5 sm:h-[60%] h-[12%] flex flex-col items-center justify-evenly border border-gray-100 rounded-md shadow-md">
      <div className="w-[100%]  font-nanum text-2400 flex items-center justify-center text-3xl mt-3">Filter</div>
      <div className="w-full sm:h-1/2 sm:w-[100%] sm:flex sm:flex-col sm:justify-around sm:items-center">
          <input
            type="text"
            id="author"
            disabled
            placeholder={"Search by Blog title"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-[85%] text-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="text"
            id=""
            disabled
            placeholder={"Filter by Author name"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-[85%] text-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
      </div>
        { 
        !userInfo ?
        <div class="flex space-x-2 justify-center">
          <button type="button" onClick={handleClick} class="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs 
          leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
          focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
          duration-150 ease-in-out">
            Create Blog  
          </button>
        </div>
        :
        null
        }
      </div>
      <div className="w-2/3 h-[95%] overflow-scroll">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      </div>
    </div>
  );
};

export default BlogPage;
