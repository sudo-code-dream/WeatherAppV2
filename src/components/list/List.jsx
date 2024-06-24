import ChatList from "./chatList/ChatList";
import Userinfo from "./userInfo/Userinfo";
import PropTypes from "prop-types";

const List = ({ onInputChange, weatherData }) => {
  return (
    <div className="flex-1 flex flex-col ">
      <Userinfo weatherData={weatherData} />
      <ChatList onInputChange={onInputChange} weatherData={weatherData} />
    </div>
  );
};



export default List;
