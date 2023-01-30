import React, { useState } from "react";
import { useEffect } from "react";
import ReactQuill, { defaultProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { resetCurrentBlog, setCurrentBlog } from "../../redux/blogSlice/blogSlice";

const CreateBlog = () => {
  const {currentBlog} = useSelector(state => state.blog)

  const [blogContent, SetBlogContent] = useState(currentBlog ? currentBlog.blogContent : '');
  const [blogTitle, setBlogTitle] = useState(currentBlog ? currentBlog.blogTitle : '')
  const [blogImage, setBlogImage] = useState(null)
  const [blogImageBase64, setBlogImageBase64] = useState(currentBlog ? currentBlog.blogImage : null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const title = e.target.value
    setBlogTitle(title)
  }

  const handleBlogImage = (e) => {
    const image = e.target.files[0]
    setBlogImage(image)
    getBase64Img(image);
  }

  const getBase64Img = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setBlogImageBase64(reader.result)
    }
  }

  const handleClick = () => {
    const blog = {
      blogContent,
      blogTitle,
      blogImage : currentBlog ? currentBlog.blogImage : blogImageBase64,
    }

    if(blogContent === "" || blogTitle === "" || !blog.blogImage){

      Swal.fire({
        title: "Error",
        text: "Fill all fields",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return
    }

    dispatch(setCurrentBlog(blog))
    navigate('/preview-blog')
  }

  const Dropzone = () => (
    <label
          htmlFor="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleBlogImage}/>
        </label>
  );

  const toolbar = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    ["link", "image"],

    [{ size: ["huge", "large"]}],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  return (
    <div className="w-screen h-[180vh] flex flex-col items-center justify-evenly">
      <div class="flex justify-center items-center w-2/3 h-[20%]">
        {
          !blogImageBase64 ? 
            <Dropzone/> 
            :
            <img src={blogImageBase64} alt = "" className="w-full h-full object-cover"/>
        }
      </div>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-[600px]">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-4xl inline-block mb-2 text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name = "title"
            className="
              form-control
              block
              w-full
              h-16
              px-3
              py-1.5
              text-3xl
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            value = {blogTitle}
            onChange={handleChange}
            placeholder="Type the title of your blog Here"
          />
        </div>
      </div>

      <ReactQuill
        theme="snow"
        value={blogContent}
        onChange={SetBlogContent}
        modules={{ toolbar }}

        className="w-2/3 h-[35%]"
        placeholder="Set size to Huge for best outcome."
      />

      <button type="button" onClick={handleClick} class="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs 
          leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
          focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
          duration-150 ease-in-out">
           Preview Blog 
      </button>
    </div>
  );
};

export default CreateBlog;
