
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import * as Firebase from 'firebase'
// core components
import Admin from "layouts/Admin.js";
import Login from "components/Login/Login.js"
import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

var config = {
  apiKey: "AIzaSyCrehuqA63lfqnj-BnYwgmWXH3Z-eOTeIM",
  authDomain: "iottest1-e66c5.firebaseapp.com",
  databaseURL: "https://iottest1-e66c5.firebaseio.com",
  projectId: "iottest1-e66c5",
  storageBucket: "iottest1-e66c5.appspot.com",
  messagingSenderId: "531924809218",
  appId: "1:531924809218:web:85b7698cb0b44f3373191b",
  measurementId: "G-LTL62K9KL3"
}
Firebase.initializeApp(config)

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
