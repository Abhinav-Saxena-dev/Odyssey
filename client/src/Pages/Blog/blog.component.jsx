import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../Components/BlogCard/blogcard.component";
import DropDown from "../../Components/Dropdown-men/dropdown.component";

const BlogPage = () => {
  const options = [
    { name: "SHOW ALL" },
    { name: "DATE" },
    { name: "BLOG EDITOR" },
    { name: "BLOG TITLE" },
  ];

  const [selected, setSelected] = useState(options[0]);

  const {userInfo} = useSelector(state => state.auth)

  return (
    <div className="w-screen h-screen">
      <div className="h-[8%] w-screen flex justify-center items-end">
        <h1 className="text-sessionText text-center text-5xl font-nanum">
          BLOGS
        </h1>
      </div>
      <div className="w-screen sm:h-[8%] h-[12%] flex items-center justify-around">
        <div className="w-full sm:w-[35%] h-full sm:flex sm:items-center sm:justify-between">
          <input
            type="text"
            id="default-input"
            disabled
            placeholder={"Disabled"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 text-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <DropDown
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        { 
        userInfo && userInfo.role === 'user' ?
        <div class="flex space-x-2 justify-center">
          <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
        :
        null
        }
      </div>
      <div className="w-2/3 h-5/6 overflow-scroll">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
