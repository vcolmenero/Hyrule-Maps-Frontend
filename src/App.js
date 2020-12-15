
import React, { Component } from 'react';
import { locations } from './locations';
import { fetchMe } from './fetching'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allLocations: [],
      currentLocation: {},
      castleTown: "hidden",
      mountain: "hidden",
      tree: "hidden",
      field: "hidden",
      gerudo: "hidden",
      castle: "hidden",
      kakariko: "hidden",
      kokiri: "hidden",
      lake: "hidden",
      ranch: "hidden",
      domain: "hidden"
    }
  }

  defaultState = {
    castleTown: "hidden",
    mountain: "hidden", 
    tree: "hidden",
    field: "hidden",
    gerudo: "hidden",
    castle: "hidden",
    kakariko: "hidden",
    kokiri: "hidden",
    lake: "hidden",
    ranch: "hidden",
    domain: "hidden"
  }

  componentWillMount = () => {
    locations[0].description = fetchMe()
    console.log("feched:?", fetchMe())
    this.setState({
    allLocations: locations,
    })
  }

  listLocations = () =>  {
    let locArray = []
    locations.map(place => {
      locArray.push(<div className="location-name" onClick={e => this.showLocation(place)} key={place.id}>{place.name}</div>)
    })
    return locArray
  }

  showLocation = (place) => {
    if (this.state[place.id] === "hidden") {
      this.setState(this.defaultState)
      this.setState({ [place.id]: "", currentLocation: place })
    } else {
      this.setState({[place.id]: "hidden", currentLocation: {}})
    }
  } 

  
  
  render() {
    return (
      <div className="App">

        <div className="main">
          <div className="left-section">
            <div className="map-container">
              <img src={require('./images/castleTown.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.castleTown}`} 
                id="castleTown">
              </img>
              <img src={require('./images/deathMountain.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.mountain}`} 
                id="mountain">
              </img>
              <img src={require('./images/dekuTree.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.tree}`} 
                id="tree">
              </img>
              <img src={require('./images/field.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.field}`} 
                id="field">
              </img>
              <img src={require('./images/gerudoValley.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.gerudo}`} 
                id="gerudo">
              </img>
              <img src={require('./images/hyruleCastle.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.castle}`} 
                id="castle">
              </img>
              <img src={require('./images/kokiriForest.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.kokiri}`} 
                id="kokiri">
              </img>
              <img src={require('./images/kakariko.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.kakariko}`} 
                id="kokiri">
              </img>
              <img src={require('./images/lakeHylia.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.lake}`} 
                id="lake">
              </img>
              <img src={require('./images/lonLon.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.ranch}`} 
                id="ranch">
              </img>
              <img src={require('./images/zorasDomain.png')} 
                alt="Hyrule map" 
                className={`map-item ${this.state.domain}`} 
                id="domain">
              </img>
            </div>
            <div className="info-container">
              {this.state.currentLocation.description}
            </div>
          </div>

          <div className="right-section">
            <div className="location-title">Locations:</div>
            {this.listLocations()}
          </div>
        </div>
        <img src="hyrule" class="hyrule" alt="Hyrule map"></img>

      </div>
    );
  }
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

