fetch("/assets/data/techniques.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    const technique = data[id];
    console.log("eufwb0")

    if (!technique) {
      console.error("Technique not found:", id);
      document.
      return;
    }

    displayAll(technique)
  })
  .catch(err => console.error("Error loading JSON:", err));

function displayAll(technique){
  displayImage(technique);
  displayProcedure(technique);
  displayTitle(technique);
  displayDescription(technique);
}
function displayImage(technique) {
  const img = document.querySelector("#demonstration-media");
  img.src = technique.videoURL || technique.gifPath;
  
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
  const procedureList = document.querySelector("#procedure-group");
  if (!procedureList || !Array.isArray(technique.procedure)) return;

  procedureList.innerHTML = ""; // clear existing items
  technique.procedure.forEach(step => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = step;
    procedureList.appendChild(li);
  });
}

