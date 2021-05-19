import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function PediatricDentistry() {
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
      <section className="pediatric-dentistry">
        <div className="subpage-info">
          <h1 className="subpage-title">Stomatologia dziecięca</h1>
          <h2 className="subpage-subtitle">
            Dentysta dla dzieci – dlaczego Mr Dentist?
          </h2>
          <div className="subpage-wrapper">
            <div className="subpage-text">
              <i className="fas fa-tooth"></i>
              <span>Wizyty adaptacyjne</span>
              <p>
                Pierwsza wizyta dziecka w gabinecie stomatologicznym jest
                niezwykle ważna i może mieć ogromny wpływ na późniejsze
                zachowanie dziecka w stosunku do dentysty. Aby zapoznać malucha
                z wyposażeniem gabinetu stomatologicznego w pierwszej kolejności
                przeprowadzana jest wizyta adaptacyjna.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-child"></i>
              <span>Współpraca z dzieckiem to priorytet</span>
              <p>
                Staramy się, aby podczas wizyty dziecko było zachęcane do
                współpracy z lekarzem dentystą, a nie namawiane siłą. W tak
                młodym wieku nie warto, aby nasza pociecha zraziła się do
                stomatologa.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-futbol"></i>
              <span>Wizyta jako nowa przygoda</span>
              <p>
                Niespotykane dźwięki, nowe urządzenia oraz odczucia – to
                wszystko może być kolejną przygodą i zabawą dla Twojego dziecka
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-user-alt"></i>
              <span>Dedykowani stomatolodzy</span>
              <p>
                W naszym gabinecie do stomatologii dziecięcej dedykowani są
                lekarze dentyści ściśle specjalizujący się w tej dziedzinie.
                Masz pewność, że Twoje dziecko trafi na dobrą opiekę.
              </p>
            </div>
          </div>
        </div>
        <div className="pediatric-explanation">
          <div className="explanation-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            obcaecati accusantium nesciunt, labore natus unde at delectus
            officiis? Fuga magnam voluptatem reiciendis quos dolorem obcaecati
            illo. Esse nisi optio et sed eos. Et consequatur veritatis nulla
            odio, quidem ducimus ex consequuntur perspiciatis sapiente eaque non
            ea, harum iusto assumenda! Eveniet non deserunt sint sapiente.
            Itaque praesentium animi aperiam omnis laboriosam voluptatibus
            dolorum minus a rerum debitis voluptate sit natus earum esse
            eligendi assumenda iure doloribus quae, perferendis deserunt, cumque
            sapiente magni aliquid vel. Aut officia doloremque cupiditate quia
            dolore deleniti est, nihil voluptate suscipit beatae, sit odit,
            tempora veritatis excepturi earum ab atque rerum omnis. Nemo,
            veniam? Non a dolorum accusamus earum qui pariatur expedita adipisci
            commodi perferendis. Saepe autem earum obcaecati. Facilis et esse
            perferendis omnis, quisquam cupiditate ea veniam sit totam enim
            reprehenderit quae delectus possimus dolores eveniet nihil corporis
            in minus similique vel officiis, adipisci temporibus ex. Blanditiis
            omnis eos atque suscipit ad repellat nostrum laboriosam non porro
            quas amet obcaecati eligendi aperiam distinctio rerum veritatis
            itaque, delectus neque possimus, corrupti cupiditate, eum earum! Est
            pariatur, itaque eum praesentium modi quidem ducimus esse qui
            inventore, alias saepe corporis recusandae voluptates commodi
            suscipit repudiandae optio, dignissimos excepturi molestias maxime
            ullam id! Voluptate cupiditate architecto atque eum neque nam, ut
            est doloremque earum corporis necessitatibus debitis. Natus corporis
            totam nisi et similique neque maxime repellendus, obcaecati sint
            corrupti expedita, vero iure autem ea incidunt. Dolorum perferendis
            ipsum, eius quisquam quas harum explicabo. Magni ullam nisi
            consequatur neque commodi molestias eaque iste ipsum, assumenda
            reprehenderit veniam tempora esse aliquam officia, minus sint
            doloremque minima dolorum nulla adipisci quisquam odio. Illo ad eius
            quisquam, dolore suscipit minima id sit ut, nobis ipsa animi.
            Veritatis pariatur, quae cupiditate reprehenderit laboriosam
            doloremque delectus minima consequatur maxime excepturi culpa modi
            odit libero et, nihil voluptate incidunt non inventore quam quos
            porro! Magnam qui, vitae exercitationem magni eligendi tempore sint
            illum accusantium eius ut facilis accusamus delectus sapiente quae
            officiis temporibus consequatur ea! Quo doloribus, unde sit nisi
            quae labore temporibus rerum a numquam magnam error placeat ad
            provident recusandae vitae odio, soluta enim animi deserunt magni
            quisquam quia mollitia dolor dolore. Cumque necessitatibus eligendi
            inventore. Temporibus corrupti id, earum in et repellat sunt
            veritatis!
          </div>
          <div className="explanation-image"></div>
        </div>
        <div className="questions-answers">
          <h3 className="questions-answers-title">
            Najważniejsze pytania dotyczące stomatologii dziecięcej
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
                Dlaczego należy leczyć zęby mleczne?
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
                Czy kolorowe wypełnienia dla dzieci są ta samo trwałe jak
                klasyczne plomby?
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
                W jaki sposób dbać o higienę jamy ustnej dzieci?
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
          Lekarze dentyści dedykowani do stomatologii dziecięcej
        </h2>
        <ServicesDoctors doctorsdata={"pediatric"} />
        <h2 className="services-prices-title">
          Cennik stomatologii dziecięcej
        </h2>
        <ServicesPrices pricesdata={"Stomatologia dziecięca"} />
      </section>
    </>
  );
}

export default PediatricDentistry;
