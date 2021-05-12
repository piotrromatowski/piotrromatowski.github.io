import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

import implant1 from "../services-pages/services-pages-images/implant1.jpg";
import implant2 from "../services-pages/services-pages-images/implant2.jpg";

function Implants() {
  const [showFirstAnswer, setShowFirstAnswer] = useState(false);
  const [showSecondAnswer, setShowSecondAnswer] = useState(false);
  const [showThirdAnswer, setShowThirdAnswer] = useState(false);
  const [showFourthAnswer, setShowFourthAnswer] = useState(false);
  const [showFifthAnswer, setShowFifthAnswer] = useState(false);
  const showOnClickFirst = () => {
    setShowFirstAnswer(!showFirstAnswer);
  };
  const showOnClickSecond = () => {
    setShowSecondAnswer(!showSecondAnswer);
  };
  const showOnClickThird = () => {
    setShowThirdAnswer(!showThirdAnswer);
  };
  const showOnClickFourth = () => {
    setShowFourthAnswer(!showFourthAnswer);
  };
  const showOnClickFifth = () => {
    setShowFifthAnswer(!showFifthAnswer);
  };
  return (
    <>
      <Navbar />
      <section className="implants">
        <div className="subpage-info">
          <h1 className="subpage-title">Implanty</h1>
          <h2 className="subpage-subtitle">
            Implanty zębowe – dlaczego Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-check"></i>
              <span>Sprawdzone rozwiązania</span>
              <p>
                Podczas leczenia zawsze wykorzystujemy implanty renomowanych
                firm.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-user-shield"></i>
              <span>Doświadczeni lekarze</span>
              <p>
                Zabiegi implantologiczne przeprowadzane są przez dentystów
                specjalizujących się w tej dziedzinie, dlatego możesz być
                pewien, że jesteś pod fachową opieką.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-camera"></i>
              <span>Pracownia rentgenowska</span>
              <p>
                Posiadamy najnowocześniejszy sprzęt diagnostyczny, w tym
                tomografię komputerową CBCT służącą do prawidłowego zaplanowania
                implantacji. Rentgen wynonywany jest na miejscu w czasie
                konsultacji.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-users"></i>
              <span>Wspólne planowanie leczenia</span>
              <p>
                Jako jeden z nielicznych gabinetów zajmujemy się kompleksowym
                leczeniem zębów. Patrzymy na Twoją sytuację całościowo, wspólnie
                z innymi lekarzami ustalamy najbardziej odpowiedni plan
                leczenia.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-file-alt"></i>
              <span>Najnowocześniejsze techniki</span>
              <p>
                Dzięki nieustannym szkoleniom, lekarze są na bieżąco z
                najnowszymi technikami wszystkich dziedzin stomatologii co
                pozwala na wdrażanie coraz lepszych metod leczenia.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-smile-wink"></i>
              <span>Troskliwy zespół asystentek</span>
              <p>
                Zapewniamy pełną opiekę w czasie przygotowania do zabiegu jak
                również po jego wykonaniu.
              </p>
            </div>
          </div>
        </div>
        <div className="implants-explanation">
          <h2 className="explanation-question">
            Co to jest implant? Jak wygląda?
          </h2>
          <p className="explanation-answer">
            <strong>Lorem, ipsum.</strong> ipsum dolor sit, amet consectetur
            adipisicing elit. Corrupti, rerum saepe blanditiis illo eaque
            similique delectus? Ullam veniam maiores odio nobis quis quaerat
            quam voluptas saepe similique consectetur. Necessitatibus,
            distinctio?
          </p>
          <p className="explanation-answer">
            <strong>Lorem</strong> ipsum, dolor sit amet consectetur adipisicing
            elit. Cupiditate qui nesciunt reprehenderit molestias libero eius
            expedita ex, aspernatur sunt.
          </p>
          <p className="explanation-answer">
            <strong>Lorem</strong> ipsum, dolor sit amet consectetur adipisicing
            elit. Alias repellendus sequi fuga debitis repellat dignissimos,
            eius velit libero quis obcaecati quod.
          </p>
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              non.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate aliquid porro quis magni placeat quaerat.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis accusantium officiis quibusdam nisi iste suscipit
              ratione esse enim?
            </li>
          </ul>
          <img className="implant-photo" src={implant1} alt=""></img>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita
            officia nobis odio nihil maiores.
          </p>
          <h2 className="explanation-question">
            Dlaczego warto zdecydować się na lecznie implantologiczne?
          </h2>
          <ul className="implants-explanation-question-list">
            <li className="implants-explanation-answer-list">
              <div className="implants-icon">
                <i className="fas fa-tooth"></i>
              </div>
              <div className="implants-wrapper">
                <h3 className="implants-title">Efekt estetyczny</h3>
                <p className="implants-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  perspiciatis corporis, eos vitae optio rerum, necessitatibus
                  alias animi quae corrupti, ab eligendi ex ut exercitationem
                  labore facere.
                </p>
              </div>
            </li>
            <li className="implants-explanation-answer-list">
              <div className="implants-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="implants-wrapper">
                <h3 className="implants-title">
                  Bezpieczeństwo i przewidywalność
                </h3>
                <p className="implants-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  perspiciatis corporis, eos vitae optio rerum, necessitatibus
                  alias animi quae corrupti, ab eligendi ex ut exercitationem
                  labore facere.
                </p>
              </div>
            </li>
            <li className="implants-explanation-answer-list">
              <div className="implants-icon">
                <i className="fas fa-band-aid"></i>
              </div>
              <div className="implants-wrapper">
                <h3 className="implants-title">Bez szkody dla innych zębów</h3>
                <p className="implants-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  perspiciatis corporis, eos vitae optio rerum, necessitatibus
                  alias animi quae corrupti, ab eligendi ex ut exercitationem
                  labore facere.
                </p>
              </div>
            </li>
            <li className="implants-explanation-answer-list">
              <div className="implants-icon">
                <i className="fab fa-battle-net"></i>
              </div>
              <div className="implants-wrapper">
                <h3 className="implants-title">
                  Podstawa do prac protetycznych
                </h3>
                <p className="implants-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  perspiciatis corporis, eos vitae optio rerum, necessitatibus
                  alias animi quae corrupti, ab eligendi ex ut exercitationem
                  labore facere.
                </p>
              </div>
            </li>
            <li className="implants-explanation-answer-list">
              <div className="implants-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="implants-wrapper">
                <h3 className="implants-title">Bez dodatkowych materiałów</h3>
                <p className="implants-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  perspiciatis corporis, eos vitae optio rerum, necessitatibus
                  alias animi quae corrupti, ab eligendi ex ut exercitationem
                  labore facere.
                </p>
              </div>
            </li>
            <li className="implants-explanation-answer-list">
              <div className="implants-icon">
                <i className="far fa-smile"></i>
              </div>
              <div className="implants-wrapper">
                <h3 className="implants-title">Optymizm i zadowolenie</h3>
                <p className="implants-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  perspiciatis corporis, eos vitae optio rerum, necessitatibus
                  alias animi quae corrupti, ab eligendi ex ut exercitationem
                  labore facere.
                </p>
              </div>
            </li>
          </ul>
          <h2 className="explanation-question">
            Jak wygląda procedura wszczepienia implantu krok po kroku?
          </h2>
          <ul className="explanation-question-list">
            1.Konsultacja implantologiczna
            <br />
            <br />
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              fugiat officia tempore at accusantium eos eligendi accusamus
              eveniet, sunt laudantium illum reiciendis animi, soluta dolores!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              libero porro itaque odio hic, provident eos asperiores rerum
              facilis veritatis, quo, molestias voluptates obcaecati aliquid
              numquam repudiandae! Eveniet alias ex quo facilis!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              debitis iure, doloribus facilis nam quis deleniti? Distinctio
              culpa, laboriosam architecto eveniet amet blanditiis! Iusto magnam
              assumenda temporibus! Accusamus quibusdam dolor, earum quae odit
              veritatis eos perspiciatis ea, iure quis quam!
            </li>
          </ul>
          <ul className="explanation-question-list">
            2.Jak wygląda zabieg wprowadzenia implantu?
            <br />
            <br />
            <img className="implants-photo" src={implant2} alt=""></img>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              fugiat officia tempore at accusantium eos eligendi accusamus
              eveniet, sunt laudantium illum reiciendis animi, soluta dolores!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              libero porro itaque odio hic, provident eos asperiores rerum
              facilis veritatis, quo, molestias voluptates obcaecati aliquid
              numquam repudiandae! Eveniet alias ex quo facilis!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              debitis iure, doloribus facilis nam quis deleniti? Distinctio
              culpa, laboriosam architecto eveniet amet blanditiis! Iusto magnam
              assumenda temporibus! Accusamus quibusdam dolor, earum quae odit
              veritatis eos perspiciatis ea, iure quis quam!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              fugiat officia tempore at accusantium eos eligendi accusamus
              eveniet, sunt laudantium illum reiciendis animi, soluta dolores!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              libero porro itaque odio hic, provident eos asperiores rerum
              facilis veritatis, quo, molestias voluptates obcaecati aliquid
              numquam repudiandae! Eveniet alias ex quo facilis!
            </li>
          </ul>
          <ul className="explanation-question-list">
            3.Zalecenia po zabiegu wprowadzenia implantu
            <br />
            <br />
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              molestias!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              aliquid et accusantium esse nisi sequi?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              architecto vitae sed, molestiae obcaecati necessitatibus nisi sint
              dicta?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              nisi officia!
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              fugiat quisquam voluptatem molestiae accusamus ab eos alias
              expedita suscipit repudiandae. Optio, laboriosam?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              itaque, mollitia ipsum quo natus saepe nesciunt necessitatibus
              incidunt vero.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              minus.
            </li>
          </ul>
          <ul className="explanation-question-list">
            4.Wykonanie uzupełnienia protetycznego na implancie
            <br />
            <br />
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              minus.
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
                Czy istnieje możliwość wprowadzenia implantu bezpośrednio po
                usunięciu zęba?
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
                Czy implanty są lepszym rozwiązaniem od tradycyjnych uzupełnień
                protetycznych?
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
                Czy zawsze da się wdrożyć leczenie implantologiczne?
              </p>
            </li>
            {showThirdAnswer ? (
              <li className="answer">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                rem placeat aperiam quis ex expedita et ullam officia corrupti
                fugiat tempora hic optio vero laboriosam aut eveniet dicta
                consequatur, fuga saepe molestiae culpa. Quos, delectus!
              </li>
            ) : null}
            <li className="question" onClick={showOnClickFourth}>
              {showFourthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                W jaki sposób należy dbać o implanty?
              </p>
            </li>
            {showFourthAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                officia cumque molestiae. Repudiandae quidem excepturi
                aspernatur odit, a obcaecati perferendis, tempora ipsa quam
                inventore sint dolores commodi itaque beatae, quas accusantium
                dolorem id nam fugit nesciunt necessitatibus omnis amet
                laboriosam. Nisi deleniti modi quibusdam repudiandae tempora
                necessitatibus. Natus, sed cum.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickFifth}>
              {showFifthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Co robimy aby efekt naszego leczenia był przewidywalny?
              </p>
            </li>
            {showFifthAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae quod, eveniet obcaecati quos iste nobis! Nam id
                perspiciatis beatae necessitatibus. Aperiam, labore quaerat sed
                velit facere illum voluptatibus cupiditate eaque cum officia?
                Similique voluptates iusto recusandae consequatur repudiandae
                modi ipsam?.
              </li>
            ) : null}
          </ul>
        </div>
        <h2 className="selected-doctors-info">
          Lekarz zajmujący się leczeniem implantologicznym
        </h2>
        <ServicesDoctors doctorsdata={"surgeon"} />
        <h2 className="services-prices-title">
          Cennik leczenia implantologicznego
        </h2>
        <ServicesPrices pricesdata={"Implantologia"} />
      </section>
    </>
  );
}

export default Implants;
