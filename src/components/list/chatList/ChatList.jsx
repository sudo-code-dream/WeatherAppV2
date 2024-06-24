import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

const ChatList = ({ onInputChange, weatherData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    onInputChange(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex-1 overflow-scroll  ">
      <div className="search items-center flex gap-[20px] p-[20px] ">
        <div className="searchBar flex-1 flex items-center gap-[20px] p-[10px] rounded-[10px] ">
          <img src="/search.png" alt="" className=" w-[20px] h-[20px] " />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search..."
            className="  bg-transparent border-none outline-none text-white flex-1 "
          />
        </div>
        <FaSearchLocation
          onClick={handleClick}
          className="w-[36px] h-[36px] plus p-[10px] rounded-[10px] cursor-pointer "
        />
      </div>
      <div className="item flex items-center gap-[20px] p-[20px] cursor-pointer border-b-[1px] border-solid border-[#dddddd35] ">
        <img
          src="./avatar.png"
          alt=""
          className=" w-[50px] h-[50px] object-cover rounded-[50%] "
        />
        <div className=" flex flex-col gap-[10px]  ">
          <span className=" font-bold">Feels like {weatherData.feel} </span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
