import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

import orto1 from "./services-pages-images/orto1.jpg";
import orto2 from "./services-pages-images/orto2.jpg";
import orto3 from "./services-pages-images/orto3.jpg";

function Orthodontics() {
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
      <section className="orthodontics">
        <div className="subpage-info">
          <h1 className="subpage-title">Ortodoncja</h1>
          <h2 className="subpage-subtitle">
            Dlaczego warto zdecydować się na leczenie ortodontyczne w Mr
            Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-tooth"></i>
              <span>Indywidualne podejście</span>
              <p>
                Każdy ząb i przypadek jest inny, dlatego wizytę rozpoczynamy od
                wnikliwej analizy klinicznej.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-check"></i>
              <span>Profesjonalna opieka stomatologiczna</span>
              <p>
                Zespół stomatologiczny Mr Dentist dba o zapewnienie Ci komfortu
                w trakcie wizyty oraz spełnienie Twoich oczekiwań odnośnie
                pięknego, zdrowego uśmiechu.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-camera"></i>
              <span>Pracownia rentgenowska</span>
              <p>
                Nasz gabinet jest wyposażony w pracownię rentgenowską, dlatego
                jesteśmy w stanie na miejscu wykonać pantomogram, zdjęcie
                punktowe zębów czy tomografię komputerową.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-user-alt"></i>
              <span>Leczymy kompleksowo</span>
              <p>
                Do każdego przypadku podchodzimy indywidualnie, dążąc do
                zaproponowania takiego leczenia, które będzie spełniało Twoje
                oczekiwania oraz będzie dostosowane do Twoich potrzeb.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-couch"></i>
              <span>Twój komfort jest dla nas priorytetem</span>
              <p>
                W trakcie zabiegów staramy sią dbać o Twój komfort i dobre
                samopoczucie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-smile"></i>
              <span>Troskliwy zespół asystentek</span>
              <p>
                Zapewniamy pełną opiekę w czasie przygotowania do zabiegu jak
                również po jego wykonaniu.
              </p>
            </div>
          </div>
        </div>
        <div className="orthodontics-explanation">
          <h2 className="explanation-question">Co to jest ortodoncja?</h2>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ipsam sed beatae? Eum, explicabo. Reiciendis, cupiditate nulla dolor
            excepturi consequatur aut quidem molestias id perspiciatis aliquam,
            ea aliquid eum necessitatibus veniam? Dolorem neque repellendus
            quaerat velit at alias quasi accusantium aliquam reiciendis!
          </p>
          <p className="explanation-answer">
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </strong>
          </p>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              error vel amet repudiandae possimus magnam?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              eligendi.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              sapiente corrupti nobis. Repellat, distinctio iusto. Atque, iure
              eum!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              mollitia consectetur quae?
            </li>
          </ul>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
            voluptates libero voluptate illo neque est repudiandae! Adipisci
            quisquam inventore nesciunt!
          </p>
          <h3 className="explanation-question">Aparaty ruchome</h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quam
            dicta debitis nihil veritatis libero optio esse ipsam molestias.
            Repudiandae, accusamus cupiditate voluptatem consectetur illum
            voluptatibus. Alias assumenda modi voluptates porro neque illum
            perspiciatis at, quo, exercitationem excepturi omnis sapiente?
            Magnam deserunt nobis, similique placeat reiciendis velit rem
            perspiciatis ipsum, aperiam harum, doloremque maiores debitis
            molestiae a corrupti ipsam. Doloremque eum repudiandae ipsa eveniet
            illo quia officiis quam autem facere rem odit commodi aperiam animi
            esse optio, eius vel facilis hic dicta tenetur ipsam et ea? Officia
            veniam quis, optio reiciendis atque rerum assumenda nulla
            repellendus, praesentium dolorem quasi unde earum. Maxime
            voluptatibus repellendus minima enim rem mollitia nesciunt atque
            animi fugiat voluptatem maiores totam consequatur molestias
            laudantium laboriosam, similique impedit fugit vero nihil quidem,
            provident amet modi ipsum eveniet. Recusandae esse excepturi
            reprehenderit animi, explicabo consectetur iusto! Repellendus
            reiciendis nulla vero assumenda. Odit, voluptatibus facere velit
            ipsam mollitia sint?
          </p>
          <div className="photo-wrapper">
            <img src={orto1} alt="" className="orthodontics-photo" />
            <span className="orthodontics-image-name">Aparat ruchomy</span>
          </div>
          <h3 className="explanation-question">Aparaty stałe</h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            corporis dolorem quibusdam dolore quaerat in nisi illum rerum,
            molestiae tenetur, non rem excepturi autem repudiandae!
          </p>
          <div className="photos-wrapper">
            <div className="first-photo">
              <img src={orto2} alt="" className="orthodontics-photos" />
              <span className="orthodontics-image-name">
                Aparat ortodontyczny metalowy
              </span>
            </div>
            <div className="second-photo">
              <img src={orto3} alt="" className="orthodontics-photos" />
              <span className="orthodontics-image-name">
                Aparat ortodontyczny estetyczny
              </span>
            </div>
          </div>
          <h3 className="explanation-question">System Invisalign</h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            eum doloremque sapiente, magni aliquid molestiae sequi delectus hic
            tenetur suscipit placeat est, sunt repellendus minus officiis earum
            veniam error in dolores nam voluptas! Similique, et qui. Harum odit
            a laborum.
          </p>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              temporibus, delectus deleniti dicta veritatis praesentium.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              totam? Praesentium mollitia vero voluptate, fugiat vel eaque
              dolore corporis ratione?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              minima, dolorum enim animi sapiente quam, a numquam ad eos
              reprehenderit ipsam hic, eligendi consequuntur?
            </li>
          </ul>
          <h3 className="explanation-question">
            Przebieg leczenia ortodontycznego:
          </h3>
          <h4 className="explanation-question">Konsultacja ortodontyczna</h4>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            neque fuga ipsam commodi exercitationem, officiis nisi nemo.
            Reprehenderit facere, voluptates perspiciatis sit adipisci, ratione
            quis optio qui labore quos reiciendis excepturi soluta dolorem
            facilis. Voluptatum sint culpa suscipit autem accusamus sit minima
            alias vel reprehenderit. Esse adipisci placeat corporis accusantium
            laboriosam deserunt alias ullam excepturi eum. Similique nulla,
            deleniti sit perspiciatis fugit quaerat aspernatur accusamus nemo
            omnis officia.
          </p>

          <h4 className="explanation-question">Leczenie ortodontyczne</h4>
          <p className="explanation-answer">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veniam doloremque aspernatur fugit, rem, maiores id
            dolorum dolores numquam esse distinctio tempore placeat, facere at
            quia minus culpa? Omnis ducimus, commodi reprehenderit, nobis
            corrupti ex quidem ipsam et numquam deserunt quae dignissimos
            laudantium consequuntur! Nihil omnis maxime eligendi? Omnis, quia
            aliquid! Error.
          </p>
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące leczenia ortodoncyjego
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
              <p className="question-text">
                Ile czasu trwa leczenie ortodontyczne?
              </p>
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
                Co zrobić aby uzyskać jak najlepsze efekty w trakcie leczenia
                ortodontycznego?
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
                Czy istnieją ograniczenia wiekowe do podjęcia leczenia
                ortodontycznego?
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
          Lekarz zajmujący się leczeniem ortodontycznym
        </h2>
        <ServicesDoctors doctorsdata={"orthodontist"} />
        <h2 className="services-prices-title">
          Cennik leczenia ortodontycznego
        </h2>
        <ServicesPrices pricesdata={"Ortodoncja"} />
      </section>
      <Footer />
    </>
  );
}

export default Orthodontics;
