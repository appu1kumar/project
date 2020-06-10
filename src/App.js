import React from 'react';
// import logo from './images/ascent.png';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PowerPay from './components/PowerPay';
import Stohrm from './components/Stohrm';
import Inputmodule from './components/Inputmodule';
import Folders from './components/Folders';
import Crm from './components/Crm';
import SmartReport from './components/SmartReport';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={PowerPay}/>
        <Route path='/stohrm' component={Stohrm}/>
        <Route path='/inputmodule' component={Inputmodule}/>
        <Route path='/folders' component={Folders}/>
        <Route path='/crm' component={Crm}/>
        <Route path='/smartreport' component={SmartReport}/>
      </Switch>
    </div>
  );
}

export default App;
