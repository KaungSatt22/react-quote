import React from "react";
import { useSelector } from "react-redux";
import { quotes } from "../features/Quotes/QuotesSlice";
import { NavLink } from "react-router-dom";

import Quote from "../features/Quotes/Quote";
const AllQuote = () => {
  const allQuotes = useSelector(quotes);
  return (
    <div>
      {allQuotes.length > 0 ? (
        <div className="container mx-auto">
          <h2 className="text-center my-10 text-4xl">All Quotes</h2>
          {allQuotes.map((quotes) => (
            <Quote key={quotes.id} {...quotes} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col  justify-center items-center h-[90vh]  ">
          <div className="lg:w-[56rem] rounded-md p-5 text-white space-y-10 bg-gradient-to-r from-blue-500 to-teal-500">
            <h2 className="text-4xl text-center">Sorry nothing Found.</h2>
            <h2 className="text-4xl text-center">Please add New Quotes.</h2>
            <p className="text-center my-10 text-2xl font-bold p-5">
              Go To
              <NavLink
                to="../addquote"
                className="m-10 p-3 bg-blue-500 rounded-lg  text-white"
              >
                Add Quote
              </NavLink>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllQuote;
