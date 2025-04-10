import React from "react";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Card = ({ user }) => {
  const {_id, firstName, lastName, emailId, age, gender, imageUrl, password } =user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/user/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("user request failed", err); // Helpful during testing
    }
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={imageUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>about</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
            <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
