import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesPrices from "./ServicesPrices";

import pantomogram from "./services-pages-images/pantomogram.jpg";
import cefalometria from "./services-pages-images/cefalometria.jpg";
import cbct from "./services-pages-images/cbct.jpg";

function DentalXRay() {
  const [showFirstAnswer, setShowFirstAnswer] = useState(false);
  const [showSecondAnswer, setShowSecondAnswer] = useState(false);
  const [showThirdAnswer, setShowThirdAnswer] = useState(false);
  const [showFourthAnswer, setShowFourthAnswer] = useState(false);
  const [showFifthAnswer, setShowFifthAnswer] = useState(false);
  const [showSixthAnswer, setShowSixhtAnswer] = useState(false);
  const [showSeventhAnswer, setShowSeventhAnswer] = useState(false);
  const [showEigthAnswer, setShowEigthAnswer] = useState(false);

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
  const showOnClickSixth = () => {
    setShowSixhtAnswer(!showSixthAnswer);
  };
  const showOnClickSeventh = () => {
    setShowSeventhAnswer(!showSeventhAnswer);
  };
  const showOnClickEight = () => {
    setShowEigthAnswer(!showEigthAnswer);
  };

  return (
    <>
      <Navbar />
      <section className="dental-x-ray">
        <div className="subpage-info">
          <h1 className="subpage-title">Rentgen zębów</h1>
          <h2 className="subpage-subtitle">
            Dlaczego rentgen zębów w Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="far fa-gem"></i>
              <span>Nowoczesny sprzęt</span>
              <p>
                Na wyposażeniu gabinetu znajduje się aparat rentgenowski Kodak
                8100 3D – jeden z najlepszych rentgenów na rynku
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-clock"></i>
              <span>Prześwietlenie zębów w 5 minut</span>
              <p>
                Cała procedura trwa bardzo krótko, a wynik jest dostępny jest
                tuż po wykonaniu zdjęcia
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-check"></i>
              <span>Bez zapisów, bez kolejek</span>
              <p>
                Aby wykonać zdjęcie pantomograficzne lub tomografię komputerową
                nie musisz się umawiać – wystarczy przyjść do gabinetu. Wynik
                badania otrzymasz od razu.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-hand-holding-usd"></i>
              <span>Atrakcyjna cena zdjęć</span>
              <p>
                Pantomogram zębów – tylko 80 zł, Cefalometria – 80 zł, natomiast
                tomografia komputerowa w zależności od rodzaju zdjęcia – od 140
                zł
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-compact-disc"></i>
              <span>Wynik na kliszy lub płycie CD</span>
              <p>
                Posiadamy drukarkę do zdjęć rentgenowskich DryView 5850, która
                gwarantuje najwyższą jakość zdjęć. Istnieje również możliwość
                nagrania prześwietlenia na płycie CD.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-credit-card"></i>
              <span>Płatność kartą lub gotówką</span>
              <p>Możliwość płatności kartą oraz gotówką.</p>
            </div>
          </div>
        </div>
        <div className="x-ray-photos-wrapper">
          <div className="x-ray-photo-card">
            <h2 className="photo-title">Pantomogram zębów</h2>
            <h3 className="photo-description">Rentgen wszystkich zębów w 2D</h3>
            <img src={pantomogram} alt="" className="x-ray-photo" />
            <p className="photo-price">Cena 80 zł</p>
          </div>
          <div className="x-ray-photo-card">
            <h2 className="photo-title">Cefalometria</h2>
            <h3 className="photo-description">Zdjęcie boczne, ortodontyczne</h3>
            <img src={cefalometria} alt="" className="x-ray-photo" />
            <p className="photo-price">Cena 80 zł</p>
          </div>
          <div className="x-ray-photo-card">
            <h2 className="photo-title">Tomografia zębów CBCT</h2>
            <h3 className="photo-description">Trójwymiarowe zdjęcie zębów</h3>
            <img src={cbct} alt="" className="x-ray-photo" />
            <p className="photo-price">Cena od 140 zł</p>
          </div>
        </div>
        <h2 className="promo">
          <i className="fas fa-tag"></i>Pantomogram + Cefalometria 130 zł
        </h2>
        <div className="x-ray-contact">
          <div className="x-ray-address">
            <h2 className="x-ray-contact-title">Skontaktuj się z nami</h2>
            <p className="x-ray-data">
              <i className="fas fa-map-marker"></i>ul. Koszykowa 80D, Warszawa
            </p>
            <p className="x-ray-data">
              <i className="fas fa-phone-alt"></i>tel. 22 255 58 70
            </p>
            <p className="x-ray-data">
              <i className="fas fa-mobile"></i>kom. 505 505 505
            </p>
            <p className="x-ray-data">
              <i className="fas fa-at"></i>contact@mrdentist.com
            </p>
          </div>
          <div className="x-ray-hours">
            <h2 className="x-ray-contact-title">Godziny otwarcia</h2>
            <p className="x-ray-week">
              <i className="far fa-clock"></i>Poniedziałek - Piątek 8-20
            </p>
            <p className="x-ray-weekend">
              <i className="far fa-clock"></i>Sobota 9-14
            </p>
          </div>
        </div>
        <div className="x-ray-map">
          <h2 className="x-ray-location">Gdzie jesteśmy?</h2>
          <iframe
            className="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.02741542761!2d21.00314311161419!3d52.22322543477548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc9345f075c9%3A0x12a78682f1dc6f23!2sKoszykowa%2C%20Warszawa!5e0!3m2!1sen!2spl!4v1621438233551!5m2!1sen!2spl"
            allowfullscreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        <div className="x-ray-examples">
          <img src="" alt="" className="x-ray-example-photo" />
          <img src="" alt="" className="x-ray-example-photo" />
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące prześwietlenia zębów
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
              <p className="question-text">Czy muszę mieć skierowanie?</p>
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
              <p className="question-text">Jak wygląda wynik zdjęcia?</p>
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
              <p className="question-text">Co to jest pantomogram?</p>
            </li>
            {showThirdAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                ad eos repellat blanditiis autem eligendi sequi officiis, nihil
                optio quibusdam magni corrupti atque assumenda facilis ratione
                similique vitae placeat voluptas?.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickFourth}>
              {showFourthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Jak wygląda wykonanie zdjęcia panoramicznego zębów lub CBCT?
              </p>
            </li>
            {showFourthAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                ad eos repellat blanditiis autem eligendi sequi officiis, nihil
                optio quibusdam magni corrupti atque assumenda facilis ratione
                similique vitae placeat voluptas?.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickFifth}>
              {showFifthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Czy istnieją jakieś przeciwwskazania?
              </p>
            </li>
            {showFifthAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                ad eos repellat blanditiis autem eligendi sequi officiis, nihil
                optio quibusdam magni corrupti atque assumenda facilis ratione
                similique vitae placeat voluptas?.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickSixth}>
              {showSixthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Jaka jest rożnica między pantomogramem cyfrowym a analogowym?
              </p>
            </li>
            {showSixthAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                ad eos repellat blanditiis autem eligendi sequi officiis, nihil
                optio quibusdam magni corrupti atque assumenda facilis ratione
                similique vitae placeat voluptas?.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickSeventh}>
              {showSeventhAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Czy badanie tomograficzne zębów jest bezpieczne?
              </p>
            </li>
            {showSeventhAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                ad eos repellat blanditiis autem eligendi sequi officiis, nihil
                optio quibusdam magni corrupti atque assumenda facilis ratione
                similique vitae placeat voluptas?.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickEight}>
              {showEigthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Jakie są zalety badania tomograficznego?
              </p>
            </li>
            {showEigthAnswer ? (
              <li className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                ad eos repellat blanditiis autem eligendi sequi officiis, nihil
                optio quibusdam magni corrupti atque assumenda facilis ratione
                similique vitae placeat voluptas?.
              </li>
            ) : null}
          </ul>
        </div>
        <h2 className="services-prices-title">
          Szczegółowy cennik prześwietlenia zębów
        </h2>
        <ServicesPrices pricesdata={"Rentgen stomatologiczny"} />
      </section>
      <Footer />
    </>
  );
}

export default DentalXRay;
