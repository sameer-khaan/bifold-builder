import React from 'react';
import ReactDOM from 'react-dom';
import Home from './MainPage';
import FaqsPage from './pages/faqs/faqs';
import PrivacyPage from './pages/privacyPolicy/privacyPolicy';
import ContactPage from './pages/contact/contact';
import QuotePage from './pages/quote/quote';
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <React.StrictMode>
        <Route exact path="/" component={Home} />
        <Route exact path="/faqs" component={FaqsPage} />
        <Route exact path="/privacy-policy" component={PrivacyPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/quote" component={QuotePage} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
