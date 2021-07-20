import React from "react";

function UserAccountFullList({ acceptedVisit, actualDate, isDuplicate }) {
  return (
    <>
      <ul className="sheduled-list">
        {acceptedVisit.map((item, index) => {
          if (isDuplicate === false) {
            return (
              <li
                key={index + 1}
                className={
                  item.date > actualDate
                    ? "sheduled-item "
                    : "sheduled-item hide"
                }
              >
                {item.date.toLocaleDateString()}
                {" godz. "} {item.hours} {item.doctor}
              </li>
            );
          } else return null;
        })}
      </ul>
    </>
  );
}

export default UserAccountFullList;
