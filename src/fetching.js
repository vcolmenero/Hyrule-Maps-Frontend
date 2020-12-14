export const fetchMe = () => {

    // const getSearchURL =  () => {
    //   fetch('https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Belgium')
    //   .then(function(resp) {
    //     return resp.json()
    //   }).then(function(data) {
    //     let searchTerm =  data[1][0]
    //     return searchTerm
    //   })
    // }
  
    // let searchTerm = getSearchURL();
    
    const getContent = () => {
      let contentURL = 'https://en.wikipedia.org/w/api.php?&origin=*&action=query&prop=revisions&rvprop=content&format=json&titles='
      fetch(contentURL + "Hyrule")
      .then(function(resp) {
        return resp.json()
      }).then(function(data) {
        let page = data.query.pages
        let pageId = Object.keys(data.query.pages)[0];
        console.log("Yay??", page[pageId].revisions[0]['*'])
      })
    }
  
    getContent()
    }
    
    
    
    // .then((response) => {
    //   response.text();
    //   console.log("response", response.text())
    // })
    // .then((myJson) => {
    //   console.log("fetched:", JSON.parse(myJson));
    //   let description1 = JSON.parse(myJson);
    //   return description1
    // })
    // return description1
  // }