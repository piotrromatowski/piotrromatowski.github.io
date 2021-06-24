import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function DentalSurgery() {
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
      <section className="dental-surgery">
        <div className="subpage-info">
          <h1 className="subpage-title">Chirurgia stomatologiczna</h1>
          <h2 className="subpage-subtitle">
            Dlaczego warto korzystać z zabiegów chirurgicznych w Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-tooth"></i>
              <span>Leczymy trudne przypadki</span>
              <p>
                Zajmujemy się usuwaniem zatrzymanych ósemek (zębów mądrości)
                oraz całą gamą innych zabiegów chirurgicznych m. in. implantami
                zębowymi, resekcje wierzchołka, podnoszenie dna zatoki.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-couch"></i>
              <span>Twój komfort to nasz priorytet</span>
              <p>
                W czasie zabiegów chirurgicznych najważniejszą kwestią jest Twój
                komfort i dobre samopoczucie. Dbamy o to, aby atmosfera była
                przyjazna dla Ciebie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-camera"></i>
              <span>Pracownia rentgenowska</span>
              <p>
                Nasz gabinet wyposażony jest w pracownię rentgenowską, w związku
                z tym jesteśmy w stanie na miejscu wykonać pantomogram czy inne
                zdjęcie rentgenowskie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-clinic-medical"></i>
              <span>
                Zabiegi wykonuje Specjalista Chirurg Szczękowo-Twarzowy
              </span>
              <p>
                W naszym gabinecie do zabiegów chirurgicznych dedykowani są
                lekarze dentyści ściśle specjalizujący się w tej dziedzinie.
                Masz pewność, że trafisz na dobrą opiekę.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-file-alt"></i>
              <span>Zwolnienie lekarskie w razie potrzeby</span>
              <p>
                Istnieje możliwość wystawienia zwolnienia lekarskiego po
                skomplikowanych zabiegach chirurgicznych.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-dice-d20"></i>
              <span>Tomografia 3D</span>
              <p>
                W naszym wyposażeniu znajduje się tomograf zębów umożliwiający
                wykonywanie trójwymiarowych zdjęć rentgenowskich, szczególnie
                istotnych przy implantach zębowych.
              </p>
            </div>
          </div>
        </div>
        <div className="subpage-background-wrapper">
          <div className="subpage-background"></div>
          <h2 className="explanation-question">
            Czym jest chirurgia stomatologiczna?
          </h2>
        </div>
        <div className="dental-surgery-explanation">
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam
            quos dolores in quia tempore voluptatem eveniet, velit, dolorem modi
            facilis ex quis nemo maxime provident assumenda reiciendis sint
            inventore error quaerat reprehenderit nihil. Impedit autem
            perferendis non voluptas aperiam odit laboriosam sapiente aliquam,
            itaque inventore, reprehenderit corporis consectetur. Laborum,
            dignissimos minima animi totam necessitatibus at possimus doloribus
            nam illo, impedit, nulla eum omnis id soluta debitis quas fugit
            veniam eveniet repudiandae quis! Officiis, tenetur quae! Vero
            laboriosam aut eveniet, placeat ut omnis, quam quibusdam molestiae
            sed perspiciatis, fugit vel ipsa similique atque officiis pariatur
            facilis autem itaque eius labore deserunt reiciendis! Aperiam,
            soluta? Fuga consectetur vero similique voluptate libero delectus
            numquam sint corporis illo dignissimos repellat ratione praesentium
            neque iusto quaerat, reiciendis ipsa pariatur minus obcaecati nobis.
            Expedita, aliquid itaque! Deleniti, velit nam? Deleniti unde
            cupiditate dignissimos veritatis quaerat quibusdam id, pariatur cum
            possimus. Vel consequuntur alias ullam quisquam vero dignissimos aut
            laudantium quos, ab minus perferendis nemo eos dolor, sit
            praesentium, quam quidem quia. Eveniet placeat iusto illo officiis
            consequatur officia a enim, eius non quod laborum, quis unde
            numquam, maxime accusamus quibusdam cum earum repellat aut. Dolor
            quibusdam odit inventore a quidem alias delectus voluptate
            accusantium voluptatem necessitatibus amet, nulla voluptas ipsum
            placeat perspiciatis totam error illum cum rerum consequatur
            possimus autem! Ad recusandae aperiam vel dicta. Recusandae
            cupiditate laborum magnam excepturi blanditiis in vitae, saepe
            explicabo eos corporis nobis error asperiores tenetur sed nemo,
            ducimus consequatur facere alias earum. Quasi vitae saepe excepturi,
            incidunt cupiditate illo corrupti et officiis ratione quo tempore,
            ipsa laborum iusto esse consequuntur at unde suscipit. Consequatur
            nostrum suscipit neque autem, cumque ad non quisquam atque iste
            velit adipisci et quo nulla aperiam, voluptas incidunt libero rerum
            molestias cum quos? In veritatis quisquam sequi aspernatur velit,
            earum quas, ipsa id, eaque ipsum officiis aperiam alias architecto
            impedit! Quae exercitationem hic deleniti porro dolores debitis
            atque impedit nesciunt vel doloribus qui cum accusantium quia et
            maxime rem autem, incidunt suscipit! Doloremque quae corrupti autem
            explicabo eveniet odit soluta eligendi veniam dolorum earum repellat
            delectus mollitia, voluptates, adipisci aliquid similique minima,
            modi ipsa quod.
          </p>
          <ul className="explanation-question-list">
            Jak przebiega usuwanie zębów, czyli ekstrakcja?
            <br />
            <br />
            <li className="explanation-answer-list">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              reiciendis nostrum. Non quisquam error temporibus.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              aspernatur eius eveniet.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              officiis ut libero natus facilis, mollitia omnis incidunt modi.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              fugit minus itaque voluptatum iure magni enim?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              suscipit explicabo.
            </li>
            <li className="explanation-answer-photo">
              <div className="explanation-answer-photo-first">
                <img
                  src="https://optimdent.pl/wp-content/uploads/2016/07/chirirgia_osemka_usuwanie.jpg"
                  alt=""
                />
                <span>Lorem ipsum dolor sit amet.</span>
              </div>

              <div className="explanation-answer-photo-second">
                <img
                  src="https://optimdent.pl/wp-content/uploads/2016/07/chirirgia_zab_zatrzymany.jpg"
                  alt=""
                />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </div>
            </li>
          </ul>
          <ul className="explanation-question-list">
            Jak wygląda postępowanie w przypadku zębów zatrzymanych?
            <br />
            <br />
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              earum laudantium modi corporis dolores facere perspiciatis
              repudiandae?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              cumque necessitatibus alias.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum
              accusantium iste doloremque consectetur illo quod asperiores
              pariatur ad, dolores debitis dolorem esse enim aspernatur aperiam
              distinctio velit commodi recusandae facere omnis!
            </li>
          </ul>
          <ul className="explanation-question-list">
            Jakie są zalecenia po zabiegu usunięcia zęba?
            <br />
            <br />
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
              nemo aliquam.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, eos. Doloribus.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              nesciunt temporibus libero qui commodi?
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eveniet quasi eaque.
            </li>
            <li className="explanation-answer-list">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              odit tempore mollitia eius consequatur, nemo omnis vel incidunt
              culpa.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              sapiente est eum autem cupiditate hic vitae neque ipsum.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam.
            </li>
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              similique, natus veniam vero placeat corrupti in obcaecati!
            </li>
          </ul>
          <ul className="explanation-question-list">
            Zabieg resekcji wierzchołka korzenia – co to takiego?
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
        </div>
        <div className="subpage-background-wrapper">
          <div className="subpage-background-second"></div>
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące zabiegów chirurgicznych
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
              <p className="question-text">Czy usuwanie ósemek boli?</p>
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
              <p className="question-text">Usuwanie zębów mądrości?</p>
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
              <p className="question-text">Muszę usunąć ząb - co zrobić?</p>
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
          Lekarz zajmujący się leczeniem chirurgicznym
        </h2>
        <ServicesDoctors doctorsdata={"surgeon"} />
        <h2 className="services-prices-title">
          Cennik chirurgii stomatologicznej
        </h2>
        <ServicesPrices pricesdata={"Chirurgia stomatologiczna"} />
      </section>
      <Footer />
    </>
  );
}

export default DentalSurgery;
