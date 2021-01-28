import { useEffect, useState } from 'react';
import { locations } from '../locations';
import { getUser, logout } from '../services/userService';

export default function DashboardPage(props) {
  const [castleTown, setCastleTown] = useState("hidden");
  const [mountain, setMountain] = useState("hidden");
  const [tree, setTree] = useState("hidden");
  const [field, setField] = useState("hidden");
  const [gerudo, setGerudo] = useState("hidden");
  const [castle, setCastle] = useState("hidden");
  const [kakariko, setKakariko] = useState("hidden");
  const [kokiri, setKakiri] = useState("hidden");
  const [lake, setLake] = useState("hidden");
  const [ranch, setRanch] = useState("hidden");
  const [domain, setDomain] = useState("hidden");
  const [currentLocation, setCurrentLocation] = useState("hidden");

  const[epona, setContentData] = useState({
    data: []
  });

  async function getAppData() {
    const data = await getContent();
    setContentData(data);
  }

  useEffect(() => {
    getAppData();
  },[]);

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
    console.log(locationId);
    setCurrentLocation(locationId);
    getContent()
  };


  const listLocations = locations.map((location, id) => (
    <p key={id} onClick={() => toggleCurrentLocationId(id)}>
      {location.name}
    </p> 
  ));

  function getContent() {
    let contentURL = 'http://localhost:3001/api/wiki/gamepedia';
    fetch(contentURL)
      .then(function (resp) {
        return resp.json();
      }).then(function (data) {
        console.log(data);
        // let page = data.query.pages;
        // let pageId = Object.keys(data.query.pages)[0];
        // console.log("heyLisyen??", page[pageId].revisions[0]['*']);
      })
  }
    return (
        <main className="Page">
         <div className="left-section">
           <div className="map-container">
             <img src={require('../images/castleTown.png')}
               alt=""
               className={`map-item ${castleTown}`}
               id="castleTown">
             </img>
             <img src={require('../images/deathMountain.png')}
               alt=""
               className={`map-item ${mountain}`}
               id="mountain">
             </img>
             <img src={require('../images/dekuTree.png')}
               alt=""
               className={`map-item ${tree}`}
               id="tree">
             </img>
             <img src={require('../images/field.png')}
               alt=""
               className={`map-item ${field}`}
               id="field">
             </img>
             <img src={require('../images/gerudoValley.png')}
               alt=""
               className={`map-item ${gerudo}`}
               id="gerudo">
             </img>
             <img src={require('../images/hyruleCastle.png')}
               alt=""
               className={`map-item ${castle}`}
               id="castle">
             </img>
             <img src={require('../images/kokiriForest.png')}
               alt=""
               className={`map-item ${kokiri}`}
               id="kokiri">
             </img>
             <img src={require('../images/kakariko.png')}
               alt=""
               className={`map-item ${kakariko}`}
               id="kokiri">
             </img>
             <img src={require('../images/lakeHylia.png')}
               alt=""
               className={`map-item ${lake}`}
               id="lake">
             </img>
             <img src={require('../images/lonLon.png')}
               alt=""
               className={`map-item ${ranch}`}
               id="ranch">
             </img>
             <img src={require('../images/zorasDomain.png')}
               alt=""
               className={`map-item ${domain}`}
               id="domain">
             </img>
           </div>
           <div className="info-container">
             {locations[currentLocation] ? locations[currentLocation].description: ''}
           </div>
         </div>
         <div className="right-section">
           <div className="location-title">Locations:</div>
           {listLocations}
         </div>
        </main>
    );
};