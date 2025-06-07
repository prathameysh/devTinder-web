import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';
import { Link } from 'react-router';

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const loggedInUser = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log("connections res o/p", res.data.connections);
      dispatch(addConnections(res.data.connections));
    } catch (err) {
      console.error("Error fetching connections", err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0) return <h1>No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl mb-6">Connections</h1>

      <div className="flex flex-col gap-4 items-center">
        {connections.map((connection) => {
          const isToUser = connection.toUserId._id === loggedInUser._id;
          const person = isToUser ? connection.fromUserId : connection.toUserId;
          const { firstName, lastName, imageUrl, age, gender, about, _id } = person;

          return (
            <div key={connection._id} className="flex items-center p-4 rounded-lg bg-base-300 w-1/2 shadow-md">
              <img alt="photo" className="w-20 h-20 rounded-full object-cover" src={imageUrl} />
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl"> {firstName + " " + lastName} </h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
              </div>
              <Link to={"/chat/"+_id} className='ml-auto'><button className="btn btn-soft btn-secondary ">Chat</button></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
