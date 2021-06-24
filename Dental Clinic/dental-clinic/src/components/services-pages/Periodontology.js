import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

import periodontology from "./services-pages-images/periodontology.jpg";

function Periodontology() {
  const [showFirstAnswer, setShowFirstAnswer] = useState(false);
  const [showSecondAnswer, setShowSecondAnswer] = useState(false);
  const [showThirdAnswer, setShowThirdAnswer] = useState(false);

  const showOnClickFirst = () => {
    setShowFirstAnswer(!showFirstAnswer);
  };
  const showOnClickSecond = () => {
    setShowSecondAnswer(!showSecondAnswer);
  };
  const showOnClickThird = () => {
    setShowThirdAnswer(!showThirdAnswer);
  };

  return (
    <>
      <Navbar />
      <section className="periodontology">
        <div className="subpage-info">
          <h1 className="subpage-title">Periodontologia</h1>
          <h2 className="subpage-subtitle">
            Dlaczego warto zdecydować się na zabiegi periodontologiczne w Mr
            Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-tooth"></i>
              <span>Leczymy trudne przypadki</span>
              <p>
                Staramy się robić wszystko co możliwe aby ratować własny,
                naturalny ząb, często wymaga to współpracy z lekarzami z zakresu
                stomatologii zachowawczej lub protetyki.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-couch"></i>
              <span>Twój komfort jest dla nas priorytetem</span>
              <p>
                W trakcie zabiegów periodontologicznych staramy sią dbać o Twój
                komfort i dobre samopoczucie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-camera"></i>
              <span>Pracownia rentgenowska</span>
              <p>
                Nasz gabinet wyposażony jest w pracownię rentgenowską, w związku
                z tym jesteśmy w stanie na miejscu wykonać pantomogram czy inne
                zdjęcie rentgenowskie
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-users"></i>
              <span>Wykwalifikowany zespół specjalistów</span>
              <p>
                Posiadamy lekarzy specjalistów z różnych dziedzin stomatologii,
                dlatego leczenie odbywa się w jednym miejscu przy współpracy
                wszystkich specjalistów.
              </p>
            </div>
          </div>
        </div>
        <div className="periodontology-explanation">
          <h2 className="explanation-question">Co to jest periodontologia?</h2>
          <p className="explanation-answer">
            <strong>Lorem, ipsum.</strong> dolor sit amet consectetur
            adipisicing elit. Asperiores, minima fugiat? Qui ad, quam
            repellendus laudantium eius praesentium veniam tempora, ratione unde
            veritatis sapiente quas excepturi numquam exercitationem nobis.
            Harum expedita aperiam veniam modi consequatur optio pariatur culpa,
            iusto unde, neque adipisci tenetur eius molestiae at. Repellendus at
            doloribus rem!
          </p>
          <h3 className="explanation-question">
            Objawy świadczące się o chorobach przyzębia:
          </h3>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </li>
            <li className="explanation-answer-list">Lorem, ipsum dolor.</li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="explanation-answer-list">Lorem, ipsum.</li>
          </ul>
          <h3 className="explanation-question">
            Etapy rozwoju chorób przyzębia
          </h3>
          <p className="explanation-answer">
            <strong>Lorem, ipsum.</strong> dolor sit amet consectetur
            adipisicing elit. Asperiores, minima fugiat? Qui ad, quam
            repellendus laudantium eius praesentium veniam tempora, ratione unde
            veritatis sapiente quas excepturi numquam exercitationem nobis.
            Harum expedita aperiam veniam modi consequatur optio pariatur culpa,
            iusto unde, neque adipisci tenetur eius molestiae at. Repellendus at
            doloribus rem!
          </p>
          <img src={periodontology} alt="" className="peridontology-image" />
          <h3 className="explanation-question">
            Przykładowe zabiegi chirurgiczne z zakresu periodontologii
          </h3>
          <h4 className="explanation-answer-title">
            <i className="fas fa-tooth"></i>Kiretaż (zamknięty, otwarty)
          </h4>
          <p className="explanation-answer">
            Lorem, ipsum. dolor sit amet consectetur adipisicing elit.
            Asperiores, minima fugiat? Qui ad, quam repellendus laudantium eius
            praesentium veniam tempora, ratione unde veritatis sapiente quas
            excepturi numquam exercitationem nobis. Harum expedita aperiam
            veniam modi consequatur optio pariatur culpa, iusto unde, neque
            adipisci tenetur eius molestiae at. Repellendus at doloribus rem!
          </p>
          <h4 className="explanation-answer-title">
            <i className="fas fa-tooth"></i>Pokrycie recesji dziąsłowych
          </h4>
          <p className="explanation-answer">
            Lorem, ipsum. dolor sit amet consectetur adipisicing elit.
            Asperiores, minima fugiat? Qui ad, quam repellendus laudantium eius
            praesentium veniam tempora, ratione unde veritatis sapiente quas
            excepturi numquam exercitationem nobis. Harum expedita aperiam
            veniam modi consequatur optio pariatur culpa, iusto unde, neque
            adipisci tenetur eius molestiae at. Repellendus at doloribus rem!
          </p>
          <h4 className="explanation-answer-title">
            <i className="fas fa-tooth"></i>Wydłużenie korony klinicznej zęba
          </h4>
          <p className="explanation-answer">
            Lorem, ipsum. dolor sit amet consectetur adipisicing elit.
            Asperiores, minima fugiat? Qui ad, quam repellendus laudantium eius
            praesentium veniam tempora, ratione unde veritatis sapiente quas
            excepturi numquam exercitationem nobis. Harum expedita aperiam
            veniam modi consequatur optio pariatur culpa, iusto unde, neque
            adipisci tenetur eius molestiae at. Repellendus at doloribus rem!
          </p>
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące zabiegów periodontologicznych
          </h3>
          <ul className="questions-answers-list">
            <li
              className="question"
              value="question"
              onClick={showOnClickFirst}
            >
              {showFirstAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">Co wpływa na rozwój paradontozy?</p>
            </li>
            {showFirstAnswer ? (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                eveniet veniam reprehenderit, autem tempore cum magnam
                reiciendis similique, fugit, iusto laboriosam excepturi aliquam
                recusandae possimus!.
              </p>
            ) : null}
            <li className="question" onClick={showOnClickSecond}>
              {showSecondAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Dlaczego zdrowe dziąsła są tak ważne?
              </p>
            </li>
            {showSecondAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                dolorem at possimus perspiciatis deserunt pariatur eaque
                repellat. Dolor!.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickThird}>
              {showThirdAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Co mogę zrobić aby ustrzec się przed chorobami przyzębia?
              </p>
            </li>
            {showThirdAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                ad eos repellat blanditiis autem eligendi sequi officiis, nihil
                optio quibusdam magni corrupti atque assumenda facilis ratione
                similique vitae placeat voluptas?.
              </li>
            ) : null}
          </ul>
        </div>
        <h2 className="selected-doctors-info">
          Lekarz zajmujący się leczeniem periodontologicznym
        </h2>
        <ServicesDoctors doctorsdata={"periodontist"} />
        <h2 className="services-prices-title">
          Cennik zabiegów periodontologicznych
        </h2>
        <ServicesPrices pricesdata={"Periodontologia"} />
      </section>
      <Footer />
    </>
  );
}

export default Periodontology;
