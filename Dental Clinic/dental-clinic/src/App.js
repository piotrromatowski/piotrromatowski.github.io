import "./styles/App.scss";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import Home from "./components/Home";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Prices from "./components/Prices";
import Comprehensive from "./components/services-pages/ComprehensiveTreatment";
import RootCanal from "./components/services-pages/RootCanal";
import DentalSurgery from "./components/services-pages/DentalSurgery";
import Implants from "./components/services-pages/Implants";
import Prosthodontics from "./components/services-pages/Prosthodontics";
import CosmeticDentistry from "./components/services-pages/CosmeticDentistry";
import Orthodontics from "./components/services-pages/Orthodontics";
import ConservativeDentistry from "./components/services-pages/ConservativeDentistry";
import PediatricDentistry from "./components/services-pages/PediatricDentistry";
import DentalXRay from "./components/services-pages/DentalXRay";
import DentalHygiene from "./components/services-pages/DentalHygiene";
import Periodontology from "./components/services-pages/Periodontology";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Team} path="/team" />
            <Route component={Gallery} path="/gallery" />
            <Route component={Prices} path="/prices" />
            <Route component={Contact} path="/contact-us" />
            <Route component={Comprehensive} path="/comprehensive-treatment" />
            <Route component={RootCanal} path="/root-canal-treatment" />
            <Route component={DentalSurgery} path="/dental-surgery" />
            <Route component={Implants} path="/implants" />
            <Route component={Prosthodontics} path="/prosthodontics" />
            <Route component={CosmeticDentistry} path="/cosmetic-dentistry" />
            <Route component={Orthodontics} path="/orthodontics" />
            <Route
              component={ConservativeDentistry}
              path="/conservative-dentistry"
            />
            <Route component={PediatricDentistry} path="/pediatric-dentistry" />
            <Route component={DentalXRay} path="/dental-x-ray" />
            <Route component={DentalHygiene} path="/dental-hygiene" />
            <Route component={Periodontology} path="/periodontology" />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
