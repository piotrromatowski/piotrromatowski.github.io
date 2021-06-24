import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TeamMembersDentists } from "./TeamMembers";

function Team() {
  return (
    <>
      <Navbar />
      <section className="team">
        <div className="team-text">
          <div className="text-first">
            <h1>Przedstawiamy zespół Mr Dentist</h1>
            Mr Dentist to nowoczesny gabinet stomatologiczny, który wychodzi
            naprzeciw Twoim najwyższym oczekiwaniom. W trosce o Twój zdrowy i
            piękny uśmiech oferujemy kompleksową opiekę stomatologiczną w
            przystępnych cenach. Wszystkie zabiegi wykonujemy przy użyciu
            najwyższej klasy specjalistycznego sprzętu renomowanych firm. Dla
            Twojego komfortu stworzyliśmy także możliwość wykonywania w naszym
            gabinecie zdjęć rentgenowskich, w tym pantomogramu i tomografii
            zębów.
          </div>
          <div className="text-second">
            <h1>Mr Dentist to:</h1>
            <ul>
              <li>Mieszanka ambitnej młodości oraz siły doświadczenia </li>
              <li>
                Zespół, w skład którego wchodzi specjalista protetyki, chirurgii
                i periodontologii{" "}
              </li>
              <li>
                Lekarze wykonujący zaawansowane leczenie kanałowe pod
                mikroskopem
              </li>
              <li>Dyżury higieny stomatologicznej </li>
              <li>
                Skomplikowana chirurgia (implany, usuwanie zębów mądrości){" "}
              </li>
              <li>
                Pomocny i uśmiechnięty zespół asystentek stomatologicznych
              </li>
              <li>Uprzejma i pomocna obsługa na recepcji</li>
            </ul>
          </div>
        </div>
        <div className="team-members">
          <div className="mr-dentist-team">
            <h2 className="team-title">
              <i className="fas fa-tooth"></i>
              <i className="fas fa-tooth"></i>
              <i className="fas fa-tooth"></i>
              Nasz zespół
              <i className="fas fa-tooth"></i>
              <i className="fas fa-tooth"></i>
              <i className="fas fa-tooth"></i>
            </h2>
            <ul className="team-persons">
              {TeamMembersDentists.map((item, index) => {
                return (
                  <ol className="single-persons-list" key={index}>
                    <div className={item.teamClassName}>
                      <div className="card">
                        <div className="card front">
                          <h3 className="person-name">{item.name}</h3>
                          <h4 className="person-profession">
                            {item.profession}
                          </h4>
                          <div className="crown"></div>
                          <img
                            className="person-photo"
                            src={item.link}
                            alt=""
                          ></img>
                        </div>
                        <div className="card back">
                          <p className="information">{item.information}</p>

                          <ul className="person-specialization">
                            {item.specialization.map((specs, index) => {
                              return (
                                <li className="specialization" key={index}>
                                  {specs}
                                  <i className="icon">{item.icons}</i>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ol>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Team;
