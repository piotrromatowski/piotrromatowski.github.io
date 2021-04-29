import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function DentalSurgery() {
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
              <i className="fas fa-check-square"></i>
              <span>Leczymy trudne przypadki</span>
              <p>
                Zajmujemy się usuwaniem zatrzymanych ósemek (zębów mądrości)
                oraz całą gamą innych zabiegów chirurgicznych m. in. implantami
                zębowymi, resekcje wierzchołka, podnoszenie dna zatoki.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-camera"></i>
              <span>Twój komfort to nasz priorytet</span>
              <p>
                W czasie zabiegów chirurgicznych najważniejszą kwestią jest Twój
                komfort i dobre samopoczucie. Dbamy o to, aby atmosfera była
                przyjazna dla Ciebie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-users"></i>
              <span>Pracownia rentgenowska</span>
              <p>
                Nasz gabinet wyposażony jest w pracownię rentgenowską, w związku
                z tym jesteśmy w stanie na miejscu wykonać pantomogram czy inne
                zdjęcie rentgenowskie.
              </p>
            </div>
            <div className="subpage-text">
              <i className="fas fa-dna"></i>
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
              <i className="far fa-grin-beam"></i>
              <span>Zwolnienie lekarskie w razie potrzeby</span>
              <p>
                Istnieje możliwość wystawienia zwolnienia lekarskiego po
                skomplikowanych zabiegach chirurgicznych.
              </p>
            </div>
            <div className="subpage-text">
              <i className="far fa-grin-beam"></i>
              <span>Tomografia 3D</span>
              <p>
                W naszym wyposażeniu znajduje się tomograf zębów umożliwiający
                wykonywanie trójwymiarowych zdjęć rentgenowskich, szczególnie
                istotnych przy implantach zębowych.
              </p>
            </div>
          </div>
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
    </>
  );
}

export default DentalSurgery;
