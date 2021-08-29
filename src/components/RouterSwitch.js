import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Info from '../components/routes/Info.js';
import Contact from '../components/routes/Contact.js';
import RentalPropertyEvaluator from '../components/rpe/RentalPropertyEvaluator';

// A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.

function RouterSwitch() {
  return <Switch>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <RentalPropertyEvaluator />
            </Route>
          </Switch>;
}

export default RouterSwitch;