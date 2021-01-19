export const fetchMe = () => {

    
    const getContent = () => {
      let contentURL = 'https://en.wikipedia.org/w/api.php?&origin=*&action=query&prop=revisions&rvprop=content&format=json&titles='
      fetch(contentURL + "Hyrule")
      .then(function(resp) {
        return resp.json()
      }).then(function(data) {
        let page = data.query.pages
        let pageId = Object.keys(data.query.pages)[0];
        console.log("HeyListen??", page[pageId].revisions[0]['*'])
      })
    }
  
    getContent()
    }
    
    
    