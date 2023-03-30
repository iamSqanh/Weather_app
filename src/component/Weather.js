import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const KEY = "079753fe14d74238b93143516232503";

  const [search, setSearch] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/current.json?key=${KEY}&q=hanoi`)
      .then((res) => res.json())
      .then((result) => setResult(result));
  }, []);

  const handleSearch = async () => {
    const respon = await axios.get(
      `${BASE_URL}/current.json?key=${KEY}&q=${search}`
    );
    console.log(respon);
    setResult(respon.data);
    setSearch("");
  };

  return (
    <div>
      <div>
        <input
          className="bg-transparent text-[#fffeff] border border-[#fae8ff] py-4 px-6 rounded-[20px] outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Country..."
        />
        <button
          onClick={handleSearch}
          className="ml-3 py-4 px-8 rounded-[12px] border-none bg-[#475569] text-[#fff1f2]"
        >
          Search
        </button>
      </div>
      <div className="mt-6">
        <ul>
          <li className="text-[#79fb42]">
            <span>Thời tiết tại:</span> {result?.location.name} -{" "}
            {result?.location.country}{" "}
          </li>
          <li className="text-[#79fb42]">
            {" "}
            <span>Nhiệt độ (độ C:)</span> {result?.current.temp_c}{" "}
            <label>Nhiệt độ (độ F:)</label> {result?.current.temp_f}{" "}
          </li>
          <li className="text-[#79fb42]">
            {" "}
            <span>Thời gian:</span> {result?.location.localtime}
          </li>
          <li className="text-[#79fb42]">
            {" "}
            <span>Tốc độ gió:</span> {result?.current.wind_kph}
          </li>
          <li className="text-[#79fb42]">
            {" "}
            <img className="w-[240px] h-[240px]" src={result?.current.condition.icon} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Weather;
