import React, { useState } from "react";
import Navbar from "../Navbar";

import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function Comprehensive() {
  const [showFirstAnswer, setShowFirstAnswer] = useState(false);
  const [showSecondAnswer, setShowSecondAnswer] = useState(false);
  const [showThirdAnswer, setShowThirdAnswer] = useState(false);
  const [showFourthAnswer, setShowFourthAnswer] = useState(false);
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

  return (
    <>
      <Navbar />
      <section className="comprehensive-treatment">
        <div className="comprehensive-info">
          <h1 className="comprehensive-title">
            Kompleksowe leczenie stomatologiczne
          </h1>
          <h2 className="comprehensive-subtitle">
            Dlaczego warto podjąć leczenie kompleksowe w Mr Dentist?
          </h2>
          <div className="comprehensive-wrapper">
            <div className="comprehensive-text">
              <i className="fas fa-check-square"></i>
              <span>PROFESJONALNE PODEJŚCIE</span>
              <p>
                Do każdego Pacjenta podchodzimy indywidualnie, dobieramy
                odpowiednie leczenie, które wykonywane jest z najwyższą
                starannością przy pomocy materiałów bardzo wysokiej klasy.
              </p>
            </div>
            <div className="comprehensive-text">
              <i className="fas fa-user-check"></i>
              <span>KOMPLET SPECJALISTÓW</span>
              <p>
                Posiadamy lekarzy z każdej dziedziny stomatologii, dzięki czemu
                każdą konsultacje i leczenie możesz odbyć na miejscu bez
                potrzeby odwiedzania innych gabinetów.
              </p>
            </div>
            <div className="comprehensive-text">
              <i className="fas fa-camera"></i>
              <span>PEŁNA DIAGNOSTYKA</span>
              <p>
                Najnowocześniejsza aparatura do diagnostyki obrazowej to klucz
                do postawienia trafnej diagnozy. Na wyposażeniu gabinetu
                znajduje się aparat rentgenowski Kodak 9000 3D, jeden z
                najlepszych na rynku.
              </p>
            </div>
            <div className="comprehensive-text">
              <i className="fas fa-users"></i>
              <span>WSPÓLNE PLANOWANIE LECZENIA</span>
              <p>
                Wszyscy nasi lekarze spotykają się regularnie w pełnym gronie w
                celu zaplanowania leczenia Pacjentów. Dzięki temu plan leczenia,
                który powstaje, jest szczegółowy i uwzględnia niezbędne
                procedury z zakresu wszystkich dziedzin stomatologii.
              </p>
            </div>
            <div className="comprehensive-text">
              <i className="fas fa-dna"></i>
              <span>NAJNOWOCZEŚNIEJSZE TECHNIKI</span>
              <p>
                Dzięki nieustannym szkoleniom, lekarze są na bieżąco z
                najnowszymi technikami wszystkich dziedzin stomatologii co
                pozwala na wdrażanie coraz lepszych metod leczenia.
              </p>
            </div>
            <div className="comprehensive-text">
              <i className="far fa-grin-beam"></i>
              <span>TROSKLIWY ZESPÓŁ ASYSTENTEK</span>
              <p>
                Podczas każdej wizyty lekarskiej o Pacjentów dbają asystentki
                stomatologiczne, które zawsze troszczą się o ich komfort oraz
                dobre samopoczucie.
              </p>
            </div>
          </div>
          <p className="comprehensive-summary">
            W Mr Dentist zdrowie Pacjenta jest dla nas najważniejsze, w związku
            z tym mając na uwadze cały organizm człowieka oraz jego dobro,
            skupiamy się nie tylko na zębach lecz na całej jamie ustnej oraz
            powiązanych z nią strukturach.
          </p>
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
              <p className="question-text">Jaka jest idea naszej pracy?</p>
            </li>
            {showFirstAnswer ? (
              <li className="answer">
                Większość pacjentów wymaga leczenia kompleksowego, czyli
                ingerencji więcej niż jednego czy dwóch lekarzy. W Mr Dentist
                kładziemy na to bardzo duży nacisk. Leczenie zachowawcze,
                endodontyczne, chirurgiczne, implantologiczne, protetyczne,
                ortodontyczne i periodontologiczne oraz pełna diagnostyka odbywa
                się w jednym miejscu dzięki aktywnej współpracy wszystkich
                specjalistów. Z racji tego, że nie da się być ekspertem we
                wszystkim, każdy z naszych lekarzy zajmuje się inną dziedziną
                stomatologii i jest w tym niekwestionowanym ekspertem. Leczenie
                kompleksowe daje nam możliwość osiągnięcia przewidywanych i
                długotrwałych efektów leczenia.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickSecond}>
              {showSecondAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">Od czego zaczynamy?</p>
            </li>
            {showSecondAnswer ? (
              <li className="answer">
                Na podstawie przeglądu jamy ustnej, diagnostyki zdjęć
                rentgenowskich, informacji z wywiadu lekarskiego oraz rozmowy na
                temat oczekiwań, Pacjent otrzymuje informacje na temat stanu
                jamy ustnej. Wywiad lekarski, to część wizyty, której poświęcamy
                dużo uwagi, ze względu na to, że dostarcza nam niezbędnych
                informacji, nierzadko ukierunkowujących dalsze leczenie.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickThird}>
              {showThirdAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Jak odbywa się planowanie leczenia?
              </p>
            </li>
            {showThirdAnswer ? (
              <li className="answer">
                Jeżeli jest konieczność kompleksowego leczenia a Pacjent jest
                zainteresowany otrzymaniem informacji na temat możliwych
                rozwiązań, wykonywane są modele diagnostyczne (modele gipsowe
                odwzorowujące sytuację w jamie ustnej) oraz niezbędne zdjęcia
                aparatem fotograficznym. Po wykonaniu modeli oraz zdjęć
                specjaliści Mr Dentist spotykają się by dokładnie przeanalizować
                sytuację Pacjenta i stworzyć optymalny dla Niego plan leczenia.
                Dzięki temu Pacjent nie musi odwiedzać każdego specjalisty z
                osobna, co znacznie skraca czas leczenia.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickFourth}>
              {showFourthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Co robimy aby efekt naszego leczenia był przewidywalny?
              </p>
            </li>
            {showFourthAnswer ? (
              <li className="answer">
                Przed podjęciem przez Pacjenta decyzji o kompleksowym leczeniu,
                nasi lekarze wykonują wax-up oraz mock-up. Celem tego jest
                zwizualizowanie Pacjentowi ostatecznego efektu leczenia. Wax-up
                wykonywany jest przez pracownię protetyczną. Polega na
                woskowaniu modeli gipsowych zębów Pacjenta, co daje możliwość
                zmiany ich kształtu oraz wielkości w oparciu o sugestie
                Pacjenta. W celu przeniesienia woskowej wizualizacji do ust
                Pacjenta wykonywany jest mock-up. Na jego podstawie można
                zobaczyć bardzo zbliżony do ostatecznego efekt leczenia, jeszcze
                przed jego rozpoczęciem. W celu lepszej komunikacji z Pacjentem
                oraz pracownią protetyczną możliwe jest wykonanie graficznej
                wizualizacji uśmiechu, czyli Digital Smile Design. W
                przeznaczonym do tego programie wykonywany jest projekt
                kształtu, wielkości oraz koloru zębów. Wszystkie wyżej
                wymienione procedury wykonywane są w celu osiągnięcia
                najlepszych efektów leczenia oraz sprostania oczekiwaniom
                Pacjenta.
              </li>
            ) : null}
          </ul>
        </div>
        <p className="doctors-text">
          Do planowania oraz pełnej diagnostyki lekarze Mr Dentist przykładają
          bardzo dużą wagę, gdyż sam plan stanowi bardzo ważny, niezbędny
          fundament każdego leczenia. Takie podejście to coś, co zdecydowanie
          wyróżnia nas spośród innych. Przed podjęciem stosownych procedur
          Pacjent informowany jest o przybliżonych kosztach oraz o czasie
          realizacji, co daje możliwość zaplanowania swojego czasu oraz
          wydatków. Jeżeli chciałbyś abyśmy zaopiekowali się Tobą i zaplanowali
          Twoje leczenie, skontaktuj się z nami i poinformuj o tym nasze
          recepcjonistki.
        </p>
        <h4 className="selected-doctors-info">
          Lekarze zajmujący się leczeniem kompleksowym
        </h4>
        <ServicesDoctors doctorsdata={"comprehensive"} />
        <h3 className="services-prices-title">Cennik leczenia kompleksowego</h3>
        <ServicesPrices pricesdata={"Kompleksowe planowanie leczenia"} />
      </section>
    </>
  );
}
export default Comprehensive;
