
const Userinfo = (weatherData) => {
  return (
    <div className="p-[20px] flex items-center justify-between">
      <div className="user flex items-center gap-[20px]  ">
        <img
          src="./avatar.png"
          className="w-[50px] h-[50px] rounded-[50%] object-cover "
          alt=""
        />
        <h2 className="font-black">Weather App</h2>
      </div>
      <div className="flex gap-[20px] cursor-pointer ">
        <img src="./more.png" alt="" className="w-[20px] h-[20px]" />
        <img src="./video.png" alt="" className="w-[20px] h-[20px]" />
        <img src="./edit.png" alt="" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default Userinfo