import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AvivaHeader } from "./components/AvivaHeader";
import Demo from './Demo'
import Home from "./pages/Home";
import infoIcon from './assets/images/info.svg'
import InfoNotification from "./components/InfoNotification";
import Stepper from "./components/Stepper";
import ScrollToTop from "./components/ScrollToTop";
import ChoosePlan from "./pages/chooseplan/ChoosePlan";
import Payment from "./pages/payment/Payment";
import GetStarted from "./pages/GetStarted";

export default function App() {
  const notificationContent = "20% perpetual premium discount applies with a minimum of S$500 annual premium.";

  return (
    <>
    {/* <AvivaHeader></AvivaHeader> */}
    <InfoNotification content={notificationContent} icon={infoIcon} />
    <Router basename="/scholarship">
      <div>
        <ScrollToTop>
          <Switch>
            <Route path="/getstarted">
              <GetStarted />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/chooseplan">
              <ChoosePlan />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/">
              <GetStarted />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
    </>
  );
}
