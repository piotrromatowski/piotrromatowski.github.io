import React, { useState, useEffect } from "react";
import { TeamMembersDentists } from "./TeamMembers";
import Calendar from "react-calendar";
import UserAccountFullList from "./services-pages/UserAccountFullList";
import UserAccountHistoryList from "./services-pages/UserAccountHistoryList";
import "react-calendar/dist/Calendar.css";
// import {} from "gulp";

function UserAccount({ user, name, phone }) {
  const [selectedOption, setSelectedOption] = useState([0]);
  const [calendarData, setCalendarData] = useState(new Date());

  const [onChangeValue, setOnChangeValue] = useState();
  const [wrongDate, setWrongDate] = useState("");

  const actualDate = new Date();

  const [docs, setDocs] = useState("");

  const [acceptedVisit, setAcceptedVisit] = useState([
    {
      id: Math.random(),
      date: new Date(),
      hours: "",
      doctor: "",
    },
  ]);
  const [previousVisit, setPreviousVisit] = useState([
    {
      id: Math.random(),
      date: new Date(""),
      hours: "",
      doctor: "",
    },
  ]);

  const [isDuplicate, setIsDuplicate] = useState(false);

  const acceptVisit = () => {
    setWrongDate("");

    if (
      calendarData > actualDate &&
      onChangeValue !== "" &&
      selectedOption !== "Wybierz..."
    ) {
      acceptedVisit.map((item, index) => {
        if (
          item.date === calendarData &&
          item.hours === onChangeValue &&
          item.doctor === docs
        ) {
          setIsDuplicate(true);
          setAcceptedVisit([...acceptedVisit], {});
          setPreviousVisit([...previousVisit], {});
          setIsDuplicate(false);
          alert("Ta wizyta została już umówiona");
        } else if (
          item.date !== calendarData &&
          item.hours !== onChangeValue &&
          item.doctor !== docs
        ) {
          alert(
            `Wizyta umówiona na ${calendarData.toLocaleDateString()}, godzina ${onChangeValue}`
          );
          setIsDuplicate(false);
          setAcceptedVisit([
            ...acceptedVisit,
            {
              date: calendarData,
              hours: onChangeValue,
              doctor: docs,
            },
          ]);

          setPreviousVisit([
            ...previousVisit,
            {
              date: calendarData,
              hours: onChangeValue,
              doctor: docs,
            },
          ]);
        }
        return null;
      });

      setWrongDate("");
    } else if (onChangeValue === " ") {
      setWrongDate("Wybierz datę, godzinę oraz lekarza");
    } else return setWrongDate("Brak wolnych wizyt w wybranej dacie");
  };

  useEffect(() => {
    TeamMembersDentists.map((item2, index) => {
      if (selectedOption === item2.link) {
        return (
          <>
            <span>{item2.name}</span>
            {setDocs(item2.name)}
            {console.log(docs)}
          </>
        );
      } else if (acceptedVisit.date < actualDate) {
        return setPreviousVisit([
          {
            date: acceptedVisit.date,
            hours: acceptedVisit.hours,
            doctor: acceptedVisit.docs,
          },
        ]);
      } else return null;
    });
  });

  return (
    <>
      <section className="account-data">
        <h1 className="title-account">Witaj na koncie pacjenta Mr Dentist</h1>
        <div className="patient-info">
          <h2 className="patient-info-title">Twoje dane</h2>
          <div className="patient-data">
            <span className="name">{name}</span>
            <span className="mail">{user}</span>
            <span className="phone">tel. {phone}</span>
          </div>
        </div>
        <div className="appointments">
          <h2 className="appointments-title">Twoje wizyty</h2>
          <div className="appointments-all">
            <div className="sheduled">
              <h2 className="sheduled-title">Zaplanowane wizyty</h2>
              <UserAccountFullList
                acceptedVisit={acceptedVisit}
                actualDate={actualDate}
                isDuplicate={isDuplicate}
              ></UserAccountFullList>
            </div>
            <div className="previous">
              <h2 className="previous-title">Historia wizyt</h2>
              <UserAccountHistoryList
                previousVisit={previousVisit}
                actualDate={actualDate}
                isDuplicate={isDuplicate}
              ></UserAccountHistoryList>
            </div>
          </div>
        </div>
        <div className="shedule-visit">
          <h2 className="shedule-visit-text">Umów nową wizytę</h2>
          <div className="visit-data">
            <div className="choose-doctor">
              <label>Proszę wybrać lekarza...</label>
              <select
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              >
                <option>Wybierz...</option>
                <option>Dowolny lekarz</option>
                {TeamMembersDentists.filter((doctor) =>
                  doctor.teamClassName.includes("dentist")
                ).map((item, index) => {
                  return (
                    <>
                      <option
                        className={item.teamClassName}
                        key={index + 2}
                        value={item.link}
                      >
                        {item.name}, {item.profession}
                      </option>
                    </>
                  );
                })}
              </select>

              <Calendar onChange={setCalendarData} value={calendarData} />
              {wrongDate}

              <div
                className="hours"
                onChange={(e) => setOnChangeValue(e.target.value)}
              >
                <div className="morning">
                  <input
                    type="radio"
                    id="radio1"
                    name="radios"
                    value="8:00 - 9:00"
                  />
                  <label for="radio1">08:00 - 09:00</label>
                  <input
                    type="radio"
                    id="radio2"
                    name="radios"
                    value="9:00 - 10:00"
                  />
                  <label for="radio2">09:00 - 10:00</label>
                  <input
                    type="radio"
                    id="radio3"
                    name="radios"
                    value="10:00 - 11:00"
                  />
                  <label for="radio3">10:00 - 11:00</label>
                  <input
                    type="radio"
                    id="radio4"
                    name="radios"
                    value="11:00 - 12:00"
                  />
                  <label for="radio4">11:00 - 12:00</label>
                  <input
                    type="radio"
                    id="radio5"
                    name="radios"
                    value="12:00 - 13:00"
                  />
                  <label for="radio5">12:00 - 13:00</label>
                  <input
                    type="radio"
                    id="radio6"
                    name="radios"
                    value="13:00 - 14:00"
                  />
                  <label for="radio6">13:00 - 14:00</label>
                </div>
                <div className="evening">
                  <input
                    type="radio"
                    id="radio7"
                    name="radios"
                    value="14:00 - 15:00"
                  />
                  <label for="radio7">14:00 - 15:00</label>
                  <input
                    type="radio"
                    id="radio8"
                    name="radios"
                    value="15:00 - 16:00"
                  />
                  <label for="radio8">15:00 - 16:00</label>
                  <input
                    type="radio"
                    id="radio9"
                    name="radios"
                    value="16:00 - 17:00"
                  />
                  <label for="radio9">16:00 - 17:00</label>
                  <input
                    type="radio"
                    id="radio10"
                    name="radios"
                    value="17:00 - 18:00"
                  />
                  <label for="radio10">17:00 - 18:00</label>
                  <input
                    type="radio"
                    id="radio11"
                    name="radios"
                    value="18:00 - 19:00"
                  />
                  <label for="radio11">18:00 - 19:00</label>
                  <input
                    type="radio"
                    id="radio12"
                    name="radios"
                    value="19:00 - 20:00"
                  />
                  <label for="radio12">19:00 - 20:00</label>
                </div>
              </div>
            </div>
            <img className="profile" src={selectedOption} alt=""></img>
          </div>
        </div>
        <button className="confirm" onClick={acceptVisit}>
          rezerwuję wizytę
        </button>
      </section>
    </>
  );
}

export default UserAccount;
