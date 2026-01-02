fetch("/assets/data/techniques.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    const params = new URLSearchParams(window.location.search);
    const techniques = filterTechniques(data)

    

    if (!technique) {
      console.error("Technique not found:", id);
      document.
      return;
    }

    addCards(techniques)
  })
  .catch(err => console.error("Error loading JSON:", err));

  function addCards(techniques){
    for (i in techniques){
        addCard(i);
    } 
  }

  function addCard(technique){
    
  }

  function filterTechniques(data){
    return data
  }