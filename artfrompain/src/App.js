import logo from './logo.svg';
import './App.css';

import React from "react";
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {

return (

  <div>
    <h1 style={{'text-align':'center'}}>Pain From Art</h1>   
    <h3 style={{'text-align':'center'}}>David Hartman</h3>     
    <AmplifyS3Album />
  </div>
);

}

export default App;