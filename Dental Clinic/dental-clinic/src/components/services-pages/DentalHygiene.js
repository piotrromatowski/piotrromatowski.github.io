import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function DentalHygiene() {
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
      <section className="dental-hygiene">
        <div className="subpage-info">
          <h1 className="subpage-title">Higiena zębów</h1>
          <h2 className="subpage-subtitle">
            Dlaczego warto skorzystać z wizyty u higienistki stomatologicznej w
            Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-gem"></i>
              <span>Najnowszy sprzęt stomatologiczny</span>
              <p>
                Zabiegi profilaktyczne wykonywane są piaskarką Prophy- Mate Neo
                i EMS AIR-FLOW® S1, które zapewniają wysoką precyzję pracy.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-check"></i>
              <span>Doświadczone higienistki stomatologiczne</span>
              <p>
                Zapewniają miłą i profesjonalną obsługę, dbają o wysoką jakość
                pracy oraz Twój komfort.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-tooth"></i>
              <span>Indywidualny dobór akcesoriów</span>
              <p>
                Higienistki stomatologiczne przeprowadzą instruktaż prawidłowego
                szczotkowania zębów, używania nici dentystycznej. Doradzą jakie
                akcesoria są wskazane do utrzymania prawidłowej higieny jamy
                ustnej.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-user-alt"></i>
              <span>Atrakcyjna oferta promocyjna</span>
              <p>
                Zachęcamy do skorzystania z pakietu higienizacyjnego (skaling,
                piaskowanie, fluoryzacja, zdjęcia przed i po, instruktaż
                higieny) w atrakcyjnych cenach:
                <br />
                <br />
                - happy hours w godz. 10 – 14 w cenie 250 zł
                <br />
                - pozostałe terminy w cenie 290 zł
                <br />- pakiet dla dwojga w cenie 480 zł
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-clock"></i>
              <span>Czas trwania zabiegu</span>
              <p>
                Pakiet higieny trwa od 45 do 60 min w zależności od ilość złogów
                nazębnych. Zwracamy szczególną uwagę na dokładność i staranność
                wykonanej pracy.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-pencil-alt"></i>
              <span>Możliwość zapisu online</span>
              <p>
                Na zabiegi higienizacyjne możesz zapisać się online. Sprawdź
                swój kalendarz i wybierz odpowiedni dla Ciebie termin.
              </p>
            </div>
          </div>
        </div>
        <div className="subpage-background-wrapper">
          <div className="subpage-background-hygiene"></div>
          <buttton className="btn-hygiene">Zapisz się na higienę!</buttton>
        </div>
        <h2 className="explanation-main-title">
          Zabiegi profilaktyczne w gabinecie stomatologicznym Mr Dentist
        </h2>
        <div className="hygiene-explanation">
          <div className="scaling">
            <h3 className="hygiene-explanation-title">
              1. Skaling (usuwanie kamienia nazębnego)
            </h3>
            <p className="hygiene-explanation-text">
              <strong>Lorem</strong> ipsum dolor sit, amet consectetur
              adipisicing elit. Qui eum eos impedit magnam iste numquam rem
              animi laudantium sit, itaque, possimus, totam laboriosam. In
              consequatur accusantium dolores, expedita culpa fugit aut. Quos,
              quisquam odit obcaecati architecto illum ipsum impedit dignissimos
              at unde tempore. Maxime odit, eligendi quia laudantium, nesciunt
              similique atque nobis magni consequatur nisi deleniti eum
              molestias repellendus et architecto consectetur libero
              voluptatibus nulla cumque vero? Corporis error alias qui? Amet
              tenetur dignissimos minus ea nostrum molestiae voluptatibus
              doloribus quisquam, maiores eveniet vero explicabo praesentium
              repudiandae veniam suscipit. Vero dicta qui illo repudiandae
              voluptas temporibus, quod similique, explicabo aperiam magni modi
              commodi ullam dolore quasi dolorum, quibusdam ipsum sunt. Cum
              nobis maiores mollitia nam harum numquam porro eaque
              necessitatibus quae perferendis delectus placeat tempora qui
              eligendi incidunt quam, quo architecto quas! Dolorum iure,
              sapiente reprehenderit nisi sequi distinctio, ratione consequatur
              libero voluptatum voluptatibus ipsum optio? Ut earum accusamus
              sequi.
            </p>
          </div>
          <div className="sandblasting">
            <h3 className="hygiene-explanation-title">
              2. Piaskowanie (usuwanie osadu)
            </h3>
            <p className="hygiene-explanation-text">
              <strong>Lorem</strong> ipsum dolor sit amet consectetur,
              adipisicing elit. Consequuntur, aut doloribus rerum incidunt
              nostrum impedit itaque. Ea ipsa iusto error qui animi amet quis
              corporis quo soluta unde optio, quia deleniti aliquam voluptate
              iure laborum aspernatur cumque? Beatae harum non quas natus in.
              Aut, error molestias nemo accusantium molestiae voluptates
              doloribus mollitia iste. Eius tenetur natus ipsam dolores illum
              eos odit odio, non perspiciatis, vero est sunt eligendi numquam
              facilis, voluptates molestiae asperiores cumque ipsa!
            </p>
            <h4 className="hygiene-explanation-subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa.
            </h4>
            <p className="hygiene-explanation-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              facilis cupiditate officia cum tenetur maiores reprehenderit eius,
              illo numquam qui sed nihil labore in iusto voluptatibus obcaecati
              perferendis blanditiis! Consequuntur, accusamus! Perspiciatis
              illo, assumenda debitis fugiat atque accusantium quaerat
              asperiores, nam odit molestiae amet eligendi facilis temporibus
              repellat esse error aliquam in magni? Deleniti quo neque fugit
              nemo nulla distinctio, odio fugiat dignissimos ex illo tenetur
              quam, earum alias possimus dolores quas necessitatibus eveniet
              delectus ipsam suscipit. Fugiat dignissimos sint dolore est
              molestias consectetur a aspernatur, accusamus expedita,
              perspiciatis eveniet commodi earum? Mollitia qui nesciunt nemo
              quibusdam placeat nulla id facere, nostrum, aperiam, expedita ad?
              Impedit at ut delectus veritatis deserunt architecto iste, odio
              veniam illo ipsa vero cumque maxime.
            </p>
            <h4 className="hygiene-explanation-subtitle">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <ul className="hygiene-explanation-text-list">
              <li className="hygiene-explanation-list-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                ut ratione enim doloribus ullam cupiditate!
              </li>
              <li className="hygiene-explanation-list-item">
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="hygiene-explanation-list-item">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta!
              </li>
            </ul>
          </div>
          <div className="fluoridation">
            <h3 className="hygiene-explanation-title">
              3. Lakierowanie zębów inaczej fluoryzacja
            </h3>
            <p className="hygiene-explanation-text">
              <strong>Lorem</strong> ipsum dolor sit amet consectetur
              adipisicing elit. Architecto omnis nisi excepturi dolor assumenda
              enim autem odit, fugiat cum qui ducimus doloribus dolorem illo
              aliquam quisquam eaque numquam, amet perferendis expedita eum
              libero incidunt nemo! Alias et illo quidem repudiandae animi error
              laboriosam cum! Vel, enim illo perferendis expedita dicta
              voluptatum molestias vitae odit nihil distinctio et velit minima
              architecto debitis error fuga nesciunt, deserunt mollitia ullam.
              Temporibus dolorem quis fugiat eaque quisquam explicabo laborum?
              Vel quibusdam consequatur voluptas cumque enim, nam, molestiae
              cupiditate molestias quia veniam, voluptates quas tempora!
            </p>
          </div>
        </div>
        <h2 className="subpage-title">A tak pracujemy :)</h2>
        <div className="hygiene-gallery">
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/4269683/pexels-photo-4269683.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/4270361/pexels-photo-4270361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/4269681/pexels-photo-4269681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/4269277/pexels-photo-4269277.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/3952125/pexels-photo-3952125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
          <div className="hygiene-single-picture">
            <img
              src="https://images.pexels.com/photos/3881451/pexels-photo-3881451.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hygiene-photo"
            />
          </div>
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące zabiegów profilaktyki
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
                Jak samodzielnie dbać o higienę jamy ustnej?
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
                Czy istnieją jakiekolwiek przeciwwskazania do wykonania zabiegu
                w gabinecie higeny stomatologicznej?
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
                Jak często powtarzać zabiegi profilaktyczne?
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
          Nasze higienistki stomatologiczne
        </h2>
        <ServicesDoctors doctorsdata={"hygienist"} />
        <h2 className="services-prices-title">
          Cennik zabiegów higienizacyjnych
        </h2>
        <ServicesPrices pricesdata={"Profilaktyka"} />
      </section>
      <Footer />
    </>
  );
}

export default DentalHygiene;
