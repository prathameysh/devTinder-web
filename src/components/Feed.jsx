import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "./Card";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed); // Get feed from Redux

  const getFeed = async () => {
    if (feed && feed.length > 0) return;

    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      console.log("API response:", res.data);
      console.log("Full feed data:", res?.data?.users);
      dispatch(addFeed(res?.data?.users));
    } catch (err) {
      //TODO: handle error
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  console.log("Feed[0]:", feed[0]);
  console.log("Full feed in Redux:", feed);

  return (
  feed && feed[0] && (
    <div className="flex justify-center my-10">
      <Card user={feed[0]} />
    </div>
  )
);
};

export default Feed;
