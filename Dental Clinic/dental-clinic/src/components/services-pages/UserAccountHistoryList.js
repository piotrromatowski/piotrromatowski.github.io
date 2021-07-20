import React from "react";

function UserAccountHistoryList({ previousVisit, actualDate, isDuplicate }) {
  return (
    <>
      <ul className="previous-list">
        <li className="previous-item">
          20.04.2021 godz. 14:00 - 15:00 Angelika Sobieska
        </li>
        {previousVisit.map((item, index) => {
          if (item.date < actualDate) {
            return isDuplicate ? null : (
              <li key={index + 1} className="previous-item">
                {new Date(item.date).toLocaleDateString()} {"godz. "}{" "}
                {item.hours} {item.doctor}
              </li>
            );
          } else return null;
        })}
      </ul>
    </>
  );
}

export default UserAccountHistoryList;
