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
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.users));
      console.log(res.data.users);
    } catch (err) {
      //TODO: handle error
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <Card user={feed[0]} />
    </>
  );
};

export default Feed;
