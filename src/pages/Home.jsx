import React, { useEffect } from "react";
import { fetchData } from "../api/api";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      let req = await fetchData();
      setData(req);
    };
    let interval = setInterval(() => {
      fetchApi();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[90vh] bg-slate-50 p-3">
        <h2 className="text-5xl font-bold text-center">
          Welcome To Our Home Page
        </h2>
        <h2 className="text-xl my-20 text-center">
          You can find a lot of Quotes and you can add Quote
        </h2>
        <div className="mb-10 space-x-5">
          <NavLink
            to="allquotes"
            className="p-3 bg-blue-500 rounded-md text-xl text-white hover:bg-blue-700"
          >
            All Quotes
          </NavLink>
          <NavLink
            to="addquote"
            className="p-3 bg-blue-500 rounded-md text-xl text-white hover:bg-blue-700"
          >
            Add Quote
          </NavLink>
        </div>
        <div className="shadow-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white w-full lg:w-[50rem] h-[20rem] px-5 rounded-lg">
          <h2 className="text-center mt-20 text-4xl font-bold">
            Ramdom Advice
          </h2>
          <div className="text-center mt-20 text-2xl">
            {data === "" ? <div>Loading......</div> : <p>{data}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
