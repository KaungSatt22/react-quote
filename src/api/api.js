import axios from "axios";

export const fetchData = async () => {
  let req = await axios.get("https://api.adviceslip.com/advice");
  let res = await req.data;
  return res.slip.advice;
};
