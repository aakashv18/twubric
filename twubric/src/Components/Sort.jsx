import React, { useEffect, useRef, useState } from "react";
import { ASC, DESC } from "../../constants";

const Sort = ({ sortList }) => {
  const activeSortField = useRef();
  const activeSortDirection = useRef(ASC);

  function handleSort(field) {
    if (activeSortField.current !== field) {
      activeSortField.current = field;
      activeSortDirection.current = ASC;
      sortList(field, activeSortDirection);
    } else {
      activeSortField.current = field;
      if (activeSortDirection.current === ASC) {
        activeSortDirection.current = DESC;
      } else {
        activeSortDirection.current = ASC;
      }
      sortList(field, activeSortDirection);
    }
  }

  return (
    <div className="flex flex-col items-center mt-10 justify-center">
      <p className="font-bold">Sort By</p>
      <div className="flex flex-row rounded-lg">
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => handleSort("total")}
        >
          Twubric Score
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => handleSort("friends")}
        >
          Friends
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => handleSort("influence")}
        >
          Influence
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => handleSort("chirpiness")}
        >
          Chirpiness
        </button>
      </div>
    </div>
  );
};

export default Sort;
