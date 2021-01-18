/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { locations } from './locations';
import { fetchMe } from './fetching'
import './App.css';
import {render} from 'react';
import userEvent from '@testing-library/user-event';


const App = () => {
  const [castleTown, setCastleTown] = useState("hidden")
  const [mountain, setMountain] = useState("hidden")
  const [tree, setTree] = useState("hidden")
  const [field, setField] = useState("hidden")
  const [gerudo, setGerudo] = useState("hidden")
  const [castle, setCastle] = useState("hiiden")
  const [kakariko, setKakariko] = useState("hidden")
  const [kokiri, setKakiri] = useState("hidden")
  const [lake, setLake] = useState("hidden")
  const [ranch, setRanch] = useState("hidden")
  const [domain, setDomain] = useState("hidden")
  const [currentLocation, setCurrentLocation] = useState("hidden")
  
  
    
  
  

  // componentWillMount = () => {
  //   locations[0].description = fetchMe()
  //   console.log("feched:?", fetchMe())
  //   this.setState({
  //   allLocations: locations,
  //   })
  // }

  const listLocations = locations.map((place, id) => {
      console.log(place.name)
      return (
        <p key={id} onClick={showLocation}>{place.name}</p>
      )
    })
  

  const showLocation = (place) => {
    if (this.state[place.id] === "hidden") {
      this.setState(this.defaultState)
      this.setState({ [place.id]: "", currentLocation: place })
    } else {
      this.setState({[place.id]: "hidden", currentLocation: {}})
    }
  } 

  
  

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
  }


// export function Index (props) {
//   const [ userState, setUserState ] = useState({ user: getUser() });
//   function handleSignupOrLogin() {
//     setUserState({ user: getUser() });
//     props.history.push('/dashboard');
//   }

//   function handleLogout() {
//     logout();
//     setUserState({ user: null });
//     props.history.push('/');
//   }

//   return (
//     <div className="App">
//      <Header user={userState.user} handleLogout={handleLogout} />
//      <Switch>
//      {/* // inside switch you need a route for each page  */}
//        <Route exact path='/' render={(props) =>
//        <HomePage />
//        } />
//        <Route exact path='/dashboard' render={(props) =>
//         getUser() ? 
//           <DashboardPage />
//           :
//           <Redirect to="/login" />
//        } />
//       <Route exact path='/login' render={(props) =>
//        <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
//        } />
//      <Route exact path='/signup' render={(props) =>
//         <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
//        } />
    
//    </Switch>
//     <Footer />
//     </div>
//   );
// }

export default App;

