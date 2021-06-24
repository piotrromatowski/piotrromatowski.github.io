import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function Prosthodontics() {
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
      <section className="prosthodontics">
        <div className="subpage-info">
          <h1 className="subpage-title">Protetyka</h1>
          <h2 className="subpage-subtitle">
            Dlaczego warto zdecydować się na leczenie protetyczne w Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-tooth"></i>
              <span>Wysoka jakość materiałów</span>
              <p>
                Prace protetyczne wykonujemy współpracując z laboratoriami,
                które bazują na najnowszych materiałach oraz technologiach.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-user-shield"></i>
              <span>Specjalista protetyki</span>
              <p>
                Członkiem zespołu lekarzy Mr Dentist jest specjalista protetyki
                Anastazja Krawczyk, która jest gwarancją wiedzy i doświadczenia.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-file-medical"></i>
              <span>Do każdej pracy dołączony jest certyfikat jakości</span>
              <p>
                Dzięki niemu wiesz z czego i kiedy zostało wykonane Twoje
                uzupełnienie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-users"></i>
              <span>Leczymy kompleksowo</span>
              <p>
                Do każdego przypadku podchodzimy indywidualnie, dążąc do
                zaproponowania takiego uzupełnienia, które będzie spełniało
                Twoje oczekiwania oraz będzie dostosowane do warunków jakie
                panują w Twojej jamie ustnej. Dążymy do tego aby nasze protezy
                były zarówno estetyczne jak i funkcjonalne.
              </p>
            </div>
          </div>
        </div>
        <div className="prosthodontics-explanation">
          <h3 className="explanation-question">
            Czym zajmuje się protetyka stomatologiczna?
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
          <h3 className="explanation-question">
            Dlaczego tak ważna jest odbudowa braków zębowych?
          </h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit :
          </p>
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
          <h3 className="explanation-question">Protezy stałe</h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="explanation-answer">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis corrupti qui quaerat!
          </p>
          <h3 className="explanation-question">Wkłady koronowo-korzeniowe</h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quod
            praesentium natus debitis esse fuga. Ad, veniam!
          </p>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit :
          </p>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              deleniti explicabo veniam a inventore debitis qui fuga ex dolores
              impedit! Aliquid, excepturi?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quidem eligendi consequuntur voluptatibus suscipit aliquid.
            </li>
          </ul>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quod
            praesentium natus debitis esse fuga. Ad, veniam!
          </p>
          <h3 className="explanation-question">Korona protetyczna</h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            vel iusto laboriosam odio nisi dolores quae, eos eum, sunt ipsam
            incidunt mollitia accusantium dicta quod! Ab, amet totam dolorem
            reiciendis saepe quos commodi quaerat magni eos animi iure nisi,
            vel, ratione id eligendi! Magnam, repellendus.
          </p>
          <p className="explanation-answer">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            praesentium, quas necessitatibus architecto veritatis aperiam?
            Maxime, dolorum:
          </p>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              deleniti explicabo veniam a inventore debitis qui fuga ex dolores
              impedit! Aliquid, excepturi?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quidem eligendi consequuntur voluptatibus suscipit aliquid.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident nihil temporibus aut aperiam qui quam quasi, commodi
              aliquam nesciunt officiis quidem non ipsam, modi unde voluptates.
            </li>
          </ul>
          <h3 className="explanation-question">
            Jak wygląda procedura wykonania wkładu koronowo-korzeniowego wraz z
            koroną protetyczną?
          </h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            aliquid animi dolores<strong> maxime accusantium minus</strong> nisi
            id, perferendis dolore tempore illo, quod sequi laborum, recusandae
            laboriosam modi impedit voluptates sit est quaerat.
          </p>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aliquam quisquam odio pariatur adipisci, excepturi quas ad,
              nostrum dolor dicta veritatis.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est
              deleniti dignissimos, similique, ab itaque excepturi eligendi
              nihil sequi atque repellat perspiciatis ex inventore doloremque
              exercitationem vitae? Similique illum itaque deserunt in modi
              sapiente perspiciatis dicta, pariatur odit consequatur eius ex
              quis vero accusamus dolore alias libero. Qui pariatur officia
              cumque nobis culpa at possimus laborum magnam dolores corporis!
              Sapiente eum dolorum distinctio architecto modi accusantium,
              commodi porro possimus ratione totam nobis?
            </li>
            <li className="explanation-answer-list">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              laborum sequi fuga aliquid. Inventore ad iste ratione ipsam unde
              placeat possimus doloremque praesentium, fuga labore quas eveniet
              magnam architecto nesciunt, blanditiis exercitationem repellat.
            </li>
          </ul>
          <p className="explanation-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            <strong> suscipit obcaecati </strong>tenetur neque, amet in
            molestias voluptates quod autem, voluptas modi nam excepturi totam
            earum natus eligendi.
          </p>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              repudiandae tempore nisi, harum ipsum suscipit adipisci possimus
              deserunt ut eum debitis quod molestias error, voluptate ratione
              quos soluta aut laborum vel officiis doloremque. Quae voluptas
              commodi necessitatibus repudiandae dolores porro aperiam aut.
              Aliquid in beatae facere officiis magnam inventore numquam?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptate laboriosam aliquid velit sequi vero nesciunt et
              temporibus officiis repellat dolorum maxime a corrupti, soluta
              fugit. Recusandae, velit.
            </li>
          </ul>
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące leczenia kompleksowego
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
                Chce uzupełnić braki zębowe. Co powinienem zrobić?
              </p>
            </li>
            {showFirstAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam obcaecati fugiat totam porro saepe reprehenderit sint
                nisi a maiores inventore repellat quibusdam illo eius amet,
                error repellendus minus ipsam voluptates cum, iste id! Dolorem,
                mollitia illo! Corporis rem veniam qui.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickSecond}>
              {showSecondAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Czy zabiegi z zakresu protetyki są bolesne?
              </p>
            </li>
            {showSecondAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                provident ratione, quos sit mollitia, quas itaque veritatis quia
                accusamus maxime adipisci dicta tempore. Ipsa, voluptatum.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickThird}>
              {showThirdAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Dlaczego należy odbudowywać braki zębowe za pomocą uzupełnień
                protetycznych?
              </p>
            </li>
            {showThirdAnswer ? (
              <li className="answer">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                amet molestias alias voluptatibus voluptatem quae illum et dolor
                tempore nam fuga inventore perferendis blanditiis, laudantium
                facere quos, nisi, pariatur ducimus? Molestias rem saepe sunt
                magnam ratione natus explicabo aliquid repellat sequi quibusdam
                odit enim incidunt deleniti maxime quos provident autem,
                praesentium unde voluptatem. Enim quod omnis mollitia. Suscipit
                voluptatem voluptas hic, unde eaque cupiditate pariatur
                reiciendis, architecto quod rerum iste numquam. Quia obcaecati
                est totam amet, mollitia aliquid voluptatem eligendi quae
                provident, facere labore veritatis necessitatibus excepturi,
                velit repudiandae voluptatum id sapiente.
              </li>
            ) : null}
          </ul>
        </div>
        <h2 className="selected-doctors-info">
          Lekarze zajmujący się protetyką stomatologiczną
        </h2>
        <ServicesDoctors doctorsdata={"prosthodontist"} />
        <h2 className="services-prices-title">Cennik leczenia protetycznego</h2>
        <ServicesPrices pricesdata={"Protetyka"} />
      </section>
      <Footer />
    </>
  );
}

export default Prosthodontics;
