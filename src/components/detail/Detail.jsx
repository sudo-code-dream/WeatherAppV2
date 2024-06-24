import "./detail.css"

const Detail = (data) => {
  return (
    <div className="flex-1">
      <div className="user flex flex-col items-center gap-[20px] border-b border-solid border-[#dddddd35]  ">
        <img
          src={data.weatherData.icon}
          className="w-[100px] h-[100px] object-cover rounded-[50%] "
          alt=""
        />
        <h2>{data.weatherData.name} </h2>
        <p className="desc">{data.weatherData.desc} </p>
      </div>
      <div className="info p-[20px] flex-col flex gap-[30px] ">
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail