
const Chat = (data) => {
  return (
    <div className="chat border-solid border-l border-r border-[#dddddd35] h-[100%]  ">
      <div className="top p-[20px] flex items-center justify-between border-b border-solid border-[#dddddd35] ">
        <div className="user flex items-center gap-[20px] ">
          <div className="texts flex flex-col gap-[5px]  ">
            <span className=" text-[18px] font-bold ">

              {data.weatherData.name}
            </span>
            <p className=" text-[14px] font-medium text-[#a5a5a5] ">
              {data.weatherData.country}
            </p>
          </div>
        </div>
        <div className="icons flex gap-[20px]"></div>
      </div>
      <div className="center grid items-center text-center justify-center pb-[4rem] mb-[6rem] ">
        <img src={data.weatherData.icon} alt="" />
        <h1 className="text-4xl">{data.weatherData.name}</h1>
        <p className="font-bold text-xl tracking-tight ">
          {data.weatherData.weather}
        </p>
        <h1 className="text-4xl mt-[5rem] ">{data.weatherData.feel}</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className=" w-[100%] mt-[0px]  text-white flex justify-between ">
          <div className="flex items-start gap-[12px] text-[22px] ml-[5rem] ">
            <img src="/humidity.png" alt="" className="w-[30px] mt-[10px]" />
            <div>
              <p>{data.weatherData.humidity}%</p>
              <span className="block font-[16px]  ">Humidity</span>
            </div>
          </div>
          <div className="flex items-start gap-[12px] text-[22px] mr-[5rem] ">
            <img src="/wind.png" alt="" className="w-[30px] mt-[10px]" />
            <div>
              <p>{data.weatherData.wind} km/h</p>
              <span className="block font-[16px] ">Wind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat