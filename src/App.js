/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {Route, Switch} from 'react-router-dom';
import { locations } from './locations';
import { getUser, userState, logout } from './services/userService';
import { withRouter, Redirect } from 'react-router-dom'





function App() {
  const [castleTown, setCastleTown] = useState("hidden");
  const [mountain, setMountain] = useState("hidden");
  const [tree, setTree] = useState("hidden");
  const [field, setField] = useState("hidden");
  const [gerudo, setGerudo] = useState("hidden");
  const [castle, setCastle] = useState("hiiden");
  const [kakariko, setKakariko] = useState("hidden");
  const [kokiri, setKakiri] = useState("hidden");
  const [lake, setLake] = useState("hidden");
  const [ranch, setRanch] = useState("hidden");
  const [domain, setDomain] = useState("hidden");
  const [currentLocation, setCurrentLocation] = useState("hidden");





  const mapImages = Object.entries(locations).map(([id, location]) => (
    <img
      key={id}
      id={id}
      src={location.image}
      alt="Hyrule map"
      className={`map-item ${location.name}`} />
  ));


  const toggleCurrentLocationId = (id) => {
    const locationId = currentLocation === id ? "" : id;
    setCurrentLocation(locationId);
  };


  const listLocations = Object.entries(locations).map(([id, location]) => (
    <p key={id} onClick={() => toggleCurrentLocationId(id)}>
      {location.name}
    </p>
  ));

  return (
    <div className="App">

      <div className="main">
        <div className="left-section">
          <div className="map-container">
            <img src={require('./images/castleTown.png')}
              alt="Hyrule map"
              className={`map-item ${castleTown}`}
              id="castleTown">
            </img>
            <img src={require('./images/deathMountain.png')}
              alt="Hyrule map"
              className={`map-item ${mountain}`}
              id="mountain">
            </img>
            <img src={require('./images/dekuTree.png')}
              alt="Hyrule map"
              className={`map-item ${tree}`}
              id="tree">
            </img>
            <img src={require('./images/field.png')}
              alt="Hyrule map"
              className={`map-item ${field}`}
              id="field">
            </img>
            <img src={require('./images/gerudoValley.png')}
              alt="Hyrule map"
              className={`map-item ${gerudo}`}
              id="gerudo">
            </img>
            <img src={require('./images/hyruleCastle.png')}
              alt="Hyrule map"
              className={`map-item ${castle}`}
              id="castle">
            </img>
            <img src={require('./images/kokiriForest.png')}
              alt="Hyrule map"
              className={`map-item ${kokiri}`}
              id="kokiri">
            </img>
            <img src={require('./images/kakariko.png')}
              alt="Hyrule map"
              className={`map-item ${kakariko}`}
              id="kokiri">
            </img>
            <img src={require('./images/lakeHylia.png')}
              alt="Hyrule map"
              className={`map-item ${lake}`}
              id="lake">
            </img>
            <img src={require('./images/lonLon.png')}
              alt="Hyrule map"
              className={`map-item ${ranch}`}
              id="ranch">
            </img>
            <img src={require('./images/zorasDomain.png')}
              alt="Hyrule map"
              className={`map-item ${domain}`}
              id="domain">
            </img>
          </div>
          <div className="info-container">
            {currentLocation}
          </div>
        </div>
        <div className="right-section">
          <div className="location-title">Locations:</div>
          {listLocations}
        </div>
      </div>
      <img src="hyrule" class="hyrule" alt="Hyrule map"></img>
    </div>
  );

  function App(props) {
    /* component state */
    const [userState, setUserState] = useState({user: getUser()});

  /* helper functions */
  function handleSignupOrLogin() {
    // place user into state using setter function
    setUserState({user: getUser()});
    //programmatically route user to dasboard
    props.history.push('/');
  }

  function handleLogout() {
    logout(); //this removes the token from localstorage
    setUserState({user: null});
    props.history.push('/');
  }

  return (
    <div className="App">
     <Header user={userState.user} handleLogout={handleLogout} />
     <Switch>
     {/* // inside switch you need a route for each page  */}
       <Route exact path='/' render={() =>
       <HomePage />
       } />
       <Route exact path='/dashboard' render={() =>
        getUser() ? 
          <DashboardPage />
          :
          <Redirect to="/login" />
       } />
      <Route exact path='/login' render={() =>
       <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
       } />
     <Route exact path='/signup' render={() =>
        <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
       } />
    
   </Switch>
    <Footer />
    </div>
  );
      }
    }


  
  export default withRouter(App);
