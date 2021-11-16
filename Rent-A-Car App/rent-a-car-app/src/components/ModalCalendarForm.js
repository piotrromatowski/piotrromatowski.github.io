import React, { useState, useEffect } from "react";
import Calendar from "react-select-date";

function ModalForm({
  choosenCar,
  trigger,
  setTrigger,
  bookingDate,
  setBookingDate,
  isClientLoggedIn,
}) {
  // const { open, choosenCar } = props;

  // const [bookingDate, setBookingDate] = useState({
  //   booking_start: "",
  //   booking_end: "",
  // });
  console.log(isClientLoggedIn);

  const [isAccepted, setIsAccepted] = useState(false);
  console.log(isAccepted);

  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    if (trigger === false) {
      setIsAccepted(false);
      setConfirmation("");
    }
  }, [trigger]);

  const onClickAcceptedDate = () => {
    setIsAccepted(true);
    console.log(isAccepted);
    setConfirmation(
      `${new Date(bookingDate.booking_start).toLocaleDateString()} -
              ${new Date(bookingDate.booking_end).toLocaleDateString()}`
    );
  };

  const selectDate = (date) => {
    console.log(date);

    const upadateDate = () => {
      if (
        bookingDate.booking_start !== date.startDate &&
        bookingDate.booking_end !== date.endDate &&
        isAccepted === true
      ) {
        setBookingDate({
          booking_start: date.startDate,
          booking_end: date.endDate,
        });
      }
    };

    upadateDate();
    console.log(bookingDate);
  };

  return trigger ? (
    <div className="modal-calendar">
      <div className="wrapper">
        <div className="close" onClick={() => setTrigger(false)}>
          <i className="far fa-times-circle"></i>
        </div>
        <div className="calendar-wrapper">
          <Calendar
            onSelect={selectDate}
            selectDateType="range"
            disableDates="past"
            // select-date color
            templateClr="green"
            showSelectMonthArrow="true"
            showSelectYearArrow="true"
          />
          <button className="accept-btn" onClick={onClickAcceptedDate}>
            accept date
          </button>
          {isAccepted ? (
            <span className="accept-date-span">
              Reservation date:
              {` ${confirmation}`};
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ModalForm;
