import React from "react";

const Card = ({ user }) => {
  const { firstName, lastName, emailId, age, gender, imageUrl, password } =user;

  return (
    <div className="my-10 mx-142  ">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={imageUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>about</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
