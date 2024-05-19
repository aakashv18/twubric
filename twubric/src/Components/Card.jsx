import React, { useState } from "react";
import { data } from "../../utils";

const Card = ({ user, onRemove }) => {
  return (
    <div className="flex flex-col items-center justify-center m-10 border-black">
      <img
        src={user.image}
        className="h-40 w-40 object-fill rounded-lg justify-center"
        alt="user"
      />
      <div className="flex flex-row">
        <h4 className="text-lg font-bold mt-3">{user.fullname}</h4>
        <h4 className="text-lg font-bold mt-3 ml-5">
          Total: {user.twubric.total}
        </h4>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h4 className="text-base font-bold mt-3">Friends</h4>
          <h4 className="text-base font-bold text-center">
            {user.twubric.friends}
          </h4>
        </div>
        <div>
          <h4 className="text-base font-bold mt-3 ml-5">Influence</h4>
          <h4 className="text-base font-bold text-center">
            {user.twubric.influence}
          </h4>
        </div>
        <div>
          <h4 className="text-base font-bold mt-3 ml-5">Chirpiness</h4>
          <h4 className="text-base font-bold text-center">
            {user.twubric.chirpiness}
          </h4>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <h4 className="text-base font-bold mt-3 text-center">Join Date</h4>
          <h4 className="text-base font-bold">
            {new Date(user.join_date * 1000).toDateString()}
          </h4>
        </div>
        <button className="button-87 ml-10 mt-4" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
