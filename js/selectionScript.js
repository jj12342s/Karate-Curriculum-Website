fetch("/assets/data/singleTechniques.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const params = new URLSearchParams(window.location.search);
    const techniques = filterTechniques(data)



    if (!techniques) {
      console.error("Technique not found:", id);
      return;
    }


    addCards(techniques)
  })
  .catch(err => console.error("Error loading JSON:", err));

function addCards(techniques) {
  const techniqueContainerElement = document.getElementById("technique-container")

  for (const technique of techniques) {
    console.log("test")
    if (technique.name === "") {
      continue;
    }
    techniqueContainerElement.appendChild(createCard(technique))
  }
}

function createCard(technique) {
  const card = document.createElement("div");
  card.class = "card"
  card.style = "width: 30rem"
  card.innerHTML = 
        `
          <img src="${technique.gifPath || "/assets/media/PlaceHolderImage.png"}" class="card-img-top" alt="...">
            <div class="card-body">
             <a type="button" href= "/pages/technique.html?id=${technique.id}" class="btn btn-primary justify-content-center">${technique.name}</a>
            </div>
        `
  return card;
}

function filterTechniques(data) {
  return Object.values(data).filter(technique => technique.isActive === true);
}