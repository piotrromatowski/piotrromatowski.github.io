import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

import ceramicBefore from "./services-pages-images/ceramic-before.png";
import ceramicAfter from "./services-pages-images/ceramic-after.png";
import compositeBefore from "./services-pages-images/composite-before.png";
import compositeAfter from "./services-pages-images/composite-after.png";
import opalescence from "./services-pages-images/Opalescence.jpg";
import splint from "./services-pages-images/splint.jpg";
import prevdent from "./services-pages-images/prevdent.jpg";

function CosmeticDentistry() {
  return (
    <>
      <Navbar />
      <section className="cosmetic-dentistry">
        <div className="subpage-info">
          <h1 className="subpage-title">Stomatologia estetyczna</h1>
          <h2 className="subpage-subtitle">
            Dlaczego warto zdecydować się na zabiegi stomatologii estetycznej w
            Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-tooth"></i>
              <span>Współpraca z uznanymi pracowniami dentystycznymi</span>
              <p>
                Pracujący tam technicy dentystyczni wykonują prace dostosowane
                indywidualnie do potrzeb pacjenta oraz warunków, jakie panują w
                jamie ustnej.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-check"></i>
              <span>Wysoka jakość materiałów</span>
              <p>
                Prace protetyczne wykonujemy współpracując z laboratoriami,
                które bazują na najnowszych materiałach oraz technologiach.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-camera"></i>
              <span>Pracownia rentgenowska na miejscu</span>
              <p>
                W naszym wyposażeniu znajduje się tomograf zębów umożliwiający
                wykonywanie trójwymiarowych zdjęć rentgenowskich.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-user-alt"></i>
              <span>Indywidualne podejście</span>
              <p>
                Każdy ząb i przypadek jest inny, dlatego wizytę rozpoczynamy od
                wnikliwej analizy klinicznej.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-file-alt"></i>
              <span>Do każdej pracy dołączony jest certyfikat jakości</span>
              <p>
                Dzięki niemu wiesz z czego i kiedy zostało wykonane Twoje
                uzupełnienie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-users"></i>
              <span>Profesjonalna opieka stomatologiczna</span>
              <p>
                Zespół stomatologiczny Mr Dentist dba o zapewnienie Ci komfortu
                w trakcie wizyty oraz spełnienie Twoich oczekiwań odnośnie
                pięknego, zdrowego uśmiechu.
              </p>
            </div>
          </div>
        </div>
        <div className="cosmetic-dentistry-explanation">
          <h2 className="explanation-question">
            Czym jest stomatologia estetyczna?
          </h2>
          <p className="explanation-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            adipisci necessitatibus quis doloremque. Voluptate amet,
            voluptatibus maiores repudiandae assumenda asperiores! Quo minima,
            pariatur quisquam voluptatibus nulla tenetur libero omnis excepturi
            quibusdam fuga, aliquid consectetur earum delectus. Dicta.
          </p>
          <h2 className="explanation-question">
            W gabinecie Mr Dentist oferujemy następujące zabiegi z zakresu
            stomatologii estetycznej:
          </h2>
          <div className="explanation-veneers-wrapper">
            <div className="composite">
              <div className="composite-text">
                <h3 className="composite-title">1. Licówki kompozytowe</h3>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat odio ullam saepe minus ab consequatur expedita et est
                  accusamus deleniti eius quo hic dolores odit totam itaque
                  accusantium eveniet quos recusandae, provident autem,
                  laboriosam omnis. Aut voluptatem quo omnis corporis id eos
                  veritatis, laudantium, ut magnam qui quod dolorem
                  necessitatibus soluta fuga adipisci, architecto iusto alias
                  aperiam!
                </p>
              </div>
              <div className="composite-photos">
                <img src={compositeBefore} alt="" className="before" />
                <img src={compositeAfter} alt="" className="after" />
              </div>
            </div>
            <div className="ceramic">
              <div className="ceramic-text">
                <h3 className="ceramic-title">2. Licówki pełnoceramiczne</h3>
                <p className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  dicta dolore praesentium, necessitatibus aspernatur itaque
                  atque illo error voluptate numquam pariatur porro fugit rem
                  laudantium, nobis beatae excepturi eius id. Provident magni,
                  laborum id quis blanditiis dolore quasi aliquam, soluta nihil
                  minus quisquam, deleniti sint.
                </p>
              </div>
              <div className="ceramic-photos">
                <img src={ceramicBefore} alt="" className="before" />
                <img src={ceramicAfter} alt="" className="after" />
              </div>
            </div>
          </div>
          <h3 className="explanation-question">
            Jak wygląda wykonanie licówek?
          </h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            dolorum adipisci possimus rem laborum et eligendi qui eveniet
            tempore aperiam! Ipsa consequuntur facilis voluptate nobis, sunt
            delectus?
          </p>
          <h3 className="explanation-question">
            Przeciwwskazania do wykonania licówek?
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
            W jaki sposób dbać o licówki?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              eius unde facilis!
            </li>
          </ul>
          <h3 className="whitening">3. Wybielanie zębów</h3>
          <p className="explanation-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            nostrum rem architecto, iure quis soluta blanditiis ducimus officia
            eligendi neque sapiente, nihil reprehenderit eius et numquam.
            Sapiente accusamus delectus, illo, alias, laudantium temporibus
            tenetur debitis a qui accusantium dolore quia.
          </p>
          <h3 className="explanation-question">
            Czy istnieją jeszcze jakieś przeciwwskazania do przeprowadzenia
            zabiegu wybielania?
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
            <li className="explanation-answer-list">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              cumque, animi esse praesentium ratione, accusamus deserunt cum,
              voluptate incidunt officiis dignissimos eligendi dolor odio
              voluptas! Error, officiis!
            </li>
          </ul>
          <div className="methods">
            <h3 className="methods-title">
              Metody wybielania zębów w gabinecie Mr Dentist:
            </h3>
            <h4 className="prevdent">
              Metoda gabinetowa za pomocą preparatu PREVDENT
            </h4>
            <p className="method-explanation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              mollitia excepturi expedita totam qui laudantium esse, vel sit
              consectetur commodi natus illo, vero ipsa eligendi dolorum at
              adipisci, ipsam dolor quia minus. Nisi explicabo consectetur
              inventore dicta! Dicta perspiciatis iure quis dolores molestiae
              officiis laboriosam voluptas quisquam?
            </p>
            <p className="method-question">Co wyróżnia system PREVDENT?</p>
            <p className="method-answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              inventore, corporis voluptates voluptatem voluptatibus maiores
              aliquam amet explicabo? Totam tenetur provident odio itaque a
              quibusdam nisi amet?
            </p>
            <p className="method-question">Jak wygląda procedura wybielania?</p>
            <ul className="method-answer-list">
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                cupiditate tempore tenetur beatae porro excepturi.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                placeat earum ullam eligendi porro nemo maxime? Autem officiis
                magnam at quisquam!
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, facere! Ut incidunt maxime nisi cupiditate
                doloremque, accusantium, iure magni nam deserunt fugiat ducimus,
                a voluptate. Voluptate vero voluptatum ipsam quae?
              </li>
            </ul>
            <p className="method-question">
              Proces wybielania przebiega w 3 etapach:
            </p>
            <ul className="method-answer-list">
              <li className="single-method-answer">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                pariatur fugiat consequuntur, saepe ut recusandae dolore
                perferendis eum molestiae sapiente id voluptates sint veritatis
                iure fugit esse.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                beatae perferendis aliquid provident autem repellendus? Cum unde
                veritatis obcaecati vero reiciendis suscipit mollitia quae
                animi.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                odio fugiat ducimus placeat ipsum fugit provident pariatur!
                Deserunt, esse.
              </li>
            </ul>
            <img src={prevdent} alt="" className="prevdent-photo" />
            <h4 className="overlay">Metoda nakładkowa</h4>
            <p className="method-explanation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              mollitia excepturi expedita totam qui laudantium esse, vel sit
              consectetur commodi natus illo, vero ipsa eligendi dolorum at
              adipisci, ipsam dolor quia minus:
            </p>
            <ul className="method-answer-list">
              <li className="single-method-answer">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                pariatur fugiat consequuntur, saepe ut recusandae dolore
                perferendis eum molestiae sapiente id voluptates sint veritatis
                iure fugit esse.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                beatae perferendis aliquid provident autem repellendus? Cum unde
                veritatis obcaecati vero reiciendis suscipit mollitia quae
                animi.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                odio fugiat ducimus placeat ipsum fugit provident pariatur!
                Deserunt, esse.
              </li>
            </ul>
            <div className="overlay-photos">
              <img src={opalescence} alt="" className="opalescence" />
              <img src={splint} alt="" className="splint" />
            </div>
            <p className="method-question">
              Wybielanie zębów metodą nakładkową krok po kroku:
            </p>
            <ul className="method-answer-list">
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                cupiditate tempore tenetur beatae porro excepturi.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                placeat earum ullam eligendi porro nemo maxime? Autem officiis
                magnam at quisquam!
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, facere! Ut incidunt maxime nisi cupiditate
                doloremque, accusantium, iure magni nam deserunt fugiat ducimus,
                a voluptate. Voluptate vero voluptatum ipsam quae?
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                cupiditate tempore tenetur beatae porro excepturi.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                placeat earum ullam eligendi porro nemo maxime? Autem officiis
                magnam at quisquam!
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, facere! Ut incidunt maxime nisi cupiditate
                doloremque, accusantium, iure magni nam deserunt fugiat ducimus,
                a voluptate. Voluptate vero voluptatum ipsam quae?
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                cupiditate tempore tenetur beatae porro excepturi.
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                placeat earum ullam eligendi porro nemo maxime? Autem officiis
                magnam at quisquam!
              </li>
              <li className="single-method-answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, facere! Ut incidunt maxime nisi cupiditate
                doloremque, accusantium, iure magni nam deserunt fugiat ducimus,
                a voluptate. Voluptate vero voluptatum ipsam quae?
              </li>
            </ul>
          </div>
        </div>
        <h2 className="selected-doctors-info">
          Lekarze zajmujący się stomatologią estetyczną
        </h2>
        <ServicesDoctors doctorsdata={"aesthetics"} />
        <h2 className="services-prices-title">
          Cennik stomatologii estetycznej
        </h2>
        <ServicesPrices pricesdata={"Stomatologia estetyczna"} />
      </section>
      <Footer />
    </>
  );
}

export default CosmeticDentistry;
