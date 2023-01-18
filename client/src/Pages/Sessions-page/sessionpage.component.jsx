import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import DropDown from "../../Components/Dropdown-men/dropdown.component";
import SessionView from "../../Components/SessionView/sessionView.component";

const SessionPage = () => {

  const {userInfo} = useSelector(state => state.auth)

  const options = [
    { name: "SHOW ALL" },
    { name: "DATE" },
    { name: "SESSION TAG" },
    { name: "PRESIDED OVER" },
    { name: "SESSION TYPE" },
  ];

  const [selected, setSelected] = useState(options[0]);

  const getInput = () => {
    switch (selected) {
      case options[0]:
        return (
          <input
            type="text"
            id="default-input"
            disabled
            placeholder={"Disabled"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 text-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        );
        break;
      case options[1]:
        return (
          <div class="flex items-center justify-center">
            <div
              class="datepicker relative form-floating mb-3 xl:w-96"
              data-mdb-toggle-button="false"
            >
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select a date"
                data-mdb-toggle="datepicker"
              />
              <label htmlFor="floatingInput" class="text-gray-700">
                Select a date
              </label>
            </div>
          </div>
        );
        break;
      case options[2]:
        return (
          <input
            type="text"
            id="default-input"
            disabled
            placeholder={"Disabled"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 text-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        );
        break;
      case options[3]:
        return (
          <input
            type="text"
            id="default-input"
            disabled
            placeholder={"Disabled"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 text-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        );
        break;
      case options[4]:
        return (
          <input
            type="text"
            id="default-input"
            disabled
            placeholder={"Disabled"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 text-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        );
        break;
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="h-[12%] w-screen flex justify-center items-center">
        <h1 className="text-sessionText text-center text-5xl font-nanum">
          OUR SESSIONS
        </h1>
      </div>
      <div className="w-screen h-[88%] flex justify-center">
      <div className="w-1/5 sm:h-[60%] h-[12%] flex flex-col items-center justify-start border border-gray-300 rounded-md shadow-md">
      <div className="w-[100%]  font-nanum text-2400 flex items-center justify-center text-3xl mt-3">Filter</div>
      <div className="w-full sm:h-1/2 sm:w-[100%] sm:flex sm:flex-col sm:justify-around sm:items-center">
          <input
            type="text"
            id="default-input"
            disabled
            placeholder={"Disabled"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-[85%] text-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="text"
            id="default-input"
            disabled
            placeholder={"Disabled"}
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-[85%] text-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        { 
        userInfo && userInfo.role === 'member' ?
        <div class="flex space-x-2 justify-center">
          <button type="button" class="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs 
          leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
          focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
          duration-150 ease-in-out">
            Create Session  
          </button>
        </div>
        :
        null
        }
      </div>
      <div className="w-2/3 h-[95%] overflow-scroll">
        <SessionView />
        <SessionView />
        <SessionView />
        <SessionView />
        <SessionView />
        <SessionView />
      </div>
      </div>
    </div>
  );
};

export default SessionPage;
