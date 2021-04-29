import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

import photoroot1 from "./services-pages-images/leczenie_kanalowe_1.jpg";
import photoroot2 from "./services-pages-images/leczenie_kanalowe_2.jpg";
import photoroot3 from "./services-pages-images/leczenie_kanalowe_3.jpg";
import photoroot4 from "./services-pages-images/leczenie_kanalowe_4.jpg";
import photoroot5 from "./services-pages-images/leczenie_kanalowe_5.jpg";
import cofferdam from "./services-pages-images/koferdam2.jpg";
import photorootcbct from "./services-pages-images/leczenie_kanalowe_cbct.jpg";
import roentgen from "./services-pages-images/rentgen_zeba.jpg";

function RootCanal() {
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
      <section className="root-canal">
        <div className="root-canal-info">
          <h1 className="root-canal-title">Leczenie kanałowe</h1>
          <h2 className="root-canal-subtitle">
            Dlaczego leczenie kanałowe w Mr Dentist?
          </h2>
          <div className="root-canal-wrapper">
            <div className="root-canal-text">
              <i className="fas fa-check-square"></i>
              <span>Leczenie kanałowe pod mikroskopem</span>
              <p>
                Podczas leczenia kanałowego zawsze wykorzystujemy mikroskop
                stomatologiczny, który daje możliwość 40x powiększenia. Nie
                doliczamy żadnych dodatkowych opłat za wykorzystanie mikroskopu
              </p>
            </div>
            <div className="root-canal-text">
              <i className="fas fa-tooth"></i>
              <span>Leczymy trudne przypadki</span>
              <p>
                Zajmujemy się najbardziej skomplikowanymi zabiegami z zakresu
                endodoncji tj. usuwanie złamanych narzędzi, zamykanie
                perforacji, odnajdywanie dodatkowych kanałów, leczenie zębów z
                bardzo zakrzywionymi, wąskimi kanałami
              </p>
            </div>
            <div className="root-canal-text">
              <i className="fas fa-camera"></i>
              <span>Nowoczesny sprzęt</span>
              <p>
                Posiadamy najnowocześniejszy sprzęt do leczenia kanałowego
                (m.in. Ednometr Morita, B&L SuperEndo Beta), wykonujemy na
                miejscu pełną diagnostykę rentgenowską (zdjęcia RTG punktowe i
                pantomograficzne)
              </p>
            </div>
            <div className="root-canal-text">
              <i className="fas fa-users"></i>
              <span>Doświadczeni stomatolodzy</span>
              <p>
                Należymy do Polskiego Towarzystwa Endodontycznego oraz ciągle
                uczestniczymy w wielu szkoleniach i konferencjach dot. leczenia
                kanałowego. Masz pewność, że trafisz na dobrą opiekę.
              </p>
            </div>
            <div className="root-canal-text">
              <i className="far fa-heart"></i>
              <span>Oryginalne narzędzia i materiały</span>
              <p>
                Używamy oryginalnych i sprawdzonych materiałów oraz narzędzi
                zapewniając najwyższą jakość i efektywność leczenia (leczenie
                zawsze odbywa się w koferdamie, używamy oryginalnych pilników
                endodontycznych)
              </p>
            </div>
            <div className="root-canal-text">
              <i className="fas fa-atom"></i>
              <span>Tomografia 3D</span>
              <p>
                W naszym wyposażeniu znajduje się tomograf zębów umożliwiający
                wykonywanie zdjęć rentgenowskich 3D, dzięki którym łatwiej można
                odnaleźć kanały zębowe w tzw. trudnych przypadkach
              </p>
            </div>
          </div>

          <div className="root-canal-explanation">
            <div className="explanation">
              <h2>Co to jest leczenie kanałowe?</h2>
              <p>
                Leczenie kanałowe (Endodoncja) to dział stomatologii zajmujący
                się leczeniem schorzeń miazgi oraz tkanek okołowierzchołkowych
                znajdujących się w stanie zapalnym.
              </p>
              <span>
                Miazgę możemy nazwać „sercem zęba” ponieważ znajdują się w niej
                naczynia oraz nerwy. Kiedy dochodzi do stanu zapalnego? W
                momencie gdy proces próchnicy nie zostanie zatrzymany na
                poziomie szkliwa oraz zębiny to dociera do miazgi, często
                towarzyszy temu ból przy nagryzaniu lub w reakcji na
                zimno/ciepło. Zmienioną zapalnie miazgę należy usunąć, a kanały
                korzeniowe dokładnie oczyścić z bakterii i wypełnić gutaperką
              </span>
              <img src={photoroot1} alt=""></img>
            </div>
            <ul className="explanation-list">
              <h2>Jak przebiega leczenie kanałowe?</h2>
              <li className="single-explanation">
                <h3>
                  1. Zdjęcia rentgenowskie (RTG oraz tomografia komputerowa)
                </h3>
                <p>
                  Przed podjęciem leczenia wykonywane jest zdjęcie RTG zęba, w
                  celu określenia ilości oraz przebiegu kanałów, a także oceny
                  stanu tkanek okołowierzchołkowych. W przypadku ponownego
                  leczenia kanałowego, mocno zakrzywionych, zagiętych kanałów
                  lub pozostawionego złamanego narzędzia w kanale stomatolog
                  może zlecić wykonanie tomografii komputerowej zęba (CBCT).
                  Dzięki obrazowi 3D łatwiej będzie można zobrazować struktury
                  zęba niewidoczne na tradycyjnym zdjęciu rentgenowskim.
                </p>
                <img src={photorootcbct} alt=""></img>
              </li>
              <li className="single-explanation">
                <h3>2. Usunięcie próchnicy, dostęp do chorej miazgi</h3>
                <p>
                  W znieczuleniu miejscowym stomatolog opracowuje ubytek
                  usuwając zmiany próchnicowe i dostaje się do komory zęba, w
                  której znajduje się zmieniona chorobowo miazga.
                </p>
                <img src={photoroot2} alt=""></img>
              </li>
              <li className="single-explanation">
                <h3>3. Założenie koferdamu oraz praca pod mikroskopem</h3>
                <p>
                  Dalsze etapy leczenia są wykonywane przy użyciu mikroskopu
                  oraz w koferdamie. Korzyści leczenia w koferdamie zostały
                  przedstawione w dedykowanym artykule. Zastosowanie mikroskopu
                  pozwala na zwiększenie skuteczności zabiegu, uzyskanie
                  maksymalnej precyzji przy leczeniu zębów o nietypowej
                  strukturze anatomicznej jak również stanowi pomoc w
                  lokalizacji dodatkowych kanałów.
                  <br></br>
                  Do założenia koferdamu potrzebne są 4 własne ściany zęba na
                  których będzie się opierała klamra. Jeżeli po usunięciu zmian
                  próchnicowych ząb został pozbawiony znacznej ilości własnych
                  twardych tkanek zęba przed zastosowaniem koferdamu będzie
                  konieczne wykonanie odbudowy. Polega ona na odtworzeniu ścian
                  zęba światło utwardzalnym materiałem kompozytowym.
                </p>
                <img src={cofferdam} alt=""></img>
              </li>
              <li className="single-explanation">
                <h3>4. Opracowanie kanałów</h3>
                <p>
                  Przy pomocy pilników ręcznych oraz narzędzi maszynowych
                  stomatolog usuwa miazgę z kanałów. Następnie opracowuje je
                  wykorzystując do tego celu endometr (urządzenie pomagające w
                  określeniu długości kanałów), poszerza, oczyszcza z bakterii
                  płucząc specjalnymi preparatami.
                </p>
                <img src={photoroot3} alt=""></img>
              </li>
              <li className="single-explanation">
                <h3>5. Wypełnienie kanałów gutaperką</h3>
                <p>
                  W momencie gdy kanały są przygotowane (poszerzone,
                  oczyszczone, wypłukane i osuszone) stomatolog wypełnia je
                  gutaperką wraz z uszczelniaczem. W gabinecie stomatologicznym
                  Mr Dentist wykorzystujemy system wypełniania kanałów rozgrzaną
                  gutaperką pod ciśnieniem. Umożliwia to dotarcie materiału
                  wypełniającego w boczne, często zakrzywione odgałęzienia
                  kanałów.
                </p>
                <img src={photoroot4} alt=""></img>
              </li>
              <li className="single-explanation">
                <h3>
                  6. Kontrolne zdjęcie rentgenowskie po wypełnieniu kanałów
                </h3>
                <p>
                  W dalszej kolejności wykonywane jest zdjęcie rentgenowskie
                  zęba w celu sprawdzenia szczelności materiału wypełniającego.
                </p>
                <img src={roentgen} alt=""></img>
              </li>
              <li className="single-explanation">
                <h3>7. Odbudowa zęba po leczeniu kanałowym</h3>
                <p>
                  Prawidłowo przeleczony ząb należy odpowiednio odbudować i
                  zabezpieczyć aby jak najdłużej spełniał swoją funkcję i nie
                  zaprzepaścić efektów leczenia. Jaki rodzaj odbudowy wybrać? Na
                  to pytanie nie ma gotowej odpowiedzi. Każdy przypadek jest
                  inny i wymaga konsultacji z lekarzem stomatologiem. Poniżej
                  podajemy link do artykułu który pozwoli Ci zapoznać się z
                  możliwościami dostępnymi w gabinecie Mr Dentist.
                </p>
                <img src={photoroot5} alt=""></img>
                <p>
                  Prawidłowo przeprowadzone leczenie kanałowe umożliwia dalsze
                  funkcjonowanie zęba oraz uzupełnień protetycznych na nim
                  wykonanych. Stwarza możliwość uratowania własnego zęba i jest
                  zdecydowanie tańsze od alternatywy jaką jest ekstrakcja z
                  późniejszą implantacją lub mostem protetycznym.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące leczenia kanałowego
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
              <p className="question-text">Czy leczenie kanałowe boli?</p>
            </li>
            {showFirstAnswer ? (
              <p className="answer">
                Leczenie kanałowe zazwyczaj przeprowadzane jest w znieczuleniu
                miejscowym, w związku z tym jest ono bezbolesne.
              </p>
            ) : null}
            <li className="question" onClick={showOnClickSecond}>
              {showSecondAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Ile wizyt jest potrzebnych do przeprowadzenia leczenia?
              </p>
            </li>
            {showSecondAnswer ? (
              <li className="answer">
                Każdy przypadek jest inny, zęby mają różną ilość kanałów, w
                związku z czym ciężko udzielić jednoznacznej odpowiedzi na to
                pytanie. W OtimDent dążymy do tego, by ilość wizyt w trakcie
                leczenia kanałowego była jak najmniejsza.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickThird}>
              {showThirdAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">
                Dlaczego warto leczyć zęby pod mikroskopem?
              </p>
            </li>
            {showThirdAnswer ? (
              <li className="answer">
                Podczas leczenia kanałowego wymagana jest niezwykła precyzja.
                Nasz gabinet wyposażony jest jeden z najlepszych dostępnych na
                rynku mikroskopów stomatologicznych firmy Leica, który zapewnia
                możliwość doskonałej diagnostyki i bardzo dużą dokładność w
                czasie leczenia endodontycznego. Powiększenie (nawet 40-krotne)
                umożliwia odnalezienie ujść kanałów niewidocznych gołym okiem.
                Przy użyciu mikroskopu przeprowadzamy również zabiegi polegające
                na usuwaniu złamanych narzędzi kanałowych oraz zamknięciu
                perforacji MTA u pacjentów leczonych w innym gabinecie.
              </li>
            ) : null}
            <li className="question" onClick={showOnClickFourth}>
              {showFourthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text"> Po co leczyć zęby kanałowo?</p>
            </li>
            {showFourthAnswer ? (
              <li className="answer">
                Najważniejszą zaletą leczenia kanałowego jest fakt, że w ten
                sposób ratujemy swój naturalny ząb. Alternatywą dla zębów mocno
                zniszczonych próchnicą jest ekstrakcja z późniejszą odbudową
                implantologiczną oraz protetyczną. Te zabiegi w porównaniu do
                leczenia kanałowego są bardziej inwazyjne i kosztowne, dlatego
                jeżeli istnieje taka możliwość należy „walczyć” o zachowanie
                swojego naturalnego zęba
              </li>
            ) : null}
            <li className="question" onClick={showOnClickFifth}>
              {showFifthAnswer ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
              <p className="question-text">Ile kosztuje leczenie kanałowe?</p>
            </li>
            {showFifthAnswer ? (
              <li className="answer">
                Leczenie kanałowe jest leczeniem kosztownym, jednak w porównaniu
                do zabiegów protetycznych czy implantologicznych jest
                zdecydowanie tańszym rozwiązaniem. W naszym gabinecie staramy
                się jak najdokładniej oszacować koszt przed rozpoczęciem
                zabiegu. Często jest to utrudnione, gdyż przed rozpoczęciem
                leczenia nie ma 100% pewności, że dany ząb będzie posiadał
                przewidywaną ilość kanałów (jest to główny czynnik mający wpływ
                na cenę). Przed rozpoczęciem leczenia, lekarze w gabinecie
                stomatologicznym Mr Dentist wyjaśniają na czym polega leczenie
                kanałowe, jak będą wyglądały kolejne etapy oraz podają
                orientacyjny koszt leczenia.
              </li>
            ) : null}
          </ul>
        </div>
        <h2 className="selected-doctors-info">
          Lekarze zajmujący się leczeniem kanałowym
        </h2>
        <ServicesDoctors doctorsdata={"root"} />
        <h2 className="services-prices-title">Cennik leczenia kanałowego</h2>
        <ServicesPrices pricesdata={"Leczenie kanałowe – Endodoncja"} />
      </section>
    </>
  );
}

export default RootCanal;
