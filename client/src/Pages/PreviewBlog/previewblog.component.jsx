import React from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.bubble.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreviewBlog = () => {
  const { currentBlog } = useSelector((state) => state.blog);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (!currentBlog) {
    navigate("/create-blog");
    return;
  }

  const { blogTitle, blogContent, blogImage } = currentBlog;

  return (
    <>
      <main class="min-h-screen lg:p-12 md:p-12 sm:p-0 sm:mt-10">
        <div class="flex items-center justify-center text-sm text-gray-900 dark:text-white mb-7">
          <img
            class="mr-4 w-16 h-16 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Jese Leos"
          />
          <div>
            <a
              href="#"
              rel="author"
              class="text-xl font-bold text-gray-900 dark:text-white"
            >
              Jese Leos
            </a>
            <p class="text-base font-light text-gray-500 dark:text-gray-400">
              Graphic Designer, educator & CEO Flowbite
            </p>
            <p class="text-base font-light text-gray-500 dark:text-gray-400">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
        </div>
        <article class="container lg:shadow-md md:shadow-md shadow-none mx-auto rounded-none lg:rounded-md md:rounded-md">
          <header class="relative">
            <div class="absolute h-full w-full flex items-center justify-center p-8">
              <div class="bg-white bg-opacity-90 p-12">
                <h1 class="blog-head-font font-bold lg:text-5xl md:text-4xl text-center text-2xl mb-4 text-black">
                  {blogTitle}
                </h1>
              </div>
            </div>
            <img
              src={blogImage}
              alt="Kaizen"
              class="w-full object-cover rounded-t h-[400px]"
            />
          </header>
          <div class="px-12 blog-head-font lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
            <ReactQuill value={blogContent} readOnly={true} theme={"bubble"} />
          </div>
        </article>
        <div class="flex justify-center m-10 lg:mx-0 md:mx-3 mx-3">
          <div class="w-1/2 p-3 flex justify-around border-black rounded-full text-xl blog-head-font font-bold rainbow hover:text-white ">
            <button
              type="button"
              onClick={() => navigate('/create-blog')}
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs 
              leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
              focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
              duration-150 ease-in-out"
              >
              Edit Blog
            </button>
            <button
              type="button"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs 
              leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
              focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
              duration-150 ease-in-out"
              >
              Create Blog
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default PreviewBlog;
