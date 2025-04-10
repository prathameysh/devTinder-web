import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/requestSlice';

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      console.log("received requests o/p", res.data.receivedRequests);
      dispatch(addRequests(res.data.receivedRequests));
    } catch (err) {
      console.error("Error fetching requests", err);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!requests) return null;

  if (requests.length === 0) return <h1>No Requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl mb-6">Requests</h1>

      <div className="flex flex-col gap-4 items-center">
        {requests.map((request) => {
          const { firstName, lastName, email, imageUrl } = request.fromUserId;

          return (
            <div key={request._id} className="flex items-center p-4 rounded-lg bg-base-300 w-1/2 shadow-md">
              <img
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
                src={imageUrl}
              />

              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                <p>{email}</p>
              </div>

              <button className="btn btn-secondary ml-auto">Accept</button>
              <button className="btn btn-primary mx-2">Reject</button>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
