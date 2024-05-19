import React, { useRef, useState } from "react";
import { data } from "../../utils";
import Card from "./Card";
import Sort from "./Sort";
import Filter from "./Filter";
import { ASC } from "../../constants";

const CardList = () => {
  const [list, setList] = useState(data);
  const filteredList = useRef(list);

  function sortList(field, direction) {
    let sortedList = [...list];
    if (direction.current === ASC) {
      sortedList.sort((a, b) => (a.twubric[field] > b.twubric[field] ? 1 : -1));
    } else {
      sortedList.sort((a, b) => (a.twubric[field] > b.twubric[field] ? -1 : 1));
    }
    setList(sortedList);
  }

  function onRemove(uid) {
    filteredList.current = list.filter((Card) => Card.uid !== uid);
    setList(filteredList.current);
  }

  function onFilter(startDate, endDate) {
    setList(
      filteredList.current.filter((Card) => {
        return Card.join_date <= endDate && Card.join_date >= startDate;
      })
    );
  }

  return (
    <>
      <Sort sortList={sortList} />
      <Filter onFilter={onFilter} />
      <div className="grid mt-10 lg:grid-cols-4 md:grid-cols-2">
        {list.map((userInfo) => {
          return (
            <Card
              key={userInfo.uid}
              user={userInfo}
              onRemove={() => {
                onRemove(userInfo.uid);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
