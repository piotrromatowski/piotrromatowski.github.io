import React from "react";
import { TeamMembersDentists } from "../TeamMembers";

function ServicesDoctors(doctorsdata) {
  console.log(doctorsdata);
  return (
    <>
      <div className="doctors">
        <div className="selected-doctors">
          {TeamMembersDentists.filter((doctor) =>
            doctor.teamClassName.includes(doctorsdata.doctorsdata)
          ).map((filteredDoctor) => (
            <div
              className={filteredDoctor.teamClassName}
              key={filteredDoctor.id}
            >
              {console.log(filteredDoctor.teamClassName)}
              <div className="selected-card">
                <div className="selected-card selected-front">
                  <h3 className="selected-person-name">
                    {filteredDoctor.name}
                  </h3>
                  <h4 className="selected-person-profession">
                    {filteredDoctor.profession}
                  </h4>
                  <div className="crown"></div>
                  <img
                    className="selected-person-photo"
                    src={filteredDoctor.link}
                    alt=""
                  ></img>
                </div>
                <div className="selected-card selected-back">
                  <p className="selected-information">
                    {filteredDoctor.information}
                  </p>

                  <ul
                    className="selected-person-specialization"
                    key={filteredDoctor.id}
                  >
                    {filteredDoctor.specialization.map((specs, index) => {
                      return (
                        <li
                          className="selected-specialization"
                          key={index + specs}
                        >
                          {specs}
                          <i className="selected-icon">
                            {filteredDoctor.icons}
                          </i>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesDoctors;
