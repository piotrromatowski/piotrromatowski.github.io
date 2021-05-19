import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

import tooth from "./services-pages-images/tooth-graphic.jpg";
import caries from "./services-pages-images/caries.jpg";

function ConservativeDentistry() {
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
      <section className="conservative-dentistry">
        <div className="subpage-info">
          <h1 className="subpage-title">Stomatologia zachowawcza</h1>
          <h2 className="subpage-subtitle">
            Dlaczego warto zdecydować się na leczenie zachowawcze w Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-check"></i>
              <span>Indywidualne podejście do pacjenta</span>
              <p>
                Każdy ząb i przypadek jest inny, dlatego wizytę rozpoczynamy od
                wnikliwej analizy klinicznej oraz radiologicznej (w razie
                potrzeby).
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-users"></i>
              <span>Szeroka wiedza specjalistów</span>
              <p>
                Stomatologia jest dziedziną, która ciągle się rozwija, my
                również staramy się nie stać w miejscu tylko podążać za nią.
                Czynnie uczestniczymy w licznych szkoleniach, dzięki czemu
                możesz być pewien, że jesteś pod profesjonalną opieką.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-gem"></i>
              <span>Zdolności manualne</span>
              <p>
                Wszyscy nasi lekarze przykładają bardzo dużą uwagę nie tylko do
                właściwego odtworzenia brakujących tkanek zęba, ale również do
                estetyki. Staramy się uzyskać taki kształt oraz kolor, aby był
                zbliżony do pozostałych zębów, tak by nasza praca nie była
                zauważalna.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-search-plus"></i>
              <span>Leczenie w koferdamie oraz w powiększeniu</span>
              <p>
                Podczas leczenia wykorzystujemy koferdam. Dodatkowo korzystamy z
                mikroskopu lub lup. Praca w powiększeniu daje gwarancję większej
                precyzji oraz dokładności.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-cart-plus"></i>
              <span>Oryginalne narzędzia i materiały</span>
              <p>
                Używamy oryginalnych i sprawdzonych materiałów oraz narzędzi
                zapewniając najwyższą jakość i efektywność leczenia. W gabinecie
                stomatologicznym Mr Dentist dysponujemy szerokim wyborem
                nowoczesnych materiałów, które charakteryzują się wysoką
                trwałością.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-glasses"></i>
              <span>Wizualizacja etapów leczenia</span>
              <p>
                Posiadamy kamerę wewnątrzustną, którą wykonujemy zdjęcia w jamie
                ustnej pacjenta przed rozpoczęciem leczenia, w trakcie oraz na
                koniec. Dzięki temu pacjent może zobaczyć efekty pracy, ułatwia
                to również komunikację pomiędzy lekarzem, a pacjentem.
              </p>
            </div>
          </div>
        </div>
        <div className="conservative-dentistry-explanation">
          <h2 className="explanation-question">
            Co to jest leczenie zachowawcze w stomatologii?
          </h2>
          <p className="explanation-answer">
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </strong>
            Commodi ipsam sed beatae? Eum, explicabo. Reiciendis, cupiditate
            nulla dolor excepturi consequatur aut quidem molestias id
            perspiciatis aliquam, ea aliquid eum necessitatibus veniam? Dolorem
            neque repellendus quaerat velit at alias quasi accusantium aliquam
            reiciendis!
          </p>
          <h3 className="explanation-question">
            Poznaj budowę zęba i zostań świadomym Pacjentem
          </h3>
          <img src={tooth} alt="" className="tooth-graphic" />
          <ul className="explanation-question-list">
            <li className="explanation-answer-list">
              <strong>Lorem, ipsum.</strong> - Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Officia error vel amet repudiandae
              possimus magnam?
            </li>
            <li className="explanation-answer-list">
              <strong>Lorem, ipsum.</strong> - Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Et, eligendi.
            </li>
            <li className="explanation-answer-list">
              <strong>Lorem, ipsum.</strong> - Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Tenetur sapiente corrupti nobis.
              Repellat, distinctio iusto. Atque, iure eum!
            </li>
            <li className="explanation-answer-list">
              <strong>Lorem, ipsum.</strong> - Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi mollitia consectetur quae?
            </li>
            <li className="explanation-answer-list">
              <strong>Lorem, ipsum.</strong> - Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi mollitia consectetur quae?
            </li>
          </ul>
          <h3 className="explanation-question">
            Jak i dlaczego powstaje próchnica?
          </h3>
          <img src={caries} alt="" className="caries" />
          <p className="explanation-answer">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            incidunt amet maiores unde obcaecati illum laboriosam, suscipit
            similique accusantium, veniam deserunt accusamus nam aspernatur
            magnam quasi eos autem quas, odio blanditiis corrupti perspiciatis
            excepturi libero laudantium voluptatum? Accusantium perferendis
            consequuntur quos, sit hic cupiditate quia mollitia quas eaque,
            facilis culpa facere praesentium ducimus laudantium, atque esse odio
            dolorum ratione possimus fuga ipsam! Ducimus velit delectus placeat
            minus, dolorum sed a dolor porro iste culpa minima facere, nulla qui
            sequi? Iusto ducimus explicabo, harum alias nisi temporibus fuga
            neque eum excepturi delectus est eaque amet illo facilis rerum
            suscipit veritatis, dolor quam ad maiores corrupti cumque aut.
            Exercitationem aut illo ullam minima minus odio quam possimus eaque
            cum quisquam totam nobis debitis, perferendis dignissimos repellat
            obcaecati omnis rem iste aliquam, laudantium nisi enim. At
            exercitationem adipisci, inventore alias commodi possimus.
            Perferendis adipisci corrupti reiciendis optio dolorum voluptatem
            voluptas animi fugiat placeat repudiandae sint, alias ea dolorem
            nihil ipsam id consequatur quia architecto ratione explicabo beatae
            at odit nam. Voluptate, veniam praesentium dolorum reprehenderit ad
            repellat, eos expedita laudantium earum fuga vitae!
          </p>
          <h3 className="explanation-question">
            Jak wygląda leczenie próchnicy?
          </h3>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            corporis dolorem quibusdam dolore quaerat in nisi illum rerum,
            molestiae tenetur, non rem excepturi autem repudiandae!
          </p>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            corporis dolorem quibusdam dolore quaerat in nisi illum rerum,
            molestiae tenetur, non rem excepturi autem repudiandae!
          </p>

          <h3 className="explanation-question">
            Dlaczego wizyty kontrolne u dentysty powinny odbywać się co 6
            miesięcy?
          </h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
            voluptates libero voluptate illo neque est repudiandae! Adipisci
            quisquam inventore nesciunt!
          </p>
        </div>

        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące leczenia zachowawczego
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
                Co to jest wypełnienie i ile kosztuje jego założenie?
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
                Dlaczego warto zdecydować się na odbudowę zębów materiałem
                kompozytowym?
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
                Co mogę zrobić aby zapobiec rozwojowi próchnicy?
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
          Lekarze zajmujący się stomatologią zachowawczą
        </h2>
        <ServicesDoctors doctorsdata={"conservative"} />
        <h2 className="services-prices-title">
          Cennik stomatologii zachowawczej
        </h2>
        <ServicesPrices pricesdata={"Stomatologia zachowawcza"} />
      </section>
    </>
  );
}

export default ConservativeDentistry;
