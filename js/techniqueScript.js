fetch("/assets/data/singleTechniques.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    const technique = data[id];

    if (!technique) {
      console.error("Technique not found:", id);
      document.
      return;
    }

    displayAll(technique)
  })
  .catch(err => console.error("Error loading JSON:", err));

function displayAll(technique){
  displayTitle(technique);
  displayDescription(technique);
  displayProcedure(technique);
  displayImage(technique);
}
function displayImage(technique) {
  const img = document.querySelector("#demonstration-media");
  img.src = technique.videoURL || technique.gifPath || "/assets/media/PlaceHolderImage.png";
  
}
function displayDescription(technique) {
  const descriptionElement = document.querySelector("#description");
  descriptionElement.textContent = technique.description;
  
}

function displayTitle(technique){
  const titleElement = document.querySelector("#title");
  titleElement.textContent = (technique.name);
}
function displayProcedure(technique){
  const procedureHeader = document.getElementById("procedure-header");
  procedureHeader.textContent = String(technique.name) + " Procedure";
  const procedureList = document.getElementById("procedure-group");
  if (!procedureList || !Array.isArray(technique.procedure)) return;

  procedureList.innerHTML = ""; // clear existing items
  technique.procedure.forEach(step => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = step;
    procedureList.appendChild(li);
  });
}

